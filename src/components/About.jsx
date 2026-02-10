'use client';
import { motion } from 'framer-motion'
import { HiShieldCheck, HiBolt, HiUserGroup, HiHeart } from 'react-icons/hi2'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const stats = [
  { value: '24', label: 'Years of Experience' },
  { value: '2,000+', label: 'Homes Served' },
  { value: '4.9', label: 'Average Rating' },
  { value: '100%', label: 'Satisfaction Guarantee' },
]

const values = [
  {
    icon: HiShieldCheck,
    title: 'Licensed & Insured',
    text: 'Fully licensed, bonded, and insured for your complete protection and peace of mind.',
  },
  {
    icon: HiBolt,
    title: 'Master Electricians',
    text: 'Our team holds master electrician certifications and completes ongoing training every year.',
  },
  {
    icon: HiUserGroup,
    title: 'Family-Owned',
    text: 'We treat every home like our own. Because we live and work in this community too.',
  },
  {
    icon: HiHeart,
    title: 'Customer-First',
    text: 'Transparent pricing, respectful service, and work we stand behind — every single time.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image / Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            custom={0}
          >
            <div className="relative">
              {/* Team Photo */}
              <div className="w-full aspect-square max-w-md mx-auto rounded-[3rem] overflow-hidden shadow-xl relative">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Professional electrician team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-6">
                  <p className="font-serif text-3xl font-bold text-white">
                    Since 2001
                  </p>
                  <p className="text-slate-200 mt-2">
                    Serving Brooksville & Hernando County
                  </p>
                </div>
              </div>

              {/* Stats overlay */}
              <div className="grid grid-cols-2 gap-3 mt-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i + 1}
                    className="bg-white rounded-2xl p-4 text-center shadow-sm border border-warm-gray-dark/50"
                  >
                    <p className="font-serif text-2xl font-bold text-amber">
                      {stat.value}
                    </p>
                    <p className="text-navy-light text-xs mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              custom={0}
            >
              <span className="text-amber-dark font-medium text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mt-3 mb-5">
                A Family Business Built on Trust
              </h2>
              <p className="text-navy-light text-lg leading-relaxed mb-8">
                Since 2001, Darling Electric has been the name homeowners in Brooksville
                and Hernando County trust when it matters most. We started as a small,
                family-run operation with a simple belief: every home deserves safe,
                reliable electrical work done by people who genuinely care.
              </p>
              <p className="text-navy-light text-lg leading-relaxed mb-10">
                That belief still drives everything we do today. From our transparent
                pricing to our meticulous workmanship, we hold ourselves to the
                highest standard — because your family's safety is on the line.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                  custom={i + 1}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 bg-amber/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <v.icon className="text-amber text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-sm mb-1">
                      {v.title}
                    </h4>
                    <p className="text-navy-light text-sm leading-relaxed">
                      {v.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
