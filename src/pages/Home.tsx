import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, Truck, Car, ShieldCheck, Sparkles, MapPin, Clock, Gauge, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row border-b-4 border-primary">
        {/* Left Side: Text Content */}
        <div className="md:w-5/12 bg-slate-800 text-white p-10 md:p-20 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-dot-pattern"></div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <span className="bg-primary text-slate-900 text-xs font-black px-3 py-1 rounded-full w-fit mb-6 uppercase tracking-wider block">
              Summerville & Charleston's #1 Choice
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-8 tracking-tighter uppercase">
              PROFESSIONAL <br/>MOBILE <span className="text-teal-accent">DETAILING</span> <br/>THAT COMES TO YOU
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-sm leading-relaxed">
              Cars, Trucks & Fleets — We bring the high-end showroom results directly to your driveway or workplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link 
                to="/contact" 
                className="bg-white text-slate-900 font-black py-4 px-8 rounded flex-1 shadow-xl uppercase tracking-tighter text-center hover:bg-gray-100 transition-all"
              >
                Get a Quote
              </Link>
              <a 
                href="tel:8439001754" 
                className="border-2 border-primary text-primary font-black py-4 px-8 rounded flex-1 uppercase tracking-tighter text-center hover:bg-primary/10 transition-all"
              >
                Call Now
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest leading-none">5-STAR RATED IN THE LOWCOUNTRY</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visual Content */}
        <div className="md:w-7/12 relative min-h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=2000" 
            alt="Pristine car detailing" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/20"></div>
          
          <div className="absolute bottom-10 right-10 flex gap-4">
             <div className="bg-white p-6 rounded-xl shadow-2xl flex items-center gap-4 border-l-4 border-primary">
                <div className="text-primary"><Gauge size={32} /></div>
                <div>
                   <p className="text-[10px] text-gray-400 font-black uppercase">Fast Service</p>
                   <p className="text-sm font-black uppercase">Same-Day Quote</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-neutral-900 border-y border-neutral-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-white text-2xl font-display font-bold mb-2">5-Star Rated in the Lowcountry</h2>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-neutral-500 text-sm italic">Based on Google Reviews</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale contrast-125">
              {/* These would be local partnership logos if available */}
              <div className="font-display font-bold text-2xl text-white">CHARLESTON</div>
              <div className="font-display font-bold text-2xl text-white">SUMMERVILLE</div>
              <div className="font-display font-bold text-2xl text-white">LOWCOUNTRY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-4 italic italic-accent">Our Core Services</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 uppercase tracking-tighter">Premium Care for Every Vehicle</h3>
            <p className="text-gray-500 text-lg max-w-xl mx-auto font-medium">Choose the perfect package for your needs. Professional equipment, elite results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Exterior Wash */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 flex flex-col h-full hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={28} />
              </div>
              <h4 className="text-2xl font-display font-bold text-neutral-900 mb-4">Premium Exterior Wash</h4>
              <p className="text-neutral-500 mb-8 flex-grow">A deep foam wash and gloss finish that restores your vehicle's exterior shine while protecting the paint.</p>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-neutral-400 text-sm font-medium mb-1">Starting at</span>
                <span className="text-4xl font-display font-bold text-neutral-900">$70</span>
              </div>
              <Link to="/services" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View Service Details <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Interior Detail */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 flex flex-col h-full hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-2xl font-display font-bold text-neutral-900 mb-4">Interior Detail</h4>
              <p className="text-neutral-500 mb-8 flex-grow">Full sanitization and rejuvenation of your cabin. We target every vent, crevice, and surface.</p>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-neutral-400 text-sm font-medium mb-1">Starting at</span>
                <span className="text-4xl font-display font-bold text-neutral-900">$110</span>
              </div>
              <Link to="/services" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                View Service Details <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Full Detail */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-neutral-900 rounded-3xl p-8 flex flex-col h-full shadow-2xl shadow-primary/20 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6">
                <Gauge size={28} />
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">Full Detail</h4>
              <p className="text-neutral-400 mb-8 flex-grow">Our complete transformation package. Exterior restoration meets interior deep cleaning for that showroom feel.</p>
              <div className="flex items-end gap-2 mb-8 text-white">
                <span className="text-neutral-500 text-sm font-medium mb-1">Starting at</span>
                <span className="text-4xl font-display font-bold">$180</span>
              </div>
              <Link to="/services" className="bg-primary text-white text-center py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors">
                Book Full Detail
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-neutral-50 bg-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-black text-xs uppercase tracking-[0.2em] mb-4 italic italic-accent">The Difference</h2>
              <h3 className="text-3xl md:text-5xl font-black mb-10 text-slate-900 uppercase tracking-tighter">Better Results, <span className="text-primary italic">Zero Hassle</span></h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { id: "01", title: "We Come To You", desc: "Home, work, or the job site. We're fully mobile." },
                  { id: "02", title: "Pro Equipment", desc: "Professional grade polishers & steam cleaners." },
                  { id: "03", title: "Easy Booking", desc: "Simple text or call booking with fast turnaround." },
                  { id: "04", title: "Fair Pricing", desc: "No hidden fees. Transparent per-vehicle rates." },
                ].map((item, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx} 
                    className="flex gap-3"
                  >
                    <span className="text-primary font-black italic underline text-xl leading-none">{item.id}</span>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Fleet Preview Box */}
              <div className="mt-12 bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 bg-dot-pattern"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-2 italic">Fleet & Semi Truck</h4>
                  <p className="text-xs text-gray-400 mb-6 font-medium max-w-sm">Maintain your professional image with recurring on-site cleaning for industrial rigs and commercial fleets.</p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="text-primary font-black text-xs uppercase tracking-widest leading-none">Volume Pricing Available</span>
                    <Link to="/fleet" className="text-[10px] font-black uppercase bg-primary text-slate-900 px-5 py-3 rounded transition-all hover:bg-primary-light">Get Fleet Quote</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1552933061-90322eecd15d?auto=format&fit=crop&q=80&w=1000" 
                  alt="High quality detailing work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Semi Section */}
      <section className="py-24 bg-neutral-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Truck size={14} />
                Commercial Specialist
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Fleet & Semi Truck <span className="text-primary-light italic">Cleaning Services</span></h3>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                Consistency is key for your brand. We provide on-site, high-volume cleaning services for commercial fleets and owner-operators across the Charleston region.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 size={18} className="text-primary-light" />
                  Weekly / Bi-weekly options
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 size={18} className="text-primary-light" />
                  Volume pricing discounts
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 size={18} className="text-primary-light" />
                  Exterior Cab & Trailer focus
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 size={18} className="text-primary-light" />
                  On-site (Zero downtime)
                </li>
              </ul>
              
              <Link 
                to="/fleet" 
                className="bg-white text-neutral-900 px-8 py-4 rounded-xl font-bold hover:bg-neutral-200 transition-all inline-flex items-center gap-2 shadow-xl shadow-white/5"
              >
                Request Fleet Quote <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <img src="https://images.unsplash.com/photo-1586191582151-f746123f0430?auto=format&fit=crop&q=80&w=600" alt="Semi truck cleaning" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="bg-primary p-6 rounded-2xl flex flex-col justify-center items-center text-center">
                    <span className="text-4xl font-display font-bold mb-1">15+</span>
                    <span className="text-sm font-medium opacity-80 uppercase tracking-widest">Fleet Size Capacity</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" alt="Commercial fleet" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <img src="https://images.unsplash.com/photo-1591768793355-74d7c513c117?auto=format&fit=crop&q=80&w=600" alt="Detailing tools" className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">The Transformation</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6 text-neutral-900">Real Results, Every Time</h3>
            <p className="text-neutral-600 text-lg">We don't just wash cars; we revitalize them. From deep-set carpet stains to oxidized paint, see what we can do.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Wheel Rejuvenation", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600" },
              { label: "Interior Stain Removal", img: "https://images.unsplash.com/photo-1582260659616-981ee728c30d?auto=format&fit=crop&q=80&w=600" },
              { label: "Engine Bay Cleaned", img: "https://images.unsplash.com/photo-1621905252509-b43720edadc5?auto=format&fit=crop&q=80&w=600" },
              { label: "Deep Paint Correction", img: "https://images.unsplash.com/photo-1620733723572-11c53f73a2ad?auto=format&fit=crop&q=80&w=600" },
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-square shadow-lg">
                <img 
                  src={item.img} 
                  alt={item.label} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent flex items-bottom p-6">
                  <span className="text-white font-bold text-lg mt-auto">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 transform origin-top translate-x-1/2 hidden md:block"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-6xl font-display font-bold mb-8">Ready to Get Your Vehicle Looking Like New?</h3>
            <p className="text-xl text-primary-light/90 mb-12 font-medium">Serving Summerville, Charleston, and the surrounding areas. Contact us today for a fast quote or to book your appointment.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/contact" 
                className="bg-white text-primary text-xl font-bold px-12 py-5 rounded-2xl shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-1"
              >
                Book Your Detail
              </Link>
              <div className="flex flex-col gap-2">
                <a 
                  href="tel:8439001754" 
                  className="text-2xl font-display font-bold flex items-center justify-center gap-2 hover:text-white/80 transition-colors"
                >
                  <Phone size={24} /> (843) 900-1754
                </a>
                <span className="text-sm font-medium opacity-70">Text anytime for a fast quote</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
