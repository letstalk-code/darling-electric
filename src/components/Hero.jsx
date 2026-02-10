'use client';
import { motion } from 'framer-motion'
import { HiBolt, HiShieldCheck, HiClock } from 'react-icons/hi2'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/75 z-10" />
        <img
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80"
          alt="Professional electrician at work"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-amber/10 rounded-full blur-3xl z-20" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] bg-amber/5 rounded-full blur-3xl z-20" />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 bg-amber/20 text-amber px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <HiBolt className="text-amber" />
              Trusted by 2,000+ Homeowners
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">Darling Electric</span>
              <br />
              <span className="text-white">
                <span className="text-amber">Safe</span>,{' '}
                <span className="text-amber">Reliable</span>{' '}
                Electrical Service
              </span>
            </h1>

            <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Serving Brooksville and Hernando County since 2001. From flickering lights
              to full rewiring and solar installation, Darling Electric keeps your
              family safe and your home running smoothly. Licensed, insured, and
              committed to excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="bg-amber hover:bg-amber-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-amber/25 text-center"
              >
                Get Your Free Quote
              </a>
              <a
                href="#process"
                className="border-2 border-white/30 hover:border-amber text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 text-center backdrop-blur-sm"
              >
                See How It Works
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-slate-200 text-sm">
                <HiShieldCheck className="text-amber text-xl" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-slate-200 text-sm">
                <HiClock className="text-amber text-xl" />
                Same-Day Service Available
              </div>
              <div className="flex items-center gap-2 text-slate-200 text-sm">
                <HiBolt className="text-amber text-xl" />
                24 Years Experience
              </div>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Main circle */}
              <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-br from-amber/20 to-amber/5 flex items-center justify-center">
                <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-br from-amber/30 to-amber/10 flex items-center justify-center">
                  <div className="w-[250px] h-[250px] rounded-full bg-amber/20 flex items-center justify-center">
                    <HiBolt className="text-amber text-8xl" />
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute top-8 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <HiShieldCheck className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">100% Safe</p>
                  <p className="text-xs text-navy-light">Code Compliant</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute bottom-12 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-amber/20 rounded-full flex items-center justify-center">
                  <span className="text-amber font-bold text-sm">4.9</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Top Rated</p>
                  <p className="text-xs text-navy-light">500+ Reviews</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
