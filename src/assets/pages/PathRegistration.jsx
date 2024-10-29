import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { faChevronCircleLeft, faChevronCircleRight, faGlobe, } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import CoverPath from "../images/cover-path.png"
import PathIcon1 from "../images/path-icon-1.svg"
import PathIcon2 from "../images/path-icon-2.svg"
import PathIcon3 from "../images/path-icon-3.svg"
import PathIcon4 from "../images/path-icon-4.svg"

const PathRegistration = () => {
  return (
    <main className="relative w-full max-w-2xl mx-auto bg-gradienteight overflow-hidden">
      <div className="absolute w-full h-full bg-background-eight bg-cover z-0"></div>
      <section className="relative w-full max-w-lg mx-auto z-10">
        {/* Navbar */}
        <nav className="max-w-md mx-auto flex justify-between items-center py-5 px-5 md:px-0">
          <a href="https://politekniklp3i-tasikmalaya.ac.id" target="_blank" className="bg-white/30 hover:bg-white/20 py-2.5 px-5 rounded-full space-x-2 border-2 border-white/30" data-aos="fade-down">
            <FontAwesomeIcon icon={faGlobe} className="text-white drop-shadow" />
            <span className="text-white drop-shadow text-sm">Official Website</span>
          </a>
          <Link to={`/main`} type="button" className="bg-white hover:bg-gray-50 py-2.5 px-5 rounded-full space-x-2 shadow-lg" data-aos="fade-down" data-aos-delay="100">
            <FontAwesomeIcon icon={faHome} />
            <span className="text-gray-800 text-sm">Beranda</span>
          </Link>
        </nav>
        <h2 className="text-2xl text-center text-white font-bold mt-5 drop-shadow" data-aos="fade-right" data-aos-delay="300">Alur Daftar Online yang Mudah Banget!</h2>
        <div className="w-full py-10 bg-white rounded-t-3xl px-5 md:px-0 mt-10" data-aos="fade-down"
                 data-aos-delay="100">
          <div className="w-2/3 flex flex-col gap-4">
            <div className="space-y-1 border border-gray-200 p-5 rounded-2xl">
              <img src={PathIcon1} alt="Path Icon"/>
              <h2 className="font-bold text-[#39B594]">01 DAFTAR</h2>
              <p className="text-sm text-gray-800">Mengisi Form Pendaftaran Online <a
                  href="https://pmb.politekniklp3i-tasikmalaya.ac.id" target="_blank"
                  className="underline">pmb.politekniklp3i-tasikmalaya.ac.id</a></p>
            </div>
            <div className="space-y-1 border border-gray-200 p-5 rounded-2xl">
              <img src={PathIcon2} alt="Path Icon"/>
              <h2 className="font-bold text-[#2F68B1]">02 DAFTAR</h2>
              <p className="text-sm text-gray-800">Pendaftaran Akun dengan Mengisi Alamat Email, No. WA Aktif &
                Password</p>
            </div>
            <div className="space-y-1 border border-gray-200 p-5 rounded-2xl">
              <img src={PathIcon3} alt="Path Icon"/>
              <h2 className="font-bold text-[#EE7B1D]">03 UPLOAD BERKAS</h2>
              <p className="text-sm text-gray-800">Melengkapi Informasi Pendaftaran dan Upload Berkas Melalui Akun yang
                Sudah di Daftarkan</p>
            </div>
            <div className="space-y-1 border border-gray-200 p-5 rounded-2xl">
              <img src={PathIcon4} alt="Path Icon"/>
              <h2 className="font-bold text-[#EA5C67]">04 DAFTAR ULANG</h2>
              <p className="text-sm text-gray-800">Pendaftaran Akun dengan Mengisi Alamat Email, No. WA Aktif &
                Password</p>
            </div>
          </div>
          <div className="mt-10 space-x-5 ml-10">
            <Link to={`/organization`} type="button">
              <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-black"/>
            </Link>
            <Link to={`/infopmb`} type="button">
              <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-black"/>
            </Link>
          </div>
        </div>
        <img src={CoverPath} className="fixed w-48 z-50 bottom-0 right-[-10px]" />
      </section>
    </main>
  )
}

export default PathRegistration