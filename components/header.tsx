"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Coffee, Menu, X, ChevronRight, Utensils, Info, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: "#services", label: "Services", icon: <Utensils className="h-4 w-4" /> },
    { href: "#menu", label: "Menu", icon: <Coffee className="h-4 w-4" /> },
    { href: "#about", label: "About", icon: <Info className="h-4 w-4" /> },
    { href: "#contact", label: "Contact", icon: <Phone className="h-4 w-4" /> },
  ];

  // Animation variants for menu items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e6d7c3] bg-[#f8f0e3]/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-[#c87941]" />
          <Image 
            src="/logo.png"
            alt="Colada Kulture Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[#6b4226] hover:text-[#c87941]">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#6b4226] hover:bg-transparent focus:bg-transparent active:scale-95 transition-transform"
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
        <Button className="hidden md:flex bg-[#c87941] hover:bg-[#a86531] text-white">Book Now</Button>
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
            <div className="bg-gradient-to-b from-[#f8f0e3]/95 to-[#f8f0e3]/90 backdrop-blur-md border-b border-[#e6d7c3]">
              <motion.nav className="py-6 px-6" variants={containerVariants} initial="hidden" animate="visible">
                <div className="space-y-1 mb-6">
                  {menuItems.map((item) => (
                    <motion.div key={item.href} variants={itemVariants}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between text-[#6b4226] hover:text-[#c87941] font-medium py-3 px-4 rounded-lg hover:bg-[#e6d7c3]/30 transition-colors"
                        onClick={closeMenu}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c87941]/10 text-[#c87941]">
                            {item.icon}
                          </div>
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-[#c87941]/70" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants} className="pt-4 border-t border-[#e6d7c3]">
                  <div className="bg-[#f8f0e3] p-4 rounded-lg border border-[#e6d7c3] shadow-sm">
                    <h3 className="text-[#6b4226] font-medium mb-2">Ready to experience our coffee?</h3>
                    <p className="text-[#6b4226]/70 text-sm mb-4">
                      Book our coffee cart for your next event and impress your guests.
                    </p>
                    <Button className="bg-[#c87941] hover:bg-[#a86531] text-white w-full">Book Now</Button>
                  </div>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
