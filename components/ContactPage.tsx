import React, { useState } from 'react';
import Testimonials from './Testimonials';

const FAQ_DATA = {
  Design: [
    {
      question: "How much do your design packages cost?",
      answer: "Design costs vary according to scope, format, print specifications, materials and more — so it’s difficult to give a guide price. Get in touch to discuss your needs, and we’ll create a custom estimate that includes the services relevant to your project and is costed based on a one-off or subscription model."
    },
    {
      question: "Do you offer graphic design services for social media?",
      answer: "Yes, we do. We can create compelling visuals that will enhance your brand's presence on social media platforms, driving engagement and building a cohesive brand narrative. From profile pictures to post graphics and story designs, we've got your social media branding covered."
    },
    {
      question: "Can you provide print-ready graphics?",
      answer: "Absolutely. We deliver all graphics in print-ready formats, ensuring a seamless transition from on-screen designs to physical assets. This means you can take our designs straight to the printer without any additional hassle or adjustments needed."
    },
    {
      question: "What graphic design services do you offer?",
      answer: "We offer a comprehensive range of graphic design services, including logo design, brand identity development, signage, packaging, and print design. We're your one-stop shop for all things design."
    }
  ],
  Development: [
    {
      question: "How much do your system & software development services cost?",
      answer: "It’s highly dependent on the complexity and requirements of the project. For a detailed quote, contact us directly. We'll talk through your needs and provide a customised estimate that aligns with your budget and objectives."
    },
    {
      question: "Can you design mobile apps?",
      answer: "Yes, we can. Our team is skilled in creating mobile apps that offer an intuitive user experience, coupled with robust functionality. Whether you're looking to develop an app for iOS, Android, or both, we have the expertise to bring your vision to life."
    },
    {
      question: "What coding languages can you build systems with?",
      answer: "We have specific experience in HTML, CSS, REACT, NextJS, Laravel, JQuery, Bootstrap, PHP, and MySQL. Our team is well-versed in using these languages to develop systems that are both efficient and effective."
    },
    {
      question: "What types of systems can you develop?",
      answer: "We create custom systems tailored to a range of use cases. This includes customer portals, dashboards, quoting tools, mobile apps, and SaaS solutions, among others."
    }
  ],
  Webflow: [
    {
      question: "How much do your websites cost?",
      answer: "Costs can vary based on the scope and features of your website. We offer a choice of subscription packages to suit different budgets and needs. Or, for a project-specific tailored quote, feel free to reach out to us."
    },
    {
      question: "How long does it take to launch a new website?",
      answer: "The timeline for launching a new website can vary depending on the complexity and specific requirements of the project. However, we typically aim to get your site up and running within 4 to 8 weeks."
    },
    {
      question: "Can you design ecommerce websites?",
      answer: "Absolutely, we can. We're experts in crafting ecommerce platforms that not only look stunning but also drive conversions. Utilising the robust and versatile Webflow platform, we ensure your online store is both user-friendly and optimised for sales."
    },
    {
      question: "Are your websites optimised for search engines?",
      answer: "Yes, they are. Search engine optimisation (SEO) comes as standard when you work with us. We make sure your website is not just visually appealing but also easily discoverable by your target audience."
    }
  ]
};

const ContactPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Design' | 'Development' | 'Webflow'>('Design');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="relative px-6 lg:px-12 max-w-[1440px] mx-auto pb-12 lg:pb-20">
        <div className="flex flex-col items-start max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="text-slate-300">Talk to</span> <br />
            <span className="gradient-text">Phunk.</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Focusing on what we’re good at means we can deliver unrivalled quality every time. Our services fall into three main buckets — web, systems and graphic design. If you’re unsure where your next project would sit, give us a call.
          </p>
        </div>
      </section>

      {/* Contact Form & Book Call */}
      <section className="px-6 lg:px-12 max-w-[1440px] mx-auto pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 bg-slate-50 rounded-[2.5rem] p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-900">Full name</label>
                  <input type="text" placeholder="John Smith" className="w-full bg-white border border-transparent focus:border-black rounded-xl p-4 outline-none transition-colors" required />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-900">Email</label>
                  <input type="email" placeholder="name@email.com" className="w-full bg-white border border-transparent focus:border-black rounded-xl p-4 outline-none transition-colors" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-900">Phone number</label>
                <input type="tel" placeholder="+44 (0)" className="w-full bg-white border border-transparent focus:border-black rounded-xl p-4 outline-none transition-colors" required />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-slate-900">Tell us about your project</label>
                <textarea placeholder="What do you want your website to achieve?" className="w-full bg-white border border-transparent focus:border-black rounded-xl p-4 h-40 outline-none transition-colors resize-none"></textarea>
              </div>
              <div>
                <button type="submit" className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-phunk-cyan hover:text-white transition-all duration-300 w-full md:w-auto">
                  Make an Enquiry
                </button>
                <p className="text-xs text-slate-500 mt-4">By pressing submit you agree to the Phunk privacy policy</p>
              </div>
            </form>
          </div>

          {/* Book a Call */}
          <div className="lg:col-span-1">
            <a href="#" className="block h-full bg-phunk-dark rounded-[2.5rem] p-10 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
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
              <div className="absolute inset-0 bg-phunk-gray opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-slate-300">Frequently</span> <span className="gradient-text">asked questions</span>
            </h2>
            <p className="text-slate-600">
              Explore our Frequently Asked Questions to find the answers you've been looking for, without even having to ask.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12 gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
            {(Object.keys(FAQ_DATA) as Array<keyof typeof FAQ_DATA>).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setOpenFaq(null); }}
                className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${activeTab === tab
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
              >
                {tab === 'Development' ? 'Software' : tab === 'Webflow' ? 'Web Design' : 'Graphic Design'}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {FAQ_DATA[activeTab].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden transition-shadow hover:shadow-md cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <div className="p-6 flex justify-between items-center gap-4">
                  <h3 className="font-bold text-lg">{item.question}</h3>
                  <div className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-45 bg-black border-black text-white' : ''}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors">
                      <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <p className="text-slate-600 leading-relaxed">
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