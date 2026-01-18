import React from 'react';
import { ASSETS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero Section */}
      <section className="relative pb-20 lg:pb-32 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-slate-100 rounded-full px-4 py-2 mb-6">
              <span className="text-slate-600 font-medium text-sm tracking-wide">Phunk Creative’s Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              <span className="text-slate-300">Everything you need to know</span> <br />
              <span className="gradient-text">about Phunk.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed mb-8">
              Find out more about what makes us tick as a company, why we do what we do, and who’s behind the unique work we create. Or, if you prefer, give us a call and we’ll tell you ourselves.
            </p>
            <a href="#" className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform">
              Launch
            </a>
          </div>
          <div className="relative">
            <img 
              src="https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/652ea754927932321935124d_Group%20598.svg" 
              alt="Phunk Abstract" 
              className="w-full h-auto animate-pulse"
            />
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-20 max-w-[1200px] mx-auto px-6 lg:px-12 space-y-32">
        {/* Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The origin <span className="gradient-text">story</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The partnership behind Phunk began a long time before the company was officially established. Our founders Joe Murray and Joe Crabtree first met at college, both studying creative and digital media courses —never imagining that sharing a first name would make their copywriter’s job unnecessarily difficult at some point in the future.
            </p>
          </div>
          <div className="relative group">
            <img 
              src="https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/653bd33921fd1a5f4905d4c5_Rectangle%20649.webp" 
              alt="Founders at college" 
              className="rounded-[2.5rem] w-full shadow-xl"
            />
            <a href="#" className="absolute bottom-8 right-8 bg-white text-black px-6 py-3 rounded-full font-medium shadow-lg hover:bg-black hover:text-white transition-colors">
              Talk to us
            </a>
          </div>
        </div>

        {/* Graduation Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              After graduating, the <br /> <span className="gradient-text">Joes took different paths,</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              JM heading into a marketing agency role focused on web design, branding and animation, and JC working on print design and web advertising for household names like Kellogg's, Fred Perry and Axe/Lynx.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              They kept in touch, collaborating on various projects and inevitably moved towards a closer working relationship which made the most of their complementary skills. While the rest of the world transitioned towards remote working during COVID, Joe and Joe decided they’d rather open an office, and Phunk was officially born.
            </p>
             <a href="#" className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform">
              Start a project
            </a>
          </div>
          <div className="lg:order-1 relative">
            <img 
              src="https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/653bd339c9577766a6cc683a_Rectangle%20650.webp" 
              alt="Founders working" 
              className="rounded-[2.5rem] w-full shadow-xl"
            />
          </div>
        </div>

        {/* 2 Years In */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A little over <span className="gradient-text">2 years in,</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              and the business has gone from strength to strength. New team members have joined, widening our skillset and bringing more diversity to our thinking. Client projects ship regularly, each one bringing unique challenges and opportunities to stretch our creativity. And our passion for Webflow design has been recognised with an official professional partnership.
            </p>
          </div>
          <div className="relative group">
            <img 
              src="https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65425bf534f1cfbd829a174f_653bd33921fd1a5f4905d4c5_Rectangle%20649%20copy.webp" 
              alt="Team meeting" 
              className="rounded-[2.5rem] w-full shadow-xl"
            />
             <a href="#" className="absolute bottom-8 right-8 bg-white text-black px-6 py-3 rounded-full font-medium shadow-lg hover:bg-black hover:text-white transition-colors">
              Talk to us
            </a>
          </div>
        </div>

        {/* Fun CTA */}
        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">It’s been a lot of fun.</h2>
            <p className="text-xl text-slate-600 mb-8">Now let's do more!</p>
            <a href="#" className="inline-flex items-center justify-center bg-white border-2 border-black text-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-colors z-10">
               Talk to us
            </a>
            <img 
              src="https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/653fe62ea1248adb5fda0675_Girl%20-%20Implement-1.webp" 
              alt="Girl pointing" 
              className="absolute bottom-[-20px] right-[-20px] w-64 lg:w-80 pointer-events-none opacity-20 lg:opacity-100"
            />
        </div>
      </section>

      {/* Values Section (Dark) */}
      <section className="bg-phunk-dark py-20 lg:py-32 text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Phunk <span className="gradient-text">Values.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Value 1 */}
            <div className="bg-[#1a1a1a] p-10 rounded-[2rem] hover:bg-[#222] transition-colors group">
              <div className="flex justify-between items-start mb-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" className="text-white"><path d="M11.1339 1.45714L13.0118 5.20265C13.1965 5.57207 13.5556 5.82862 13.9661 5.87992L18.1631 6.48536C18.8404 6.57772 19.3227 7.20368 19.2303 7.88095C19.1893 8.15802 19.0662 8.41456 18.8609 8.60953L15.8235 11.5238C15.5259 11.8112 15.3925 12.2216 15.4643 12.6218L16.1826 16.7368C16.2955 17.4243 15.8235 18.0708 15.1359 18.1837C14.8691 18.2247 14.5921 18.1837 14.3458 18.0503L10.6003 16.1108C10.2309 15.9158 9.78961 15.9158 9.42019 16.1108L5.67467 18.0503C5.05897 18.3786 4.29961 18.1426 3.97124 17.5269C3.83783 17.2806 3.79679 17.0036 3.83783 16.7368L4.55615 12.6218C4.62798 12.2216 4.49458 11.8009 4.19699 11.5238L1.15954 8.60953C0.666978 8.13749 0.646454 7.34734 1.12875 6.85478C1.32372 6.64955 1.58027 6.52641 1.85733 6.48536L6.05436 5.87992C6.46482 5.81835 6.82398 5.57207 7.00869 5.20265L8.88658 1.45714C9.20469 0.831181 9.97432 0.595163 10.6003 0.913275C10.8363 1.03641 11.021 1.22112 11.1441 1.45714H11.1339Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-phunk-cyan transition-colors">Quality</h3>
                 </div>
                 <span className="text-white/20 font-bold text-xl">01</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                We don’t send anything out the door that we’re not proud to put our names to. There’s no pride in a rushed job, a cobbled-together piece of code, or a logo that looks like everyone else’s — we check and double-check every element of our projects to guarantee its quality.
              </p>
            </div>

             {/* Value 2 */}
             <div className="bg-[#1a1a1a] p-10 rounded-[2rem] hover:bg-[#222] transition-colors group">
              <div className="flex justify-between items-start mb-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" className="text-white"><path d="M18.5164 6.34L17.8964 5.26C17.3664 4.35 16.1964 4.03 15.2864 4.56C14.3864 5.09 13.2164 4.8 12.6864 3.89C12.6864 3.89 12.6864 3.89 12.6864 3.88C12.5264 3.6 12.4364 3.29 12.4264 2.97C12.4564 1.91 11.6264 1.03 10.5764 1C10.5564 1 10.5364 1 10.5164 1H9.26636C8.21636 1 7.36636 1.85 7.36636 2.9C7.36636 2.9 7.36636 2.9 7.36636 2.91C7.35636 3.96 6.49636 4.8 5.44636 4.8C5.12636 4.8 4.80636 4.71 4.53636 4.54C3.62636 4.01 2.45636 4.33 1.92636 5.24L1.25636 6.34C0.726356 7.25 1.04636 8.42 1.95636 8.95C2.54636 9.29 2.91636 9.92 2.91636 10.61C2.91636 11.29 2.55636 11.93 1.95636 12.27C1.04636 12.79 0.726356 13.95 1.25636 14.86L1.88636 15.95C2.39636 16.88 3.55636 17.21 4.48636 16.7C4.48636 16.7 4.48636 16.7 4.49636 16.7C5.39636 16.17 6.55636 16.48 7.08636 17.38C7.08636 17.38 7.08636 17.39 7.08636 17.4C7.24636 17.68 7.33636 17.99 7.34636 18.32C7.34636 19.38 8.20636 20.23 9.25636 20.23H10.5064C11.5564 20.23 12.4164 19.38 12.4164 18.33C12.4164 17.28 13.2564 16.42 14.3064 16.42C14.3064 16.42 14.3264 16.42 14.3364 16.42C14.6564 16.42 14.9764 16.52 15.2464 16.68C16.1564 17.21 17.3264 16.89 17.8564 15.98L18.5164 14.88C19.0464 13.97 18.7364 12.81 17.8364 12.28C17.8364 12.28 17.8264 12.28 17.8164 12.27C16.9064 11.75 16.5864 10.59 17.1064 9.68C17.1064 9.68 17.1064 9.67 17.1164 9.66C17.2864 9.37 17.5264 9.13 17.8164 8.96C18.7264 8.43 19.0364 7.27 18.5164 6.36V6.34Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.88609 13.24C11.3441 13.24 12.5261 12.0581 12.5261 10.6C12.5261 9.14199 11.3441 7.96002 9.88609 7.96002C8.42806 7.96002 7.24609 9.14199 7.24609 10.6C7.24609 12.0581 8.42806 13.24 9.88609 13.24Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-phunk-cyan transition-colors">Reliability</h3>
                 </div>
                 <span className="text-white/20 font-bold text-xl">02</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                It’s important to us that you can trust we’ll deliver what we promise — whether that’s meeting a tight deadline, returning a call, or reworking a draft ahead of an important presentation. In every interaction, we go the extra mile for our clients to reinforce that trust.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#1a1a1a] p-10 rounded-[2rem] hover:bg-[#222] transition-colors group">
              <div className="flex justify-between items-start mb-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white"><path d="M11.7656 18.434H19.0156" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.7956 1.79398C11.5856 0.863984 12.9656 0.733984 13.9156 1.49398L15.6456 2.84398C16.6656 3.44398 16.9956 4.76398 16.3956 5.77398C16.3956 5.79398 16.3756 5.80398 16.3656 5.82398C16.3356 5.87398 6.82565 17.764 6.82565 17.764C6.50565 18.164 6.02565 18.394 5.50565 18.404L1.86565 18.454L1.04565 14.984C0.925645 14.494 1.04565 13.974 1.36565 13.584L10.7956 1.79398Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.03613 3.9939L14.4861 8.1839" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-phunk-cyan transition-colors">Creativity</h3>
                 </div>
                 <span className="text-white/20 font-bold text-xl">03</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Each member of the team at Phunk has built their creative career on the principle that the work only matters if it’s original, effective and exciting — we’re not interested in building anything substandard, derivative or boring.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-[#1a1a1a] p-10 rounded-[2rem] hover:bg-[#222] transition-colors group">
              <div className="flex justify-between items-start mb-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" className="text-white"><path d="M5.46973 13.5L8.45973 9.61001L11.8697 12.29L14.7997 8.51001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.2198 4.84C19.2802 4.84 20.1398 3.98039 20.1398 2.92C20.1398 1.85961 19.2802 1 18.2198 1C17.1594 1 16.2998 1.85961 16.2998 2.92C16.2998 3.98039 17.1594 4.84 18.2198 4.84Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.15 1.83997H5.88C2.87 1.83997 1 3.96997 1 6.98997V15.07C1 18.08 2.83 20.21 5.88 20.21H14.48C17.49 20.21 19.36 18.09 19.36 15.07V8.02997" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-phunk-cyan transition-colors">Ambition</h3>
                 </div>
                 <span className="text-white/20 font-bold text-xl">04</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                We’re in the creative industry because we want to push boundaries, find new ways to communicate and innovate at every stage of our process. If we’re not always striving to outdo our previous work, and motivating each other to do better, we’re doing it wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Webflow Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Webflow @ <span className="gradient-text">Phunk.</span>
            </h2>
            <div className="flex justify-center mb-8">
               <svg width="134" height="46" viewBox="0 0 134 46" fill="none" className="text-black"><g clipPath="url(#clip0_1301_3307)"><path d="M55.5674 36.6316V16.1906H59.4077V18.0757C59.9373 17.376 60.6193 16.8101 61.4004 16.4222C62.1815 16.0342 63.0405 15.8348 63.9102 15.8394C67.6589 15.8394 70.3787 18.6592 70.3787 23.5861C70.3787 28.5131 67.6589 31.369 63.9102 31.369C63.0374 31.3728 62.1758 31.1698 61.3941 30.7762C60.6124 30.3826 59.9322 29.8092 59.4077 29.1018V36.6419L55.5674 36.6316ZM62.698 19.2841C62.0596 19.3004 61.4328 19.4604 60.8629 19.7525C60.293 20.0446 59.7942 20.4614 59.4026 20.9729V26.2097C59.7996 26.7157 60.3004 27.128 60.8704 27.4178C61.4404 27.7077 62.0658 27.8682 62.7031 27.8882C64.9085 27.8882 66.3907 26.1426 66.3907 23.5655C66.3907 20.9884 64.9085 19.2841 62.7031 19.2841H62.698Z" fill="currentColor"></path><path d="M81.6203 21.9853C81.6203 19.9195 80.566 19.2843 78.9005 19.2843C78.2519 19.3 77.6155 19.4659 77.0399 19.7693C76.4643 20.0728 75.9648 20.5057 75.5796 21.035V30.987H71.7393V10.5511H75.5796V18.1223C76.2225 17.3879 77.0137 16.8025 77.8997 16.4059C78.7856 16.0093 79.7454 15.8109 80.7137 15.8241C83.9174 15.8241 85.4606 17.6007 85.4606 20.4721V30.987H81.6203V21.9853Z" fill="currentColor"></path><path d="M97.6083 29.1225C96.956 29.8421 96.1608 30.4134 95.275 30.7989C94.3892 31.1843 93.4329 31.3751 92.4691 31.3587C89.2654 31.3587 87.7578 29.5822 87.7578 26.7107V16.1907H91.5931V25.1717C91.5931 27.2375 92.6525 27.8985 94.2874 27.8985C94.9306 27.8883 95.5631 27.7311 96.1381 27.4387C96.713 27.1463 97.2155 26.7263 97.6083 26.2098V16.1907H101.449V30.9869H97.6083V29.1225Z" fill="currentColor"></path><path d="M113.581 22.042C113.581 19.9762 112.527 19.2842 110.892 19.2842C110.241 19.2923 109.601 19.455 109.024 19.759C108.446 20.063 107.947 20.5 107.566 21.0349V30.9869H103.73V16.1906H107.566V18.1222C108.201 17.3896 108.985 16.805 109.865 16.4083C110.744 16.0116 111.697 15.8123 112.659 15.824C115.863 15.824 117.406 17.6625 117.406 20.5443V30.9869H113.581V22.042Z" fill="currentColor"></path><path d="M125.322 25.3061L123.57 27.2066V30.987H119.734V10.5511H123.57V22.7806L129.101 16.1908H133.817L128.042 22.9046L134.001 30.987H129.193L125.322 25.3061Z" fill="currentColor"></path><path d="M22.3393 22.6514H10.8335C10.8308 19.7389 9.68854 16.9464 7.65745 14.887C5.62636 12.8275 2.87239 11.6693 0 11.6666L0 0C5.92226 0.00819797 11.5996 2.39731 15.7873 6.6435C19.975 10.8897 22.3312 16.6464 22.3393 22.6514Z" fill="currentColor"></path><path d="M22.3393 46H10.8335C10.8308 43.0875 9.68854 40.2951 7.65745 38.2356C5.62636 36.1761 2.87239 35.0179 0 35.0152L0 23.3486C5.92226 23.3568 11.5996 25.7459 15.7873 29.9921C19.975 34.2383 22.3312 39.995 22.3393 46Z" fill="currentColor"></path><path d="M45.3666 46C39.4439 45.9932 33.7658 43.6045 29.5778 39.358C25.3898 35.1116 23.0341 29.3541 23.0273 23.3486H34.5331C34.5358 26.2612 35.6781 29.0536 37.7092 31.1131C39.7403 33.1725 42.4942 34.3307 45.3666 34.3335V46Z" fill="currentColor"></path><path d="M45.3666 22.6514C39.4444 22.6432 33.767 20.2541 29.5793 16.0079C25.3916 11.7617 23.0354 6.00501 23.0273 0L34.5331 0C34.5358 2.91252 35.6781 5.70497 37.7092 7.76444C39.7403 9.8239 42.4942 10.9821 45.3666 10.9848V22.6514Z" fill="currentColor"></path></g><defs><clipPath id="clip0_1301_3307"><rect width="134" height="46" fill="white"></rect></clipPath></defs></svg>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
              We’re immensely proud to be official <a href="#" className="underline">Webflow partners</a> — we’ve been avid users of the platform since the early days, and it’s amazing to be part of its development.
            </p>

            {/* Simple Grid replacing the Slider for reliability/MVP */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-8 rounded-[2rem] text-left shadow-sm border border-slate-100">
                    <h3 className="text-2xl font-bold mb-4">It’s user-friendly</h3>
                    <p className="text-slate-600 mb-6">Webflow allows us to build sites our clients can actually use — so they stay updated, fresh and engaging.</p>
                    <img src="https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/653bcea4dfddf229d22c04d3_Group%20665.svg" className="w-full h-32 object-contain" alt="User friendly" />
                </div>
                <div className="bg-white p-8 rounded-[2rem] text-left shadow-sm border border-slate-100">
                    <h3 className="text-2xl font-bold mb-4">It looks great</h3>
                    <p className="text-slate-600 mb-6">Using Webflow as a foundation opens up limitless potential for design, so we can build something true to our vision.</p>
                    <img src="https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65367e4beab785158e233f14_Vision.svg" className="w-full h-32 object-contain" alt="Looks great" />
                </div>
                <div className="bg-white p-8 rounded-[2rem] text-left shadow-sm border border-slate-100">
                    <h3 className="text-2xl font-bold mb-4">It’s versatile</h3>
                    <p className="text-slate-600 mb-6">From ecommerce stores to e-learning courses, membership sites, commercial portals, and more.</p>
                    <img src="https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/653bcea40b0fda8c19da17be_Group%20661.svg" className="w-full h-32 object-contain" alt="Versatile" />
                </div>
                <div className="bg-white p-8 rounded-[2rem] text-left shadow-sm border border-slate-100">
                    <h3 className="text-2xl font-bold mb-4">It’s future-proof</h3>
                    <p className="text-slate-600 mb-6">At a structural level, Webflow makes it easy to rework, refresh and reimagine existing sites.</p>
                    <img src="https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/653bcea4320adbc8739916e1_Group%20671.svg" className="w-full h-32 object-contain" alt="Future proof" />
                </div>
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
               The <span className="gradient-text">people</span> behind the projects.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mb-12">
               Phunk works because it’s a genuine collaboration between experts — equality of ideas, cross-pollination of skills and a healthy obsession with quality. Here’s the team that makes it happen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Joe 1 */}
                <div className="group">
                    <div className="overflow-hidden rounded-2xl mb-6">
                        <img src="https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/653bd104b45f87422d8867dc_Rectangle%2064.webp" alt="Joe Crabtree" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-phunk-cyan transition-colors">Joe Crabtree</h3>
                    <span className="inline-block bg-slate-100 rounded-full px-3 py-1 text-xs font-bold text-slate-600 mb-4">Co Founder / Director</span>
                    <p className="text-slate-600 leading-relaxed">Meet Joe, our lead designer here at Phunk. Joe has 10 years of experience in graphic design, working with some of the world’s biggest brands. Specialising in branding and graphics, Joe relishes the challenge of building a brand from the ground up.</p>
                </div>
                 {/* Joe 2 */}
                 <div className="group">
                    <div className="overflow-hidden rounded-2xl mb-6">
                        <img src="https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/653bd10416babe192c69aaed_Rectangle%20648.webp" alt="Joe Murray" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-phunk-cyan transition-colors">Joe Murray</h3>
                    <span className="inline-block bg-slate-100 rounded-full px-3 py-1 text-xs font-bold text-slate-600 mb-4">Co Founder / Director</span>
                    <p className="text-slate-600 leading-relaxed">Meet Joe, Creative Director. He is a designer with over 10 years experience in the field. Branding, UX and animation are his main skills and, when he’s not working his creative magic, he is usually mountain biking, playing basketball, and getting away into the outdoors in his campervan.</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default About;