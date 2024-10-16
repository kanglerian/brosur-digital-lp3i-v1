import React from "react"
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
    <main className="relative w-full max-w-xl mx-auto bg-gradientone overflow-hidden">
      <div className="absolute w-full h-full bg-background-one bg-cover z-0"></div>
      <section className="relative z-10">
        <nav className="max-w-sm mx-auto flex items-center justify-center gap-4 py-3 rounded-b-3xl bg-white shadow-md">
          <img src={LogoOne} alt="Politeknik LP3I Kampus Tasikmalaya" className="h-12" data-aos="fade-down" />
          <img src={LogoTwo} alt="Global Mandiri" className="h-10" data-aos="fade-down" data-aos-delay="100" />
        </nav>
        <div className="relative w-11/12 ml-auto mt-10">
          <div className="h-80 bg-[url('./assets/facilities/gedung.jpg')] bg-cover rounded-bl-3xl border-4 border-r-0 border-brosurfour" data-aos="fade-left"></div>
          <img src={Cover} alt="Ilustrasi" className="absolute bottom-[-100px] right-0" data-aos="fade-left" data-aos-delay="100" />
        </div>
        <div className="relative flex items-center gap-5 mt-10 z-15">
          <div className="w-1/2 bg-gradient-to-bl from-brosurthree to-brosurfour p-4 rounded-tr-3xl" data-aos="fade-right" data-aos-delay="150">
            <h2 className="text-white font-bold text-lg drop-shadow"><span className="text-4xl">90%</span> MAHASISWA TERTEMPATKAN KERJA.</h2>
          </div>
          <div className="w-1/2">
            <img src={TaglinePutih} alt="Tagline" className="drop-shadow" data-aos="fade-down" data-aos-delay="150" />
            <h2 className="font-bold text-lg text-white drop-shadow" data-aos="fade-up" data-aos-delay="150">PMB 2025/2026</h2>
          </div>
        </div>
        <div className="relative flex items-center gap-5 p-10">
          <div className="bg-white p-2 rounded-xl shadow-lg" data-aos="fade-right" data-aos-delay="150">
            <h5 className="text-center text-sm font-medium text-sky-600">Daftar Online</h5>
            <img src={QRCode} alt="QRCode" className="w-40" />
          </div>
          <div className="space-y-2"  data-aos="fade-left" data-aos-delay="150">
            <div className="flex items-center justify-between gap-5">
              <div className="w-full flex items-center gap-2 text-white">
                <FontAwesomeIcon icon={faWhatsappSquare} size="2xl" />
                <h5>
                  <span className="text-sm">Info PMB</span><br />
                  <p className="font-bold text-base">0813 1360 8558</p>
                </h5>
              </div>
              <div className="w-1/2 relative flex justify-center">
                <img src={Circle} alt="Circle" className="w-52 z-0 absolute top-[-10px]" />
                <Link to={`/main`} type="button" className="relative bg-gradient-to-t from-brosurthree to-brosurfour hover:bg-brosurthree text-white border-2 border-white font-medium rounded-full text-sm px-5 py-2.5 text-center shadow-lg z-10">
                  <span>MULAI</span>
                </Link>
              </div>
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