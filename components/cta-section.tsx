"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
          Sẵn Sàng
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Khám Phá Hành Trình Rock?
          </span>
        </h2>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Tham gia hàng trăm sinh viên đã biến giấc mơ âm nhạc của họ thành hiện thực. Bài học đầu tiên của bạn bắt đầu hôm nay.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Đăng Ký Ngay
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            Lên Lịch Tham Vấn
          </Button>
        </div>

        <div className="mt-12 p-8 bg-card border border-border rounded-lg">
          <p className="text-sm text-muted-foreground mb-3">Ưu Đãi Có Hạn</p>
          <p className="text-2xl font-bold text-accent">Nhận 3 lớp đầu tiên với giảm 50%! 🎸</p>
        </div>
      </div>
    </section>
  )
}
