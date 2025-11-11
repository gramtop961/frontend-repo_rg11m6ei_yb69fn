export default function Categories() {
  const categories = [
    { key: 'daily', name: 'Daily Scarves', image: 'https://images.unsplash.com/photo-1758525223107-f0d49ec4c5c9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYWlseSUyMFNjYXJ2ZXN8ZW58MHwwfHx8MTc2Mjg4MDIzMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { key: 'luxury', name: 'Special Occasion', image: 'https://images.unsplash.com/photo-1758525223107-f0d49ec4c5c9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYWlseSUyMFNjYXJ2ZXN8ZW58MHwwfHx8MTc2Mjg4MDIzMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
    { key: 'sets', name: 'Sets', image: 'https://images.unsplash.com/photo-1758525223107-f0d49ec4c5c9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYWlseSUyMFNjYXJ2ZXN8ZW58MHwwfHx8MTc2Mjg4MDIzMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  ]

  return (
    <section id="categories" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl text-[#333333] mb-8">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((c) => (
            <a key={c.key} href={`#${c.key}`} className="group relative rounded-2xl overflow-hidden border border-black/5 shadow-sm">
              <img src={c.image} alt={c.name} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <p className="font-serif text-white text-xl">{c.name}</p>
                <span className="px-3 py-1 rounded-full bg-white/90 text-[#228B22] text-sm">Shop</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
