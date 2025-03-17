"use client"
import { Button } from "@/components/ui/button"
import { Lottie } from "@/lib/lottie"
import coffeegirl from '@/public/coffee-girl.json'

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 bg-[#ede3d4]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#6b4226]">About Us</h2>
            <p className="text-[#6b4226]/80">
              Colada Kulture was founded with a simple mission: to bring exceptional coffee experiences to any location.
              What started as a single cart at local farmers markets has grown into a full-service mobile coffee
              solution for events of all sizes.
            </p>
            <p className="text-[#6b4226]/80">
              We source our beans from ethical, sustainable farms and roast them locally to ensure the freshest, most
              flavorful coffee possible. Our team of skilled baristas are not just coffee experts—they're passionate
              about creating memorable experiences for your guests.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="outline" className="border-[#c87941] text-[#6b4226]">
                Our Story
              </Button>
              <Button variant="outline" className="border-[#c87941] text-[#6b4226]">
                Meet The Team
              </Button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl lg:aspect-square">
            <Lottie animationData={coffeegirl} loop={true} />
          </div>
        </div>
      </div>
    </section>
  )
}

