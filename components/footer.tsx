import Link from "next/link"
import { Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t border-[#e6d7c3] bg-[#f8f0e3] py-6">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Coffee className="h-5 w-5 text-[#c87941]" />
          <span className="text-lg font-semibold text-[#6b4226]">Colada Kulture</span>
        </div>
        <p className="text-center text-sm text-[#6b4226]/80 md:text-left">
          &copy; {new Date().getFullYear()} Colada Kulture. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-[#6b4226]/80 hover:text-[#c87941]">
            Terms
          </Link>
          <Link href="#" className="text-[#6b4226]/80 hover:text-[#c87941]">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  )
}

