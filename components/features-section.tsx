"use client"

import { Zap, Users, Music, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Music,
    title: "Học Tập Được Cá Nhân Hóa",
    description: "Chương trình học được tùy chỉnh theo tốc độ học tập và mục tiêu âm nhạc của bạn.",
  },
  {
    icon: Users,
    title: "Biểu Diễn Cộng Đồng",
    description: "Các buổi jam sessions thường xuyên và các buổi biểu diễn trực tiếp để thể hiện kỹ năng của bạn.",
  },
  {
    icon: Zap,
    title: "Kỹ Thuật Hiện Đại",
    description: "Học các kỹ thuật mới nhất được sử dụng bởi những guitarist rock hàng đầu hiện nay.",
  },
  {
    icon: Award,
    title: "Chương Trình Chứng Chỉ",
    description: "Kiếm được chứng chỉ được công nhận khi hoàn thành mỗi cấp độ.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Tại Sao Chọn
            <span className="block text-primary">School of Rock Hà Nội</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="bg-background border-border/50 p-8 hover:border-primary/50 transition">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
