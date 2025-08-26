import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx'
import DeviceForm from './components/DeviceForm.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <Navbar />
      <main id="home" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Landing />
        <section id="device-info" className="py-10 sm:py-14">
          <DeviceForm />
        </section>
        <section id="faq" className="py-10 sm:py-14">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  )
}

