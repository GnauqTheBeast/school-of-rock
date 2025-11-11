"use client"

import { Card } from "@/components/ui/card"

const instructors = [
  {
    id: 1,
    name: "Hà Laze",
    role: "Hiệu Trưởng SOR",
    bio: "Trên 15 năm thành thạo guitar rock",
    image: "/ha_laze.jpg",
  },
  {
    id: 2,
    name: "Hà Lê",
    role: "Thành viên quản trị SOR",
    bio: "Guitarist",
    image: "/ha_le.jpg",
  },
  {
    id: 3,
    name: "Pick",
    role: "Chuyên gia giải trí",
    bio: "Chuyên gia giải trí",
    image: "/pick.jpg",
  },
]

export default function InstructorsSection() {
  return (
    <section id="instructors" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Gặp Gỡ Những
            <span className="block text-primary">Giáo Viên Chuyên Gia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Học từ những nhạc sĩ đam mê sống và thở rock music.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <Card
              key={instructor.id}
              className="bg-card border-border/50 overflow-hidden hover:border-primary/50 transition group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={instructor.image || "/placeholder.svg"}
                  alt={instructor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">{instructor.name}</h3>
                <p className="text-primary font-semibold mb-3">{instructor.role}</p>
                <p className="text-muted-foreground">{instructor.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
