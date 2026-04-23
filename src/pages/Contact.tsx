import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, MapPin, Send, CheckCircle2, Truck, Car, Gauge, Sparkles } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, logic would go here
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-neutral-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-pattern"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-display font-bold text-white mb-6"
          >
            Get Your <span className="text-primary italic">Free Quote</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-neutral-400 max-w-2xl"
          >
            Ready to transform your vehicle? Text us a few photos, call the number below, or fill out our quick quote form. We'll get back to you within 30 minutes during business hours.
          </motion.p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-neutral-50 bg-pattern">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Side: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-8 border-l-4 border-primary pl-6">Quick Connectivity</h3>
                <div className="space-y-6">
                  <a 
                    href="tel:8439001754" 
                    className="flex items-center gap-6 p-6 bg-white rounded-[2rem] shadow-sm border border-neutral-100 hover:shadow-lg transition-all group"
                  >
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone size={32} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Call Us Directly</div>
                      <div className="text-2xl font-display font-bold text-neutral-900">(843) 900-1754</div>
                    </div>
                  </a>

                  <a 
                    href="sms:8439001754" 
                    className="flex items-center gap-6 p-6 bg-white rounded-[2rem] shadow-sm border border-neutral-100 hover:shadow-lg transition-all group"
                  >
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <MessageSquare size={32} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Text For Fast Quote</div>
                      <div className="text-2xl font-display font-bold text-neutral-900">Text: "Quote"</div>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-8 border-l-4 border-primary pl-6">Service Area</h3>
                <div className="bg-neutral-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                  <ul className="space-y-4 mb-8">
                    {['Summerville', 'Charleston', 'North Charleston', 'Mount Pleasant', 'Goose Creek', 'Hanahan'].map((city) => (
                      <li key={city} className="flex items-center gap-3 text-neutral-400 font-medium">
                        <MapPin size={18} className="text-primary" /> {city}, SC
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm italic opacity-60">*If you're just outside these areas, text us! We often extend our reach for multi-vehicle jobs.</p>
                </div>
              </div>
            </div>

            {/* Right Side: Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-neutral-200 border border-neutral-100 relative overflow-hidden">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-neutral-900 mb-4">Request Received!</h3>
                    <p className="text-lg text-neutral-500 mb-8">Thank you for reaching out. A detailing specialist will review your request and contact you shortly.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-bold hover:underline"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-3xl font-display font-bold text-neutral-900 mb-2">Request Your Quote</h3>
                    <p className="text-neutral-500 mb-10">Fill out this quick form and we'll send you an estimate by text or email.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-neutral-700 uppercase tracking-wider ml-1">Your Name</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-neutral-700 uppercase tracking-wider ml-1">Phone Number</label>
                          <input 
                            required 
                            type="tel" 
                            placeholder="(843) 900-1754" 
                            className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700 uppercase tracking-wider ml-1">Vehicle Type</label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { id: 'car', label: 'Car / Sedan', icon: Car },
                            { id: 'suv', label: 'SUV / Jeep', icon: Gauge },
                            { id: 'truck', label: 'Semi / Fleet', icon: Truck }
                          ].map(t => (
                            <label key={t.id} className="relative cursor-pointer group">
                              <input type="radio" name="vehicle" value={t.id} className="peer sr-only" />
                              <div className="h-full flex flex-col items-center justify-center gap-3 p-4 bg-neutral-50 border border-neutral-200 rounded-2xl peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary transition-all group-hover:bg-neutral-100">
                                <t.icon size={24} />
                                <span className="text-[10px] font-bold uppercase text-center">{t.label}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700 uppercase tracking-wider ml-1">Upload Vehicle Photos (Optional)</label>
                        <div className="relative group">
                          <input 
                            type="file" 
                            multiple 
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            onChange={(e) => {
                              // Logic for preview could go here
                              console.log(e.target.files);
                            }}
                          />
                          <div className="w-full bg-neutral-50 border-2 border-dashed border-neutral-200 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 group-hover:border-primary group-hover:bg-primary/5 transition-all">
                            <Sparkles className="text-neutral-400 group-hover:text-primary" size={32} />
                            <div className="text-center">
                              <p className="text-xs font-black uppercase text-neutral-600">Click or drag photos here</p>
                              <p className="text-[10px] text-neutral-400">Helps us give a more accurate quote</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700 uppercase tracking-wider ml-1">Services Needed</label>
                        <select className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                          <option>Full Detail (Most Popular)</option>
                          <option>Premium Exterior Wash</option>
                          <option>Interior Deep Clean</option>
                          <option>Semi-Truck Service</option>
                          <option>Commercial Fleet Quote</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-neutral-700 uppercase tracking-wider ml-1">Location Preferred</label>
                        <input 
                          type="text" 
                          placeholder="Summerville, North Charleston, etc." 
                          className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl p-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                      </div>

                      <button 
                        type="submit" 
                        className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all hover:scale-[1.01] active:scale-[0.99] mt-4"
                      >
                        Request My Quote <Send size={20} />
                      </button>
                      <p className="text-[10px] text-center text-neutral-400 mt-4 px-8 uppercase tracking-widest leading-relaxed">
                        By submitting, you agree to receive a text or call back from Lowcountry Auto Shine. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO/Area footer block */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-xl font-display font-bold text-neutral-900 mb-4">Mobile Detailing Near You</h4>
            <p className="text-neutral-500 leading-relaxed text-sm">
              Finding reliable <strong>car detailing in Summerville SC</strong> or <strong>mobile car wash Charleston SC</strong> shouldn't be difficult. 
              Lowcountry Auto Shine provides high-quality mobile services right at your doorstep. We are the premier choice for 
              <strong>fleet washing in Charleston</strong> and <strong>semi truck detailing near me</strong>. Book today and see the difference.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
