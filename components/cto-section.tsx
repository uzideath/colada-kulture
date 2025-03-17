import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CTOSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#6b4226] text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Director</h2>
            <p className="text-white/80">
              Yamila Guarmes, our Chief Taste Officer, brings over 10 years of specialty coffee experience to Colada
              Kulture. After training as a barista in Miami and working with top roasters across the country, Sarah
              founded Colada Kulture to share her passion for exceptional coffee with event-goers everywhere.
            </p>
            <p className="text-white/80">
              "My mission is to elevate every event with the perfect cup of coffee. Whether it's an intimate gathering
              or a corporate conference, we bring the same dedication to quality and service."
            </p>
            <Button variant="outline" className="border-white text-[#6b4226] hover:bg-white hover:text-[#6b4226]">
              Schedule a Consultation
            </Button>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Yamila Guarmes, Chief Taste Officer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

