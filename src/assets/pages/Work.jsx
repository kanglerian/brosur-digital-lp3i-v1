import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { faChevronCircleLeft, faChevronCircleRight, faGlobe, } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import LearnOne from "../learn/learn-1.jpg"
import PR from "../images/PR.png"
import Chart2022 from "../images/chart-2022.svg"
import Chart2023 from "../images/chart-2023.svg"
import Chart2024 from "../images/chart-2024.svg"

const Work = () => {
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
        <h2 className="text-2xl text-left text-white font-bold drop-shadow mt-4" data-aos="fade-right" data-aos-delay="300">Siap Kerja? Kita Bantu Loh!</h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div className="relative rounded-2xl border-2 border-white/50 overflow-hidden" data-aos="fade-left" data-aos-delay="100">
            <img src={LearnOne} alt="Learn 1" />
            <a href="https://www.instagram.com/lp3i.tasik/" target="_blank" className="w-full absolute text-center py-2.5 text-xs bg-black/60 text-white font-bold bottom-0">Proses Penempatan Kerja</a>
          </div>
          <p className="text-sm text-white drop-shadow" data-aos="fade-right" data-aos-delay="200">Salah satu keunggulan LP3I itu punya Pusat Karir yang bakal bantu, mahasiswa/lulusan dapet kerja sesuai jurusan, jadi nggak perlu ribet cari kerja sendiri. Mulai dari Training Soft Skill (TSS), Kuliah Kerja Industri (KKI), sampai Upskilling, semua dibimbing biar siap terjun ke dunia kerja!</p>
        </div>
        <h2 className="text-xl text-center text-white font-bold drop-shadow mt-4" data-aos="fade-right" data-aos-delay="300">Lebih dari 85% Mahasiswa Ditempatkan
          Kerja sebelum Wisuda</h2>
        <div className="flex flex-wrap justify-center bg-white p-4 rounded-2xl mt-5 drop-shadow" data-aos="fade-down" data-aos-delay="100">
          <img src={Chart2022} alt="Chart 2022" className="w-1/3 p-3" />
          <img src={Chart2023} alt="Chart 2023" className="w-1/3 p-3" />
          <img src={Chart2024} alt="Chart 2024" className="w-1/3 p-3" />
        </div>
        <div className="grid grid-cols-2 gap-3 py-5" data-aos="fade-down">
          <img src={LearnOne} alt="Learn 1" className="rounded-2xl border-2 border-white/50" />
          <img src={LearnOne} alt="Learn 2" className="rounded-2xl border-2 border-white/50" />
          <img src={LearnOne} alt="Learn 3" className="rounded-2xl border-2 border-white/50" />
          <img src={LearnOne} alt="Learn 4" className="rounded-2xl border-2 border-white/50" />
        </div>
        <h2 className="text-xl text-center text-white font-bold drop-shadow mt-4" data-aos="fade-right" data-aos-delay="300">Banyak Perusahaan Keren lagi Nungguin Kamu!</h2>
        <div className="bg-white p-4 mt-4 rounded-2xl" data-aos="fade-up" data-aos-delay="100">
          <img src={PR} alt="Learn 1" />
        </div>
        <div className="flex justify-center items-center gap-5 mb-20 mt-10">
          <Link to={`/facility`} type="button">
            <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white" />
          </Link>
          <Link to={`/achievement`} type="button">
            <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-white" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Work