'use client';
import { motion } from 'framer-motion'
import { HiBolt, HiPhone, HiEnvelope } from 'react-icons/hi2'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
        >
          <div className="w-20 h-20 bg-amber/15 rounded-full flex items-center justify-center mx-auto mb-8">
            <HiBolt className="text-amber text-4xl" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Fix Your Electrical Problems{' '}
            <span className="text-amber">For Good?</span>
          </h2>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Don't wait for a small problem to become a big emergency. Get a free,
            no-obligation quote from our licensed electricians today.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="tel:+13527965809"
            className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-amber/25"
          >
            <HiPhone className="text-xl" />
            Call (352) 796-5809
          </a>
          <a
            href="mailto:hello@darlingelectric.com"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-amber text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
          >
            <HiEnvelope className="text-xl" />
            Email Us
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm"
        >
          <span>Free Estimates</span>
          <span className="text-slate-600">|</span>
          <span>No Hidden Fees</span>
          <span className="text-slate-600">|</span>
          <span>Same-Day Service</span>
          <span className="text-slate-600">|</span>
          <span>Licensed & Insured</span>
        </motion.div>
      </div>
    </section>
  )
}
