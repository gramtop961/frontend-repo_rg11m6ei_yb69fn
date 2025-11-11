export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#90EE90]/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#228B22]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#333333] tracking-tight">
              Parmian: Elegance in Every Thread
            </h1>
            <p className="mt-5 text-[#666666] leading-relaxed">
              Persian-inspired scarves crafted with modern minimalism. Soft textures, precise stitching, and feather-light grace.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#latest" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#228B22] text-white hover:bg-[#1b6f1b] transition-colors">
                Shop Now
              </a>
              <a href="#about" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#228B22]/30 text-[#228B22] hover:bg-[#F5F5DC]">
                About Parmian
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-xl" />
            <div className="absolute -bottom-6 -left-6 bg-[#F5F5DC] text-[#333333] px-4 py-3 rounded-xl shadow border border-black/5">
              <p className="text-sm">Feather-light comfort</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
