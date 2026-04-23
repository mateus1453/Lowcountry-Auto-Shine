import React from 'react';
import { motion } from 'motion/react';
import { Heart, MapPin, ShieldCheck, Award, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-neutral-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Locally Owned. <br/><span className="text-primary italic">Detail Oriented.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-2xl"
          >
            Lowcountry Auto Shine is a Summerville-born mobile detailing business built on hard work, reliability, and the pursuit of perfection.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=1000" 
                  alt="Detailer at work" 
                  className="w-full h-full object-cover aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-10 rounded-[3rem] z-20 hidden md:block">
                <h4 className="text-4xl font-display font-bold mb-1">100%</h4>
                <p className="text-sm font-bold uppercase tracking-widest opacity-80">Local & Family Owned</p>
              </div>
            </div>

            <div>
              <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Our Core Story</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-neutral-900 mb-8">Professional Results, Local Heart</h3>
              
              <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
                <p>
                  Founded right here in Summerville, Lowcountry Auto Shine was born from a simple observation: vehicle owners in our community were tired of choosing between "quick but poor" tunnel washes and "expensive but inconvenient" detailing shops.
                </p>
                <p>
                  We decided to bridge that gap by bringing high-end detailing services directly to our neighbors' driveways. What started as a one-man operation with a singular passion for clean cars has grown into a trusted mobile detailing partner for hundreds of families and businesses across the Lowcountry.
                </p>
                <p>
                  Whether we're working on a daily driver in a Summerville neighborhood or deep-cleaning a fleet of semi-trucks in North Charleston, our commitment remains the same: treat every vehicle as if it were our own.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-neutral-900 mb-1">Quality First</h5>
                    <p className="text-sm text-neutral-500">Only the best products and ceramic sealants.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-neutral-900 mb-1">Customer Priority</h5>
                    <p className="text-sm text-neutral-500">Your satisfaction is our only metric of success.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Values Grid */}
      <section className="py-24 bg-neutral-900 text-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Our Promise To You</h3>
            <p className="text-neutral-400 text-lg">We don't just wash your car; we restore the value and pride you have in your vehicle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Convenience", desc: "We fit into your busy schedule, not the other way around.", icon: MapPin },
              { title: "Professionalism", desc: "Arriving on time, in uniform, with professional gear.", icon: ShieldCheck },
              { title: "Communication", desc: "Fast responses and clear updates on our arrival time.", icon: MessageSquare },
              { title: "Detail Driven", desc: "We focus on the small things that others tend to miss.", icon: Award },
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-neutral-800 p-8 rounded-[2rem] border border-neutral-700/50 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 bg-neutral-700/50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-neutral-500 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <h4 className="text-2xl md:text-3xl font-display font-bold text-white text-center md:text-left">
              Ready to meet your new detailing partner?
            </h4>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-neutral-100 transition-colors">
                Book Your Appointment
              </Link>
              <a href="tel:8439001754" className="hidden md:flex bg-neutral-900 text-white px-8 py-3 rounded-xl font-bold items-center gap-2 hover:bg-neutral-800 transition-colors">
                <Phone size={18} /> Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
