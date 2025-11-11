export default function Testimonials() {
  const items = [
    { q: 'Feather-light and luxurious. My go-to for every outfit.', a: 'Neda' },
    { q: 'Elegant and timeless. The details are stunning.', a: 'Mina' },
    { q: 'Minimal yet expressive. Love the textures.', a: 'Aylin' },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-[#333333] mb-8">What our customers say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl bg-[#F5F5DC] border border-black/5 p-6 shadow-sm">
              <div className="text-[#228B22] text-4xl leading-none">“</div>
              <p className="text-[#333333] mt-2">{t.q}</p>
              <p className="text-[#666666] mt-4">— {t.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
