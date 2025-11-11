export default function Footer() {
  return (
    <footer className="bg-[#145214] text-[#F5F5DC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-[#F5F5DC] grid place-items-center">
              <span className="text-2xl font-serif text-[#228B22]">P</span>
            </div>
            <span className="font-serif text-xl">Parmian</span>
          </div>
          <p className="mt-3 text-sm opacity-90">Elegance in every thread.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Info</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Social</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#instagram" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <form className="flex gap-2">
            <input className="flex-1 rounded-full px-4 py-2 text-[#333333]" placeholder="Email address" />
            <button className="px-5 py-2 rounded-full bg-[#F5F5DC] text-[#145214] font-semibold">Join</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs py-4 bg-[#0f3f10]">© {new Date().getFullYear()} Parmian</div>
    </footer>
  )
}
