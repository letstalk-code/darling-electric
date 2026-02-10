'use client';
import { HiBolt } from 'react-icons/hi2'

const footerLinks = {
  Services: [
    'Panel Upgrades',
    'Whole-Home Rewiring',
    'Repairs & Troubleshooting',
    'Lighting Design',
    'Safety Inspections',
    'EV Charger Installation',
    'Solar Installation',
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'How It Works', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  Contact: [
    { label: '(352) 796-5809', href: 'tel:+13527965809' },
    { label: '16297 Cortez Blvd', href: null },
    { label: 'Brooksville, FL 34601', href: null },
    { label: 'Mon-Fri: 8AM-5PM', href: null },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-amber rounded-full flex items-center justify-center">
                <HiBolt className="text-white text-lg" />
              </div>
              <span className="font-serif text-lg font-semibold text-yellow">
                Darling Electric
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Trusted electrical and solar services for Brooksville and Hernando County
              since 2001. Licensed, insured, and committed to your safety.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.Services.map((s) => (
                <li key={s}>
                  <a
                    href="#benefits"
                    className="text-slate-400 hover:text-amber text-sm transition-colors duration-300"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.Company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="text-slate-400 hover:text-amber text-sm transition-colors duration-300"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2">
              {footerLinks.Contact.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-slate-400 hover:text-amber text-sm transition-colors duration-300"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-slate-400 text-sm">{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-600/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Darling Electric. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-500 hover:text-amber text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-amber text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
