import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { faChevronCircleLeft, faChevronCircleRight, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import CoverWhy from "../images/cover-why.png"

const Why = () => {
  return (
    <main className="relative w-full max-w-2xl mx-auto bg-gradientfour overflow-hidden">
      <div className="absolute w-full h-full bg-background-four bg-cover z-0"></div>
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
        {/* Content */}
        <div className="w-2/3 md:w-full space-y-5 pb-20 relative">
          <h2 className="font-bold text-white text-xl" data-aos="fade-down" data-aos-delay="150">Kenapa Harus Politeknik LP3I?</h2>
          {/* List */}
          <div className="space-y-3">
            <div className="bg-brosurfive/30 border-2 border-white/30 rounded-2xl p-3 flex items-center gap-4" data-aos="fade-left" data-aos-delay="200">
              <span className="block bg-brosursix/80 border-2 border-white/30 text-white text-sm font-bold p-3 rounded-2xl shadow-lg">01</span>
              <p className="text-white text-sm">Mendapatkan Penempatan Kerja mulai Semester 6.</p>
            </div>
            <div className="bg-brosurfive/30 border-2 border-white/30 rounded-2xl p-3 flex items-center gap-4" data-aos="fade-left" data-aos-delay="300">
              <span className="block bg-brosursix/80 border-2 border-white/30 text-white text-sm font-bold p-3 rounded-2xl shadow-lg">02</span>
              <p className="text-white text-sm">Mendapatkan Akreditasi Institusi Baik Sekali (B).</p>
            </div>
            <div className="bg-brosurfive/30 border-2 border-white/30 rounded-2xl p-3 flex items-center gap-4" data-aos="fade-left" data-aos-delay="400">
              <span className="block bg-brosursix/80 border-2 border-white/30 text-white text-sm font-bold p-3 rounded-2xl shadow-lg">03</span>
              <p className="text-white text-sm">Kurikulum berbasis vokasi, link and match dengan dunia kerja, lebih banyak praktek dari pada teori.</p>
            </div>
            <div className="bg-brosurfive/30 border-2 border-white/30 rounded-2xl p-3 flex items-center gap-4" data-aos="fade-left" data-aos-delay="100">
              <span className="block bg-brosursix/80 border-2 border-white/30 text-white text-sm font-bold p-3 rounded-2xl shadow-lg">04</span>
              <p className="text-white text-sm">Dosen praktisi dan akademisi berpengalaman.</p>
            </div>
            <div className="bg-brosurfive/30 border-2 border-white/30 rounded-2xl p-3 flex items-center gap-4" data-aos="fade-left" data-aos-delay="200">
              <span className="block bg-brosursix/80 border-2 border-white/30 text-white text-sm font-bold p-3 rounded-2xl shadow-lg">05</span>
              <p className="text-white text-sm">Pembelajaran menggunakan LMS (Learning Manajemen System) Online dan Offline.</p>
            </div>
            <div className="bg-brosurfive/30 border-2 border-white/30 rounded-2xl p-3 flex items-center gap-4" data-aos="fade-left" data-aos-delay="300">
              <span className="block bg-brosursix/80 border-2 border-white/30 text-white text-sm font-bold p-3 rounded-2xl shadow-lg">06</span>
              <p className="text-white text-sm">Memiliki Relasi Perusahaan (MOU) yang Tersebar di Indonesia.</p>
            </div>
            <div className="bg-brosurfive/30 border-2 border-white/30 rounded-2xl p-3 flex items-center gap-4" data-aos="fade-left" data-aos-delay="400">
              <span className="block bg-brosursix/80 border-2 border-white/30 text-white text-sm font-bold p-3 rounded-2xl shadow-lg">07</span>
              <p className="text-white text-sm">Lokasi Kampus Strategis ditengah Kota Tasikmalaya, berdekatan dengan Starbucks 2, Mixue Djuanda, Pizza Hut, McDonalds, KFC, Transmart, Bioskop XXI, SPBU.</p>
            </div>
            <div className="bg-brosurfive/30 border-2 border-white/30 rounded-2xl p-3 flex items-center gap-4" data-aos="fade-left" data-aos-delay="100">
              <span className="block bg-brosursix/80 border-2 border-white/30 text-white text-sm font-bold p-3 rounded-2xl shadow-lg">08</span>
              <p className="text-white text-sm">Gedung Kampus 4 Lantai, Lift, Lahan Parkir, Fasilitas Lengkap dan Nyaman.</p>
            </div>
            <div className="bg-brosurfive/30 border-2 border-white/30 rounded-2xl p-3 flex items-center gap-4" data-aos="fade-left" data-aos-delay="200">
              <span className="block bg-brosursix/80 border-2 border-white/30 text-white text-sm font-bold p-3 rounded-2xl shadow-lg">09</span>
              <p className="text-white text-sm">Mendapatkan Sertfikasi Kompetensi dari BNSP.</p>
            </div>
            <div className="bg-brosurfive/30 border-2 border-white/30 rounded-2xl p-3 flex items-center gap-4" data-aos="fade-left" data-aos-delay="300">
              <span className="block bg-brosursix/80 border-2 border-white/30 text-white text-sm font-bold p-3 rounded-2xl shadow-lg">10</span>
              <p className="text-white text-sm">Mahasiswa dibekali materi Training Soft Skill, Beauty Class dan Table Manner.</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-5">
            <Link to={`/main`} type="button">
              <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white" />
            </Link>
            <Link to={`/prodi`} type="button">
              <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-white" />
            </Link>
          </div>
        </div>
      </section>
      <img src={CoverWhy} alt="Cover Why" className="block md:hidden w-80 fixed bottom-[-10px] right-[-50px]" data-aos="fade-left" />
    </main>
  )
}

export default Why