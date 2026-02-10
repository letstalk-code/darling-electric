'use client';
import { motion } from 'framer-motion'
import {
  HiShieldCheck,
  HiBolt,
  HiHome,
  HiWrenchScrewdriver,
  HiSun,
  HiCheckBadge,
  HiLightBulb,
} from 'react-icons/hi2'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const services = [
  {
    icon: HiBolt,
    title: 'Panel Upgrades',
    description:
      'Modernize your electrical panel to handle today\'s demands safely and efficiently.',
  },
  {
    icon: HiHome,
    title: 'Whole-Home Rewiring',
    description:
      'Replace outdated wiring to eliminate fire risks and bring your home up to code.',
  },
  {
    icon: HiWrenchScrewdriver,
    title: 'Repairs & Troubleshooting',
    description:
      'Fast, accurate diagnosis and repair of any electrical issue — big or small.',
  },
  {
    icon: HiLightBulb,
    title: 'Lighting Design',
    description:
      'Transform your spaces with beautiful, energy-efficient lighting solutions.',
  },
  {
    icon: HiShieldCheck,
    title: 'Safety Inspections',
    description:
      'Comprehensive inspections that catch problems before they become emergencies.',
  },
  {
    icon: HiCheckBadge,
    title: 'EV Charger Installation',
    description:
      'Future-proof your home with professional electric vehicle charger installation.',
  },
  {
    icon: HiSun,
    title: 'Solar Installation & Maintenance',
    description:
      'Certified solar panel installation and maintenance to help you harness clean, renewable energy.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber/5 rounded-full blur-3xl translate-y-1/2" />

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
            Our Services
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mt-3 mb-5">
            The Darling Electric Difference
          </h2>
          <p className="text-navy-light text-lg leading-relaxed">
            We don't just fix wires — we give you peace of mind. Every job is done right,
            on time, and backed by our satisfaction guarantee.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i + 1}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-warm-gray-dark/50 hover:border-amber/30"
            >
              <div className="w-14 h-14 bg-amber/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-amber/20 transition-colors duration-300">
                <service.icon className="text-amber text-2xl" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-navy-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
