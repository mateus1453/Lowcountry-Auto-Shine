import React from 'react';
import { motion } from 'motion/react';
import { Truck, CheckCircle2, DollarSign, Calendar, Clock, ArrowRight, ShieldCheck, Zap, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const Fleet = () => {
  const exteriorServices = [
    {
      title: "Exterior Express Detail",
      target: [
        "Weekly / bi-weekly fleets",
        "Trucks already maintained",
        "Businesses that want clean appearance"
      ],
      features: [
        "Full exterior rinse",
        "Foam or hand wash (fast method)",
        "Removal of Dirt & Light road grime",
        "Wheels quick clean (no heavy scrubbing)",
        "Tires cleaned (basic)",
        "Exterior windows wiped"
      ]
    },
    {
      title: "Exterior Deep Detail",
      target: [
        "First-time customers",
        "Dirty / neglected trucks",
        "Transition into maintenance plan"
      ],
      features: [
        "Heavy pre-rinse",
        "Full wash with extra attention",
        "Bug removal (front end focus)",
        "Degreasing: Wheels, Fuel tanks, Lower panels",
        "Wheels detailed (barrels, lug areas)",
        "Tires fully scrubbed",
        "Streak-free window cleaning"
      ]
    }
  ];

  const interiorServices = [
    {
      title: "Interior Express Clean",
      target: [
        "Weekly / bi-weekly fleets",
        "Drivers who keep trucks decent",
        "Maintenance contracts"
      ],
      features: [
        "Quick trash removal",
        "Light vacuum: Floor, Seats",
        "Wipe down of: Dash, Steering wheel, Door panels",
        "Cupholders wiped",
        "Interior glass quick clean"
      ]
    },
    {
      title: "Deep Interior Detail",
      target: [
        "First-time fleet clients",
        "Dirty trucks",
        "Food / drink buildup",
        "Drivers who live in trucks"
      ],
      features: [
        "Full trash removal",
        "Deep vacuum: Seats, Carpets, Sleeper area (if applicable)",
        "Deep cleaning of: Dash, Console, Door panels, Cupholders",
        "Stain removal (light–moderate)",
        "Fabric cleaning",
        "Detailed wipe-down of all surfaces",
        "Interior glass cleaned"
      ]
    }
  ];

  const addOns = [
    { title: "Add ons", price: "+$15–$25", desc: "per vehicle" },
    { title: "Heavy dirt / mud / grease", price: "+$20–$50", desc: "" }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1586191582151-f746123f0430?auto=format&fit=crop&q=80&w=2000" 
            alt="Truck fleet" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-primary/20 text-primary-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Truck size={14} /> Lowcountry Commercial Specialists
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
            >
              Semi-Truck & Fleet <span className="text-primary italic">Cleaning Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl"
            >
              On-site professional cleaning designed for commercial reliability. Protect your fleet's lifespan, maintain your brand image, and ensure zero downtime with our specialized commercial services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                to="/contact" 
                className="bg-primary hover:bg-primary-dark text-white text-lg font-bold px-10 py-5 rounded-2xl flex items-center justify-center sm:inline-flex gap-2 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1"
              >
                Request Commercial Quote <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 h-full">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Professional Brand Image</h3>
              <p className="text-neutral-500 leading-relaxed">Your vehicles are moving billboards. We ensure your fleet represents your company's professionalism to every customer on the road.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 h-full">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Zero Downtime</h3>
              <p className="text-neutral-500 leading-relaxed">We come to your lot, yard, or job site. No more paying drivers to sit at a truck wash—we clean while your fleet is idle.</p>
            </div>
            <div className="p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100 h-full">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Recurring Schedules</h3>
              <p className="text-neutral-500 leading-relaxed">Set it and forget it. We offer weekly, bi-weekly, or monthly maintenance plans tailored to your specific operational needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Semi Truck Pricing */}
      <section className="py-24 bg-neutral-50 bg-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Commercial Services</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-neutral-900">Fleet & Semi-Truck Details</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {exteriorServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-neutral-200">
                <h4 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <Droplets size={20} />
                  </span>
                  <span>{service.title}</span>
                </h4>
                
                <div className="bg-neutral-50 rounded-2xl p-6 mb-8 border border-neutral-100">
                  <div className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-4">Recommended For:</div>
                  <ul className="space-y-3">
                    {service.target.map((t, i) => (
                      <li key={i} className="text-neutral-700 flex items-center gap-3 font-medium">
                        <ArrowRight size={16} className="text-primary shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-4">Exterior Detail Includes:</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-600 text-sm">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {interiorServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-neutral-200">
                <h4 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <ShieldCheck size={20} />
                  </span>
                  <span>{service.title}</span>
                </h4>
                
                <div className="bg-neutral-50 rounded-2xl p-6 mb-8 border border-neutral-100">
                  <div className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-4">Recommended For:</div>
                  <ul className="space-y-3">
                    {service.target.map((t, i) => (
                      <li key={i} className="text-neutral-700 flex items-center gap-3 font-medium">
                        <ArrowRight size={16} className="text-primary shrink-0" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-4">Interior Detail Includes:</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-600 text-sm">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 shadow-sm text-white">
              <h4 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary-light shrink-0">
                  <DollarSign size={20} />
                </span>
                Additional Services & Add-Ons
              </h4>
              <div className="flex flex-col gap-4">
                {addOns.map((addon, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                    <div>
                      <div className="font-bold text-lg">{addon.title}</div>
                      {addon.desc && <div className="text-sm text-neutral-400">{addon.desc}</div>}
                    </div>
                    <div className="text-primary-light font-black text-xl">{addon.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary-light font-bold text-sm uppercase tracking-widest mb-3">Become a Partner</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">Commercial Fleet Maintenance</h3>
              <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                We offer competitive per-unit pricing tailored specifically to businesses in Summerville and Charleston. Maintain your brand image with regular, reliable washing and detailing right on your lot.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-neutral-300">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-light">
                    <CheckCircle2 size={16} />
                  </div>
                  Weekly, bi-weekly, or monthly scheduling
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-light">
                    <CheckCircle2 size={16} />
                  </div>
                  Invoices built for commercial accounts
                </li>
                <li className="flex items-center gap-3 text-neutral-300">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-light">
                    <CheckCircle2 size={16} />
                  </div>
                  Dedicated support and priority bookings
                </li>
              </ul>
            </div>
            
            <div className="bg-neutral-800 p-8 md:p-12 rounded-[3rem] border border-neutral-700/50">
              <h4 className="text-2xl font-display font-bold mb-6">Request Fleet Analysis</h4>
              <p className="text-neutral-400 mb-8">Tell us about your fleet size and service frequency requirements, and we'll provide a custom maintenance proposal within 24 hours.</p>
              
              <Link 
                to="/contact?type=fleet" 
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-center block shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all"
              >
                Request Commercial Quote
              </Link>
              
              <div className="mt-8 pt-8 border-t border-neutral-700 flex flex-col gap-4">
                <a href="tel:8439001754" className="flex items-center gap-4 text-white hover:text-primary-light transition-colors">
                  <div className="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center">
                    <Zap size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 font-bold uppercase">Commercial Hotline</div>
                    <div className="font-bold">(843) 900-1754</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
