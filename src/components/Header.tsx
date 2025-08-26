import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-to-br from-[#0B1035]  to-[#0B1035] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
       <div className="font-extrabold text-2xl relative pb-2">
              Vaccination.ng
              <div className="absolute bottom-0 left-0 w-[5.2em] h-0.5 bg-[#29C5EA]"></div>
            </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-cyan-primary transition-colors">Home</a>
          <a href="#" className="hover:text-cyan-primary transition-colors">Services</a>
          <a href="#" className="hover:text-cyan-primary transition-colors">Schedule</a>
          <a href="#" className="hover:text-cyan-primary transition-colors">Contact us</a>
        </nav>
        
        <Button
                variant="outline"
                className="border-white text-cyan hover:bg-white hover:text-black bg-transparent"
              >
              Check Status
              </Button>
      </div>
    </header>
  );
};

export default Header;