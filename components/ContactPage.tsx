import React, { useState } from 'react';
import Testimonials from './Testimonials';

const FAQ_DATA = {
  General: [
    {
      question: "Is LabFlow customizable?",
      answer: "Fully custom. Features and workflows can be tailored to your lab needs, SOPs, and budget constraints. We design a custom automation topology specifically for your laboratory's ecosystem."
    },
    {
      question: "How is the pricing determined?",
      answer: "Our pricing model is based on a custom quote (By Quote). We assess your specific needs, user count, and modules to provide a solution that fits your budget and requirements."
    },
    {
      question: "Who is LabFlow designed for?",
      answer: "LabFlow is designed for ISO/IEC 17025 Testing Laboratories, Lab Owners, and Managers who want to transition from manual/legacy systems to a digital, audit-ready workflow."
    }
  ],
  "AI & Security": [
    {
      question: "Is the data provided to AI secure?",
      answer: "Yes. LabFlow keeps documents private and controlled. AI is restricted to extracting only the necessary text within secured boundaries, so third parties don't gain visibility into your lab data."
    },
    {
      question: "Can AI edit or change my lab data?",
      answer: "No—AI cannot modify records without approval. All changes follow role-based control and traceable logs to ensure data integrity and security."
    },
    {
      question: "How do you handle data privacy?",
      answer: "We use RLS (Row Level Security), AI Guardrails, and Data Sanitization to ensure your data remains private. Your proprietary data is never used to train public AI models."
    }
  ],
  Implementation: [
    {
      question: "Will LabFlow change our existing SOPs?",
      answer: "No. Unlike rigid systems that force you to change, LabFlow adapts to your unique workflow. We automate tasks and integrate instruments without disrupting your existing work rhythm."
    },
    {
      question: "How does the implementation process work?",
      answer: "We follow a 4-step process: Discovery (mapping SOPs), Architecture (custom design), Integration (deploying sensors/agents), and Evolution (optimizing workflows over time)."
    },
    {
      question: "Do you provide consultation?",
      answer: "Yes, we implement the system with you and provide training for your users until the system is fully usable in your daily laboratory operations."
    }
  ]
};

const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof FAQ_DATA>(Object.keys(FAQ_DATA)[0] as keyof typeof FAQ_DATA);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    projectDetails: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const payload = {
        "full name": formData.fullName,
        "email": formData.email,
        "phone number": formData.phoneNumber,
        "tell us about your project": formData.projectDetails,
        "date": new Date().toISOString()
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ fullName: '', email: '', phoneNumber: '', projectDetails: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative px-6 lg:px-12 max-w-[1440px] mx-auto pb-12 lg:pb-20">
        <div className="flex flex-col items-start max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="text-slate-300">Talk to</span> <br />
            <span className="gradient-text">LabFlow.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            LabFlow helps lab owners and managers transform chaotic lab operations into a clean, traceable, audit-ready system. We provide flexible solutions that adapt to your specific needs, ensuring compliance while boosting productivity.
          </p>
        </div>
      </section>

      {/* Contact Form & Book Call */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-slate-50 rounded-[2.5rem] p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-900">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    className="w-full bg-white border border-transparent focus:border-black rounded-xl p-4 outline-none transition-colors text-slate-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-900">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@email.com"
                    className="w-full bg-white border border-transparent focus:border-black rounded-xl p-4 outline-none transition-colors text-slate-900"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-900">Phone number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+44 (0)"
                  className="w-full bg-white border border-transparent focus:border-black rounded-xl p-4 outline-none transition-colors text-slate-900"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-900">Tell us about your project</label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="What do you want your website to achieve?"
                  className="w-full bg-white border border-transparent focus:border-black rounded-xl p-4 h-40 outline-none transition-colors resize-none text-slate-900"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-phunk-cyan hover:text-white transition-all duration-300 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Make an Enquiry'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-600 font-medium mt-4">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 font-medium mt-4">Failed to send message. Please try again.</p>
                )}
                <p className="text-xs text-slate-500 mt-4">By pressing submit you agree to the Phunk privacy policy</p>
              </div>
            </form>
          </div>

          {/* Book a Call */}
          <div className="lg:col-span-1">
            <a href="https://wa.me/6287872667225" target="_blank" rel="noopener noreferrer" className="block h-fit bg-phunk-dark rounded-[2.5rem] p-10 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <div className="flex justify-between items-start mb-8 relative z-10">
                <h2 className="text-3xl font-bold">Book a call</h2>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-phunk-cyan group-hover:text-white transition-colors">
                  <img src="https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/653584f26047abfdf8dfd777_Vector%20(3).svg" alt="" className="w-5 h-5 invert group-hover:invert-0 transition-all" />
                </div>
              </div>
              <p className="text-gray-400 text-lg relative z-10">
                Pick a time and date that suits you, and we’ll set up a video or voice call — whichever works best.
              </p>
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-black relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>

        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              <span className="text-white/40">Frequently</span> <span className="gradient-text">asked questions</span>
            </h2>
            <p className="text-gray-400">
              Explore our Frequently Asked Questions to find the answers you've been looking for, without even having to ask.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12 gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            {(Object.keys(FAQ_DATA) as Array<keyof typeof FAQ_DATA>).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setOpenFaq(null); }}
                className={`px-6 py-3 font-medium whitespace-nowrap transition-all border ${activeTab === tab
                  ? 'bg-phunk-cyan text-black border-phunk-cyan'
                  : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {FAQ_DATA[activeTab].map((item, index) => (
              <div
                key={index}
                className="group bg-transparent border border-white/10 overflow-hidden transition-all duration-300 hover:border-phunk-cyan cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="p-6 flex justify-between items-center gap-4">
                  <h3 className={`font-bold text-lg transition-colors duration-300 ${openFaq === index ? 'text-phunk-cyan' : 'text-white group-hover:text-phunk-cyan'}`}>{item.question}</h3>
                  <div className={`w-8 h-8 border border-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === index ? 'rotate-45 bg-phunk-cyan border-phunk-cyan text-black' : 'text-white'}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors">
                      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" />
                    </svg>
                  </div>
                </div>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-gray-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default ContactPage;