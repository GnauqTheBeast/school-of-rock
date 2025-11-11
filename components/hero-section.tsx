"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance leading-tight">
            Giải Phóng
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Tinh Thần Rock Của Bạn
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Tham gia cộng đồng guitar sôi động nhất tại Hà Nội. Học tập từ các giáo viên hàng đầu thế giới và trở thành guitarist mà bạn luôn mơ ước.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Bắt Đầu Hành Trình
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Xem Demo
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border">
            <div>
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground">Học Viên Tích Cực</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">15+</p>
              <p className="text-muted-foreground">Giáo Viên Chuyên Nghiệp</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">10</p>
              <p className="text-muted-foreground">Cấp Độ Lớp Học</p>
            </div>
          </div>
        </div>

        <div className="relative h-96 md:h-full min-h-96">
          <img
            src="/guitarist-performing-energetic-rock-stage.jpg"
            alt="Guitarist performing"
            className="w-full h-full object-cover rounded-lg border-4 border-primary/30"
          />
        </div>
      </div>
    </section>
  )
}
