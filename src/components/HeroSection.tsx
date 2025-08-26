import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, Shield } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1035] via-[#141B4D] to-[#0B1035] text-white">
      {/* Top content (2 columns) */}
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-20 pb-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-6">
            <p className="text-[#00C9FF] text-sm font-medium">
              Get Vaccinated. Boost your Immune System
            </p>

            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              COVID-19 Vaccination
              <br />
              Got Easier With,
              <br />
              <span className="text-[#00C9FF]">Vaccination.ng</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-md">
              Vaccination.ng will help you find the nearest centre for vaccination, in all 36 states in Nigeria.
            </p>

            <div className="flex gap-4">
              <Button className="bg-[#00C9FF] hover:bg-[#00B4E6] text-black font-semibold px-6 rounded-lg">
                Get Vaccine
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent rounded-lg"
              >
                Help Centre
              </Button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <img
              src="/hero.png"
              alt="COVID-19 Vaccine Vial"
              className="w-full max-w-[520px] h-auto"
            />
          </div>
        </div>
      </div>

     
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-12">
        <div className="mb-3 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#00C9FF]" />
          <span className="font-medium">Schedule your Vaccination</span>
        </div>

        <Card className="rounded-2xl border-white/15 bg-white/10 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
          <CardContent className="p-5 md:p-6">
            <div className="grid items-end gap-4 md:grid-cols-4">
              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm flex items-center gap-2 text-white/95">
                  <MapPin className="w-4 h-4 text-[#00C9FF]" />
                  Location
                </label>
                <Select>
                  <SelectTrigger className="h-12 rounded-lg bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Ikeja Lagos, Nigeria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ikeja">Ikeja Lagos, Nigeria</SelectItem>
                    <SelectItem value="abuja">Abuja, Nigeria</SelectItem>
                    <SelectItem value="kano">Kano, Nigeria</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm flex items-center gap-2 text-white/95">
                  <Calendar className="w-4 h-4 text-[#00C9FF]" />
                  Date
                </label>
                <Select>
                  <SelectTrigger className="h-12 rounded-lg bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="29 February, 2022" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feb29">29 February, 2022</SelectItem>
                    <SelectItem value="mar1">1 March, 2022</SelectItem>
                    <SelectItem value="mar2">2 March, 2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Vaccine Type */}
              <div className="space-y-2">
                <label className="text-sm flex items-center gap-2 text-white/95">
                  <Shield className="w-4 h-4 text-[#00C9FF]" />
                  Vaccine Type
                </label>
                <Select>
                  <SelectTrigger className="h-12 rounded-lg bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Moderna" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moderna">Moderna</SelectItem>
                    <SelectItem value="pfizer">Pfizer</SelectItem>
                    <SelectItem value="astrazeneca">AstraZeneca</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit */}
              <Button className="h-12 rounded-lg bg-[#00C9FF] hover:bg-[#00B4E6] text-black font-semibold">
                Submit
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

    
      <div className="mt-6 border-t border-white/15">
        <img
          src="/vaccineTypes.png"
          alt="Company Logos"
          className="block w-full h-auto"
        />
      </div>
    </section>
  )
}
