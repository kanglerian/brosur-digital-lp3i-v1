import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { faChevronCircleLeft, faChevronCircleRight, faGlobe, } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import LearnOne from "../learn/learn-1.jpg"

const Achievement = () => {
  return (
    <main className="relative w-full max-w-2xl mx-auto bg-gradientone overflow-hidden">
      <div className="absolute w-full h-full bg-background-one bg-cover z-0"></div>
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
        <h2 className="text-2xl text-center text-white font-bold drop-shadow mt-4" data-aos="fade-right" data-aos-delay="300">Bukan cuma Ngalamin, tapi juga Bikin Prestasi!</h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="bg-white rounded-xl drop-shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            <h2 className="bg-brosurfour text-gray-900 font-bold p-3 rounded-b-xl text-sm text-center">Prestasi Mahasiswa</h2>
            <div className="p-4 text-xs">
              <ul className="list-disc text-gray-800 ml-4 space-y-2">
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl drop-shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <h2 className="bg-brosurfour text-gray-900 font-bold p-3 rounded-b-xl text-sm text-center">Prestasi Dosen</h2>
            <div className="p-4 text-xs">
              <ul className="list-disc text-gray-800 ml-4 space-y-2">
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
                <li>Juara 1 Business Plan, Management Competition Season 3 UNIGAL 2022</li>
              </ul>
            </div>
          </div>
          <img src={LearnOne} alt="Learn 1" className="rounded-2xl border-2 border-white/50" data-aos="fade-up" data-aos-delay="100" />
          <img src={LearnOne} alt="Learn 2" className="rounded-2xl border-2 border-white/50" data-aos="fade-up" data-aos-delay="200" />
          <img src={LearnOne} alt="Learn 3" className="rounded-2xl border-2 border-white/50" data-aos="fade-up" data-aos-delay="300" />
          <img src={LearnOne} alt="Learn 4" className="rounded-2xl border-2 border-white/50" data-aos="fade-up" data-aos-delay="400" />
        </div>
        <div className="flex justify-center items-center gap-5 mb-20 mt-10">
          <Link to={`/work`} type="button">
            <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white" />
          </Link>
          <Link to={`/testimoni`} type="button">
            <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-white" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Achievement