"use client"

import { Zap, Users, Music } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const classes = [
  {
    id: 1,
    title: "Cơ Bản Cho Người Mới",
    level: "Cấp 1-2",
    description: "Hoàn hảo cho những người mới bắt đầu. Học các nguyên tắc cơ bản, tiến hành hợp âm, và những bài hát đầu tiên.",
    icon: Music,
    price: "2,990,000₫",
    duration: "8 tuần",
  },
  {
    id: 2,
    title: "Phát Triển Trung Cấp",
    level: "Cấp 3-4",
    description: "Phát triển kỹ năng kỹ thuật, lý thuyết âm nhạc, và bắt đầu biểu diễn các sáng tác gốc.",
    icon: Zap,
    price: "3,490,000₫",
    duration: "10 tuần",
  },
  {
    id: 3,
    title: "Biểu Diễn Nâng Cao",
    level: "Cấp 5-6",
    description: "Thành thạo các kỹ thuật phức tạp, chơi ngẫu hứng, và làm chủ guitar lead để biểu diễn.",
    icon: Users,
    price: "4,490,000₫",
    duration: "12 tuần",
  },
]

export default function ClassesGrid() {
  return (
    <section id="classes" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Chọn Lộ Trình
            <span className="block text-primary">Học Tập Của Bạn</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cho dù bạn đang nâng lên đàn guitar lần đầu tiên hay tinh chỉnh kỹ năng rock của mình, chúng tôi có chương trình hoàn hảo cho bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((cls) => {
            const Icon = cls.icon
            return (
              <Card key={cls.id} className="bg-background border-border/50 hover:border-primary/50 transition group">
                <div className="p-8">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm text-primary font-semibold mb-4">
                    {cls.level}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{cls.title}</h3>
                  <p className="text-muted-foreground mb-6">{cls.description}</p>

                  <div className="space-y-3 mb-8 pb-8 border-b border-border/50">
                    <p className="text-2xl font-bold text-primary">{cls.price}</p>
                    <p className="text-sm text-muted-foreground">{cls.duration}</p>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">Đăng Ký Ngay</Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
