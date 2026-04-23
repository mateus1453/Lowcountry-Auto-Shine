import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Car, Shield, Droplets, SprayCan as Spray, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  key?: React.Key;
  title: string;
  description: string;
  pricing: Record<string, number>;
  items: string[];
  mostPopular?: boolean;
}

const ServiceCard = ({ title, description, pricing, items, mostPopular = false }: ServiceCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`relative flex flex-col h-full ${mostPopular ? 'card-sleek-active' : 'card-sleek'}`}
    >
      {mostPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-slate-900 text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest leading-none">
          Most Popular
        </div>
      )}
      
      <p className="text-[10px] font-black text-gray-400 uppercase mb-1 tracking-widest leading-none">
        {title.includes('Exterior') ? 'Exterior Wash' : title.includes('Interior') ? 'Specialist' : 'Interior + Exterior'}
      </p>
      <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter">{title}</h3>
      <p className="text-xs text-gray-600 mb-6 flex-grow leading-relaxed">{description}</p>
      
      <div className="space-y-4 mb-6">
        <div className="grid grid-cols-1 gap-2">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Pricing Guide</p>
          <div className="flex items-center gap-4 py-3 border-b border-gray-100">
             <div className="flex-1">
                <span className="text-[10px] block font-bold text-gray-400 uppercase">Sedan</span>
                <span className="text-xl font-black">${pricing.sedan}</span>
             </div>
             <div className="flex-1">
                <span className="text-[10px] block font-bold text-gray-400 uppercase">SUV</span>
                <span className="text-xl font-black">${pricing.suv}</span>
             </div>
             <div className="flex-1">
                <span className="text-[10px] block font-bold text-gray-400 uppercase">Truck</span>
                <span className="text-xl font-black">${pricing.truck}</span>
             </div>
          </div>
        </div>
      </div>

      <ul className="space-y-2 mb-8">
        {items.slice(0, 5).map((item, idx) => (
          <li key={idx} className="flex gap-2 text-[10px] items-center">
            <Check size={12} className="text-primary" />
            <span className="font-bold text-gray-600 uppercase tracking-tighter">{item}</span>
          </li>
        ))}
      </ul>

      <Link 
        to="/contact" 
        className={`w-full py-3 rounded font-black text-xs uppercase tracking-widest transition-all text-center ${
          mostPopular 
            ? 'bg-primary text-slate-900 shadow-xl' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        Book This Service
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const serviceData = [
    {
      title: "Premium Exterior Wash",
      description: "Our signature exterior care. More than just a wash—it's precision cleaning for your vehicle's paint, wheels, and trim.",
      pricing: { sedan: 70, suv: 85, truck: 105 },
      items: [
        "Foam bath pre-wash",
        "Gentle two-bucket hand wash",
        "Deep wheel & tire cleaning",
        "Non-sling tire shine applied",
        "Streak-free glass cleaning",
        "High-gloss ceramic sealant",
        "Air blower towel dry"
      ]
    },
    {
      title: "Full Detail",
      mostPopular: true,
      description: "Our most popular package for a total vehicle reset. Combines high-level exterior care with deep interior rejuvenation.",
      pricing: { sedan: 180, suv: 200, truck: 220 },
      items: [
        "Everything in Exterior Wash",
        "Deep interior vacuuming",
        "Surface cleaning (dash/doors/console)",
        "Leather cleaning & conditioning",
        "Full interior steam sanitization",
        "Vent & crevice detail",
        "Light stain treatment",
        "UV protection on all plastics"
      ]
    },
    {
      title: "Interior Detail",
      description: "Focus purely on the cabin. We deep-clean and sanitize every surface to create a fresh, factory-clean environment.",
      pricing: { sedan: 110, suv: 125, truck: 140 },
      items: [
        "Full deep vacuuming",
        "Detailed dashboard restoration",
        "Door panel & console cleaning",
        "Inside windows cleaned",
        "Vents & small crevice focus",
        "Floor mat steam cleaning",
        "Pedal & door jamb cleaning",
        "Odor neutralizer treatment"
      ]
    }
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-neutral-900 pt-32 pb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[100px]"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter"
            >
              Professional Detailing <span className="text-teal-accent">Packages</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed font-medium"
            >
              Transparent pricing and uncompromising results. We bring the sparkle to Summerville & Charleston, SC.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-neutral-50 bg-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceData.map((service, idx) => (
              <ServiceCard 
                key={idx} 
                title={service.title}
                description={service.description}
                pricing={service.pricing}
                items={service.items}
                mostPopular={service.mostPopular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-xl">
              <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Optional Upgrades</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-neutral-900">Custom Detailing Add-ons</h3>
            </div>
            <p className="text-neutral-500 max-w-sm mb-2">Need something specific? These targeted services can be added to any detailing package.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Clay Bar */}
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 group hover:shadow-lg transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <Star size={24} />
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Starting At</div>
                  <div className="text-2xl font-display font-bold text-neutral-900 font-bold">$60</div>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Clay Bar & Paint Decontamination</h4>
              <p className="text-neutral-500 mb-6">Removes embedded industrial fallout, sap, and road tar that washing can't touch. Leaves your paint smooth as glass.</p>
              <div className="flex gap-4 text-sm font-bold text-neutral-400 border-t border-neutral-200/50 pt-6">
                <span>SEDAN: $60</span>
                <span>SUV: $70</span>
                <span>TRUCK: $80</span>
              </div>
            </div>

            {/* Stain Removal */}
            <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 group hover:shadow-lg transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <Droplets size={24} />
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Starting At</div>
                  <div className="text-2xl font-display font-bold text-neutral-900 font-bold">$25</div>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">Deep Stain Removal</h4>
              <p className="text-neutral-500 mb-6">A targeted deep extraction process for stubborn spills on upholstery and carpets. Best for salt, oil, or food stains.</p>
              <div className="flex gap-4 text-sm font-bold text-neutral-400 border-t border-neutral-200/50 pt-6">
                <span>SEDAN: $25</span>
                <span>SUV: $35</span>
                <span>TRUCK: $50</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary/10 border border-primary/20 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-lg">
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">Don't See What You Need?</h3>
              <p className="text-neutral-400 text-lg">We offer custom packages for high-end paint correction, ceramic coatings, and unique vehicles. Text us for a custom quote.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link to="/contact" className="bg-primary text-white font-bold px-10 py-5 rounded-2xl text-center shadow-lg hover:shadow-primary/20 transition-all">
                Request Custom Quote
              </Link>
              <a href="sms:8439001754" className="bg-white/10 text-white font-bold px-10 py-5 rounded-2xl text-center border border-white/10 hover:bg-white/20 transition-all">
                Text Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
