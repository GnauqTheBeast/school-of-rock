"use client"

import { Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function YouTubeSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Youtube className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Xem Kênh
                <span className="block text-primary">YouTube Của Chúng Tôi</span>
              </h2>
            </div>

            <p className="text-xl text-muted-foreground mb-8">
              Khám phá các bài hướng dẫn guitar, mẹo chơi rock, và những khoảnh khắc tuyệt vời từ các lớp học của chúng tôi. Đăng ký kênh YouTube để không bỏ lỡ bất kỳ video mới nào.
            </p>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Halaze89Official</span> - Nơi âm nhạc rock được sống động
              </p>
              <a
                href="https://www.youtube.com/@Halaze89Official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
                >
                  <Youtube className="w-5 h-5" />
                  Đăng Ký Kênh YouTube
                </Button>
              </a>
            </div>
          </div>

          {/* Right: YouTube Embed */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/-OpL_pbBkqc"
                  title="School of Rock - Guitar Lesson"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
