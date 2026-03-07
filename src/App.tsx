import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Globe, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight
} from 'lucide-react';

const spices = [
  {
    name: "Ceylon Cinnamon",
    scientific: "Cinnamomum zeylanicum",
    description: "The world's finest 'true' cinnamon, known for its delicate flavor and medicinal properties.",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=800",
    color: "bg-amber-100"
  },
  {
    name: "Black Pepper",
    scientific: "Piper nigrum",
    description: "Sri Lankan black pepper is rich in piperine, offering a pungent aroma and intense heat.",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800",
    color: "bg-stone-200"
  },
  {
    name: "Green Cardamom",
    scientific: "Elettaria cardamomum",
    description: "Known as the 'Queen of Spices', our cardamom is hand-picked for its intense aroma.",
    image: "https://images.unsplash.com/photo-1599940778173-e276d4acb2bb?auto=format&fit=crop&q=80&w=800",
    color: "bg-emerald-50"
  },
  {
    name: "Cloves",
    scientific: "Syzygium aromaticum",
    description: "Harvested from the lush hills, our cloves are rich in essential oils and deep in flavor.",
    image: "https://images.unsplash.com/photo-1611079830811-865ff4428d17?auto=format&fit=crop&q=80&w=800",
    color: "bg-red-50"
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-olive/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-serif font-bold tracking-widest text-brand-olive">SK CEYLON</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-brand-ink hover:text-brand-olive px-3 py-2 text-sm font-medium transition-colors">Home</a>
              <a href="#about" className="text-brand-ink hover:text-brand-olive px-3 py-2 text-sm font-medium transition-colors">Our Story</a>
              <a href="#products" className="text-brand-ink hover:text-brand-olive px-3 py-2 text-sm font-medium transition-colors">Spices</a>
              <a href="#contact" className="bg-brand-olive text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-olive/90 transition-all">Inquiry</a>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-ink">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream border-b border-brand-olive/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-4 text-base font-medium text-brand-ink border-b border-brand-olive/5">Home</a>
              <a href="#about" className="block px-3 py-4 text-base font-medium text-brand-ink border-b border-brand-olive/5">Our Story</a>
              <a href="#products" className="block px-3 py-4 text-base font-medium text-brand-ink border-b border-brand-olive/5">Spices</a>
              <a href="#contact" className="block px-3 py-4 text-base font-medium text-brand-olive font-bold">Inquiry</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="/marion-botella-uaHShoIDGeo-unsplash.jpg"
        className="w-full h-full object-cover brightness-50"
        alt="Sri Lankan Spice Plantation"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="relative z-10 text-center px-4 max-w-4xl">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-brand-cream/80 uppercase tracking-[0.3em] text-sm mb-4 block"
      >
        Authentic Ceylon Heritage
      </motion.span>
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-8xl text-white mb-8 font-serif leading-tight"
      >
        The Soul of <br />
        <span className="italic">Sri Lankan Spices</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-brand-cream/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed"
      >
        SK Ceylon brings you the purest, hand-selected spices from the fertile lands of Sri Lanka. 
        Exporting excellence, one harvest at a time.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <a href="#products" className="inline-flex items-center gap-2 bg-white text-brand-ink px-8 py-4 rounded-full font-medium hover:bg-brand-olive hover:text-white transition-all group">
          Explore Our Collection
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </a>
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
          { icon: <Leaf className="text-brand-olive" size={40} />, title: "100% Organic", desc: "Sourced directly from sustainable farms across the island." },
          { icon: <Globe className="text-brand-olive" size={40} />, title: "Global Export", desc: "Seamless logistics to bring Ceylon's flavors to your doorstep worldwide." },
          { icon: <Award className="text-brand-olive" size={40} />, title: "Premium Quality", desc: "Rigorous quality control meeting international food safety standards." }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProductCard = ({ spice, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <div className="aspect-[4/5] overflow-hidden">
      <img 
        src={spice.image} 
        alt={spice.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8">
      <span className="text-xs font-mono text-brand-olive/60 uppercase tracking-widest mb-2 block">{spice.scientific}</span>
      <h3 className="text-3xl font-serif mb-4">{spice.name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{spice.description}</p>
      <button className="flex items-center gap-2 text-brand-olive font-semibold group/btn">
        View Details <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  </motion.div>
);

const Products = () => (
  <section id="products" className="py-24 bg-brand-cream">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-serif mb-6">Our Signature Collection</h2>
        <div className="w-24 h-1 bg-brand-olive mx-auto mb-8"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          From the mist-covered hills to the sun-drenched plains, we harvest the finest spices 
          that have made Sri Lanka famous for centuries.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {spices.map((spice, i) => (
          <ProductCard key={i} spice={spice} index={i} />
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000" 
              alt="Spice Market"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-olive/10 rounded-full -z-0"></div>
        </div>
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-olive font-serif italic text-xl mb-4 block">Our Story</span>
            <h2 className="text-5xl font-serif mb-8 leading-tight">Preserving the Legacy of <br />Ceylon Spices</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              SK Ceylon was founded with a simple mission: to bridge the gap between Sri Lanka's small-scale traditional farmers and the global market. We believe that the true value of Ceylon spices lies in their purity and the traditional methods used to harvest them.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Every batch we export is a testament to our commitment to quality, sustainability, and fair trade. We work closely with our growers to ensure that every grain of pepper and every stick of cinnamon meets our exacting standards.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-serif text-brand-olive mb-2">15+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Countries Exported</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-brand-olive mb-2">500+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Local Farmers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-brand-olive text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-serif mb-8">Get in Touch</h2>
          <p className="text-brand-cream/70 text-lg mb-12">
            Interested in importing premium Ceylon spices? Contact our export team for customized quotes and bulk inquiries.
          </p>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-white/10 p-4 rounded-full"><MapPin size={24} /></div>
              <div>
                <h4 className="font-serif text-xl mb-1">Our Office</h4>
                <p className="text-brand-cream/60">No. 123, Spice Gardens, Colombo 07, Sri Lanka</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-white/10 p-4 rounded-full"><Phone size={24} /></div>
              <div>
                <h4 className="font-serif text-xl mb-1">Call Us</h4>
                <p className="text-brand-cream/60">+94 11 234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-white/10 p-4 rounded-full"><Mail size={24} /></div>
              <div>
                <h4 className="font-serif text-xl mb-1">Email</h4>
                <p className="text-brand-cream/60">export@skceylon.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-10 text-brand-ink">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Full Name</label>
                <input type="text" className="w-full border-b border-gray-200 py-3 focus:border-brand-olive outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Email Address</label>
                <input type="email" className="w-full border-b border-gray-200 py-3 focus:border-brand-olive outline-none transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Subject</label>
              <select className="w-full border-b border-gray-200 py-3 focus:border-brand-olive outline-none transition-colors bg-transparent">
                <option>Bulk Export Inquiry</option>
                <option>Sample Request</option>
                <option>Partnership Opportunity</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-gray-500">Message</label>
              <textarea rows={4} className="w-full border-b border-gray-200 py-3 focus:border-brand-olive outline-none transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
            </div>
            <button className="w-full bg-brand-olive text-white py-5 rounded-xl font-bold hover:bg-brand-olive/90 transition-all flex items-center justify-center gap-2">
              Send Inquiry <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-ink text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <span className="text-3xl font-serif font-bold tracking-widest text-white mb-6 block">SK CEYLON</span>
          <p className="text-gray-400 max-w-sm mb-8">
            Bringing the authentic flavors and medicinal heritage of Sri Lankan spices to the global stage. 
            Quality you can trust, heritage you can taste.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-olive transition-colors"><Instagram size={20} /></a>
            <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-olive transition-colors"><Facebook size={20} /></a>
            <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-olive transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-xl mb-6">Legal</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Export Licenses</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} SK Ceylon (Pvt) Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
