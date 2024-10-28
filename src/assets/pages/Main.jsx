import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { faGlobe, faQuestion } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import IconMenu1 from "../images/icon-menu-1.svg"
import IconMenu2 from "../images/icon-menu-2.svg"
import IconMenu3 from "../images/icon-menu-3.svg"
import IconMenu4 from "../images/icon-menu-4.svg"
import IconMenu5 from "../images/icon-menu-5.svg"
import IconMenu6 from "../images/icon-menu-6.svg"
import IconMenu7 from "../images/icon-menu-7.svg"
import IconMenu8 from "../images/icon-menu-8.svg"
import IconMenu9 from "../images/icon-menu-9.svg"
import IconMenu10 from "../images/icon-menu-10.svg"
import IconMenu11 from "../images/icon-menu-11.svg"
import IconMenu12 from "../images/icon-menu-12.svg"

const Main = () => {
  return (
    <main className="relative w-full max-w-2xl mx-auto bg-gradienttwo overflow-hidden">
      <div className="absolute w-full h-full bg-background-two bg-cover z-0"></div>
      <section className="w-full max-w-lg mx-auto relative z-10 px-5 md:px-0">
        {/* Logo */}
        <nav className="max-w-md mx-auto flex justify-between items-center py-5">
          <a href="https://politekniklp3i-tasikmalaya.ac.id" target="_blank" className="bg-white/30 hover:bg-white/20 py-2.5 px-5 rounded-xl space-x-2 border-2 border-white/30" data-aos="fade-down">
            <FontAwesomeIcon icon={faGlobe} className="text-white drop-shadow" />
            <span className="text-white drop-shadow text-sm">Official Website</span>
          </a>
          <Link to={`/`} type="button" className="bg-white hover:bg-gray-50 py-2.5 px-5 rounded-full space-x-2 shadow-lg" data-aos="fade-down" data-aos-delay="100">
            <FontAwesomeIcon icon={faHome} />
            <span className="text-gray-800 text-sm">Beranda</span>
          </Link>
        </nav>
        {/* Cover */}
        <header className="h-60 bg-[url('./assets/images/cover-main.jpg')] bg-cover bg-center rounded-3xl border-4 border-brosurfour" data-aos="fade-left" data-aos-delay="200"></header>
        {/* Why */}
        <div className="grid grid-cols-1 gap-3 py-10 mb-20">
          <Link to={`/why`} type="button" className="flex items-center justify-left gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="100">
            <img src={IconMenu1} alt="Icon Menu" className="bg-[#672DDB] p-3 rounded-xl" />
            <p className="text-sm text-left">Kenapa Harus Politeknik LP3I?</p>
          </Link>
          <Link to={`/prodi`} type="button" className="flex items-center justify-left gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="200">
            <img src={IconMenu2} alt="Icon Menu" className="bg-[#3A6DE8] p-3 rounded-xl" />
            <p className="text-sm text-left">Program Studi yang Bikin Kamu Makin Kece!</p>
          </Link>
          <Link to={`/achievement`} type="button" className="flex items-center justify-left gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="300">
            <img src={IconMenu3} alt="Icon Menu" className="bg-[#F3BB00] p-3 rounded-xl" />
            <p className="text-sm text-left">Bukan cuma Ngalamin, Tapi juga Bikin Prestasi!</p>
          </Link>
          <Link to={`/learn`} className="flex items-center justify-left gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="400">
            <img src={IconMenu4} alt="Icon Menu" className="bg-[#FE5863] p-3 rounded-xl" />
            <p className="text-sm text-left">Belajar itu Gak Harus Teori Terus, kan?</p>
          </Link>
          <Link to={`/education`} type="button" className="flex items-center justify-left gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="100">
            <img src={IconMenu5} alt="Icon Menu" className="bg-[#6FB1FC] p-3 rounded-xl" />
            <p className="text-sm text-left">Alur Pendidikan D3 yang Cepat dan Praktis!</p>
          </Link>
          <Link to={`/facility`} type="button" className="flex items-center justify-left gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="200">
            <img src={IconMenu6} alt="Icon Menu" className="bg-[#0036D0] p-3 rounded-xl" />
            <p className="text-sm text-left">Fasilitas Kampus yang Bikin Betah!</p>
          </Link>
          <Link to={`/work`} type="button" className="flex items-center justify-left gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="300">
            <img src={IconMenu7} alt="Icon Menu" className="bg-[#006DB6] p-3 rounded-xl" />
            <p className="text-sm text-left">Siap Kerja? Kita Bantu Loh!</p>
          </Link>
          <Link to={`/testimoni`} type="button" className="flex items-center justify-left gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="400">
            <img src={IconMenu8} alt="Icon Menu" className="bg-[#006DB6] p-3 rounded-xl" />
            <p className="text-sm text-left">Kata Mereka yang Sudah Merasakannya Langsung!</p>
          </Link>
          <Link to={`/practice`} type="button" className="flex items-center justify-left gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="100">
            <img src={IconMenu9} alt="Icon Menu" className="bg-[#67DC99] p-3 rounded-xl" />
            <p className="text-sm text-left">Kegiatan Praktek Kuliah yang Seru!</p>
          </Link>
          <Link to={`/organization`} type="button" className="flex items-center justify-left gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="200">
            <img src={IconMenu10} alt="Icon Menu" className="bg-[#36D1DC] p-3 rounded-xl" />
            <p className="text-sm text-left">Organisasi Mahasiswa yang Seru!</p>
          </Link>
          <Link to={`/pathregistration`} type="button" className="flex items-center justify-left gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="300">
            <img src={IconMenu11} alt="Icon Menu" className="bg-[#7888D2] p-3 rounded-xl" />
            <p className="text-sm text-left">Alur Daftar Online yang Mudah Banget!</p>
          </Link>
          <Link to={`/infopmb`} type="button" className="flex items-center justify-left gap-3 bg-white hover:bg-gray-50 border border-gray-200 shadow-lg rounded-2xl p-4" data-aos="fade-down" data-aos-delay="400">
            <img src={IconMenu12} alt="Icon Menu" className="bg-[#E46D80] p-3 rounded-xl" />
            <p className="text-sm text-left">Informasi PMB, Langsung dari Kaka-kaka yang Kece!</p>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Main