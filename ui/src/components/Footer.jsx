export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Team X. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#home" className="hover:text-slate-900">Home</a>
          <a href="#device-info" className="hover:text-slate-900">Device Info</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </div>
      </div>
    </footer>
  )
}


