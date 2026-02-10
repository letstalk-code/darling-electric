'use client';
import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi2'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const testimonials = [
  {
    name: 'Margaret Thompson',
    role: 'Homeowner, Maplewood',
    initials: 'MT',
    rating: 5,
    text: "After years of dealing with flickering lights and tripping breakers, Darling Electric completely rewired our 1960s home. They were professional, clean, and finished ahead of schedule. I finally feel safe in my own house.",
  },
  {
    name: 'Robert & Linda Chen',
    role: 'Homeowners, Oak Park',
    initials: 'RC',
    rating: 5,
    text: "We called three electricians before Darling Electric. They were the only ones who gave us an honest, upfront quote — and they stuck to it. No surprises, no hidden fees. That kind of integrity is rare.",
  },
  {
    name: 'David Kowalski',
    role: 'Homeowner, Riverside',
    initials: 'DK',
    rating: 5,
    text: "I needed an EV charger installed and a panel upgrade. The team at Darling Electric made it seamless. They explained everything, worked around our schedule, and left our garage spotless.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-warm-gray relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

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
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mt-3 mb-5">
            What Our Customers Say
          </h2>
          <p className="text-navy-light text-lg leading-relaxed">
            Don't just take our word for it. Here's what homeowners like you
            have to say about working with Darling Electric.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={i + 1}
              className="bg-white rounded-3xl p-8 shadow-sm border border-warm-gray-dark/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <HiStar key={j} className="text-amber text-lg" />
                ))}
              </div>

              <p className="text-navy-light leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber/15 rounded-full flex items-center justify-center">
                  <span className="text-amber-dark font-semibold text-sm">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-navy-light text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
