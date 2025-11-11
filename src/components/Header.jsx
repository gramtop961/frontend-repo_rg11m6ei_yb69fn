import { useState } from 'react'
import { Menu, ShoppingCart, Search, ChevronDown } from 'lucide-react'

const navLinkClass = 'text-[#333333] hover:text-[#228B22] transition-colors'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/80 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-[#F5F5DC] grid place-items-center shadow-sm">
              <span className="text-2xl font-serif text-[#228B22]">P</span>
            </div>
            <div className="leading-tight">
              <p className="font-serif text-lg text-[#333333]">Parmian</p>
              <p className="text-xs text-[#666666]">Elegance in Every Thread</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a className={navLinkClass} href="#home">Home</a>
            <div className="relative">
              <button onMouseEnter={() => setShopOpen(true)} onMouseLeave={() => setShopOpen(false)} className={`${navLinkClass} inline-flex items-center gap-1`}>
                Shop <ChevronDown size={16} />
              </button>
              {shopOpen && (
                <div onMouseEnter={() => setShopOpen(true)} onMouseLeave={() => setShopOpen(false)} className="absolute mt-2 w-48 rounded-md border border-black/5 bg-white shadow-lg p-2">
                  <a href="#daily" className="block px-3 py-2 rounded hover:bg-[#F5F5DC] text-[#333333]">Daily</a>
                  <a href="#luxury" className="block px-3 py-2 rounded hover:bg-[#F5F5DC] text-[#333333]">Luxury</a>
                  <a href="#sets" className="block px-3 py-2 rounded hover:bg-[#F5F5DC] text-[#333333]">Sets</a>
                </div>
              )}
            </div>
            <a className={navLinkClass} href="#about">About</a>
            <a className={navLinkClass} href="#contact">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-white/70 border border-black/5 rounded-full px-3 py-1.5 shadow-sm">
              <Search size={16} className="text-[#666666]" />
              <input placeholder="Search scarves" className="bg-transparent placeholder-[#666666] text-sm focus:outline-none" />
            </div>
            <button aria-label="Cart" className="relative p-2 rounded-full hover:bg-[#F5F5DC] transition-colors">
              <ShoppingCart size={20} className="text-[#333333]" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#228B22] text-white text-[10px] grid place-items-center">2</span>
            </button>
            <button className="md:hidden p-2 rounded hover:bg-[#F5F5DC]" onClick={() => setOpen(!open)} aria-label="Menu">
              <Menu />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-2 border-t border-black/5 pt-3">
              <a className="block px-2 py-2 rounded hover:bg-[#F5F5DC] text-[#333333]" href="#home" onClick={() => setOpen(false)}>Home</a>
              <details className="px-2">
                <summary className="cursor-pointer text-[#333333] py-2 flex items-center gap-1">Shop</summary>
                <div className="pl-4 space-y-1">
                  <a href="#daily" className="block px-2 py-1 rounded hover:bg-[#F5F5DC]">Daily</a>
                  <a href="#luxury" className="block px-2 py-1 rounded hover:bg-[#F5F5DC]">Luxury</a>
                  <a href="#sets" className="block px-2 py-1 rounded hover:bg-[#F5F5DC]">Sets</a>
                </div>
              </details>
              <a className="block px-2 py-2 rounded hover:bg-[#F5F5DC] text-[#333333]" href="#about" onClick={() => setOpen(false)}>About</a>
              <a className="block px-2 py-2 rounded hover:bg-[#F5F5DC] text-[#333333]" href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
