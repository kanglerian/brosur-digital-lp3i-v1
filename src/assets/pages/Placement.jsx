import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { faChevronCircleLeft, faChevronCircleRight, faGlobe, } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import LearnOne from "../learn/learn-1.jpg"
import Iconmp from "../images/icon-dm.svg"
import Iconmkp from "../images/icon-mkp.svg"
import Iconto from "../images/icon-to.svg"

const Placement = () => {
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
        <h2 className="text-2xl text-center text-white font-bold mt-5 drop-shadow" data-aos="fade-right" data-aos-delay="300">Mereka yang Sudah Berkarir Diusia Muda!</h2>
        <iframe className="w-full h-auto aspect-video max-w-full rounded-2xl my-10" src="https://www.youtube.com/embed/mB2QOQNuPvM?si=7UzbZo4JtAL0OLLM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        <h2 className="text-2xl text-center text-white font-bold drop-shadow" data-aos="fade-right" data-aos-delay="300">Pilih Berdasarkan Program Studi</h2>
        <div className="relative grid grid-cols-` gap-3 py-10" data-aos="fade-down" data-aos-delay="100">
          <Link to={`/mp`} type="button" className="bg-white hover:bg-white/90 flex flex-col justify-center items-center gap-3 p-5 rounded-2xl drop-shadow">
            <img src={Iconmp} alt="Icon DM" />
            <span className="font-bold">D3 Digital Marketing Management</span>
          </Link>
          <Link to={`/mkp`} type="button" className="bg-white hover:bg-white/90 flex flex-col justify-center items-center gap-3 p-5 rounded-2xl drop-shadow">
            <img src={Iconmkp} alt="Icon MKP" />
            <span className="font-bold">D3 Manajemen Keuangan Perbankan</span>
          </Link>
          <Link to={`/to`} type="button" className="bg-white hover:bg-white/90 flex flex-col justify-center items-center gap-3 p-5 rounded-2xl drop-shadow">
            <img src={Iconto} alt="Icon TO" />
            <span className="font-bold">Vokasi 2 Tahun Teknik Otomotif</span>
          </Link>
        </div>
        <div className="relative flex justify-center items-center gap-5 mb-20">
          <Link to={`/infopmb`} type="button">
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

export default Placement