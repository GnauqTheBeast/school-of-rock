"use client"

import { useState, useEffect } from "react"
import { Zap, Users, Music, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const classes = [
  {
    id: 1,
    title: "Cơ Bản Cho Người Mới",
    level: "Cấp 1-2",
    description: "Hoàn hảo cho những người mới bắt đầu. Học các nguyên tắc cơ bản, tiến hành hợp âm, và những bài hát đầu tiên.",
    icon: Music,
    duration: "8 tuần",
  },
  {
    id: 2,
    title: "Phát Triển Trung Cấp",
    level: "Cấp 3-4",
    description: "Phát triển kỹ năng kỹ thuật, lý thuyết âm nhạc, và bắt đầu biểu diễn các sáng tác gốc.",
    icon: Zap,
    duration: "10 tuần",
  },
  {
    id: 3,
    title: "Biểu Diễn Nâng Cao",
    level: "Cấp 5-6",
    description: "Thành thạo các kỹ thuật phức tạp, chơi ngẫu hứng, và làm chủ guitar lead để biểu diễn.",
    icon: Users,
    duration: "12 tuần",
  },
]

export default function ClassesGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % classes.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + classes.length) % classes.length)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % classes.length)
    setIsAutoPlay(false)
  }

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

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {classes.map((cls) => {
            const Icon = cls.icon
            return (
              <Card key={cls.id} className="bg-background border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:scale-105">
                <div className="p-8">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm text-primary font-semibold mb-4">
                    {cls.level}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{cls.title}</h3>
                  <p className="text-muted-foreground mb-6">{cls.description}</p>

                  <div className="space-y-3 mb-8 pb-8 border-b border-border/50">
                    <p className="text-sm text-muted-foreground">Thời gian: {cls.duration}</p>
                    <p className="text-sm italic text-accent">Giá cả - Inbox để biết thêm chi tiết</p>
                  </div>

                  <a href="https://www.facebook.com/GODZZHANDS" target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300">Đăng Ký Ngay</Button>
                  </a>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {classes.map((cls) => {
                  const Icon = cls.icon
                  return (
                    <div key={cls.id} className="w-full flex-shrink-0">
                      <Card className="bg-background border-border/50 mx-4">
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
                            <p className="text-sm text-muted-foreground">Thời gian: {cls.duration}</p>
                            <p className="text-sm italic text-accent">Giá cả - Inbox để biết thêm chi tiết</p>
                          </div>

                          <a href="https://www.facebook.com/GODZZHANDS" target="_blank" rel="noopener noreferrer" className="block">
                            <Button className="w-full bg-primary hover:bg-primary/90">Đăng Ký Ngay</Button>
                          </a>
                        </div>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-primary/80 hover:bg-primary text-white transition-all"
              aria-label="Previous class"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-primary/80 hover:bg-primary text-white transition-all"
              aria-label="Next class"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {classes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlay(false)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-primary/30 w-2"
                  }`}
                  aria-label={`Go to class ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
