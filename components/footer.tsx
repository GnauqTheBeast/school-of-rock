"use client"

import FacebookEmbed from "@/components/facebook-embed"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Facebook Embed Section */}
        <div className="mb-16 pb-12 border-b border-border">
          <h3 className="text-center text-lg font-bold mb-8">Theo Dõi Chúng Tôi Trên Facebook</h3>
          <FacebookEmbed />
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">School of Rock</h3>
            <p className="text-muted-foreground">Giáo dục guitar rock tại Hà Nội cho mọi cấp độ kỹ năng.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Lớp Học</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Người Mới
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Trung Cấp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Nâng Cao
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Về Chúng Tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Liên Hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Câu Hỏi Thường Gặp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kết Nối</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © 2025 School of Rock. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
