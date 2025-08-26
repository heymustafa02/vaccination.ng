import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RegistrationSection() {
  return (
    <section className="min-h-screen flex items-center py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ECEFF3] to-[#DDE3EA]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* MOBILE/TABLET: Card appears first */}
          <div className="lg:order-2 relative flex justify-center">
            {/* Virus icon */}
            <img
              src="/virus.png"
              alt="virus"
              className="absolute z-20 w-25 h-25 sm:w-25 sm:h-25 lg:w-25 lg:h-25"
              style={{
                top: "0",
                left: "0",
                transform: "translate(90%, -30%) scale(0.8)",
              }}
            />

            {/* Vaccine card - responsive sizing */}
            <div className="relative overflow-hidden bg-[#0E1A3A] text-white rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] shadow-[0_15px_40px_rgba(8,15,40,0.25)] sm:shadow-[0_20px_60px_rgba(8,15,40,0.28)] w-[280px] h-[420px] sm:w-[320px] sm:h-[480px] lg:w-[360px] lg:h-[560px] p-0">
              {/* Header */}
              <div className="px-4 sm:px-5 lg:px-6 pt-4 sm:pt-5 lg:pt-6 text-center">
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] tracking-wide font-semibold">COVID-19</p>
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] -mt-0.5 font-semibold">Vaccine</p>
              </div>

              {/* Vaccine image container */}
              <div className="relative px-4 sm:px-5 lg:px-6 pt-2 sm:pt-3 lg:pt-3">
                <div className="overflow-hidden rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] bg-transparent">
                  <img
                    src="/vaccine.png"
                    alt="Vaccine"
                    className="w-full h-[280px] sm:h-[350px] lg:h-[420px] object-contain"
                  />
                </div>

                {/* Verify Status chip */}
                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2">
                  <div className="bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-lg border border-white/25 text-center">
                    Verify Status
                  </div>
                </div>
              </div>
            </div>
          </div>

       
          <div className="lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0E1A3A] mb-6 sm:mb-8 lg:mb-10 leading-tight">
              Get your vaccine<br className="hidden sm:block" /> registration today
            </h2>

            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              {/* Full name */}
              <div>
                <label className="block text-sm sm:text-base font-semibold text-[#0E1A3A] mb-2">
                  Patient&apos;s Full Name
                </label>
                <Input
                  placeholder="Full name"
                  className="h-12 sm:h-13 lg:h-14 rounded-xl sm:rounded-xl lg:rounded-2xl bg-[#BFC6D1] text-[#0E1A3A] placeholder:text-[#6B7280] text-sm sm:text-base border-0 focus-visible:ring-2 focus-visible:ring-[#1ABDE7]"
                />
              </div>

              {/* Phone section */}
              <div>
                <label className="block text-sm sm:text-base font-semibold text-[#0E1A3A] mb-2">
                  Mobile Number
                </label>
                <p className="text-xs sm:text-sm text-[#6B7280] mb-3">
                  Notifications for appointment and reminders will be sent to this provided number
                </p>

              
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {/* Country code */}
                  <div className="flex items-center justify-center sm:justify-start h-12 sm:h-13 lg:h-14 rounded-xl sm:rounded-xl lg:rounded-2xl bg-[#BFC6D1] px-4 text-[#0E1A3A] sm:w-auto w-full">
                    <div className="w-5 h-3 sm:w-6 sm:h-4 rounded-[2px] bg-green-500"></div>
                    <span className="ml-2 text-sm sm:text-base font-medium">+234</span>
                  </div>

                  {/* Phone input */}
                  <Input
                    placeholder="Phone number"
                    className="h-12 sm:h-13 lg:h-14 flex-1 rounded-xl sm:rounded-xl lg:rounded-2xl bg-[#BFC6D1] text-[#0E1A3A] placeholder:text-[#6B7280] text-sm sm:text-base border-0 focus-visible:ring-2 focus-visible:ring-[#1ABDE7]"
                  />

                  {/* Verify button */}
                  <Button
                    type="button"
                    className="h-12 sm:h-13 lg:h-14 px-6 sm:px-8 rounded-xl sm:rounded-xl lg:rounded-2xl bg-[#1ABDE7] hover:bg-[#1dc3f0] text-white text-sm sm:text-base font-semibold w-full sm:w-auto"
                  >
                    Verify
                  </Button>
                </div>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                className="w-full h-12 sm:h-13 lg:h-14 rounded-xl sm:rounded-xl lg:rounded-2xl bg-[#1ABDE7] hover:bg-[#1dc3f0] text-white text-sm sm:text-base font-semibold"
              >
                Submit
              </Button>

              <p className="text-xs sm:text-sm text-center text-[#6B7280] pt-2">
                Already registered ?{" "}
                <a href="#" className="text-[#1ABDE7] hover:underline">
                  Check your status
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}