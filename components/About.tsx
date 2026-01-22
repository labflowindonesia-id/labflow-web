import React from 'react';
import { ASSETS } from '../constants';
import { motion } from 'framer-motion';
import {
  FlaskConical,
  LayoutDashboard,
  Microscope,
  Wrench,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Settings,
  Activity,
  Zap,
  CheckCircle2
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32 bg-phunk-dark text-white overflow-hidden selection:bg-phunk-cyan selection:text-black min-h-screen">

      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-phunk-blue/20 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-phunk-cyan/20 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pb-20 lg:pb-32 px-6 lg:px-12 max-w-[1440px] mx-auto z-10 w-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 border border-phunk-cyan/30 bg-phunk-cyan/10 rounded-full px-4 py-2 mb-8 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-phunk-cyan animate-pulse"></div>
              <span className="text-phunk-cyan font-mono text-sm tracking-widest uppercase">Our Mission</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-200">We're Reimagining</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-phunk-blue via-phunk-cyan to-white animate-text-shimmer bg-[length:200%_auto]">The Future</span> <br />
              <span className="text-white">Of Laboratory.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-10 border-l-2 border-phunk-cyan/50 pl-6">
              LabFlow is your digital transformation partner. We automate, optimize, and accelerate process flows within your laboratory using a foundation of Automation, AI Agents, and Agentic AI. We provide flexible solutions that adapt to your specific needs.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="group inline-flex items-center justify-center bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-phunk-cyan transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,209,0.5)]"
            >
              Launch LabFlow
              <ArrowUpRight className="ml-2 group-hover:rotate-45 transition-transform duration-300" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
            style={{ perspective: 1000 }}
            className="mt-12 lg:mt-0 w-full relative z-10 lg:pl-8"
          >
            {/* Animasi Floating */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Efek Glow di Belakang Dashboard */}
              <div className="absolute inset-0 bg-phunk-blue/40 blur-3xl opacity-40 rounded-full transform scale-75 translate-y-10"></div>

              {/* Frame Luar (Kaca/Glassmorphism) */}
              <div className="relative bg-slate-100 backdrop-blur-xl border border-white/40 p-1 rounded-2xl shadow-2xl ring-1 ring-slate-900/5 overflow-hidden">

                {/* Jendela Browser Mockup */}
                <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-inner flex h-[500px] md:h-[600px] text-left text-slate-800 font-sans text-xs md:text-sm">

                  {/* Sidebar Kiri */}
                  <div className="w-16 md:w-56 bg-slate-50 border-r border-slate-200 flex flex-col flex-shrink-0 pt-4">
                    <div className="px-4 mb-6 hidden md:block">
                      <div className="font-bold text-lg text-slate-800 flex items-center gap-2">
                        <FlaskConical size={20} className="text-labblue-600" />
                        <div className="flex flex-col leading-tight">
                          <span>LabFlow</span>
                          <span className="text-[10px] text-slate-400 font-normal">Instrument v</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1 px-2">
                      <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer font-medium">
                        <LayoutDashboard size={16} />
                        <span className="hidden md:inline">Dashboard</span>
                      </div>
                      <div className="ml-8 space-y-1 hidden md:block">
                        <div className="px-3 py-1.5 bg-blue-100/50 text-blue-700 rounded text-xs font-medium">Main Dashboard</div>
                        <div className="px-3 py-1.5 text-slate-500 hover:text-blue-600 text-xs">Calibration Schedule</div>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer">
                        <Microscope size={16} />
                        <span className="hidden md:inline">Instrument</span>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer">
                        <Wrench size={16} />
                        <span className="hidden md:inline">Equipment</span>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer">
                        <div className="w-4 h-4 flex items-center justify-center border border-slate-400 rounded text-[8px]">A</div>
                        <span className="hidden md:inline">Laboratory Asset Detail</span>
                      </div>
                      <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 rounded-lg cursor-pointer">
                        <div className="w-4 h-4 flex items-center justify-center border border-slate-400 rounded text-[8px]">M</div>
                        <span className="hidden md:inline">Maintenance</span>
                      </div>
                    </div>
                  </div>

                  {/* Konten Utama (Kanan) */}
                  <div className="flex-1 flex flex-col bg-white overflow-hidden">
                    {/* Header & Breadcrumb */}
                    <div className="p-6 pb-0">
                      <div className="flex justify-between items-start mb-4">
                        <div className="text-xs text-slate-400 flex items-center gap-2">
                          <span>Dashboard</span>
                          <ChevronRight size={10} />
                          <span className="text-slate-800 font-medium">Main Dashboard</span>
                        </div>
                        <div className="p-1 hover:bg-slate-100 rounded cursor-pointer">
                          <span className="text-xs border border-slate-200 rounded px-1.5 py-0.5 text-slate-500">...</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h2 className="text-2xl font-bold text-slate-900 mb-1">Status & Monitoring Alat</h2>
                          <p className="text-xs text-slate-500">Visual overview and detailed list of all equipment statuses from the Calibration Database.</p>
                        </div>
                        <button className="bg-slate-900 hover:bg-slate-800 text-white text-xs px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
                          Go to Lab Assistant <ArrowUpRight size={12} />
                        </button>
                      </div>

                      {/* Tabs Navigasi */}
                      <div className="flex gap-8 border-b border-slate-200">
                        <div className="pb-3 border-b-2 border-slate-900 font-medium text-sm cursor-pointer text-slate-900">Instrument</div>
                        <div className="pb-3 border-b-2 border-transparent text-slate-500 text-sm cursor-pointer hover:text-slate-700">Peralatan</div>
                        <div className="pb-3 border-b-2 border-transparent text-slate-500 text-sm cursor-pointer hover:text-slate-700">All records</div>
                      </div>
                    </div>

                    {/* Area Scrollable Dashboard */}
                    <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50 relative">

                      {/* Card Grafik Donut */}
                      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-4">
                        <div className="flex justify-between mb-6">
                          <div>
                            <h3 className="font-bold text-slate-800 text-sm">Equipment Status Distribution</h3>
                            <p className="text-[10px] text-slate-400">Distribution of equipment statuses based on Status Alat.</p>
                          </div>
                          <div className="text-slate-300 hover:text-slate-500 cursor-pointer"><ArrowUpRight size={16} /></div>
                        </div>

                        <div className="flex items-center justify-center gap-12">
                          {/* Visualisasi Donut Chart dengan CSS Conic Gradient */}
                          <div className="relative w-40 h-40 rounded-full"
                            style={{
                              background: 'conic-gradient(#fbcfe8 0% 9.1%, #bae6fd 9.1% 18.2%, #bbf7d0 18.2% 100%)'
                            }}>
                            <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center flex-col">
                            </div>
                          </div>

                          {/* Legend Chart */}
                          <div className="space-y-2">
                            <div className="text-xs text-slate-400 font-medium mb-2">Status Alat</div>
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                              <div className="w-2 h-2 rounded-full bg-green-200"></div>
                              <span>Terkalibrasi (9)</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                              <div className="w-2 h-2 rounded-full bg-blue-200"></div>
                              <span>Jadwal Mendatang (1)</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                              <div className="w-2 h-2 rounded-full bg-pink-200"></div>
                              <span>Lewat Jatuh Tempo (1)</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card Tabel Database */}
                      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-slate-800 text-sm mb-6">Calibration Database List View</h3>

                        <div className="overflow-x-auto">
                          <table className="w-full text-xs text-left border-collapse">
                            <thead>
                              <tr className="text-slate-400 border-b border-slate-100">
                                <th className="pb-3 font-normal w-1/3">Nama Alat</th>
                                <th className="pb-3 font-normal">Hari Menuju Jatuh Tempo</th>
                                <th className="pb-3 font-normal">Kalibrasi Selanjutnya</th>
                                <th className="pb-3 font-normal">Kalibrasi Terakhir</th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-700">
                              {/* Baris Tabel Data Statis */}
                              <tr className="border-b border-slate-50 hover:bg-slate-50">
                                <td className="py-3 flex items-center gap-2">
                                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-medium">Terkalibrasi</span>
                                  Spektro Single Beam
                                </td>
                                <td className="py-3">206</td>
                                <td className="py-3">June 18, 2026</td>
                                <td className="py-3">2025-06-18</td>
                              </tr>
                              <tr className="border-b border-slate-50 hover:bg-slate-50">
                                <td className="py-3 flex items-center gap-2">
                                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-medium">Terkalibrasi</span>
                                  LC-MS
                                </td>
                                <td className="py-3">190</td>
                                <td className="py-3">June 2, 2026</td>
                                <td className="py-3">2025-06-02</td>
                              </tr>
                              <tr className="border-b border-slate-50 hover:bg-slate-50">
                                <td className="py-3 flex items-center gap-2">
                                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-medium">Terkalibrasi</span>
                                  GC-MS Agilent 01
                                </td>
                                <td className="py-3">43</td>
                                <td className="py-3">January 6, 2026</td>
                                <td className="py-3">2025-07-08</td>
                              </tr>
                              {/* Tambahkan baris lain sesuai kebutuhan */}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Garis Scanning Animasi (Efek Laser Scan) - Enhanced */}
                      <motion.div
                        initial={{ top: "-10%" }}
                        animate={{ top: "120%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-phunk-cyan to-transparent shadow-[0_0_20px_#00E5D1] pointer-events-none z-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="bg-phunk-dark py-20 relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20"></div>

        <div className="max-w-[1240px] mx-auto px-6 lg:px-12 space-y-32 relative z-10">

          {/* Origin Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 uppercase tracking-tight">
                Built by <span className="text-phunk-cyan drop-shadow-[0_0_10px_rgba(0,229,209,0.5)]">Practitioners</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We are not just software developers; we are laboratory practitioners. By combining technical testing experience and a deep understanding of ISO standards, we build solutions that truly understand your laboratory's "language".
              </p>
              <div className="flex gap-4">
                <div className="h-1 w-20 bg-phunk-blue rounded-full"></div>
                <div className="h-1 w-10 bg-phunk-cyan rounded-full"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-phunk-blue to-phunk-cyan rounded-[2.5rem] blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/images/build-by-practitioner.png"
                alt="Founders at college"
                className="relative rounded-[2.5rem] w-full shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
              />
              <a href="#" className="absolute bottom-8 right-8 bg-white text-black px-6 py-3 rounded-full font-bold shadow-lg hover:bg-phunk-cyan hover:scale-110 transition-all duration-300">
                Talk to us
              </a>
            </div>
          </div>

          {/* Adaptability */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight uppercase tracking-tight">
                Systems that <br /> <span className="text-phunk-blue drop-shadow-[0_0_10px_rgba(37,173,249,0.5)]">Adapt to You</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Forget rigid systems that force you to change SOPs. Our AI agents are designed to adapt to your unique workflow.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 border-l px-6 border-phunk-blue/30 italic">
                "We automate repetitive tasks and integrate instruments without disrupting the existing work rhythm."
              </p>
              <a href="#" className="inline-flex items-center justify-center border border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all hover:scale-105">
                Explore Automation
              </a>
            </div>
            <div className="lg:order-1 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-phunk-blue rounded-[2.5rem] blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/images/n8n.png"
                alt="Founders working"
                className="relative rounded-[2.5rem] w-full shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
              />
            </div>
          </div>

          {/* 2 Years In */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 uppercase tracking-tight">
                Always <span className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">Audit-Ready</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Your peace of mind is our priority. LabFlow is built on an audit-readiness foundation, ensuring every data point is tracked, validated, and secure. We turn dizzying audit preparation into a transparent automated process.
              </p>
              <div className="flex items-center gap-4 text-slate-300">
                <CheckCircle2 className="text-green-400" /> <span>ISO 17025 Compliant</span>
                <CheckCircle2 className="text-green-400" /> <span>Data Integrity</span>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-phunk-cyan rounded-[2.5rem] blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/images/auditready.png"
                alt="Team meeting"
                className="relative rounded-[2.5rem] w-full shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/10"
              />
              <a href="#" className="absolute bottom-8 right-8 bg-black text-white border border-white/20 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-white hover:text-black transition-colors">
                See how it works
              </a>
            </div>
          </div>

          {/* Fun CTA */}
          {/* Fun CTA - Updated Design */}
          <div className="relative w-full rounded-[2.5rem] bg-[#00C2FF] overflow-hidden flex flex-col lg:flex-row items-center lg:items-end justify-between px-8 py-12 md:p-16 lg:px-20 lg:py-24">
            <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-yellow-400/90 rounded-full blur-[100px] mix-blend-overlay pointer-events-none"></div>
            {/* Confetti Decoration (Background) */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Blue/Cyan Confetti */}
              <div className="absolute top-[20%] right-[30%] w-3 h-3 bg-blue-600 rotate-12 rounded-sm opacity-60"></div>
              <div className="absolute top-[40%] right-[10%] w-2 h-4 bg-blue-500 -rotate-45 rounded-sm opacity-60"></div>
              <div className="absolute bottom-[30%] right-[20%] w-3 h-3 bg-indigo-500 rotate-45 rounded-sm opacity-60"></div>
              {/* Pink/Purple Confetti */}
              <div className="absolute top-[15%] right-[15%] w-2 h-2 bg-pink-500 rotate-12 rounded-sm opacity-80"></div>
              <div className="absolute top-[50%] right-[40%] w-2 h-4 bg-purple-500 -rotate-12 rounded-sm opacity-80"></div>
              <div className="absolute bottom-[40%] right-[5%] w-3 h-3 bg-pink-400 rotate-12 rounded-sm opacity-80"></div>
            </div>

            {/* Left Content: Text & Button */}
            <div className="relative z-10 w-full lg:w-1/2 text-left flex flex-col items-start mb-10 lg:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
                It’s been a lot of fun.
              </h2>
              <p className="text-2xl md:text-3xl font-medium text-white/90 mb-10">
                Now let's do more!
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
              >
                Talk to us
              </a>
            </div>

            {/* Right Content: Character Image */}
            <div className="relative z-10 w-full lg:w-1/2 flex justify-center lg:absolute lg:right-[-20px] lg:bottom-[-40px] pointer-events-none">
              <img
                src="/images/flo-love.png"
                alt="Mascot"
                className="w-64 md:w-80 lg:w-[450px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section (Already Dark, Refined) */}
      <section className="bg-phunk-dark py-20 lg:py-32 text-white relative">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              LabFlow <span className="text-transparent bg-clip-text bg-gradient-to-r from-phunk-cyan to-phunk-blue">Values.</span>
            </h2>
            <div className="h-[2px] w-full md:w-1/3 bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Value 1 */}
            <div className="bg-[#111] p-10 rounded-[2rem] hover:bg-[#161616] border border-white/5 hover:border-phunk-cyan/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-phunk-cyan/10">
                    <svg width="24" height="23" viewBox="0 0 20 19" fill="none" className="text-white group-hover:text-phunk-cyan transition-colors"><path d="M11.1339 1.45714L13.0118 5.20265C13.1965 5.57207 13.5556 5.82862 13.9661 5.87992L18.1631 6.48536C18.8404 6.57772 19.3227 7.20368 19.2303 7.88095C19.1893 8.15802 19.0662 8.41456 18.8609 8.60953L15.8235 11.5238C15.5259 11.8112 15.3925 12.2216 15.4643 12.6218L16.1826 16.7368C16.2955 17.4243 15.8235 18.0708 15.1359 18.1837C14.8691 18.2247 14.5921 18.1837 14.3458 18.0503L10.6003 16.1108C10.2309 15.9158 9.78961 15.9158 9.42019 16.1108L5.67467 18.0503C5.05897 18.3786 4.29961 18.1426 3.97124 17.5269C3.83783 17.2806 3.79679 17.0036 3.83783 16.7368L4.55615 12.6218C4.62798 12.2216 4.49458 11.8009 4.19699 11.5238L1.15954 8.60953C0.666978 8.13749 0.646454 7.34734 1.12875 6.85478C1.32372 6.64955 1.58027 6.52641 1.85733 6.48536L6.05436 5.87992C6.46482 5.81835 6.82398 5.57207 7.00869 5.20265L8.88658 1.45714C9.20469 0.831181 9.97432 0.595163 10.6003 0.913275C10.8363 1.03641 11.021 1.22112 11.1441 1.45714H11.1339Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-phunk-cyan transition-colors uppercase">ISO 17025 Compliant</h3>
                </div>
                <span className="text-white/10 group-hover:text-phunk-cyan/20 font-black text-4xl transition-colors">01</span>
              </div>
              <p className="text-slate-400 leading-relaxed group-hover:text-white transition-colors">
                We meet international standards for laboratory competence. Our system is built to ensure your laboratory maintains its accreditation with ease.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#111] p-10 rounded-[2rem] hover:bg-[#161616] border border-white/5 hover:border-phunk-blue/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-phunk-blue/10">
                    <svg width="24" height="25" viewBox="0 0 20 21" fill="none" className="text-white group-hover:text-phunk-blue transition-colors"><path d="M18.5164 6.34L17.8964 5.26C17.3664 4.35 16.1964 4.03 15.2864 4.56C14.3864 5.09 13.2164 4.8 12.6864 3.89C12.6864 3.89 12.6864 3.89 12.6864 3.88C12.5264 3.6 12.4364 3.29 12.4264 2.97C12.4564 1.91 11.6264 1.03 10.5764 1C10.5564 1 10.5364 1 10.5164 1H9.26636C8.21636 1 7.36636 1.85 7.36636 2.9C7.36636 2.9 7.36636 2.9 7.36636 2.91C7.35636 3.96 6.49636 4.8 5.44636 4.8C5.12636 4.8 4.80636 4.71 4.53636 4.54C3.62636 4.01 2.45636 4.33 1.92636 5.24L1.25636 6.34C0.726356 7.25 1.04636 8.42 1.95636 8.95C2.54636 9.29 2.91636 9.92 2.91636 10.61C2.91636 11.29 2.55636 11.93 1.95636 12.27C1.04636 12.79 0.726356 13.95 1.25636 14.86L1.88636 15.95C2.39636 16.88 3.55636 17.21 4.48636 16.7C4.48636 16.7 4.48636 16.7 4.49636 16.7C5.39636 16.17 6.55636 16.48 7.08636 17.38C7.08636 17.38 7.08636 17.39 7.08636 17.4C7.24636 17.68 7.33636 17.99 7.34636 18.32C7.34636 19.38 8.20636 20.23 9.25636 20.23H10.5064C11.5564 20.23 12.4164 19.38 12.4164 18.33C12.4164 17.28 13.2564 16.42 14.3064 16.42C14.3064 16.42 14.3264 16.42 14.3364 16.42C14.6564 16.42 14.9764 16.52 15.2464 16.68C16.1564 17.21 17.3264 16.89 17.8564 15.98L18.5164 14.88C19.0464 13.97 18.7364 12.81 17.8364 12.28C17.8364 12.28 17.8264 12.28 17.8164 12.27C16.9064 11.75 16.5864 10.59 17.1064 9.68C17.1064 9.68 17.1064 9.67 17.1164 9.66C17.2864 9.37 17.5264 9.13 17.8164 8.96C18.7264 8.43 19.0364 7.27 18.5164 6.36V6.34Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.88609 13.24C11.3441 13.24 12.5261 12.0581 12.5261 10.6C12.5261 9.14199 11.3441 7.96002 9.88609 7.96002C8.42806 7.96002 7.24609 9.14199 7.24609 10.6C7.24609 12.0581 8.42806 13.24 9.88609 13.24Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-phunk-blue transition-colors uppercase">Reliability</h3>
                </div>
                <span className="text-white/10 group-hover:text-phunk-blue/20 font-black text-4xl transition-colors">02</span>
              </div>
              <p className="text-slate-400 leading-relaxed group-hover:text-white transition-colors">
                Complete audit trail for every data point generated. We log every process, user action, and timestamp to ensure data integrity.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#111] p-10 rounded-[2rem] hover:bg-[#161616] border border-white/5 hover:border-purple-500/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-purple-500/10">
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" className="text-white group-hover:text-purple-500 transition-colors"><path d="M11.7656 18.434H19.0156" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.7956 1.79398C11.5856 0.863984 12.9656 0.733984 13.9156 1.49398L15.6456 2.84398C16.6656 3.44398 16.9956 4.76398 16.3956 5.77398C16.3956 5.79398 16.3756 5.80398 16.3656 5.82398C16.3356 5.87398 6.82565 17.764 6.82565 17.764C6.50565 18.164 6.02565 18.394 5.50565 18.404L1.86565 18.454L1.04565 14.984C0.925645 14.494 1.04565 13.974 1.36565 13.584L10.7956 1.79398Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.03613 3.9939L14.4861 8.1839" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-purple-500 transition-colors uppercase">Zero Human Error</h3>
                </div>
                <span className="text-white/10 group-hover:text-purple-500/20 font-black text-4xl transition-colors">03</span>
              </div>
              <p className="text-slate-400 leading-relaxed group-hover:text-white transition-colors">
                Automation that eliminates the risk of manual errors. From calculations to data entry, LabFlow handles the repetitive tasks so you can focus on analysis.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-[#111] p-10 rounded-[2rem] hover:bg-[#161616] border border-white/5 hover:border-pink-500/50 transition-all duration-300 group hover:-translate-y-2">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-pink-500/10">
                    <svg width="25" height="25" viewBox="0 0 21 21" fill="none" className="text-white group-hover:text-pink-500 transition-colors"><path d="M5.46973 13.5L8.45973 9.61001L11.8697 12.29L14.7997 8.51001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.2198 4.84C19.2802 4.84 20.1398 3.98039 20.1398 2.92C20.1398 1.85961 19.2802 1 18.2198 1C17.1594 1 16.2998 1.85961 16.2998 2.92C16.2998 3.98039 17.1594 4.84 18.2198 4.84Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.15 1.83997H5.88C2.87 1.83997 1 3.96997 1 6.98997V15.07C1 18.08 2.83 20.21 5.88 20.21H14.48C17.49 20.21 19.36 18.09 19.36 15.07V8.02997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-pink-500 transition-colors uppercase">SOP Adaptive</h3>
                </div>
                <span className="text-white/10 group-hover:text-pink-500/20 font-black text-4xl transition-colors">04</span>
              </div>
              <p className="text-slate-400 leading-relaxed group-hover:text-white transition-colors">
                Flexibly adapts to your standard operating procedures. Unlike rigid legacy LIMS, LabFlow molds itself to your lab's specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Webflow Section */}
      <section className="py-20 lg:py-32 bg-phunk-dark border-y border-white/5 relative">
        <div className="absolute inset-0 bg-phunk-blue/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white tracking-tighter uppercase">
            From Chaos to <br /><span className="text-phunk-cyan">Orchestrated Precision</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-20">
            We implement LabFlow in four strategic steps to ensure success without disrupting your daily operations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We map your current SOPs and identify bottlenecks to understand your unique needs." },
              { step: "02", title: "Architecture", desc: "We design a custom automation topology specifically for your laboratory's ecosystem." },
              { step: "03", title: "Integration", desc: "We deploy software, agents, and bridges non-disruptively to get you running fast." },
              { step: "04", title: "Evolution", desc: "Our AI agents learn and optimize your workflow over time, getting smarter as you grow." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#111] p-8 rounded-[2rem] text-left shadow-[0_4px_20px_rgba(0,0,0,0.5)] border border-white/5 hover:border-phunk-cyan/30 transition-all hover:scale-105 group">
                <div className="text-6xl font-black text-white/5 mb-4 group-hover:text-phunk-cyan/20 transition-colors">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-phunk-cyan transition-colors">{item.title}</h3>
                <p className="text-slate-400 mb-6 group-hover:text-slate-200 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section / Team */}
      <section className="py-20 bg-phunk-dark text-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter uppercase">
            Uncompromised <span className="text-phunk-blue">Security.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mb-16">
            Your lab data and documents are private. AI access is controlled, scoped, and protected—so information stays confidential while still useful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Security Card 1 */}
            <div className="group border border-white/10 bg-[#0f0f0f] p-10 rounded-[2rem] hover:shadow-[0_0_30px_rgba(37,173,249,0.15)] transition-all hover:border-phunk-blue/40">
              <div className="mb-8 w-20 h-20 bg-phunk-blue/10 rounded-full flex items-center justify-center text-phunk-blue group-hover:bg-phunk-blue group-hover:text-black transition-all duration-300">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-phunk-blue transition-colors">Private AI & Guardrails</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-200">
                AI only extracts text and is secured by strict guardrails. Third parties cannot access your data, and the AI cannot modify records without explicit approval.
              </p>
            </div>
            {/* Security Card 2 */}
            <div className="group border border-white/10 bg-[#0f0f0f] p-10 rounded-[2rem] hover:shadow-[0_0_30px_rgba(0,229,209,0.15)] transition-all hover:border-phunk-cyan/40">
              <div className="mb-8 w-20 h-20 bg-phunk-cyan/10 rounded-full flex items-center justify-center text-phunk-cyan group-hover:bg-phunk-cyan group-hover:text-black transition-all duration-300">
                <Settings size={40} />
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-phunk-cyan transition-colors">Role-Based Access</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-200">
                Strict Role Based Control Access ensures only authorized personnel (Analyst, Admin, Manager) can access specific features and data sets.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;