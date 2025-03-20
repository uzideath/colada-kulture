"use client"

import { useState } from "react"
import { Coffee, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

type FAQItem = {
    question: string
    answer: string
    category: "booking" | "service" | "setup" | "payment" | "customization"
}

export function FAQSection() {
    const faqs: FAQItem[] = [
        {
            question: "How far in advance should I book my coffee cart?",
            answer:
                "We recommend booking at least 4-6 weeks in advance for most events. For peak season events (May-September) and holidays, we suggest booking 2-3 months ahead to ensure availability. For last-minute requests, please contact us directly to check our availability.",
            category: "booking",
        },
        {
            question: "What area do you serve?",
            answer:
                "Colada Kulture currently serves the greater metropolitan area and surrounding counties within a 50-mile radius. For events outside this area, additional travel fees may apply. Please contact us for specific information about your location.",
            category: "service",
        },
        {
            question: "How much space do you need for setup?",
            answer:
                "Our standard coffee cart setup requires approximately 8' x 6' of space. We also need access to a standard electrical outlet within 50 feet. For larger events or custom setups, we may require additional space. We're happy to work with your venue to find the perfect spot.",
            category: "setup",
        },
        {
            question: "How many people can you serve?",
            answer:
                "Our standard setup can efficiently serve up to 150 guests over a 2-3 hour period. For larger events, we recommend additional baristas or multiple cart setups to ensure prompt service. We'll work with you to determine the best configuration based on your guest count and event timeline.",
            category: "service",
        },
        {
            question: "What drinks do you offer?",
            answer:
                "We offer a full range of espresso-based drinks (lattes, cappuccinos, americanos), cold brew options, specialty seasonal drinks, and a selection of teas. We can customize our menu to suit your event theme or preferences. Non-coffee options are also available for guests who prefer alternatives.",
            category: "service",
        },
        {
            question: "Do you provide cups, napkins, and other supplies?",
            answer:
                "Yes, our service includes all necessary supplies: cups, lids, sleeves, napkins, stirrers, and condiments. We offer eco-friendly options as well. For an additional fee, we can provide custom-branded cups with your logo or event name.",
            category: "setup",
        },
        {
            question: "What are your payment terms?",
            answer:
                "We require a 50% deposit to secure your booking, with the remaining balance due 7 days before your event. We accept all major credit cards, bank transfers, and checks (if received 14 days before the event). For corporate events, we can provide invoicing options.",
            category: "payment",
        },
        {
            question: "Can you accommodate dietary restrictions?",
            answer:
                "We offer a variety of milk alternatives including oat, almond, soy, and coconut at no extra charge. We can also accommodate other dietary restrictions with advance notice. Just let us know your requirements when booking.",
            category: "customization",
        },
        {
            question: "Can we customize the coffee cart appearance?",
            answer:
                "We offer several customization options for our coffee carts. You can choose from different cart styles, add custom signage, branded menu boards, and even themed decorations to match your event. We also offer branded cups, napkins, and aprons for a cohesive look. For corporate events, we can incorporate your company colors and logo throughout the setup.",
            category: "customization",
        },
    ]

    const [selectedFAQ, setSelectedFAQ] = useState<FAQItem | null>(null)
    const [activeFilter, setActiveFilter] = useState<string | null>(null)

    const openDialog = (faq: FAQItem) => {
        setSelectedFAQ(faq)
    }

    const closeDialog = () => {
        setSelectedFAQ(null)
    }

    const filteredFaqs = activeFilter ? faqs.filter((faq) => faq.category === activeFilter) : faqs

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "booking":
                return "📅"
            case "service":
                return "☕"
            case "setup":
                return "🛠️"
            case "payment":
                return "💳"
            case "customization":
                return "✨"
            default:
                return "❓"
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "booking":
                return "bg-[#886C6D]/10 text-[#886C6D]"
            case "service":
                return "bg-[#A08888]/10 text-[#A08888]"
            case "setup":
                return "bg-[#626060]/10 text-[#626060]"
            case "payment":
                return "bg-[#886C6D]/20 text-[#886C6D]"
            case "customization":
                return "bg-[#A08888]/20 text-[#A08888]"
            default:
                return "bg-[#A08888]/10 text-[#A08888]"
        }
    }

    return (
        <section id="faq" className="w-full py-12 md:py-24 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#886C6D]/5 blur-3xl"></div>
                <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#A08888]/5 blur-3xl"></div>
                <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#626060]/5 blur-3xl"></div>

                {/* Coffee bean pattern */}
                <div className="absolute top-20 right-20 opacity-5">
                    <Coffee className="w-24 h-24 text-[#886C6D]" />
                </div>
                <div className="absolute bottom-20 left-20 opacity-5">
                    <Coffee className="w-24 h-24 text-[#886C6D]" />
                </div>
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-2 bg-[#886C6D]/10 rounded-full mb-4">
                        <Coffee className="h-6 w-6 text-[#886C6D]" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#626060]">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-[#626060]/80 max-w-3xl mx-auto">
                        Find answers to common questions about our coffee cart services. If you don't see your question here, feel
                        free to contact us directly.
                    </p>
                </div>

                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    <button
                        onClick={() => setActiveFilter(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === null
                                ? "bg-[#886C6D] text-white shadow-md"
                                : "bg-[#F5F5F5] text-[#626060] hover:bg-[#A08888]/10"
                            }`}
                    >
                        All Questions
                    </button>
                    {["booking", "service", "setup", "payment", "customization"].map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${activeFilter === category
                                    ? "bg-[#886C6D] text-white shadow-md"
                                    : "bg-[#F5F5F5] text-[#626060] hover:bg-[#A08888]/10"
                                }`}
                        >
                            <span>{getCategoryIcon(category)}</span>
                            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                        </button>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto">
                    {/* Grid layout for FAQ items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredFaqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-[#A08888]/20 flex flex-col h-full"
                            >
                                <div className={`px-2 py-1 text-xs font-medium ${getCategoryColor(faq.category)}`}>
                                    {getCategoryIcon(faq.category)} {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-[#626060] text-lg font-medium mb-3">{faq.question}</h3>
                                    <p className="text-[#626060]/70 text-sm line-clamp-3 mb-4 flex-grow">
                                        {faq.answer.substring(0, 120)}...
                                    </p>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="mt-auto self-start border-[#886C6D] text-[#886C6D] hover:bg-[#886C6D]/10"
                                        onClick={() => openDialog(faq)}
                                    >
                                        Read More <ExternalLink className="ml-2 h-3 w-3" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Dialog for FAQ details */}
                <Dialog open={selectedFAQ !== null} onOpenChange={(open) => !open && closeDialog()}>
                    <DialogContent className="max-w-2xl bg-white">
                        {selectedFAQ && (
                            <>
                                <DialogHeader>
                                    <div
                                        className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full mb-2 ${getCategoryColor(selectedFAQ.category)}`}
                                    >
                                        {getCategoryIcon(selectedFAQ.category)}{" "}
                                        {selectedFAQ.category.charAt(0).toUpperCase() + selectedFAQ.category.slice(1)}
                                    </div>
                                    <DialogTitle className="text-xl font-bold text-[#626060]">{selectedFAQ.question}</DialogTitle>
                                </DialogHeader>
                                <DialogDescription className="text-[#626060]/90 text-base leading-relaxed">
                                    {selectedFAQ.answer}
                                </DialogDescription>
                                <div className="mt-6 pt-4 border-t border-[#A08888]/20">
                                    <p className="text-[#626060]/70 text-sm">
                                        Still have questions about this topic? Feel free to{" "}
                                        <a href="#contact" className="text-[#886C6D] hover:underline">
                                            contact us
                                        </a>{" "}
                                        for more information.
                                    </p>
                                </div>
                            </>
                        )}
                    </DialogContent>
                </Dialog>

                {/* Fancy CTA section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 bg-gradient-to-r from-[#886C6D] to-[#A08888] rounded-2xl p-8 text-white text-center max-w-4xl mx-auto shadow-xl"
                >
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-12 -right-8 opacity-10">
                            <Coffee className="w-24 h-24" />
                        </div>
                        <div className="absolute -bottom-12 -left-8 opacity-10">
                            <Coffee className="w-24 h-24" />
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                        <p className="mb-6 max-w-2xl mx-auto">
                            Our team is ready to help you plan the perfect coffee experience for your event. Reach out to us for
                            personalized assistance.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#886C6D] font-medium rounded-full hover:bg-[#F5F5F5] transition-colors shadow-md hover:shadow-lg"
                        >
                            Contact Our Team
                        </a>
                    </div>
                </motion.div>

                {/* Testimonials in a row */}
                <div className="mt-16 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#F5F5F5] rounded-xl p-8 relative">
                            <div className="absolute -top-5 left-8">
                                <div className="bg-[#886C6D] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                                    <span className="text-2xl">"</span>
                                </div>
                            </div>
                            <blockquote className="text-[#626060] text-lg italic mt-4">
                                Colada Kulture exceeded our expectations! Their coffee cart was the highlight of our corporate event,
                                and their team was professional and accommodating to all our requests.
                            </blockquote>
                            <div className="mt-4 flex items-center">
                                <div className="w-12 h-12 rounded-full bg-[#A08888]/20 flex items-center justify-center text-[#A08888]">
                                    <span className="font-bold">JD</span>
                                </div>
                                <div className="ml-4">
                                    <p className="font-medium text-[#626060]">Jane Doe</p>
                                    <p className="text-sm text-[#626060]/70">Event Coordinator, Tech Company</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#F5F5F5] rounded-xl p-8 relative">
                            <div className="absolute -top-5 left-8">
                                <div className="bg-[#886C6D] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                                    <span className="text-2xl">"</span>
                                </div>
                            </div>
                            <blockquote className="text-[#626060] text-lg italic mt-4">
                                The coffee was amazing and our guests couldn't stop talking about it! The baristas were friendly and
                                created a wonderful atmosphere at our wedding reception.
                            </blockquote>
                            <div className="mt-4 flex items-center">
                                <div className="w-12 h-12 rounded-full bg-[#A08888]/20 flex items-center justify-center text-[#A08888]">
                                    <span className="font-bold">MS</span>
                                </div>
                                <div className="ml-4">
                                    <p className="font-medium text-[#626060]">Michael Smith</p>
                                    <p className="text-sm text-[#626060]/70">Wedding Client</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
