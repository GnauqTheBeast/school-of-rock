import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "School of Rock Hà Nội - Lớp học Đàn Guitar",
  description:
    "Học đàn guitar từ các giáo viên chuyên nghiệp tại Hà Nội. Tham gia cộng đồng sôi động của chúng tôi và khám phá đam mê rock and roll của bạn.",
  generator: "v0.app",
  icons: {
    icon: "/sor.jpg",
    apple: "/sor.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
