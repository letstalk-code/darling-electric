'use client';
import { motion } from 'framer-motion'
import { HiExclamationTriangle, HiFire, HiClock, HiCurrencyDollar } from 'react-icons/hi2'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const painPoints = [
  {
    icon: HiExclamationTriangle,
    title: 'Flickering Lights & Outages',
    description:
      "You shouldn't have to wonder if your wiring is a fire hazard. Outdated electrical systems put your home and family at risk every single day.",
  },
  {
    icon: HiFire,
    title: 'Overloaded Circuits',
    description:
      'Tripping breakers every time you run the microwave and hair dryer? Your panel is screaming for help — and ignoring it can be dangerous.',
  },
  {
    icon: HiClock,
    title: 'Unreliable Contractors',
    description:
      "Tired of electricians who don't show up, overcharge, or leave the job half-done? You deserve a team that respects your time and your home.",
  },
  {
    icon: HiCurrencyDollar,
    title: 'Hidden Costs & Surprises',
    description:
      "Getting a bill twice what you were quoted? Surprise charges are unacceptable. You need honest, upfront pricing before any work begins.",
  },
]

export default function Pain() {
  return (
    <section className="py-24 md:py-32 bg-warm-gray relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-amber-dark font-medium text-sm uppercase tracking-wider">
            Sound Familiar?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mt-3 mb-5">
            Electrical Problems Shouldn't Keep You Up at Night
          </h2>
          <p className="text-navy-light text-lg leading-relaxed">
            As a homeowner, you've got enough to worry about. Your electrical
            system shouldn't be one of them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {painPoints.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i + 1}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-warm-gray-dark/50"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-5">
                <pain.icon className="text-red-400 text-2xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                {pain.title}
              </h3>
              <p className="text-navy-light leading-relaxed">
                {pain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
