import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { faChevronCircleLeft, faChevronCircleRight, faGlobe, faQuestion } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import IconMKP from "../images/icon-mkp.svg"
import IconMP from "../images/icon-dm.svg"
import IconVokasi from "../images/icon-vokasi.svg"

const Prodi = () => {
  return (
    <main className="relative w-full max-w-2xl mx-auto bg-gradientthree overflow-hidden">
      <div className="absolute w-full h-full bg-background-three bg-cover z-0"></div>
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
        {/* Cover */}
        <header className="h-60 bg-[url('./assets/images/cover-main.jpg')] bg-cover bg-center rounded-3xl border-4 border-brosurfour" data-aos="fade-left" data-aos-delay="200"></header>
        {/* Title */}
        <h2 className="text-2xl text-center text-white font-bold mt-5 drop-shadow" data-aos="fade-right" data-aos-delay="300">Program Studi<br />yang Bikin Kamu Makin Kece!</h2>
        {/* Content */}
        <div className="grid grid-cols-1 gap-3 py-10">
          <Link to={`/mp`} type="button" className="flex flex-col items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="100">
            <img src={IconMP} alt="Icon Prodi" />
            <p className="text-sm text-left font-bold">D3 Digital Marketing Management</p>
          </Link>
          <Link to={`/mkp`} type="button" className="flex flex-col items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="200">
            <img src={IconMKP} alt="Icon Prodi" />
            <p className="text-sm text-left font-bold">D3 Manajemen Keuangan Perbankan</p>
          </Link>
          <Link to={`/why`} type="button" className="flex flex-col items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="100">
            <img src={IconVokasi} alt="Icon Prodi" />
            <p className="text-sm text-left font-bold">Program Vokasi 2 Tahun</p>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-5 mb-20">
          <Link to={`/why`} type="button">
            <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white" />
          </Link>
          <Link to={`/learn`} type="button">
            <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-white" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Prodi