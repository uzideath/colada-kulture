"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Coffee,
  Menu,
  X,
  ChevronRight,
  Utensils,
  Info,
  Phone,
  HelpCircle,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const menuItems = [
    { href: "#services", label: "Services", icon: <Utensils className="h-4 w-4" /> },
    { href: "#menu", label: "Menu", icon: <Coffee className="h-4 w-4" /> },
    { href: "#about", label: "About", icon: <Info className="h-4 w-4" /> },
    { href: "#faq", label: "FAQ", icon: <HelpCircle className="h-4 w-4" /> },
    { href: "#contact", label: "Contact", icon: <Phone className="h-4 w-4" /> },
  ]

  // Animation variants for menu items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#A08888]/30 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-[#886C6D]" />
          <span className="text-xl font-semibold text-[#626060]">Colada Kulture</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[#626060] hover:text-[#886C6D]">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4 mr-4">
          <a
            href="https://instagram.com/coladakulture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#626060]/70 hover:text-[#886C6D] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://facebook.com/coladakulture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#626060]/70 hover:text-[#886C6D] transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://twitter.com/coladakulture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#626060]/70 hover:text-[#886C6D] transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#626060] hover:bg-transparent focus:bg-transparent active:scale-95 transition-transform"
          onClick={toggleMenu}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Desktop CTA Button */}
        <Button className="hidden md:flex bg-[#886C6D] hover:bg-[#A08888] text-white">Book Now</Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-md border-b border-[#A08888]/30">
              <motion.nav className="py-6 px-6" variants={containerVariants} initial="hidden" animate="visible">
                <div className="space-y-1 mb-6">
                  {menuItems.map((item) => (
                    <motion.div key={item.href} variants={itemVariants}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between text-[#626060] hover:text-[#886C6D] font-medium py-3 px-4 rounded-lg hover:bg-[#A08888]/10 transition-colors"
                        onClick={closeMenu}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#886C6D]/10 text-[#886C6D]">
                            {item.icon}
                          </div>
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-[#886C6D]/70" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Social Media - Mobile */}
                <motion.div variants={itemVariants} className="mb-6">
                  <div className="flex items-center justify-center gap-6 py-3">
                    <a
                      href="https://instagram.com/coladakulture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#626060] hover:text-[#886C6D] transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://facebook.com/coladakulture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#626060] hover:text-[#886C6D] transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="https://twitter.com/coladakulture"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#626060] hover:text-[#886C6D] transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-4 border-t border-[#A08888]/30">
                  <div className="bg-white p-4 rounded-lg border border-[#A08888]/30 shadow-sm">
                    <h3 className="text-[#626060] font-medium mb-2">Ready to experience our coffee?</h3>
                    <p className="text-[#626060]/70 text-sm mb-4">
                      Book our coffee cart for your next event and impress your guests.
                    </p>
                    <Button className="bg-[#886C6D] hover:bg-[#A08888] text-white w-full">Book Now</Button>
                  </div>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

