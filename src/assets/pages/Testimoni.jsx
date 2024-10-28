import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { faChevronCircleLeft, faChevronCircleRight, faGlobe, } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import LearnOne from "../learn/learn-1.jpg"

const Testimoni = () => {
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
        <h2 className="text-2xl text-center text-white font-bold mt-5 drop-shadow" data-aos="fade-right" data-aos-delay="300">Kata Mereka yang Sudah Merasakannya Langsung!</h2>
        <div className="grid grid-cols-1 gap-3 py-10" data-aos="fade-down" data-aos-delay="100">
          <a href="https://www.instagram.com/reel/C4koBAhLXNq" target="_blank" className="relative rounded-2xl border-2 border-white/50 overflow-hidden">
            <img src={LearnOne} alt="Learn 1" />
            <span className="w-full absolute text-center py-2.5 text-xs bg-black/60 text-white font-bold bottom-0">Alumni Bekerja</span>
          </a>
          <div className="relative rounded-2xl border-2 border-white/50 overflow-hidden">
            <img src={LearnOne} alt="Learn 2" />
            <a href="https://www.instagram.com/lp3i.tasik/" target="_blank" className="w-full absolute text-center py-2.5 text-xs bg-black/60 text-white font-bold bottom-0">Alumni Berwirausaha</a>
          </div>
          <div className="relative rounded-2xl border-2 border-white/50 overflow-hidden">
            <img src={LearnOne} alt="Learn 1" />
            <a href="https://www.instagram.com/lp3i.tasik/" target="_blank" className="w-full absolute text-center py-2.5 text-xs bg-black/60 text-white font-bold bottom-0">Alumni PNS</a>
          </div>
          <div className="relative rounded-2xl border-2 border-white/50 overflow-hidden">
            <img src={LearnOne} alt="Learn 2" />
            <a href="https://www.instagram.com/lp3i.tasik/" target="_blank" className="w-full absolute text-center py-2.5 text-xs bg-black/60 text-white font-bold bottom-0">Aula Disini</a>
          </div>
          <div className="relative rounded-2xl border-2 border-white/50 overflow-hidden">
            <img src={LearnOne} alt="Learn 1" />
            <a href="https://www.instagram.com/lp3i.tasik/" target="_blank" className="w-full absolute text-center py-2.5 text-xs bg-black/60 text-white font-bold bottom-0">Aula Disini</a>
          </div>
          <div className="relative rounded-2xl border-2 border-white/50 overflow-hidden">
            <img src={LearnOne} alt="Learn 2" />
            <a href="https://www.instagram.com/lp3i.tasik/" target="_blank" className="w-full absolute text-center py-2.5 text-xs bg-black/60 text-white font-bold bottom-0">Aula Disini</a>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 mb-20">
          <Link to={`/achievement`} type="button">
            <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white" />
          </Link>
          <Link to={`/organization`} type="button">
            <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-white" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Testimoni