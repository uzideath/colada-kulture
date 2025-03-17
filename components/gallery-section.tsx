"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Define the event type
type EventItem = {
    id: number
    title: string
    description: string
    images: string[] // Changed from single image to array of images
    date: string
    location: string
    attendees: number
    tags: string[]
}

// Sample event data with multiple images
const events: EventItem[] = [
    {
        id: 1,
        title: "Corporate Coffee Morning",
        description:
            "We provided specialty coffee service for a tech company's quarterly meeting. Our baristas served over 200 custom drinks including our signature caramel lattes and cold brews.",
        images: [
            "/corporate.webp",
            "/placeholder.svg?height=600&width=600&text=Corporate+Event+2",
            "/placeholder.svg?height=600&width=600&text=Corporate+Event+3",
        ],
        date: "March 15, 2023",
        location: "Downtown Business Center",
        attendees: 200,
        tags: ["Corporate", "Morning", "Cold Brew"],
    },
    {
        id: 2,
        title: "Beachside Wedding",
        description:
            "A beautiful sunset wedding where we served specialty coffees and teas to complement the dessert bar. The bride and groom chose our signature coconut cold brew as their featured drink.",
        images: [
            "/wedding.webp",
            "/placeholder.svg?height=600&width=600&text=Wedding+2",
            "/placeholder.svg?height=600&width=600&text=Wedding+3",
            "/placeholder.svg?height=600&width=600&text=Wedding+4",
        ],
        date: "June 22, 2023",
        location: "Sunset Beach Resort",
        attendees: 150,
        tags: ["Wedding", "Evening", "Signature Drinks"],
    },
    {
        id: 3,
        title: "Art Gallery Opening",
        description:
            "We provided an elegant coffee service for an art gallery opening, featuring our pour-over bar and specialty drinks that complemented the artistic atmosphere.",
        images: [
            "/gallery.jpg",
            "/placeholder.svg?height=600&width=600&text=Gallery+2",
            "/placeholder.svg?height=600&width=600&text=Gallery+3",
        ],
        date: "September 8, 2023",
        location: "Modern Art Gallery",
        attendees: 120,
        tags: ["Cultural", "Evening", "Pour-Over"],
    },
    {
        id: 4,
        title: "Charity Fundraiser Breakfast",
        description:
            "Colada Kulture proudly supported this charity event by providing complimentary coffee service. Our team served a variety of espresso drinks and batch brew coffee.",
        images: [
            "/charity.webp",
            "/placeholder.svg?height=600&width=600&text=Charity+2",
        ],
        date: "November 12, 2023",
        location: "Community Center",
        attendees: 250,
        tags: ["Charity", "Morning", "Espresso"],
    },
    {
        id: 5,
        title: "Music Festival VIP Lounge",
        description:
            "We set up multiple coffee carts in the VIP lounge area of this three-day music festival, serving specialty iced drinks and energy-boosting espressos.",
        images: [
            "festival.jpg",
            "/placeholder.svg?height=600&width=600&text=Festival+2",
            "/placeholder.svg?height=600&width=600&text=Festival+3",
            "/placeholder.svg?height=600&width=600&text=Festival+4",
            "/placeholder.svg?height=600&width=600&text=Festival+5",
        ],
        date: "July 15-17, 2023",
        location: "Riverside Park",
        attendees: 500,
        tags: ["Festival", "Weekend", "Iced Coffee"],
    },
    {
        id: 6,
        title: "Corporate Holiday Party",
        description:
            "We created custom holiday-themed coffee drinks for this end-of-year celebration, including peppermint mochas and spiced vanilla lattes.",
        images: [
            "/holiday.png",
            "/placeholder.svg?height=600&width=600&text=Holiday+2",
            "/placeholder.svg?height=600&width=600&text=Holiday+3",
        ],
        date: "December 18, 2023",
        location: "Grand Hotel Ballroom",
        attendees: 300,
        tags: ["Corporate", "Holiday", "Seasonal"],
    },
]

export function GallerySection() {
    const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleOpenModal = (event: EventItem) => {
        setSelectedEvent(event)
        setCurrentImageIndex(0) // Reset to first image when opening modal
        setIsOpen(true)
    }

    const nextImage = () => {
        if (!selectedEvent) return
        setCurrentImageIndex((prev) => (prev + 1) % selectedEvent.images.length)
    }

    const prevImage = () => {
        if (!selectedEvent) return
        setCurrentImageIndex((prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length)
    }

    const goToImage = (index: number) => {
        setCurrentImageIndex(index)
    }

    return (
        <section className="w-full py-12 md:py-24 bg-[#6b4226] text-white">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Events Gallery</h2>
                    <p className="mt-4 text-white/80 max-w-3xl mx-auto">
                        Browse through some of our favorite events where we've brought the Colada Kulture experience. Click on any
                        image to learn more about how we crafted the perfect coffee experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            }}
                            className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                            <div className="aspect-square overflow-hidden">
                                <Image
                                    src={event.images[0] || "/placeholder.svg"}
                                    alt={event.title}
                                    width={400}
                                    height={400}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-bold text-white">{event.title}</h3>
                                    <p className="text-white/80 text-sm mt-1 line-clamp-2">{event.description}</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-[#6b4226]"
                                            onClick={() => handleOpenModal(event)}
                                        >
                                            View Details
                                        </Button>
                                        <span className="text-white/80 text-xs">{event.images.length} photos</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-3 right-3">
                                <Badge className="bg-white/20 hover:bg-white/30 text-white">{event.tags[0]}</Badge>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="max-w-4xl bg-[#f8f0e3] text-[#6b4226] w-[95vw] max-h-[90vh] overflow-y-auto p-4 md:p-6">
                        {selectedEvent && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                                        <Image
                                            src={selectedEvent.images[currentImageIndex] || "/placeholder.svg"}
                                            alt={`${selectedEvent.title} - Photo ${currentImageIndex + 1}`}
                                            fill
                                            className="object-cover"
                                        />

                                        {/* Navigation arrows */}
                                        {selectedEvent.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        prevImage()
                                                    }}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#6b4226] p-1 rounded-full"
                                                    aria-label="Previous image"
                                                >
                                                    <ChevronLeft className="h-6 w-6" />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation()
                                                        nextImage()
                                                    }}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#6b4226] p-1 rounded-full"
                                                    aria-label="Next image"
                                                >
                                                    <ChevronRight className="h-6 w-6" />
                                                </button>
                                            </>
                                        )}

                                        {/* Image counter */}
                                        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                                            {currentImageIndex + 1} / {selectedEvent.images.length}
                                        </div>
                                    </div>

                                    {/* Thumbnail navigation */}
                                    {selectedEvent.images.length > 1 && (
                                        <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-hide">
                                            {selectedEvent.images.map((image, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => goToImage(idx)}
                                                    className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden transition-all ${currentImageIndex === idx ? "ring-2 ring-[#c87941]" : "opacity-70 hover:opacity-100"
                                                        }`}
                                                    aria-label={`Go to image ${idx + 1}`}
                                                >
                                                    <Image
                                                        src={image || "/placeholder.svg"}
                                                        alt={`${selectedEvent.title} thumbnail ${idx + 1}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl font-bold text-[#6b4226]">{selectedEvent.title}</DialogTitle>
                                    </DialogHeader>

                                    <div className="flex flex-wrap gap-1 -mt-1 mb-3">
                                        {selectedEvent.tags.map((tag) => (
                                            <Badge key={tag} className="bg-[#c87941]/20 text-[#c87941] hover:bg-[#c87941]/30">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <p className="text-[#6b4226]/80">{selectedEvent.description}</p>

                                    <div className="space-y-2 pt-2">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4 text-[#c87941]" />
                                            <span className="text-sm text-[#6b4226]/80">{selectedEvent.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4 text-[#c87941]" />
                                            <span className="text-sm text-[#6b4226]/80">{selectedEvent.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="h-4 w-4 text-[#c87941]" />
                                            <span className="text-sm text-[#6b4226]/80">{selectedEvent.attendees} attendees</span>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <h4 className="font-medium text-[#6b4226] mb-2">Services Provided:</h4>
                                        <ul className="list-disc pl-5 text-[#6b4226]/80 space-y-1">
                                            <li>Custom coffee bar setup</li>
                                            <li>Specialty drink menu</li>
                                            <li>Professional barista service</li>
                                            <li>Branded cups and napkins</li>
                                        </ul>
                                    </div>

                                    <div className="pt-4">
                                        <Button className="bg-[#c87941] hover:bg-[#a86531] text-white">Book a Similar Experience</Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    )
}

