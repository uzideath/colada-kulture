import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "./contact-form"

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="mt-1 h-5 w-5 text-[#886C6D]" />,
      title: "Phone",
      details: "(555) 123-4567",
    },
    {
      icon: <Mail className="mt-1 h-5 w-5 text-[#886C6D]" />,
      title: "Email",
      details: "hello@coladakulture.com",
    },
    {
      icon: <MapPin className="mt-1 h-5 w-5 text-[#886C6D]" />,
      title: "Location",
      details: "Serving the greater metropolitan area and surrounding counties",
    },
    {
      icon: <Clock className="mt-1 h-5 w-5 text-[#886C6D]" />,
      title: "Availability",
      details: "7 days a week, flexible hours to accommodate your event schedule",
    },
  ]

  return (
    <section id="contact" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#626060]">Contact Us</h2>
              <p className="mt-2 text-[#626060]/80 max-w-[600px]">
                Ready to bring the coffee cart experience to your next event? Get in touch with us to discuss your needs
                and receive a custom quote.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-[#A08888]/30 bg-white">
                  {item.icon}
                  <div>
                    <h3 className="font-medium text-[#626060]">{item.title}</h3>
                    <p className="text-[#626060]/80">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg border border-[#A08888]/30 bg-[#F5F5F5]">
              <h3 className="font-medium text-[#626060] mb-2">Business Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-[#626060]">Monday - Friday:</div>
                <div className="text-[#626060]/80">8:00 AM - 6:00 PM</div>
                <div className="text-[#626060]">Saturday:</div>
                <div className="text-[#626060]/80">9:00 AM - 5:00 PM</div>
                <div className="text-[#626060]">Sunday:</div>
                <div className="text-[#626060]/80">By appointment only</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

