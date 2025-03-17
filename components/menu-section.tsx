import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MenuSection() {
  const menuItems = [
    {
      name: "Espresso",
      description: "Rich, concentrated coffee served in small cups",
      image: "/1.webp",
      rating: 4.8,
    },
    {
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and milk foam",
      image: "/2.png",
      rating: 4.9,
    },
    {
      name: "Latte",
      description: "Espresso with steamed milk and a light layer of foam",
      image: "/3.webp",
      rating: 4.7,
    },
    {
      name: "Cold Brew",
      description: "Smooth, less acidic coffee brewed with cold water",
      image: "/4.png",
      rating: 4.8,
    },
    {
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk",
      image: "/5.webp",
      rating: 4.6,
    },
    {
      name: "Specialty Tea",
      description: "Selection of premium loose leaf teas",
      image: "/6.webp",
      rating: 4.5,
    },
  ]

  return (
    <section id="menu" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6b4226]">
            Popular Menu Options
          </h2>
          <p className="max-w-[700px] text-[#6b4226]/80 md:text-xl">Customize your cart with these crowd favorites</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl border border-[#e6d7c3] bg-white">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute top-2 right-2 rounded-full bg-white px-2 py-1 text-xs font-medium text-[#6b4226]">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-[#c87941] text-[#c87941]" />
                  {item.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[#6b4226]">{item.name}</h3>
                <p className="mt-1 text-sm text-[#6b4226]/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-[#6b4226]/80 mb-4">
            We offer a wide range of customizable menu options beyond what's shown here.
          </p>
          <Button className="bg-[#c87941] hover:bg-[#a86531] text-white">View Full Menu</Button>
        </div>
      </div>
    </section>
  )
}

