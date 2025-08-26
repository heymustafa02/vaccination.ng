import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Youtube, Mail, Phone, Link as LinkIcon, Instagram,  Facebook, Twitter } from "lucide-react"

export default function TestimonialFooter() {
  return (
    <section className="relative overflow-visible">
      {/* ===== Light Grey Testimonial Area ===== */}
      <div className="bg-white">
        <div className="max-w-[1180px] mx-auto px-6 pt-20 pb-40">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-[#42C7E9] font-semibold tracking-wide mb-3">FEEDBACK</p>
            <h2 className="text-[40px] md:text-[46px] leading-tight font-extrabold text-[#0E1A3A]">
              What our Patients Think
            </h2>
            <p className="mt-5 max-w-3xl mx-auto text-[#0E1A3A]/70 text-lg">
              Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.
              Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 pb-20">
            {/* Left */}
            <Card className="relative h-[240px] rounded-2xl bg-[#d2e3e3]">
              <img src="/bottle.png" alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 right-5 bottom-0 w[50px] h-[405px] opacity-25 " />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/t1.png" alt="Oyindamola Maja" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-lg text-[#0E1A3A]">Oyindamola Maja</p>
                    <p className="text-sm text-[#0E1A3A]/70">Badagry, Lagos</p>
                  </div>
                </div>
                <p className="text-base text-[#0E1A3A]/85 leading-relaxed">
                  “Been stressing about a close centre to get the covid-19 vaccine, until I tried Vaccination.ng.”
                </p>
              </div>
            </Card>

            {/* Middle */}
            <Card className="relative h-[240px] rounded-2xl bg-[#26C2E8] text-white border-0 shadow-[0_18px_36px_rgba(38,194,232,0.45)]">
              <img src="/bottle.png" alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 right-5 bottom-0 w[50px] h-[405px] opacity-25 " />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/t2.png" alt="Okeowo Lekan" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-lg">Okeowo Lekan</p>
                    <p className="text-sm opacity-90">Ikeja, Lagos</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  “Got my vaccine very close to my house. Was very easy scheduling an appointment.”
                </p>
              </div>
            </Card>

            {/* Right */}
            <Card className="relative h-[240px] rounded-2xl bg-[#d2e3e3]">
              <img src="/bottle.png" alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 right-5 bottom-0 w[50px] h-[405px] opacity-25 " />
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/t3.png" alt="Kafaru Temitope" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-lg text-[#0E1A3A]">Kafaru Temitope</p>
                    <p className="text-sm text-[#0E1A3A]/70">Obanikoro, Lagos</p>
                  </div>
                </div>
                <p className="text-base text-[#0E1A3A]/85 leading-relaxed">
                  “Been stressing about a close centre to get the covid-19 vaccine, until I tried Vaccination.ng.”
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* ===== Dark Grey Separator ===== */}
      <div className="relative bg-[#989B9D] h-40">
        {/* Get-a-quote card */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-32 z-10 w-full max-w-[990px] px-6">
          <div className="rounded-[32px] bg-[#29C5EA] shadow-[0_20px_44px_rgba(8,15,40,0.28)]">
            <div className="px-12 py-14">
              <h3 className="text-white text-3xl md:text-4xl font-extrabold text-center mb-5">Get a quote</h3>
              <p className="text-white/90 text-center mb-10 text-lg">Please do enter your email address below</p>

              <form className="mx-auto max-w-[600px]">
                <div className="flex items-stretch bg-white rounded-full overflow-hidden">
                  <Input
                    type="email"
                    placeholder="lenux.ng@gmail.com"
                    className="flex-1 h-16 border-0 rounded-none text-[#0E1A3A] placeholder:text-[#8CA0B3] text-lg"
                  />
                  <Button
                    type="submit"
                    className="h-16 px-8 bg-[#0E1A3A] hover:bg-[#0b1530] rounded-none rounded-r-full text-white"
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Blue Footer ===== */}
      <footer className="bg-[#0E123D] text-white py-20">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
         <div className="font-extrabold text-2xl relative pb-2">
              Vaccination.ng
              <div className="absolute bottom-0 left-0 w-[5.2em] h-0.5 bg-[#29C5EA]"></div>
            </div>

          {/* Links */}
          <nav className="flex items-center gap-10 text-base">
            <a href="#" className="hover:text-[#29C5EA]">Home</a>
            <a href="#" className="hover:text-[#29C5EA]">Services</a>
            <a href="#" className="hover:text-[#29C5EA]">Schedule</a>
            <a href="#" className="hover:text-[#29C5EA]">Contact us</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <a href="#" aria-label="YouTube" className="hover:text-[#29C5EA]"><Youtube size={30} /></a>
            <a href="#" aria-label="Mail" className="hover:text-[#29C5EA]"><Instagram size={30} /></a>
            <a href="#" aria-label="Phone" className="hover:text-[#29C5EA]"><Twitter size={30} /></a>
            <a href="#" aria-label="Link" className="hover:text-[#29C5EA]"><Facebook size={30} /></a>
          </div>
        </div>
      </footer>
    </section>
  )
}
