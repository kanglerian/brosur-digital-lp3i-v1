import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { faGlobe, faQuestion } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Main = () => {
  return (
    <main className="relative w-full max-w-xl mx-auto bg-gradienttwo overflow-hidden">
      <div className="absolute w-full h-full bg-background-two bg-cover z-0"></div>
      <section className="w-full max-w-lg mx-auto relative z-10 px-5 md:px-0">
        <nav className="max-w-md mx-auto flex justify-between items-center py-5">
          <a href="https://politekniklp3i-tasikmalaya.ac.id" target="_blank" className="bg-white/30 hover:bg-white/20 py-2.5 px-5 rounded-full space-x-2 border-2 border-white/30" data-aos="fade-down">
            <FontAwesomeIcon icon={faGlobe} className="text-white drop-shadow"/>
            <span className="text-white drop-shadow text-sm">Official Website</span>
          </a>
          <Link to={`/`} type="button" className="bg-white hover:bg-gray-50 py-2.5 px-5 rounded-full space-x-2 shadow-lg"  data-aos="fade-down" data-aos-delay="100">
            <FontAwesomeIcon icon={faHome}/>
            <span className="text-gray-800 text-sm">Beranda</span>
          </Link>
        </nav>
        <header className="h-60 bg-[url('./assets/images/cover-main.jpg')] bg-cover bg-center rounded-3xl border-4 border-brosurfour" data-aos="fade-left" data-aos-delay="200"></header>
        <div className="grid grid-cols-2 gap-3 py-10 mb-20">
          <Link to={`/why`} type="button" className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="100">
              <FontAwesomeIcon icon={faQuestion} className="h-3 w-3 bg-red-500 text-white p-3 rounded-full" />
            <p className="text-sm text-left">Kenapa Harus Politeknik LP3I?</p>
          </Link>
          <Link to={`/prodi`} type="button" className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="200">
              <FontAwesomeIcon icon={faQuestion} className="h-3 w-3 bg-red-500 text-white p-3 rounded-full" />
            <p className="text-sm text-left">Program Studi yang Bikin Kamu Makin Kece!</p>
          </Link>
          <button type="button" className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="300">
              <FontAwesomeIcon icon={faQuestion} className="h-3 w-3 bg-red-500 text-white p-3 rounded-full" />
            <p className="text-sm text-left">Bukan cuma Ngalamin, Tapi juga Bikin Prestasi!</p>
          </button>
          <Link to={`/learn`} className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="400">
              <FontAwesomeIcon icon={faQuestion} className="h-3 w-3 bg-red-500 text-white p-3 rounded-full" />
            <p className="text-sm text-left">Belajar itu Gak Harus Teori Terus, kan?</p>
          </Link>
          <button type="button" className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="100">
              <FontAwesomeIcon icon={faQuestion} className="h-3 w-3 bg-red-500 text-white p-3 rounded-full" />
            <p className="text-sm text-left">Alur Pendidikan D3 yang Cepat dan Praktis!</p>
          </button>
          <button type="button" className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="200">
              <FontAwesomeIcon icon={faQuestion} className="h-3 w-3 bg-red-500 text-white p-3 rounded-full" />
            <p className="text-sm text-left">Fasilitas Kampus yang Bikin Betah!</p>
          </button>
          <button type="button" className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="300">
              <FontAwesomeIcon icon={faQuestion} className="h-3 w-3 bg-red-500 text-white p-3 rounded-full" />
            <p className="text-sm text-left">Siap Kerja? Kita Bantu Loh!</p>
          </button>
          <button type="button" className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="400">
              <FontAwesomeIcon icon={faQuestion} className="h-3 w-3 bg-red-500 text-white p-3 rounded-full" />
            <p className="text-sm text-left">Kata Mereka yang Sudah Merasakannya Langsung!</p>
          </button>
          <Link to={`/practice`} type="button" className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="100">
              <FontAwesomeIcon icon={faQuestion} className="h-3 w-3 bg-red-500 text-white p-3 rounded-full" />
            <p className="text-sm text-left">Kegiatan Praktek Kuliah yang Seru!</p>
          </Link>
          <button type="button" className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="200">
              <FontAwesomeIcon icon={faQuestion} className="h-3 w-3 bg-red-500 text-white p-3 rounded-full" />
            <p className="text-sm text-left">Organisasi Mahasiswa yang Seru!</p>
          </button>
          <button type="button" className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="300">
              <FontAwesomeIcon icon={faQuestion} className="h-3 w-3 bg-red-500 text-white p-3 rounded-full" />
            <p className="text-sm text-left">Alur Daftar Online yang Mudah Banget!</p>
          </button>
          <button type="button" className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="400">
              <FontAwesomeIcon icon={faQuestion} className="h-3 w-3 bg-red-500 text-white p-3 rounded-full" />
            <p className="text-sm text-left">Informasi PMB, Langsung dari Kaka-kaka yang Kece!</p>
          </button>
        </div>
      </section>
    </main>
  )
}

export default Main