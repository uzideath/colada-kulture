import { Button } from "@/components/ui/button"
import { Coffee, Leaf } from "lucide-react"

export function MenuSection() {
  const menuCategories = [
    {
      name: "Espresso Drinks",
      description: "Our signature espresso-based beverages",
      icon: <Coffee className="h-5 w-5 text-[#886C6D]" />,
      items: [
        {
          name: "Espresso",
          description: "Rich, concentrated coffee served in small cups",
          price: "$3.50",
        },
        {
          name: "Americano",
          description: "Espresso diluted with hot water",
          price: "$4.00",
        },
        {
          name: "Cappuccino",
          description: "Equal parts espresso, steamed milk, and milk foam",
          price: "$4.50",
        },
        {
          name: "Latte",
          description: "Espresso with steamed milk and a light layer of foam",
          price: "$4.75",
        },
        {
          name: "Mocha",
          description: "Espresso with chocolate and steamed milk",
          price: "$5.00",
        },
      ],
    },
    {
      name: "Cold Beverages",
      description: "Refreshing cold coffee options",
      icon: <Coffee className="h-5 w-5 text-[#886C6D]" />,
      items: [
        {
          name: "Cold Brew",
          description: "Smooth, less acidic coffee brewed with cold water",
          price: "$4.50",
        },
        {
          name: "Iced Latte",
          description: "Espresso and cold milk over ice",
          price: "$4.75",
        },
        {
          name: "Iced Mocha",
          description: "Espresso, chocolate, and cold milk over ice",
          price: "$5.00",
        },
        {
          name: "Nitro Cold Brew",
          description: "Cold brew infused with nitrogen for a creamy texture",
          price: "$5.50",
        },
      ],
    },
    {
      name: "Specialty Drinks",
      description: "Our unique signature creations",
      icon: <Coffee className="h-5 w-5 text-[#886C6D]" />,
      items: [
        {
          name: "Caramel Macchiato",
          description: "Vanilla-infused milk marked with espresso and caramel drizzle",
          price: "$5.25",
        },
        {
          name: "Honey Lavender Latte",
          description: "Espresso with steamed milk, honey, and a hint of lavender",
          price: "$5.50",
        },
        {
          name: "Coconut Cold Brew",
          description: "Our signature cold brew with coconut cream",
          price: "$5.75",
        },
      ],
    },
    {
      name: "Non-Coffee Options",
      description: "For those who prefer alternatives",
      icon: <Leaf className="h-5 w-5 text-[#886C6D]" />,
      items: [
        {
          name: "Hot Chocolate",
          description: "Rich chocolate with steamed milk",
          price: "$4.00",
        },
        {
          name: "Chai Latte",
          description: "Spiced tea concentrate with steamed milk",
          price: "$4.50",
        },
        {
          name: "Specialty Tea",
          description: "Selection of premium loose leaf teas",
          price: "$3.75",
        },
      ],
    },
  ]

  return (
    <section id="menu" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#626060]">
            Our Menu Options
          </h2>
          <p className="max-w-[700px] text-[#626060]/80 md:text-xl">
            Customize your cart with these crowd favorites or request special items for your event
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-[#886C6D]/10 p-2">{category.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#626060]">{category.name}</h3>
                  <p className="text-[#626060]/70 text-sm">{category.description}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-[#A08888]/20 overflow-hidden shadow-sm">
                <table className="w-full border-collapse">
                  <thead className="bg-[#F5F5F5]">
                    <tr>
                      <th className="text-left py-3 px-4 text-[#626060] font-medium text-sm">Item</th>
                      <th className="text-left py-3 px-4 text-[#626060] font-medium text-sm hidden md:table-cell">
                        Description
                      </th>
                      <th className="text-right py-3 px-4 text-[#626060] font-medium text-sm">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, itemIndex) => (
                      <tr
                        key={itemIndex}
                        className={`border-t border-[#A08888]/10 ${
                          itemIndex % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]/30"
                        }`}
                      >
                        <td className="py-3 px-4">
                          <div className="font-medium text-[#626060]">{item.name}</div>
                          <div className="text-[#626060]/70 text-sm md:hidden mt-1">{item.description}</div>
                        </td>
                        <td className="py-3 px-4 text-[#626060]/70 text-sm hidden md:table-cell">{item.description}</td>
                        <td className="py-3 px-4 text-right font-medium text-[#886C6D]">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#626060]/80 mb-4">
            We offer customizable menu options beyond what's shown here. Let us know your preferences!
          </p>
          <Button className="bg-[#886C6D] hover:bg-[#A08888] text-white">Request Custom Menu</Button>
        </div>
      </div>
    </section>
  )
}

