

const SymptomsSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0E123D] via-[#131846] to-[#0E123D] text-white px-6 flex flex-col">
      <div className="max-w-6xl mx-auto text-center pt-20 pb-8 flex-grow">
        {/* Section Heading */}
        <p className="text-sm text-white/80 font-medium mb-3">
          Covid-19 Prevention
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
          <span className="text-[#1ABDE7]">COVID-19</span> Symptoms
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed text-base md:text-lg">
          Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.
          Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.
        </p>
      </div>

      {/* Image anchored at bottom */}
      <div className="relative w-full flex justify-center">
        <img
          src="/symptoms.png"
          alt="COVID-19 Symptoms"
          className="w-[95%] md:w-[70%] max-w-7xl object-contain absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
    </section>
  )
}

export default SymptomsSection

