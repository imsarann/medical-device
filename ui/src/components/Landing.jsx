import { MotionDiv } from './MotionPrimitives.jsx'

export default function Landing() {
  return (
    <div className="min-h-screen">
    <section className="py-10 sm:py-14">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <MotionDiv className="space-y-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Medical Device Intelligence</h1>
          <p className="text-slate-600">Explore recalls, safety alerts, and device information with a clean and responsive interface. Built with React and Tailwind CSS.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#device-info" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800">Get Started</a>
            <a href="#faq" className="inline-flex items-center rounded-lg bg-slate-100 text-slate-900 px-4 py-2 text-sm hover:bg-slate-200">Learn More</a>
          </div>
        </MotionDiv>
        <MotionDiv className="relative md:justify-self-end" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="aspect-[4/3] w-full max-w-md rounded-2xl bg-gradient-to-br from-indigo-100 via-sky-100 to-emerald-100 p-1">
            <div className="h-full w-full rounded-2xl bg-white/50 backdrop-blur flex items-center justify-center text-slate-500">
              <div className="text-center p-6">
                <div className="text-6xl mb-2">🩺</div>
                <p className="text-sm">Beautiful, minimal, and responsive UI with subtle motion.</p>
              </div>
            </div>
          </div>
        </MotionDiv>
        </div>
      </section>
    </div>
  )
}


