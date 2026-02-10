'use client';
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { HiBolt } from 'react-icons/hi2'

const navLinks = [
  { label: 'Services', href: '#benefits' },
  { label: 'How It Works', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-amber rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <HiBolt className="text-white text-xl" />
          </div>
          <span className={`font-serif text-xl font-semibold ${scrolled ? 'text-yellow' : 'text-yellow'}`}>
            Darling Electric
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-navy-light hover:text-amber-dark transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-amber hover:bg-amber-dark text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber/25"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-navy text-2xl p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-warm-gray-dark overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-navy hover:text-amber-dark transition-colors text-lg font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="bg-amber hover:bg-amber-dark text-white px-6 py-3 rounded-full text-center font-semibold transition-all duration-300 mt-2"
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
