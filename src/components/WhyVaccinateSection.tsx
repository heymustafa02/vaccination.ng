"use client"
import { useState } from "react"
import { Shield, Users, Thermometer } from "lucide-react"

const cards = [
  {
    id: 0,
    title: "Protects your immune system against viruses",
    icon: <Shield className="h-6 w-6 text-[#1ABDE7]" />,
    description:
      "Velit ut consectetur mauris, orci amet, faucibus. Sit turpis fringilla ipsum pretium, dictum. Dolor eget vel nulla lorem ac.",
    color: "#1ABDE7",
  },
  {
    id: 1,
    title: "Minimize the spread of the Virus",
    icon: <Users className="h-6 w-6 text-white" />,
    description:
      "Vaccination reduces how far and how fast viruses can spread in a community.",
    color: "#fff",
  },
  {
    id: 2,
    title: "Protect yourself",
    icon: <Thermometer className="h-6 w-6 text-white" />,
    description:
      "Vaccines strengthen your defenses and help you stay healthier longer.",
    color: "#fff",
  },
]

export default function WhyVaccinateSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-gradient-to-br from-[#131846] via-[#1B2359] to-[#2A3270] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Why get vaccinated today?
          </h2>
          <p className="text-white/70 leading-relaxed md:text-right">
            Magna adipiscing at elit at ornare lectus nibh lorem. Ac, sed lorem
            pellentesque vestibulum risus mattis. In molestie condimentum malesuada non.
          </p>
        </div>

        
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 items-end min-h-[420px]">
            {cards.map((card) => {
              const isActive = active === card.id
              return (
                <div
                  key={card.id}
                  onClick={() => setActive(card.id)}
                  className={`relative cursor-pointer overflow-hidden border backdrop-blur-sm transition-all duration-500 ease-in-out
                    ${isActive
                      ? "bg-white/[0.06] border-white/15 h-[420px] rounded-[28px] rounded-tr-[120px] p-8"
                      : "h-[260px] rounded-[28px] border-white/25 p-6"}
                  `}
                >
                  <div className="mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                      {card.icon}
                    </div>
                  </div>

                  <h3
                    className={`font-semibold mb-3 transition-colors ${
                      isActive
                        ? "text-lg text-[#1ABDE7]"
                        : "text-lg text-white"
                    }`}
                  >
                    {card.title}
                  </h3>

                  {isActive && (
                    <p className="text-sm text-white/80 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  )}

                  <a
                    href="#"
                    className={`absolute bottom-6 left-6 text-sm transition-colors ${
                      isActive
                        ? "text-[#1ABDE7] hover:underline"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    Read More →
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
