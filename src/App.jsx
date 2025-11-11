import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductGrid from './components/ProductGrid'
import About from './components/About'
import Testimonials from './components/Testimonials'
import InstagramCTA from './components/InstagramCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#333333]">
      <Header />
      <main>
        <Hero />
        <Categories />
        <ProductGrid />
        <About />
        <Testimonials />
        <InstagramCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
