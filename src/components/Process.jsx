'use client';
import { motion } from 'framer-motion'
import { HiPhone, HiClipboardDocumentCheck, HiWrenchScrewdriver, HiHandThumbUp } from 'react-icons/hi2'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const steps = [
  {
    number: '01',
    icon: HiPhone,
    title: 'Request a Quote',
    description:
      'Fill out our simple form or give us a call. Tell us about your electrical needs and we\'ll get back to you within hours.',
  },
  {
    number: '02',
    icon: HiClipboardDocumentCheck,
    title: 'Free Assessment',
    description:
      'We visit your home, assess the work needed, and provide a clear, honest quote with no hidden fees. Ever.',
  },
  {
    number: '03',
    icon: HiWrenchScrewdriver,
    title: 'Expert Installation',
    description:
      'Our licensed electricians complete the work efficiently, cleanly, and to the highest safety standards.',
  },
  {
    number: '04',
    icon: HiHandThumbUp,
    title: 'Your Approval',
    description:
      'We walk you through everything we did, answer your questions, and make sure you\'re 100% satisfied.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-amber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-amber/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-amber font-medium text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            How It Works
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Getting your electrical work done shouldn't be complicated.
            Here's our simple, four-step process.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i + 1}
              className="relative text-center"
            >
              {/* Connector line (hidden on mobile & last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-amber/40 to-transparent" />
              )}

              <div className="w-20 h-20 bg-amber/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <step.icon className="text-amber text-3xl" />
                <span className="absolute -top-1 -right-1 w-7 h-7 bg-amber rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {step.number}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
