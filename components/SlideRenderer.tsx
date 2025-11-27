import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import {
  Mic,
  Users,
  Layers,
  Code,
  Cpu,
  Shield,
  Layout,
  DollarSign,
  Server,
  Database,
  Globe,
  Clock,
  CheckCircle,
  Play,
  FileText,
  Settings,
  ArrowRight
} from 'lucide-react';

interface SlideRendererProps {
  slideIndex: number;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slideIndex }) => {

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  // Helper to render slide content
  const renderContent = () => {
    switch (slideIndex) {
      case 0: // Title
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-30 blur-xl rounded-full" />
              <h1 className="relative text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-gray-400 glow-text">
                Nabrah AI Voice Studio
              </h1>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-gray-400 font-light tracking-widest uppercase"
            >
              Platform Development Proposal
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 p-4 border-t border-white/10"
            >
              <p className="text-gray-500">Prepared by TalentlyX</p>
              <p className="text-cyan-500 text-sm mt-2">26 November 2025</p>
            </motion.div>
          </div>
        );

      case 1: // Executive Summary
        return (
          <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">Executive Summary</h2>
            <GlassCard>
              <p className="text-2xl leading-relaxed text-gray-200">
                “Nabrah seeks to build a modern <span className="text-cyan-400 font-semibold">AI Voice Studio</span> for Saudi dialect TTS, voice cloning, developer APIs, and script-based audio generation.
                <br /><br />
                TalentlyX will deliver a full <span className="text-purple-400 font-semibold">ElevenLabs-style platform</span>, localized for Arabic, built with modern technology, and fully integrated with Nabrah's TTS capabilities.”
              </p>
            </GlassCard>
          </div>
        );

      case 2: // Objectives
        return (
          <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 border-b border-white/10 pb-4">Platform Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Build a complete production-ready AI Voice Studio",
                "Enable speech generation in Saudi dialects",
                "Offer high-fidelity Voice Cloning",
                "Manage scripts and long-form projects",
                "Provide robust Developer APIs",
                "Include tiered Subscription Models",
                "Full Arabic + English Support"
              ].map((item, idx) => (
                <GlassCard key={idx} className="flex items-center space-x-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-cyan-400" />
                  </div>
                  <span className="text-xl text-gray-200">{item}</span>
                </GlassCard>
              ))}
            </div>
          </div>
        );

      case 3: // Key Features Overview
        const features = [
          { title: "TTS Studio", icon: <Mic />, desc: "Advanced Synthesis" },
          { title: "Voice Cloning", icon: <Users />, desc: "Instant Voice Copy" },
          { title: "Projects & Scripts", icon: <Layers />, desc: "Long-form Editing" },
          { title: "Voice Library", icon: <Database />, desc: "Saudi Dialects" },
          { title: "Developer API", icon: <Code />, desc: "Integration Ready" },
          { title: "Pricing & Plans", icon: <DollarSign />, desc: "Subscription Mgmt" },
          { title: "Admin Dashboard", icon: <Layout />, desc: "Platform Control" },
          { title: "Localization", icon: <Globe />, desc: "Arabic/English UI" },
        ];
        return (
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-8 text-center">Key Features Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <GlassCard key={i} className="flex flex-col items-center text-center hover:bg-white/10 transition-colors cursor-default">
                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full mb-4">
                    {React.cloneElement(f.icon as React.ReactElement, { className: "w-8 h-8 text-cyan-300" })}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-400">{f.desc}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        );

      case 4: // TTS Studio
        return (
          <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 flex items-center"><Mic className="mr-4 text-cyan-400" /> Text-to-Speech Studio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <GlassCard>
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">Core Generation</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" /> Multi-paragraph TTS support</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" /> Paragraph-by-paragraph granular generation</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" /> High-fidelity real-time playback</li>
                  </ul>
                </GlassCard>
                <GlassCard>
                  <h3 className="text-xl font-bold text-cyan-300 mb-2">Audio Management</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" /> Instant MP3/WAV download</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" /> Audio merging (stitch paragraphs)</li>
                    <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" /> Persistent generation history</li>
                  </ul>
                </GlassCard>
              </div>
              <div className="relative bg-black/60 border border-gray-700 rounded-xl p-6 opacity-90 overflow-hidden flex flex-col justify-center shadow-inner">
                {/* Visual Representation of TTS UI */}
                <div className="w-full flex justify-between items-center mb-6">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="h-2 w-full mx-2 bg-gray-800 rounded"></div>
                  <div className="text-xs text-gray-500">01:24</div>
                </div>

                {/* Simulated Waveform */}
                <div className="flex items-center justify-center gap-1 h-24 w-full mb-6">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-cyan-500/60 rounded-full animate-pulse"
                      style={{
                        height: `${Math.max(20, Math.random() * 100)}%`,
                        animationDelay: `${i * 0.05}s`,
                        animationDuration: '1s'
                      }}
                    />
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-800 rounded w-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="h-4 bg-gray-800 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                </div>

                <div className="mt-8 flex justify-center items-center gap-6">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400"><Play size={12} className="rotate-180" /></div>
                  <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/50 hover:scale-105 transition">
                    <Play className="fill-black text-black ml-1" size={24} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400"><Play size={12} /></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 5: // Voice Cloning
        return (
          <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 flex items-center"><Users className="mr-4 text-purple-400" /> Voice Cloning</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <GlassCard className="col-span-1 md:col-span-2">
                <h3 className="text-2xl font-semibold mb-4 text-white">Instant & Professional Cloning</h3>
                <p className="text-gray-400 mb-6">Empower users to create digital replicas of their voices with as little as 1 minute of audio.</p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-black/20">
                    <span>Sample Upload (≥1 min)</span>
                    <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">WAV/MP3</div>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-black/20">
                    <span>Voice Naming & Categorization</span>
                    <div className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">Metadata</div>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-black/20">
                    <span>Privacy Control</span>
                    <div className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">Private/Public</div>
                  </div>
                </div>
              </GlassCard>
              <GlassCard className="flex flex-col items-center justify-center text-center border-purple-500/30">
                <Shield className="w-16 h-16 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Admin Approval</h3>
                <p className="text-sm text-gray-400">Security workflow to prevent misuse. All clones must pass admin verification.</p>
              </GlassCard>
            </div>
          </div>
        );

      case 6: // Projects & Scripts
        return (
          <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 flex items-center"><Layers className="mr-4 text-pink-400" /> Projects & Scripts</h2>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/20">
                  <h3 className="text-xl font-bold text-pink-300">Unlimited Structure</h3>
                  <p className="text-gray-400 mt-2">Organize work into folders (Projects) containing multiple chapters (Scripts).</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/20">
                  <h3 className="text-xl font-bold text-pink-300">Editor Integration</h3>
                  <p className="text-gray-400 mt-2">Generate audio directly within the script editor. Highlight text → Generate.</p>
                </div>
              </div>
              <div className="space-y-4">
                <GlassCard className="flex items-center space-x-4">
                  <FileText className="text-gray-400" />
                  <span className="text-lg">Autosave & Versioning</span>
                </GlassCard>
                <GlassCard className="flex items-center space-x-4">
                  <FileText className="text-gray-400" />
                  <span className="text-lg">Duplicate & Template</span>
                </GlassCard>
                <GlassCard className="flex items-center space-x-4">
                  <FileText className="text-gray-400" />
                  <span className="text-lg">Bulk Delete & Archive</span>
                </GlassCard>
              </div>
            </div>
          </div>
        );

      case 7: // Developers
        return (
          <div className="h-full flex flex-col justify-center max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 flex items-center"><Code className="mr-4 text-green-400" /> Developer Ecosystem</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "API Keys", icon: <Code />, desc: "Secure key management with scopes." },
                { title: "Documentation", icon: <FileText />, desc: "Swagger/OpenAPI specs." },
                { title: "Usage Logs", icon: <Layers />, desc: "Real-time quota tracking." },
                { title: "Webhooks", icon: <Server />, desc: "Async events for generation." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-900/50 border border-green-500/20 rounded-xl hover:border-green-500/60 transition-all group">
                  <div className="mb-4 text-green-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-200 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 8: // Admin Dashboard
        return (
          <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 flex items-center"><Settings className="mr-4 text-orange-400" /> Admin Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassCard>
                <h3 className="text-2xl font-bold mb-4 text-orange-300">Platform Control Center</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span>Voice Approvals</span>
                    <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded">Critical</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span>User Credits & Billing</span>
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">Mgmt</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span>System Logs</span>
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">Audit</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span>Content Moderation</span>
                    <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">Safety</span>
                  </li>
                </ul>
              </GlassCard>
              <div className="bg-black/40 rounded-xl border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4 relative z-10">
                  <div className="text-sm text-gray-400 font-mono mb-2">LIVE SYSTEM ACTIVITY</div>

                  {/* Simulated Analytics Chart */}
                  <div className="h-48 flex items-end justify-between gap-2 px-2 pb-2 border-b border-l border-gray-700">
                    {[30, 45, 35, 60, 50, 75, 60, 90, 80, 60, 75, 50].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-orange-500/40 hover:bg-orange-500/80 transition-all rounded-t-sm"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>00:00</span>
                    <span>12:00</span>
                    <span>24:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 9: // Pricing
        return (
          <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center">Investment & Cost</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <GlassCard className="border-t-4 border-t-gray-500">
                <h3 className="text-2xl font-bold text-gray-300">MVP Version</h3>
                <div className="text-4xl font-bold my-4 text-white">12,000 <span className="text-lg text-gray-400">SAR</span></div>
                <ul className="space-y-2 text-gray-400 mb-6">
                  <li>• Core TTS Studio</li>
                  <li>• Basic Project Mgmt</li>
                  <li>• 5 Pre-set Voices</li>
                  <li>• Essential Admin Panel</li>
                </ul>
              </GlassCard>
              <GlassCard className="border-t-4 border-t-cyan-500 bg-cyan-900/10 relative">
                <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                <h3 className="text-2xl font-bold text-cyan-400">Full Platform</h3>
                <div className="text-4xl font-bold my-4 text-white">15,000 <span className="text-lg text-gray-400">SAR</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>• All MVP Features</li>
                  <li>• <span className="text-cyan-400">Voice Cloning</span></li>
                  <li>• <span className="text-cyan-400">Developer API</span></li>
                  <li>• Advanced Analytics</li>
                  <li>• Multi-user Teams</li>
                </ul>
              </GlassCard>
            </div>
          </div>
        );

      case 10: // Technical Architecture
        return (
          <div className="h-full flex flex-col justify-center max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 flex items-center"><Cpu className="mr-4 text-blue-400" /> Technical Architecture</h2>
            <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center">
              <div className="flex flex-col gap-4 flex-1">
                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg text-center">
                  <div className="text-blue-300 font-bold mb-1">Frontend</div>
                  <div className="text-sm text-gray-300">Next.js 14, Tailwind, React</div>
                </div>
                <div className="h-8 w-0.5 bg-blue-500/30 mx-auto"></div>
                <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg text-center">
                  <div className="text-purple-300 font-bold mb-1">Backend API</div>
                  <div className="text-sm text-gray-300">Node.js / Secure Routes</div>
                </div>
              </div>

              <div className="hidden md:flex flex-col justify-center">
                <div className="w-8 h-0.5 bg-gray-500/30"></div>
              </div>

              <div className="flex flex-col gap-4 flex-1 justify-center">
                <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg text-center">
                  <div className="text-green-300 font-bold mb-1">Database</div>
                  <div className="text-sm text-gray-300">PostgreSQL / Firestore</div>
                </div>
                <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-lg text-center mt-4">
                  <div className="text-yellow-300 font-bold mb-1">Storage</div>
                  <div className="text-sm text-gray-300">GCP / AWS S3</div>
                </div>
              </div>

              <div className="hidden md:flex flex-col justify-center">
                <div className="w-8 h-0.5 bg-gray-500/30"></div>
              </div>

              <div className="flex flex-col gap-4 flex-1 justify-center">
                <div className="bg-gray-800 border border-gray-600 p-4 rounded-lg text-center">
                  <div className="text-gray-300 font-bold mb-1">Hosting</div>
                  <div className="text-sm text-gray-400">Vercel</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 11: // Timeline
        return (
          <div className="h-full flex flex-col justify-center max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 flex items-center"><Clock className="mr-4 text-cyan-400" /> Project Timeline (2-4 Weeks)</h2>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 -translate-y-1/2 rounded"></div>
              <div className="grid grid-cols-7 gap-2 relative z-10">
                {["UI & Layout", "TTS Studio", "Voices/Clone", "API Section", "Admin Panel", "Localization", "Deployment"].map((step, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-6 h-6 rounded-full border-2 ${i < 7 ? 'bg-black border-cyan-500' : 'bg-gray-800 border-gray-600'} mb-4 z-20`}></div>
                    <div className="text-sm font-medium text-center text-gray-300">{step}</div>
                    <div className="text-xs text-gray-600 mt-1">Week {Math.ceil((i + 1) / 2)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 12: // Terms
        return (
          <div className="h-full flex flex-col justify-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Terms & Conditions</h2>
            <GlassCard>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start"><span className="text-cyan-500 mr-2">1.</span> Payment: 50% Upfront, 50% Upon Delivery.</li>
                <li className="flex items-start"><span className="text-cyan-500 mr-2">2.</span> Revision: 2 Rounds of revisions included in the proposal scope.</li>
                <li className="flex items-start"><span className="text-cyan-500 mr-2">3.</span> IP Rights: TalentlyX transfers all IP to Nabrah upon full payment.</li>
                <li className="flex items-start"><span className="text-cyan-500 mr-2">4.</span> Maintenance: 1 Month free bug-fix support post-launch.</li>
                <li className="flex items-start"><span className="text-cyan-500 mr-2">5.</span> Third-Party Costs: Server/API costs are borne by the client.</li>
              </ul>
            </GlassCard>
          </div>
        );

      case 13: // Next Steps
        return (
          <div className="h-full flex flex-col justify-center max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12">Next Steps</h2>
            <div className="space-y-6">
              {[
                { title: "Approve Proposal", desc: "Sign off on deliverables and timeline." },
                { title: "Provide API Docs", desc: "Share documentation for existing TTS integration." },
                { title: "Begin Development", desc: "Kickoff meeting and immediate sprint start." },
                { title: "Weekly Updates", desc: "Continuous feedback loop and progress tracking." }
              ].map((step, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="flex items-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold text-lg group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    {i + 1}
                  </div>
                  <div className="ml-6 flex-grow">
                    <div className="text-xl font-bold text-white">{step.title}</div>
                    <div className="text-gray-400">{step.desc}</div>
                  </div>
                  <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="text-cyan-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 14: // Thank You
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-cyan-500">Thank You</h2>
            <p className="text-2xl text-gray-400">Looking forward to building with you.</p>
            <GlassCard className="mt-12 p-8 min-w-[400px]">
              <div className="text-2xl font-bold text-white mb-4">TalentlyX Team</div>
              <div className="space-y-2 text-lg">
                <div className="text-cyan-400 flex items-center justify-center gap-2">
                  <span className="text-gray-500">Email:</span> zaid@talentlyx.com
                </div>
                <div className="text-cyan-400 flex items-center justify-center gap-2">
                  <span className="text-gray-500">Phone:</span> +966 55 353 2798
                </div>
              </div>
            </GlassCard>
          </div>
        );

      default:
        return <div>End of Presentation</div>;
    }
  };

  return (
    <motion.div
      key={slideIndex}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-full w-full p-8 md:p-16 flex flex-col relative z-10"
    >
      <motion.div variants={contentVariants} className="h-full">
        {renderContent()}
      </motion.div>
    </motion.div>
  );
};