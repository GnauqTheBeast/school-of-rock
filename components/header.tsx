"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ThemeSwitcher from "@/components/theme-switcher"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image
            src="/sor.jpg"
            alt="School of Rock Logo"
            width={40}
            height={40}
            className="rounded-lg object-cover"
          />
          <span className="text-xl font-bold">SCHOOL OF ROCK</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#classes" className="hover:text-primary transition">
            Lớp Học
          </a>
          <a href="#instructors" className="hover:text-primary transition">
            Giáo Viên
          </a>
          <a href="#about" className="hover:text-primary transition">
            Về Chúng Tôi
          </a>
          <ThemeSwitcher />
          <Button className="bg-primary hover:bg-primary/90">Bắt Đầu Ngay</Button>
        </div>

        {/* Mobile Menu Button and Theme Switcher */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitcher />
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-border md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#classes" className="hover:text-primary transition">
                Lớp Học
              </a>
              <a href="#instructors" className="hover:text-primary transition">
                Giáo Viên
              </a>
              <a href="#about" className="hover:text-primary transition">
                Về Chúng Tôi
              </a>
              <Button className="bg-primary hover:bg-primary/90 w-full">Bắt Đầu Ngay</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
