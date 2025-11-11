export default function About() {
  return (
    <section id="about" className="py-20 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-serif text-3xl text-[#333333]">About Parmian</h2>
          <p className="mt-4 text-[#666666] leading-relaxed">
            Inspired by Persian grace and modern minimalism, Parmian scarves are designed to be feather-light yet enduring. Each piece blends cultural motifs with contemporary silhouettes for effortless elegance.
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-2 bg-white border border-black/5 px-3 py-2 rounded-full shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#228B22]"></span> Quality stitching
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-black/5 px-3 py-2 rounded-full shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#90EE90]"></span> Minimal design
            </span>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 bg-[#F5F5DC] text-[#333333] px-4 py-2 rounded-full border border-black/5">
            <span className="h-2 w-2 rounded-full bg-[#228B22]"></span>
            Installments available for accessibility
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-xl" />
          <div className="absolute -bottom-6 -right-6 bg-[#228B22] text-white px-4 py-3 rounded-xl shadow">
            Crafted in small batches
          </div>
        </div>
      </div>
    </section>
  )
}
