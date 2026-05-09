import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Youtube, 
  Search, 
  MapPin, 
  ArrowUpRight, 
  TrendingUp, 
  Users, 
  Target,
  Mail,
  Linkedin,
  Twitter,
  Github,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

// --- Shared Components ---

const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 ${className}`}>
    {children}
  </section>
);

const Button = ({ children, variant = 'primary', className = "", onClick }: { children: React.ReactNode; variant?: 'primary' | 'secondary' | 'outline'; className?: string; onClick?: () => void }) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group";
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200",
    secondary: "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-800",
    outline: "border border-neutral-700 text-neutral-300 hover:border-white hover:text-white"
  };
  
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- Navbar ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-bottom border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">GrowthNexus</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Results', 'Approach', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <Button variant="outline" className="py-2 px-6 text-sm">
            Get Audit
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-neutral-900 absolute top-20 left-0 w-full p-6 border-b border-neutral-800 flex flex-col gap-6"
        >
          {['Services', 'Results', 'Approach', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium text-neutral-300"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

// --- Hero ---

const Hero = () => {
  return (
    <Section id="home" className="pt-40 pb-20 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-400 uppercase tracking-widest"
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Available for new projects
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl leading-[1.1] mb-8"
      >
        I grow brands through <span className="text-neutral-500 italic font-serif font-normal">data-driven</span> SEO & Content.
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12"
      >
        Helping creators and businesses dominate search rankings, maximize YouTube reach, and capture local markets.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button>
          View Case Studies <ArrowUpRight className="w-4 h-4" />
        </Button>
        <Button variant="outline">
          Let's Talk
        </Button>
      </motion.div>

      {/* Hero Stats */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-neutral-900 pt-16 w-full max-w-4xl"
      >
        {[
          { label: 'YouTube Views Generated', value: '150M+' },
          { label: 'Keywords Ranked Top 3', value: '1.2K' },
          { label: 'Local Businesses Scaled', value: '80+' },
          { label: 'Client Retention Rate', value: '96%' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-white">{stat.value}</span>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </Section>
  );
};

// --- Services ---

const Services = () => {
  const items = [
    {
      icon: <Youtube className="w-6 h-6" />,
      title: "YouTube Growth",
      desc: "Comprehensive strategy including algorithm optimization, high-CTR thumbnail design, and audience retention analysis.",
      tags: ["Keyword Research", "Retention Map", "CTR Optimization"]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Technical SEO",
      desc: "Full-scale website audits, backlink engineering, and content clusters that drive sustainable organic traffic.",
      tags: ["Site Audit", "Link Building", "Semantic SEO"]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Local SEO",
      desc: "Dominating GMB rankings and local map packs to turn nearby searches into paying customers.",
      tags: ["Google Maps", "Citations", "Review Strategy"]
    }
  ];

  return (
    <Section id="services" className="bg-neutral-950">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4 italic">Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Specialized channels for <span className="text-neutral-500 underline decoration-neutral-800 underline-offset-8 font-serif font-normal italic">exponential growth</span>.</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col h-full"
          >
            <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-white mb-8">
              {item.icon}
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
            <p className="text-neutral-400 mb-8 flex-grow leading-relaxed">
              {item.desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-black border border-neutral-800 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

// --- Testimonials / Results ---

const Results = () => {
  return (
    <Section id="results">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4 italic">Case Study</h2>
          <h3 className="text-4xl font-bold text-white mb-8 tracking-tight italic">How a SaaS Brand hit 1M Organic Visitors in 8 months.</h3>
          <p className="text-lg text-neutral-400 mb-12 leading-relaxed">
            By shifting focus from generic keywords to semantic content clusters and aggressive technical optimization, we achieved a $0 to $2M ARR pipe through organic channels.
          </p>
          <div className="space-y-6">
            {[
              { label: "Organic Reach", value: "+420%", color: "text-green-500" },
              { label: "CTR Improvement", value: "+18%", color: "text-blue-500" },
              { label: "Cost Per Click", value: "-64%", color: "text-purple-500" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 border-l-2 border-neutral-900 pl-6 py-2">
                <span className={`text-4xl font-bold ${stat.color}`}>{stat.value}</span>
                <span className="text-neutral-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-neutral-800 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500 opacity-20" />
          <img 
            src="https://picsum.photos/seed/analytics/800/600" 
            alt="Growth Chart" 
            className="relative rounded-3xl border border-neutral-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </Section>
  );
};

// --- Contact ---

const Contact = () => {
  return (
    <Section id="contact" className="bg-neutral-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-8 italic">Get in Touch</h2>
        <h3 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter">Ready to scale your <span className="text-neutral-500 italic font-light">next big thing?</span></h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800">
            <h4 className="text-neutral-500 text-xs font-mono uppercase tracking-widest mb-2">Direct Message</h4>
            <p className="text-xl text-white font-medium mb-6">hello@growthnexus.com</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col justify-center">
            <h4 className="text-neutral-500 text-xs font-mono uppercase tracking-widest mb-4">Newsletter</h4>
            <p className="text-neutral-400 text-sm mb-6">Weekly insights on SEO, algos, and growth.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="flex-grow bg-neutral-900 border border-neutral-800 rounded-full px-6 py-2 text-white outline-none focus:border-neutral-600 transition-colors"
              />
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <p className="text-neutral-500 text-xs font-mono tracking-widest">© 2026 GROWTHNEXUS • ALL RIGHTS RESERVED</p>
      </div>
    </Section>
  );
};

// --- Footer ---

const Footer = () => {
    return (
        <footer className="py-12 border-t border-neutral-950 bg-black text-center">
            <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white">GrowthNexus</span>
                </div>
                <div className="flex gap-8 text-neutral-500 text-xs uppercase tracking-[0.2em]">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Dribbble</a>
                </div>
            </div>
        </footer>
    )
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black text-neutral-50 selection:bg-white selection:text-black font-sans">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
