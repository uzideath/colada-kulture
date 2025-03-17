import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 bg-[#ede3d4]">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#6b4226]">
            Ready to elevate your next event with premium coffee?
          </h2>
          <p className="max-w-[600px] text-[#6b4226]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Book your coffee cart today and give your guests an experience they'll remember.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
          <Button className="bg-[#c87941] hover:bg-[#a86531] text-white">Book Now</Button>
          <Link href="#contact">
            <Button variant="outline" className="border-[#c87941] text-[#6b4226]">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

