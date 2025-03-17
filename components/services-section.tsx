import { Coffee } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      title: "Corporate Events",
      description:
        "Impress clients and boost team morale with our premium coffee service at your next corporate gathering.",
    },
    {
      title: "Weddings",
      description: "Add a unique touch to your special day with a custom coffee bar that your guests will remember.",
    },
    {
      title: "Private Parties",
      description:
        "Elevate your private gathering with barista-crafted beverages that cater to all your guests' preferences.",
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 bg-[#ede3d4]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6b4226]">Our Services</h2>
            <p className="max-w-[700px] text-[#6b4226]/80 md:text-xl">
              Customizable coffee cart experiences for any occasion
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="rounded-xl border border-[#e6d7c3] bg-white p-6 shadow-sm">
              <div className="mb-4 rounded-full bg-[#f8f0e3] p-3 w-fit">
                <Coffee className="h-6 w-6 text-[#c87941]" />
              </div>
              <h3 className="text-xl font-bold text-[#6b4226]">{service.title}</h3>
              <p className="mt-2 text-[#6b4226]/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

