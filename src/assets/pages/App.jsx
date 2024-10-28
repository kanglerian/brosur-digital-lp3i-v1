import LogoOne from "../../assets/logo-lp3i.svg"
import LogoTwo from "../../assets/logo-global.png"
import Cover from "../../assets/images/cover.png"
import TaglinePutih from "../../assets/tagline-putih.svg"
import QRCode from "../../assets/images/qrcode.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import Circle from "../../assets/images/circle.png"
import { Link } from "react-router-dom"

const App = () => {
  return (
    <main className="relative w-full max-w-2xl mx-auto bg-gradientone overflow-hidden">
      <div className="absolute w-full h-full bg-background-one bg-cover z-0"></div>
      <section className="w-full max-w-lg mx-auto relative z-10">
        {/* Navbar */}
        <nav className="max-w-sm mx-auto">
          <div className="w-full flex items-center justify-center gap-4 pb-5 py-2 mx-auto rounded-b-3xl bg-white shadow-md">
            <img src={LogoOne} alt="Politeknik LP3I Kampus Tasikmalaya" className="h-10" data-aos="fade-down" />
            <img src={LogoTwo} alt="Global Mandiri" className="h-8" data-aos="fade-down" data-aos-delay="100" />
          </div>
        </nav>
        {/* Cover */}
        <div className="relative w-11/12 ml-auto mt-10">
          <div className="h-80 bg-[url('./assets/facilities/gedung.jpg')] bg-cover rounded-bl-3xl border-4 border-r-0 border-brosurfour" data-aos="fade-left"></div>
          <img src={Cover} alt="Ilustrasi" className="w-4/6 absolute bottom-[-100px] right-0" data-aos="fade-left" data-aos-delay="100" />
        </div>
        {/* Feature */}
        <div className="relative flex items-center justify-between gap-5 mt-10 z-15">
          <div className="w-1/2 bg-gradient-to-bl from-brosurthree to-brosurfour p-4 rounded-tr-3xl" data-aos="fade-right" data-aos-delay="150">
            <h2 className="text-white font-bold text-sm drop-shadow"><span className="text-2xl">90%</span> MAHASISWA TERTEMPATKAN KERJA.</h2>
          </div>
          <div className="w-1/2 pr-4">
            <img src={TaglinePutih} alt="Tagline" className="drop-shadow" data-aos="fade-down" data-aos-delay="150" />
            <h2 className="font-bold text-lg text-white drop-shadow" data-aos="fade-up" data-aos-delay="150">PMB 2025/2026</h2>
          </div>
        </div>
        {/* QRCode & Info PMB */}
        <div className="w-full flex items-start justify-center gap-5 px-5 pt-5">
          {/* QRCode */}
          <div className="w-3/6 bg-white p-2 rounded-xl shadow-lg" data-aos="fade-right">
            <h5 className="text-center text-sm font-medium text-sky-600">Daftar Online</h5>
            <img src={QRCode} alt="QRCode" className="w-full" />
          </div>
          {/* Start */}
          <div className="w-full space-y-4 pb-10" data-aos="fade-left">
            <div className="relative flex justify-start">
              <img src={Circle} alt="Circle" className="w-32 z-0 absolute top-[-10px]" />
              <Link to={`/main`} type="button" className="relative bg-gradient-to-t from-brosurthree to-brosurfour hover:bg-brosurthree text-white border-2 border-white font-medium rounded-full text-sm px-5 py-2.5 text-center shadow-lg z-10 left-5">
                <span>MULAI</span>
              </Link>
            </div>
            <div className="w-full flex items-center gap-2 text-white">
              <FontAwesomeIcon icon={faWhatsappSquare} size="2xl" />
              <h5>
                <span className="text-sm">Info PMB</span><br />
                <p className="font-bold text-base">0813 1360 8558</p>
              </h5>
            </div>
            <div className="flex items-center gap-2 text-white">
              <FontAwesomeIcon icon={faMapLocationDot} size="xl" />
              <h5>
                <span className="text-xs font-medium">Alamat Kampus</span><br />
                <p className="font-light text-xs leading-tight">Jl. Ir. H. Juanda No.106, Panglayungan, Kec. Cipedes Kota Tasikmalaya, Jawa Barat 46151</p>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App