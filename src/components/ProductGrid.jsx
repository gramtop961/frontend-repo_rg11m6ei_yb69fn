const products = [
  { id: 1, name: 'Caspian Breeze', price: 89, image: 'https://images.unsplash.com/photo-1761852771177-7c7b4b721dac?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXNwaWFuJTIwQnJlZXplfGVufDB8MHx8fDE3NjI4ODAyMzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Tehran Dawn', price: 110, image: 'https://images.unsplash.com/photo-1761852771177-7c7b4b721dac?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXNwaWFuJTIwQnJlZXplfGVufDB8MHx8fDE3NjI4ODAyMzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Persian Rose', price: 120, image: 'https://images.unsplash.com/photo-1761852771177-7c7b4b721dac?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXNwaWFuJTIwQnJlZXplfGVufDB8MHx8fDE3NjI4ODAyMzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 4, name: 'Silk Garden', price: 140, image: 'https://images.unsplash.com/photo-1761852771177-7c7b4b721dac?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXNwaWFuJTIwQnJlZXplfGVufDB8MHx8fDE3NjI4ODAyMzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 5, name: 'Feather Mist', price: 95, image: 'https://images.unsplash.com/photo-1761852771177-7c7b4b721dac?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXNwaWFuJTIwQnJlZXplfGVufDB8MHx8fDE3NjI4ODAyMzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 6, name: 'Ziba Noir', price: 150, image: 'https://images.unsplash.com/photo-1761852771177-7c7b4b721dac?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXNwaWFuJTIwQnJlZXplfGVufDB8MHx8fDE3NjI4ODAyMzF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
]

export default function ProductGrid() {
  return (
    <section id="latest" className="py-20 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl text-[#333333]">Latest Collections</h2>
            <p className="text-[#666666]">Discover the newest arrivals designed for everyday elegance.</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-[#228B22] hover:underline">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl overflow-hidden bg-[#F5F5DC] border border-black/5 shadow-sm">
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-72 w-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-xl text-[#333333]">{p.name}</h3>
                <p className="text-[#666666]">${p.price}</p>
                <button className="mt-3 w-full rounded-full bg-[#228B22] text-white py-2 hover:bg-[#1b6f1b] transition-colors">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
