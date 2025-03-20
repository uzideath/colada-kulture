import Link from "next/link"
import { Coffee, Instagram, Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-[#A08888]/30 bg-white py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-[#886C6D]" />
              <span className="text-lg font-semibold text-[#626060]">Colada Kulture</span>
            </div>
            <p className="text-sm text-[#626060]/80 max-w-xs">
              Mobile coffee cart service for events, bringing authentic specialty coffee experiences to your gatherings.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com/coladakulture"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#626060]/70 hover:text-[#886C6D] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/coladakulture"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#626060]/70 hover:text-[#886C6D] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/coladakulture"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#626060]/70 hover:text-[#886C6D] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/coladakulture"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#626060]/70 hover:text-[#886C6D] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#626060]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-[#626060]/80 hover:text-[#886C6D] text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-[#626060]/80 hover:text-[#886C6D] text-sm">
                  Menu Options
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-[#626060]/80 hover:text-[#886C6D] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-[#626060]/80 hover:text-[#886C6D] text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#626060]/80 hover:text-[#886C6D] text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#626060]">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-[#626060]/80 text-sm">Phone: (555) 123-4567</li>
              <li className="text-[#626060]/80 text-sm">Email: hello@coladakulture.com</li>
              <li className="text-[#626060]/80 text-sm">Hours: Mon-Fri 8am-6pm, Sat 9am-5pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#A08888]/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center text-sm text-[#626060]/80 md:text-left">
            &copy; {new Date().getFullYear()} Colada Kulture. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-[#626060]/80 hover:text-[#886C6D] text-sm">
              Terms
            </Link>
            <Link href="#" className="text-[#626060]/80 hover:text-[#886C6D] text-sm">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

