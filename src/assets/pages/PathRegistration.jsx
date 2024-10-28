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

const PathRegistration = () => {
  return (
    <main className="relative w-full max-w-2xl mx-auto bg-gradienteight overflow-hidden">
      <div className="absolute w-full h-full bg-background-eight bg-cover z-0"></div>
      <section className="w-full max-w-lg mx-auto relative z-10">
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
        <div className="grid grid-cols-1 gap-3 py-10 bg-white rounded-t-3xl px-5 md:px-0 mt-10" data-aos="fade-down" data-aos-delay="100">
          
        </div>
        <div className="flex justify-center items-center gap-5 mb-20">
          <Link to={`/organization`} type="button">
            <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white" />
          </Link>
          <Link to={`/infopmb`} type="button">
            <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-white" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PathRegistration