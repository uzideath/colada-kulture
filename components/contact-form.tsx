"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, CoffeeIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useState } from "react"

export function ContactForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <Card className="border-[#e6d7c3] shadow-md">
      <CardHeader className="bg-[#f8f0e3] rounded-t-lg border-b border-[#e6d7c3]">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-[#c87941] p-2">
            <CoffeeIcon className="h-5 w-5 text-white" />
          </div>
          <div>
            <CardTitle className="text-xl text-[#6b4226]">Request a Quote</CardTitle>
            <CardDescription className="text-[#6b4226]/70">
              Fill out the form below and we'll get back to you within 24 hours
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#6b4226]">
                Full Name
              </Label>
              <Input id="name" placeholder="Your name" className="border-[#e6d7c3] focus-visible:ring-[#c87941]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#6b4226]">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="border-[#e6d7c3] focus-visible:ring-[#c87941]"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#6b4226]">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                className="border-[#e6d7c3] focus-visible:ring-[#c87941]"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[#6b4226]">Event Type</Label>
              <Select>
                <SelectTrigger className="border-[#e6d7c3] focus:ring-[#c87941]">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="private">Private Party</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label className="text-[#6b4226]">Event Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    type="button"
                    className={cn(
                      "w-full justify-start text-left font-normal border-[#e6d7c3] focus-visible:ring-[#c87941]",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Select a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-[#6b4226]">
                Number of Guests
              </Label>
              <Input
                id="guests"
                type="number"
                placeholder="Approximate guest count"
                className="border-[#e6d7c3] focus-visible:ring-[#c87941]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#6b4226]">
              Additional Details
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us more about your event, specific requirements, or any questions you have"
              className="min-h-[120px] border-[#e6d7c3] focus-visible:ring-[#c87941]"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-[#e6d7c3] text-[#c87941] focus:ring-[#c87941]"
              />
              <Label htmlFor="terms" className="text-sm text-[#6b4226]/80">
                I agree to the terms and conditions and privacy policy
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#c87941] hover:bg-[#a86531] text-white">
            Submit Request
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

