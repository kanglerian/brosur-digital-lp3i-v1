import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { faChevronCircleLeft, faChevronCircleRight, faGlobe, } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import LearnOne from "../learn/learn-1.jpg"
import OrmawaOne from "../images/ormawa-1.png"
import OrmawaTwo from "../images/ormawa-2.png"
import OrmawaThree from "../images/ormawa-3.png"
import OrmawaFour from "../images/ormawa-4.png"
import OrmawaFive from "../images/ormawa-5.png"
import OrmawaSix from "../images/ormawa-6.png"
import OrmawaSeven from "../images/ormawa-7.png"
import OrmawaEight from "../images/ormawa-8.png"
import OrmawaNine from "../images/ormawa-9.png"

const Organization = () => {
  return (
    <main className="relative w-full max-w-2xl mx-auto bg-gradientsix overflow-hidden">
      <div className="absolute w-full h-full bg-background-six bg-cover z-0"></div>
      <section className="w-full max-w-lg mx-auto relative z-10 px-5 md:px-0">
        {/* Navbar */}
        <nav className="max-w-md mx-auto flex justify-between items-center py-5">
          <a href="https://politekniklp3i-tasikmalaya.ac.id" target="_blank" className="bg-white/30 hover:bg-white/20 py-2.5 px-5 rounded-full space-x-2 border-2 border-white/30" data-aos="fade-down">
            <FontAwesomeIcon icon={faGlobe} className="text-white drop-shadow" />
            <span className="text-white drop-shadow text-sm">Official Website</span>
          </a>
          <Link to={`/main`} type="button" className="bg-white hover:bg-gray-50 py-2.5 px-5 rounded-full space-x-2 shadow-lg" data-aos="fade-down" data-aos-delay="100">
            <FontAwesomeIcon icon={faHome} />
            <span className="text-gray-800 text-sm">Beranda</span>
          </Link>
        </nav>
        <h2 className="text-2xl text-center text-white font-bold mt-5 drop-shadow" data-aos="fade-right" data-aos-delay="300">Organisasi Mahasiswa yang Seru!</h2>
        <div className="grid grid-cols-1 gap-3 py-10" data-aos="fade-down" data-aos-delay="100">
          <img src={LearnOne} alt="Learn 1" className="rounded-2xl border-2 border-white/50" />
          <img src={LearnOne} alt="Learn 2" className="rounded-2xl border-2 border-white/50" />
          <img src={LearnOne} alt="Learn 3" className="rounded-2xl border-2 border-white/50" />
          <img src={LearnOne} alt="Learn 4" className="rounded-2xl border-2 border-white/50" />
        </div>
        <h2 className="text-xl text-center text-white font-bold drop-shadow mt-4" data-aos="fade-right" data-aos-delay="300">Ragam Organisasi Mahasiswa</h2>
        <div className="grid grid-cols-3 gap-3 py-10" data-aos="fade-down" data-aos-delay="100">
          <div className="bg-gray-50 border-2 border-gray-400/50 flex flex-col justify-center items-center gap-3 px-5 py-2.5 rounded-xl">
            <img src={OrmawaOne} alt="Ormawa 1" />
            <h4 className="text-xs font-bold text-center">Badan Eksekutif Mahasiswa</h4>
          </div>
          <div className="bg-gray-50 border-2 border-gray-400/50 flex flex-col justify-center items-center gap-3 px-5 py-2.5 rounded-xl">
            <img src={OrmawaTwo} alt="Ormawa 2" />
            <h4 className="text-xs font-bold text-center">HIMA Manajemen Pemasaran</h4>
          </div>
          <div className="bg-gray-50 border-2 border-gray-400/50 flex flex-col justify-center items-center gap-3 px-5 py-2.5 rounded-xl">
            <img src={OrmawaThree} alt="Ormawa 3" />
            <h4 className="text-xs font-bold text-center">HIMA Manajemen Keuangan Perbankan</h4>
          </div>
          <div className="bg-gray-50 border-2 border-gray-400/50 flex flex-col justify-center items-center gap-3 px-5 py-2.5 rounded-xl">
            <img src={OrmawaFour} alt="Ormawa 4" />
            <h4 className="text-xs font-bold text-center">LP3I Computer Club</h4>
          </div>
          <div className="bg-gray-50 border-2 border-gray-400/50 flex flex-col justify-center items-center gap-3 px-5 py-2.5 rounded-xl">
            <img src={OrmawaFive} alt="Ormawa 5" />
            <h4 className="text-xs font-bold text-center">LP3I Innovation Art Club</h4>
          </div>
          <div className="bg-gray-50 border-2 border-gray-400/50 flex flex-col justify-center items-center gap-3 px-5 py-2.5 rounded-xl">
            <img src={OrmawaSix} alt="Ormawa 6" />
            <h4 className="text-xs font-bold text-center">LP3I Moslem Association</h4>
          </div>
          <div className="bg-gray-50 border-2 border-gray-400/50 flex flex-col justify-center items-center gap-3 px-5 py-2.5 rounded-xl">
            <img src={OrmawaSeven} alt="Ormawa 7" />
            <h4 className="text-xs font-bold text-center">LP3I Otomotif Club</h4>
          </div>
          <div className="bg-gray-50 border-2 border-gray-400/50 flex flex-col justify-center items-center gap-3 px-5 py-2.5 rounded-xl">
            <img src={OrmawaEight} alt="Ormawa 8" />
            <h4 className="text-xs font-bold text-center">LP3I Sport Club</h4>
          </div>
          <div className="bg-gray-50 border-2 border-gray-400/50 flex flex-col justify-center items-center gap-3 px-5 py-2.5 rounded-xl">
            <img src={OrmawaNine} alt="Ormawa 9" />
            <h4 className="text-xs font-bold text-center">Student English Association of LP3I</h4>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 mb-20">
          <Link to={`/testimoni`} type="button">
            <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white" />
          </Link>
          <Link to={`/pathregistration`} type="button">
            <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-white" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Organization