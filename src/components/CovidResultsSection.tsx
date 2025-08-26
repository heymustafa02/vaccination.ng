import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const CovidResultsSection = () => {
  return (
    <section className="bg-[#1a1f3a] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8">
          {/* Title */}
          <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-center leading-tight">
            Check your COVID-19 result on our Database
          </h2>
          
          
          <div className="space-y-4 sm:space-y-0 mb-6 sm:mb-8">
           
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              
              <div className="flex-1">
                <Input
                  defaultValue="Okeowo"
                  className="w-full bg-white/10 border-2 border-cyan-400/50 text-white placeholder:text-gray-300 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base focus:border-cyan-400 focus:ring-0 font-medium h-12 sm:h-14"
                />
              </div>
              
             
              <div className="flex-1">
                <Input
                  placeholder="NIK Number"
                  className="w-full bg-white/10 border-2 border-white/20 text-white placeholder:text-gray-400 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base focus:border-cyan-400 focus:ring-0 h-12 sm:h-14"
                />
              </div>
              
              
              <div className="sm:flex-shrink-0">
                <Button className="w-full sm:w-auto bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-4 rounded-xl transition-colors text-sm sm:text-base h-12 sm:h-14 min-w-[100px]">
                  Check
                </Button>
              </div>
            </div>
          </div>
          

          <div className="text-center">
            <p className="text-cyan-300 text-xs sm:text-sm md:text-base hover:text-cyan-200 cursor-pointer transition-colors leading-relaxed px-2">
              Need a certificate for your COVID-19 result? Please click here
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CovidResultsSection;