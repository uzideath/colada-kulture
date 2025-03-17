import Image from "next/image"
import { ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#6b4226]">
            Bring <span className="text-[#c87941]">authentic coffee</span> to your next event
          </h1>
          <p className="max-w-[600px] text-[#6b4226]/80 md:text-xl">
            Mobile coffee cart service for corporate events, weddings, parties, and more. Elevate your gathering with
            freshly brewed specialty coffee from Colada Kulture.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-[#c87941] hover:bg-[#a86531] text-white">Book Your Cart</Button>
            <Button variant="outline" className="border-[#c87941] text-[#6b4226]">
              View Services <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
          <Image
            src="/header1.png"
            alt="Coffee cart service at an outdoor event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-[#6b4226]">
            <Star className="h-4 w-4 fill-[#c87941] text-[#c87941]" />
            <span>4.9 (120+ events)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

