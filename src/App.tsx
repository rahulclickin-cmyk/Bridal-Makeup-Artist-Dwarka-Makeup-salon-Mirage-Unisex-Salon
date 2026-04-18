import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Star, 
  Menu, 
  X,
  Sparkles,
  Heart,
  Scissors,
  CheckCircle2,
  ArrowRight,
  Filter,
  ExternalLink,
  Award
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isDarkPage = location.pathname !== "/"; // White BG for home hero is actually black, but let's check

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || location.pathname !== "/" ? "bg-white/95 backdrop-blur-md py-4 border-ink shadow-sm" : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center md:items-baseline">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
           <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-brand-yellow font-bold italic border-2 border-black">M</div>
           <span className={`font-display font-bold text-2xl tracking-widest uppercase transition-colors ${isScrolled || location.pathname !== "/" ? "text-ink" : "text-white"}`}>MIRAGE</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-brand-red ${
                isScrolled || location.pathname !== "/" ? (isActive(link.href) ? "text-brand-red" : "text-ink") : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} className={isScrolled || location.pathname !== "/" ? "text-ink" : "text-white"} /> : <Menu size={24} className={isScrolled || location.pathname !== "/" ? "text-ink" : "text-white"} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl py-8 px-10 md:hidden flex flex-col gap-6 border-t border-ink text-ink"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-sm font-bold tracking-widest uppercase hover:text-brand-red transition-colors ${isActive(link.href) ? "text-brand-red" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BrandButton = ({ children, href, variant = "primary", className = "", target = "_self" }: { children: any, href: string, variant?: "primary" | "secondary", className?: string, target?: string }) => (
  <a 
    href={href}
    target={target}
    className={`inline-block px-10 py-5 text-[11px] font-bold tracking-[0.25em] uppercase transition-all hover:scale-105 active:scale-95 ${
      variant === "primary" ? "bg-brand-red text-white border border-brand-red shadow-lg" : "border border-ink text-ink hover:bg-brand-red hover:text-white"
    } ${className}`}
  >
    {children}
  </a>
);

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/917678321358"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all flex items-center justify-center group"
    aria-label="Chat with Renuka Di"
  >
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.67-1.611-.918-2.208-.242-.589-.487-.51-.67-.52-.172-.01-.371-.012-.57-.012-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    <span className="absolute right-full mr-4 bg-ink text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/20">Ask for Appointment</span>
  </a>
);

// --- Data ---

const SERVICES = [
  {
    id: "bridal-makeup",
    title: "Bridal & Party Makeup",
    shortDesc: "Experience the magic of the best bridal makeup artist in Dwarka Sector 7.",
    fullDesc: "Renuka Makeup Artist specializes in high-definition (HD) and Airbrush bridal makeup. Our studio near Ramphal Chowk is equipped with international premium brands like MAC and Kryolan to ensure you look stunning from the first ritual to the final goodbye. Whether you need a subtle party look or 16-shringar bridal glam, we tailor every brushstroke to your features.",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop",
    features: ["HD Bridal Makeup", "Airbrush Technology", "Party & Reception Glam", "Pre-Bridal Packages"],
    keywords: ["Bridal Makeup Dwarka", "Renuka Makeup Artist", "Best Bridal Studio Delhi"]
  },
  {
    id: "hair-care",
    title: "Luxury Hair Treatments",
    shortDesc: "Top hair keratin and smooting treatment in Dwarka Delhi.",
    fullDesc: "Give your hair the luxury it deserves. We are experts in Hair Keratin, Hair Botox, and permanent smoothening. Our hair professionals use safe, salon-grade treatments to restore shine and health to your locks. From precision haircuts to global coloring, Mirage is the top choice for hair care near Sector 7.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop",
    features: ["Hair Keratin", "Botox Treatment", "Smoothening", "Global Coloring"],
    keywords: ["Hair Keratin Dwarka", "Smoothening Price Dwarka", "Top Hair Salon Delhi"]
  },
  {
    id: "skincare",
    title: "Radiant Skincare & Facials",
    shortDesc: "Revitalize your skin with our signature Hydra Facials.",
    fullDesc: "Our skincare experts provide bespoke facial treatments designed to tackle Delhi's pollution and stress. We offer the best Hydra Facial in Dwarka, along with specialized detox therapies and anti-aging infusions. Get that bridal glow or a fresh executive look at Mirage.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    features: ["Hydra Facial", "Detox Therapy", "Oxygen Infusion", "Bridal Facial Kits"],
    keywords: ["Hydra Facial Dwarka", "Best Skincare Studio Delhi", "Bridal Facial Dwarka"]
  },
  {
    id: "men-grooming",
    title: "Executive Men's Grooming",
    shortDesc: "Complete makeover for the modern man at the best unisex salon in Dwarka.",
    fullDesc: "Mirage isn't just for brides. Our 'His' section provides high-end grooming for men, including precision hair styling, beard sculpting, and man-facials. We are a family-friendly, unisex studio that understands professional grooming needs.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
    features: ["Men's Precision Cut", "Beard Styling", "Grizzly Grooming", "Head Massage"],
    keywords: ["Men's Salon Dwarka", "Best Barber Shop Delhi", "Men's Facial Dwarka"]
  },
  {
    id: "nail-extensions",
    title: "Luxury Nail Artistry",
    shortDesc: "Premium nail extensions and art in Dwarka Sector 7.",
    fullDesc: "Your hands tell a story. Let us make it beautiful with gel extensions, acrylic nails, and intricate nail art. We use long-lasting, high-gloss polishes and safe removal techniques to keep your natural nails healthy.",
    image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1974&auto=format&fit=crop",
    features: ["Gel Extensions", "Acrylic Art", "Chrome Finish", "Bridal Nails"],
    keywords: ["Nail Extensions Dwarka", "Best Nail Art Delhi", "Gel Nails Sector 7"]
  }
];

const TESTIMONIALS = [
  { text: "Renuka Di totally nailed my bridal look! Best makeup artist in Dwarka Sector 7. She understood exactly what I wanted for my wedding day.", author: "Asmita Mishra", role: "Happy Bride" },
  { text: "I got my keratin hair treatment here. The results are amazing. Very professional team and high-quality products. My hair feels so soft!", author: "Khushi Thakur", role: "Regular Client" },
  { text: "The best hydra facial I've ever had in Delhi. Highly recommend Mirage Salon near Ramphal Chowk for their expertise in skincare.", author: "Anshu Singh", role: "Skin Enthusiast" },
  { text: "Luxury experience at affordable prices. My go-to place for groom's styling and professional beard setting. Excellent service!", author: "Vikram Malhotra", role: "Loyal Client" },
  { text: "Renuka's makeup is like magic. She transformed me for my engagement. The studio is very hygienic and follow all safety protocols.", author: "Leela Wati", role: "Photography Professional" },
  { text: "Highly professional staff. I have been visiting Mirage for 5 years and they never disappoint. The hair smoothening results are long-lasting.", author: "Daisy Ahuja", role: "Local Resident" },
  { text: "Amazing bridal studio in Dwarka. They have the best makeup vanity with all international brands like MAC and Kryolan.", author: "Nikki Singh", role: "Recent Bride" }
];

const SALON_MENU = [
  { title: "Makeup", items: ["Bridal Makeup", "HD Makeup", "Airbrush Makeup", "Engagement Look", "Party Glam", "Sider Makeup"] },
  { title: "Hair", items: ["Keratin Treatment", "Smoothening", "Hair Botox", "Global Color", "Highlights", "Precision Cut"] },
  { title: "Skincare", items: ["Hydra Facial", "Bridal Facial", "Skin Detox", "De-Tan", "Brightening", "O2 Facial"] },
  { title: "Grooming", items: ["Men's Styling", "Beard Sculpting", "Groom Glam", "Facial for Men", "Head Massage"] },
  { title: "Nails", items: ["Gel Extensions", "Acrylic Art", "Chrome Finish", "Pedicures", "Manicures", "French Tips"] }
];

// --- Page Components ---

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  useEffect(() => window.scrollTo(0, 0), []);

  if (!service) return <div className="pt-40 text-center">Service not found.</div>;

  return (
    <div className="pt-32 pb-40">
       <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
             <div className="lg:w-1/2">
                <div className="mb-10">
                   <Link to="/services" className="text-brand-red font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                      <ArrowRight className="rotate-180" size={14} /> Back to Services
                   </Link>
                </div>
                <h1 className="text-5xl md:text-8xl font-display font-black italic tracking-tighter text-ink mb-10 leading-[0.9]">{service.title}</h1>
                <p className="text-xl text-ink/70 leading-relaxed italic mb-12">{service.fullDesc}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                   {service.features.map(f => (
                     <div key={f} className="flex items-center gap-4 p-6 bg-brand-red/5 border border-brand-red/10">
                        <CheckCircle2 className="text-brand-red" size={20} />
                        <span className="font-bold text-xs uppercase tracking-widest">{f}</span>
                     </div>
                   ))}
                </div>

                <div className="p-10 border-4 border-ink bg-white shadow-[-20px_20px_0px_0px_rgba(166,107,68,0.1)]">
                   <h3 className="text-sm font-black uppercase tracking-[0.4em] mb-6">Expert Service</h3>
                   <p className="text-xs font-bold leading-relaxed text-ink/60 mb-8 italic">Interested in booking? We recommend booking at least 2 weeks in advance for weekends and weddings.</p>
                   <a href="tel:+917678321358" className="inline-block bg-brand-red text-white font-black px-10 py-5 text-[11px] uppercase tracking-widest hover:scale-105 transition-all">Book Instant Consultation</a>
                </div>
             </div>
             <div className="lg:w-1/2 w-full">
                <div className="aspect-[3/4] overflow-hidden border border-ink bg-black group">
                   <img src={service.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={service.title} />
                </div>
                <div className="mt-8 flex gap-2 flex-wrap">
                   {service.keywords.map(k => <span key={k} className="text-[10px] text-ink/30 border border-ink/10 px-3 py-1 uppercase font-bold">#{k.replace(/\s+/g, '')}</span>)}
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

const ServicesPage = () => {
    useEffect(() => window.scrollTo(0, 0), []);
    return (
        <div className="pt-32 pb-40">
            <div className="container mx-auto px-6 md:px-10">
                <h1 className="text-7xl md:text-[140px] font-display font-black italic tracking-tighter text-ink mb-20 leading-[0.8]">SERVICES.</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((s) => (
                        <Link key={s.id} to={`/services/${s.id}`} className="group block border border-ink p-8 hover:bg-black hover:text-white transition-all duration-500">
                            <div className="aspect-square mb-8 overflow-hidden border border-ink">
                                <img src={s.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={s.title} />
                            </div>
                            <h3 className="text-3xl font-display font-bold italic mb-4">{s.title}</h3>
                            <p className="text-sm opacity-60 italic mb-8">{s.shortDesc}</p>
                            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest border-t border-ink/10 group-hover:border-white/20 pt-6">
                                Exploration <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

const AboutPage = () => {
    useEffect(() => window.scrollTo(0, 0), []);
    return (
        <div className="pt-32 pb-40">
            <div className="container mx-auto px-6 md:px-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <h1 className="text-7xl md:text-9xl font-display font-black italic tracking-tighter text-ink mb-10 leading-[0.8]">STUDIO.</h1>
                        <h2 className="text-2xl font-display font-bold italic text-brand-red mb-8">Mirage Unisex Salon – Dwarka's Beauty Sanctuary</h2>
                        <div className="space-y-6 text-xl text-ink/70 italic leading-relaxed">
                            <p>Founded in 2014 by Renuka, Mirage has grown to become the most trusted destination for bridal glam and luxury haircare in Dwarka Sector 7, Delhi.</p>
                            <p>Our philosophy is simple: highlight your natural beauty using professional expertise and premium international brands. Located near Ramphal Chowk, we pride ourselves on being a women-owned, LGBTQ+ friendly space where everyone feels confident and celebrated.</p>
                        </div>
                        <div className="mt-16 grid grid-cols-2 gap-10">
                            <div>
                                <div className="text-5xl font-display font-black text-brand-red">12+</div>
                                <div className="text-[10px] uppercase font-black tracking-widest opacity-40 mt-2">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-5xl font-display font-black text-brand-red">8k+</div>
                                <div className="text-[10px] uppercase font-black tracking-widest opacity-40 mt-2">Happy Clients</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="aspect-[4/5] border-8 border-brand-red/10 p-4">
                            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover border border-ink" alt="Mirage Studio" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-black text-white p-8 max-w-xs border-4 border-brand-yellow hidden md:block">
                            <Award className="text-brand-yellow mb-4" size={40} />
                            <p className="text-[10px] font-black uppercase tracking-widest italic">Voted Best Bridal Makeup Artist in Dwarka 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ReviewsPage = () => {
    useEffect(() => window.scrollTo(0, 0), []);
    return (
        <div className="pt-32 pb-40">
            <div className="container mx-auto px-6 md:px-10 text-center">
                <h1 className="text-7xl md:text-9xl font-display font-black italic tracking-tighter text-ink mb-20 leading-[0.8]">REVIEWS.</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="p-10 md:p-16 border border-ink text-left bg-brand-red/5 relative">
                            <Star className="text-brand-yellow mb-6" fill="currentColor" size={24} />
                            <p className="text-2xl md:text-3xl font-display font-bold italic leading-tight text-ink mb-10">"{t.text}"</p>
                            <div>
                                <div className="font-black text-[10px] uppercase tracking-widest text-brand-red">— {t.author}</div>
                                <div className="text-[9px] uppercase tracking-widest opacity-40 font-bold mt-1">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-20">
                    <BrandButton href="https://maps.google.com" target="_blank">Leave a Google Review</BrandButton>
                </div>
            </div>
        </div>
    );
};

const ContactPage = () => {
    useEffect(() => window.scrollTo(0, 0), []);
    return (
        <div className="pt-32 pb-40">
            <div className="container mx-auto px-6 md:px-10">
                <h1 className="text-7xl md:text-9xl font-display font-black italic tracking-tighter text-ink mb-20 leading-[0.8]">CONTACT.</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 border border-ink">
                    <div className="p-10 md:p-20 space-y-12">
                        <div className="flex gap-8 items-center">
                            <div className="w-16 h-16 bg-brand-red text-white flex items-center justify-center shrink-0">
                                <Phone size={32} />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase font-black text-brand-red tracking-widest mb-1">Direct Call</div>
                                <div className="text-2xl font-bold">+91 76783 21358</div>
                            </div>
                        </div>
                        <div className="flex gap-8 items-center">
                            <div className="w-16 h-16 bg-black text-white flex items-center justify-center shrink-0">
                                <MapPin size={32} />
                            </div>
                            <div>
                                <div className="text-[10px] uppercase font-black text-brand-red tracking-widest mb-1">Location</div>
                                <p className="text-sm font-bold uppercase tracking-widest leading-relaxed">Upper ground floor, F-633, Ramphal Chowk Rd, Block H, Sector 7 Dwarka, Delhi, 110077</p>
                            </div>
                        </div>
                        <div className="border-t border-ink/10 pt-10">
                            <h3 className="text-xs uppercase font-black tracking-widest mb-6">Gallery Hours</h3>
                            <div className="grid grid-cols-2 gap-10">
                                <div className="text-[10px] uppercase font-black opacity-40">Mon — Sun</div>
                                <div className="text-xs font-bold text-ink">10:00 AM — 08:30 PM</div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[500px] lg:h-auto border-l border-ink">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2427806509614!2d77.0716702!3d28.5859509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b16260695db%3A0xf1f77ebf70706c00!2sBridal%20Makeup%20Artist%20Dwarka%20%7C%20Makeup%20salon%20%7C%20Mirage%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000"
                            allowFullScreen={true}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const PortfolioPage = () => {
    const [filter, setFilter] = useState("All");
    const portfolioItems = [
      { id: 1, category: "Makeup", img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2070&auto=format&fit=crop" },
      { id: 2, category: "Hair", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop" },
      { id: 3, category: "Nails", img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop" },
      { id: 4, category: "Makeup", img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop" },
      { id: 5, category: "Hair", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop" },
      { id: 6, category: "Nails", img: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=1974&auto=format&fit=crop" },
    ];
    const categories = ["All", "Makeup", "Hair", "Nails"];
    const filteredItems = filter === "All" ? portfolioItems : portfolioItems.filter(i => i.category === filter);

    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="pt-32 pb-40">
            <div className="container mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
                   <div>
                      <h1 className="text-7xl md:text-9xl font-display font-black italic tracking-tighter text-ink mb-6">WORK.</h1>
                   </div>
                   <div className="flex flex-wrap gap-4">
                      {categories.map((c) => (
                        <button 
                          key={c}
                          onClick={() => setFilter(c)}
                          className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest border transition-all ${filter === c ? "bg-brand-red border-brand-red text-white" : "border-ink text-ink hover:bg-brand-red hover:text-white"}`}
                        >
                          {c}
                        </button>
                      ))}
                   </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   {filteredItems.map((item) => (
                     <div key={item.id} className="aspect-[4/5] border border-ink relative group overflow-hidden bg-black">
                        <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="Portfolio" />
                        <div className="absolute inset-0 bg-brand-red/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                           <Instagram size={32} className="text-white" />
                        </div>
                     </div>
                   ))}
                </div>
            </div>
        </div>
    );
};

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [TESTIMONIALS.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center bg-black overflow-hidden border-b-4 border-brand-red">
        <div className="absolute inset-0 opacity-50">
           <img src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Mirage Hero Bridal" />
        </div>
        <div className="container mx-auto px-6 md:px-10 relative z-10 text-left">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-10">
               <div className="h-px w-20 bg-brand-yellow" />
               <span className="text-brand-yellow font-bold uppercase tracking-[0.5em] text-[10px]">Premium Beauty Experience in Delhi</span>
            </div>
            <h1 className="text-7xl md:text-[140px] leading-[0.85] font-display font-black tracking-tighter text-white mb-10 italic uppercase">
              REDEFINE<br />YOUR GLOW.
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl mb-12 italic leading-relaxed">
              Experience Dwarka Sector 7's top-rated bridal studio and unisex salon. Specializing in HD makeup, Keratin, and Hydra facials at Ramphal Chowk since 2014.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
               <Link to="/contact" className="bg-brand-red text-white text-center font-black px-12 py-6 text-[11px] uppercase tracking-widest border border-brand-red hover:bg-white hover:text-brand-red transition-all shadow-[0_10px_30px_rgba(166,107,68,0.3)]">Book Appointment</Link>
               <Link to="/services" className="bg-white/10 text-white text-center font-black px-12 py-6 text-[11px] uppercase tracking-widest border border-white/20 hover:bg-white hover:text-black transition-all backdrop-blur-sm">View Salon Menu</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services with Images */}
      <section className="py-32 border-b border-ink bg-white">
        <div className="container mx-auto px-6 md:px-10">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10 text-left">
              <div className="max-w-xl">
                 <h2 className="text-[10px] text-brand-red font-black uppercase tracking-[0.4em] mb-4">Our Core Expertise</h2>
                 <h3 className="text-5xl md:text-7xl font-display font-bold italic leading-tight uppercase">THE SIGNATURES.</h3>
                 <p className="text-sm italic text-ink/50 mt-6">Discover the most sought-after salon experiences in Dwarka Sector 7, meticulously crafted by Renuka Artist.</p>
              </div>
              <Link to="/services" className="text-xs font-black uppercase tracking-widest border-b-2 border-brand-red pb-2 hover:opacity-60 transition-opacity">Explore Menu</Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.slice(0, 4).map((s) => (
                 <Link key={s.id} to={`/services/${s.id}`} className="group block overflow-hidden border border-ink bg-white">
                    <div className="aspect-[3/4] overflow-hidden relative border-b border-ink">
                       <img src={s.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={s.title} />
                       <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-black italic border-2 border-white text-xs z-10">0{SERVICES.indexOf(s) + 1}</div>
                       <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                    </div>
                    <div className="p-8">
                       <h4 className="text-2xl font-display font-bold italic mb-4">{s.title}</h4>
                       <p className="text-[10px] opacity-40 uppercase font-black tracking-widest mb-6">{s.shortDesc}</p>
                       <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest pt-6 border-t border-ink/5 group-hover:text-brand-red transition-colors">
                          View Treatment <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                       </div>
                    </div>
                 </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Why Choose Us / About Mini */}
      <section className="py-32 bg-ink text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/10 rotate-12 translate-x-1/2 pointer-events-none" />
         <div className="container mx-auto px-6 md:px-10 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
               <div className="lg:w-1/2">
                  <h2 className="text-[10px] text-brand-red font-black uppercase tracking-[0.4em] mb-4">The Mirage Distinction</h2>
                  <h3 className="text-5xl md:text-8xl font-display font-black italic tracking-tighter mb-10 leading-[0.9]">CRAFTING<br />Artistry.</h3>
                  <div className="space-y-8 max-w-lg">
                     <div className="flex gap-6 items-start">
                        <Award className="text-brand-yellow shrink-0" size={32} />
                        <div>
                           <h4 className="font-display font-bold text-xl mb-2">Renuka's Expertise</h4>
                           <p className="text-sm text-white/50 italic leading-relaxed">Led by Delhi's renowned Renuka Makeup Artist with over a decade of excellence in bridal storytelling.</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start">
                        <Sparkles className="text-brand-yellow shrink-0" size={32} />
                        <div>
                           <h4 className="font-display font-bold text-xl mb-2">Premium Vanity</h4>
                           <p className="text-sm text-white/50 italic leading-relaxed">We use only international professional brands including MAC, Kryolan, and Estee Lauder for long-lasting perfection.</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start">
                        <Heart className="text-brand-yellow shrink-0" size={32} />
                        <div>
                           <h4 className="font-display font-bold text-xl mb-2">Inclusive Studio</h4>
                           <p className="text-sm text-white/50 italic leading-relaxed">Locally loved near Ramphal Chowk as a women-owned, LGBTQ+ friendly, and family-oriented unisex salon.</p>
                        </div>
                     </div>
                  </div>
                  <div className="mt-16">
                     <BrandButton href="/about" className="!bg-brand-red text-white">Our Legacy</BrandButton>
                  </div>
               </div>
               <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-6 relative">
                     <div className="aspect-[3/4] overflow-hidden border border-white/20 -rotate-3 hover:rotate-0 transition-all duration-700 mt-12">
                        <img src="https://images.unsplash.com/photo-1512496011981-d6b0e140d3b0?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service 1" />
                     </div>
                     <div className="aspect-[3/4] overflow-hidden border border-white/20 rotate-3 hover:rotate-0 transition-all duration-700">
                        <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Service 2" />
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-32 h-32 bg-brand-red rounded-full flex items-center justify-center text-white font-display font-black italic border-4 border-ink animate-pulse shadow-2xl">MIRAGE</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Dynamic Testimonial Slider */}
      <section className="py-32 bg-white overflow-hidden border-b border-ink/5">
         <div className="container mx-auto px-6 md:px-10 text-center">
            <h2 className="text-[10px] text-brand-red font-black uppercase tracking-[0.4em] mb-8">Client Chronicles</h2>
            <div className="relative max-w-4xl mx-auto h-[400px] flex items-center justify-center">
               <AnimatePresence mode="wait">
                  <motion.div
                     key={activeIndex}
                     initial={{ opacity: 0, scale: 0.9, y: 20 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 1.1, y: -20 }}
                     transition={{ duration: 0.6 }}
                     className="px-6 md:px-20"
                  >
                     <p className="text-2xl md:text-5xl font-display font-bold italic text-ink leading-[1.1] mb-12">"{TESTIMONIALS[activeIndex].text}"</p>
                     <div>
                        <div className="font-black text-xs uppercase tracking-[0.2em] text-brand-red">— {TESTIMONIALS[activeIndex].author}</div>
                        <div className="text-[10px] italic text-ink/40 mt-1">{TESTIMONIALS[activeIndex].role}</div>
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>
            <div className="flex justify-center gap-4 mt-8">
               {TESTIMONIALS.map((_, i) => (
                  <button 
                     key={i} 
                     onClick={() => setActiveIndex(i)}
                     className={`w-3 h-3 rounded-full border border-ink transition-all ${i === activeIndex ? "bg-brand-red border-brand-red w-8" : "bg-transparent opacity-20"}`}
                  />
               ))}
            </div>
            <div className="mt-20">
               <Link to="/reviews" className="text-[10px] font-black uppercase tracking-widest border-b border-ink/20 pb-1 hover:text-brand-red transition-colors">See all 300+ Reviews</Link>
            </div>
         </div>
      </section>

      {/* Enhanced Professional Instagram Feed Section */}
      <section className="py-32 border-t border-ink bg-white">
         <div className="container mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8">
               <div>
                  <h2 className="text-6xl md:text-8xl font-display font-black italic tracking-tighter text-ink mb-6 uppercase">GALLERY.</h2>
                  <p className="text-sm italic text-ink/50 flex items-center gap-2">
                     <Instagram size={16} className="text-brand-red" /> 
                     Follow @miragesalondwarka for daily bridal inspiration
                  </p>
               </div>
               <Link to="/portfolio" className="bg-ink text-white font-black px-10 py-5 text-[11px] uppercase tracking-widest border border-ink hover:bg-brand-red hover:border-brand-red transition-all shadow-xl">Expand Full Portfolio</Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
               {[
                  { id: '1549439602-43ebca2327af', label: 'Classic Bridal Glam' },
                  { id: '1560066984-138dadb4c035', label: 'Luxury Hair Smoothening' },
                  { id: '1632345031435-8727f6897d53', label: 'Detailed Nail Artistry' },
                  { id: '1503951914875-452162b0f3f1', label: 'Modern Men\'s Grooming' },
                  { id: '1487412947147-5cebf100ffc2', label: 'Party Makeup Perfection' },
                  { id: '1562322140-8baeececf3df', label: 'Hair Botox Transformation' },
                  { id: '1604654894611-6973b376cbde', label: 'HD Wedding Look' },
                  { id: '1605497788044-5a32c7078486', label: 'Exclusive Groom Styling' }
               ].map((item, idx) => (
                  <a key={idx} href="https://www.instagram.com/miragesalondwarka" target="_blank" rel="noopener noreferrer" className="group relative aspect-[4/5] bg-black overflow-hidden border border-ink/5 shadow-md">
                     <img 
                        src={`https://images.unsplash.com/photo-${item.id}?q=80&w=2000&auto=format&fit=crop`} 
                        className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                        alt={item.label} 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                        <p className="text-[9px] font-black uppercase tracking-widest text-brand-yellow mb-2">Renuka Artist</p>
                        <p className="text-sm font-display font-bold text-white italic">{item.label}</p>
                     </div>
                  </a>
               ))}
            </div>
            <div className="mt-20 text-center">
               <a 
                  href="https://www.instagram.com/miragesalondwarka" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] hover:text-brand-red transition-all group"
               >
                  <span className="border-b-2 border-ink group-hover:border-brand-red pb-1">Watch 500+ Videos on Instagram</span>
                  <ExternalLink size={18} />
               </a>
            </div>
         </div>
      </section>

      {/* Professional Call To Action */}
      <section className="py-24 bg-brand-red relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
         <div className="container mx-auto px-6 md:px-10 text-center text-white relative z-10">
            <h2 className="text-4xl md:text-7xl font-display font-black italic tracking-tighter mb-10 leading-[0.9] uppercase">YOUR TRANSFORMATION<br />BEGINS HERE.</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
               <div className="text-left md:text-right border-r-0 md:border-r border-white/20 pr-0 md:pr-10">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2 font-display">Located At</p>
                  <p className="text-lg font-display font-bold italic">Ramphal Chowk, Dwarka Sec 7</p>
               </div>
               <Link to="/contact" className="bg-white text-brand-red font-black px-12 py-6 text-[11px] uppercase tracking-widest hover:bg-ink hover:text-white transition-all shadow-2xl">Request Studio Tour</Link>
               <div className="text-left border-l-0 md:border-l border-white/20 pl-0 md:pl-10">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-2 font-display">Quick Booking</p>
                  <p className="text-lg font-display font-bold italic">+91 76783 21358</p>
               </div>
            </div>
         </div>
      </section>
    </>
  );
};

// --- Footer ---

const Footer = () => (
    <footer className="py-24 bg-black text-white border-t border-white/10">
        <div className="container mx-auto px-6 md:px-10">
            {/* Expanded Services Directory in Footer */}
            <div className="mb-24 pb-24 border-b border-white/10">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-8">
                    <h3 className="text-4xl md:text-6xl font-display font-black italic tracking-tighter uppercase text-brand-red">Treatment Directory.</h3>
                    <p className="text-[10px] uppercase font-black tracking-[0.3em] opacity-40">All Premium Services at Dwarka Sec 7</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
                   {SALON_MENU.map((cat, i) => (
                      <div key={i} className="space-y-6">
                         <h4 className="font-display font-bold text-lg italic text-white border-b border-brand-red/30 pb-3">{cat.title}</h4>
                         <ul className="space-y-3">
                            {cat.items.map((item, j) => (
                               <li key={j} className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-brand-red transition-colors cursor-default">
                                  {item}
                               </li>
                            ))}
                         </ul>
                      </div>
                   ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">
                <div className="space-y-8">
                    <Link to="/" className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-brand-red flex items-center justify-center text-brand-yellow font-black italic border-2 border-white text-2xl">M</div>
                        <div>
                            <span className="font-display font-black text-3xl tracking-widest uppercase italic">MIRAGE</span>
                            <span className="block text-[8px] uppercase tracking-[0.5em] text-white/40 mt-1">Premium Beauty Studio</span>
                        </div>
                    </Link>
                    <p className="text-xs text-white/40 italic leading-relaxed max-w-xs">Dwarka's premier beauty destination near Ramphal Chowk. Specializing in celebrity-grade bridal makeup and luxury hair treatments since 2014.</p>
                    <div className="flex gap-6">
                        <a href="https://www.instagram.com/miragesalondwarka" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all group"><Instagram size={18} className="group-hover:scale-110 transition-transform" /></a>
                        <a href="https://www.facebook.com/MirageSalonIndia/" target="_blank" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all group"><Facebook size={18} className="group-hover:scale-110 transition-transform" /></a>
                        <a href="mailto:contact@miragesalon.in" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all group"><Mail size={18} className="group-hover:scale-110 transition-transform" /></a>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red mb-8">Navigation</h4>
                        <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-white/40">
                            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/portfolio" className="hover:text-white transition-colors">Work</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">Studio</Link></li>
                            <li><Link to="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red mb-8">Expertise</h4>
                        <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-white/40">
                            <li><Link to="/services/bridal-makeup" className="hover:text-white transition-colors">Bridal Glam</Link></li>
                            <li><Link to="/services/hair-care" className="hover:text-white transition-colors">Hair Keratin</Link></li>
                            <li><Link to="/services/skincare" className="hover:text-white transition-colors">Hydra Facial</Link></li>
                            <li><Link to="/services/men-grooming" className="hover:text-white transition-colors">Men's Styling</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="text-left md:text-right space-y-10">
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red mb-8">Quick Reach</h4>
                        <a href="tel:+917678321358" className="text-3xl font-display font-black italic hover:text-brand-red transition-all">+91 76783 21358</a>
                        <p className="text-[10px] uppercase font-black text-white/20 tracking-widest mt-4">Ramphal Chowk, Sector 7 Dwarka, Delhi</p>
                    </div>
                    <Link to="/contact" className="inline-block border border-white text-white px-12 py-5 text-[10px] uppercase font-black tracking-widest hover:bg-white hover:text-black transition-all">Studio Directions</Link>
                </div>
            </div>
            <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <span className="text-[9px] uppercase font-black tracking-[0.2em] text-white/20">© 2026 Mirage Unisex Salon Studio. Developed by Renuka Makeup Artist Delhi.</span>
                <div className="flex gap-8 text-[9px] uppercase font-black tracking-[0.2em] text-white/40">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">SEO Sitemaps</a>
                </div>
            </div>
        </div>
    </footer>
);

// --- Main App ---

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <WhatsAppButton />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
