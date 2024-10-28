import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { faChevronCircleLeft, faChevronCircleRight, faGlobe, } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import PresenterRatna from "../images/presenter-ratna.jpg"
import PresenterBenny from "../images/presenter-benny.jpg"
import PresenterYanti from "../images/presenter-yanti.jpg"
import PresenterAhyar from "../images/presenter-ahyar.jpg"
import PresenterSindiana from "../images/presenter-sindiana.jpg"
import PresenterFikri from "../images/presenter-fikri.jpg"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const InfoPMB = () => {
  return (
    <main className="relative w-full max-w-2xl mx-auto bg-gradientnine overflow-hidden">
      <div className="absolute w-full h-full bg-background-nine bg-cover z-0"></div>
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
        <h2 className="text-2xl text-center text-white font-bold mt-5 drop-shadow" data-aos="fade-right" data-aos-delay="300">Informasi PMB, Langsung dari Kaka-kaka yang Kece!</h2>
        <div className="grid grid-cols-1 gap-3 py-10" data-aos="fade-down" data-aos-delay="100">
          <div className="w-full bg-whatsapp drop-shadow flex items-center gap-2 rounded-xl overflow-hidden">
            <img src={PresenterRatna} alt="PresenterRatna" className="w-24 h-24" />
            <div className="w-full text-white flex flex-col justify-center items-start gap-1">
              <h1 className="text-sm font-bold drop-shadow">Kak Ratna</h1>
              <p className="text-xs drop-shadow">Klik No. WA Dibawa:</p>
              <a href="#" target="_blank" className="text-xs drop-shadow bg-white text-whatsapp px-2 py-1.5 rounded-lg space-x-1">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className="font-medium">0853 2415 6088</span>
              </a>
            </div>
          </div>
          <div className="w-full bg-whatsapp drop-shadow flex items-center gap-2 rounded-xl overflow-hidden">
            <img src={PresenterBenny} alt="PresenterBenny" className="w-24 h-24" />
            <div className="w-full text-white flex flex-col justify-center items-start gap-1">
              <h1 className="text-sm font-bold drop-shadow">Kak Benny</h1>
              <p className="text-xs drop-shadow">Klik No. WA Dibawa:</p>
              <a href="#" target="_blank" className="text-xs drop-shadow bg-white text-whatsapp px-2 py-1.5 rounded-lg space-x-1">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className="font-medium">0821 2735 6645</span>
              </a>
            </div>
          </div>
          <div className="w-full bg-whatsapp drop-shadow flex items-center gap-2 rounded-xl overflow-hidden">
            <img src={PresenterYanti} alt="PresenterYanti" className="w-24 h-24" />
            <div className="w-full text-white flex flex-col justify-center items-start gap-1">
              <h1 className="text-sm font-bold drop-shadow">Miss Yanti</h1>
              <p className="text-xs drop-shadow">Klik No. WA Dibawa:</p>
              <a href="#" target="_blank" className="text-xs drop-shadow bg-white text-whatsapp px-2 py-1.5 rounded-lg space-x-1">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className="font-medium">0812 2066 2033</span>
              </a>
            </div>
          </div>
          <div className="w-full bg-whatsapp drop-shadow flex items-center gap-2 rounded-xl overflow-hidden">
            <img src={PresenterAhyar} alt="PresenterAhyar" className="w-24 h-24" />
            <div className="w-full text-white flex flex-col justify-center items-start gap-1">
              <h1 className="text-sm font-bold drop-shadow">Kak Ahyar</h1>
              <p className="text-xs drop-shadow">Klik No. WA Dibawa:</p>
              <a href="#" target="_blank" className="text-xs drop-shadow bg-white text-whatsapp px-2 py-1.5 rounded-lg space-x-1">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className="font-medium">0822 1561 4238</span>
              </a>
            </div>
          </div>
          <div className="w-full bg-whatsapp drop-shadow flex items-center gap-2 rounded-xl overflow-hidden">
            <img src={PresenterSindiana} alt="PresenterSindiana" className="w-24 h-24" />
            <div className="w-full text-white flex flex-col justify-center items-start gap-1">
              <h1 className="text-sm font-bold drop-shadow">Kak Dyana</h1>
              <p className="text-xs drop-shadow">Klik No. WA Dibawa:</p>
              <a href="#" target="_blank" className="text-xs drop-shadow bg-white text-whatsapp px-2 py-1.5 rounded-lg space-x-1">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className="font-medium">0821 2932 8462</span>
              </a>
            </div>
          </div>
          <div className="w-full bg-whatsapp drop-shadow flex items-center gap-2 rounded-xl overflow-hidden">
            <img src={PresenterFikri} alt="PresenterFikri" className="w-24 h-24" />
            <div className="w-full text-white flex flex-col justify-center items-start gap-1">
              <h1 className="text-sm font-bold drop-shadow">Kak Fikri</h1>
              <p className="text-xs drop-shadow">Klik No. WA Dibawa:</p>
              <a href="#" target="_blank" className="text-xs drop-shadow bg-white text-whatsapp px-2 py-1.5 rounded-lg space-x-1">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span className="font-medium">0851 4162 1657</span>
              </a>
            </div>
          </div>
          <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow">
            <h2 className="bg-[#3F91E2] text-white font-bold text-center py-2.5 text-sm px-2">Syarat Pendaftaran</h2>
            <ul className="list-disc text-xs py-3 pr-3 pl-5 text-gray-800">
              <li>Pendaftaran Rp350.000</li>
              <li>FC KTP (3 Lembar)</li>
              <li>FC Ijazah (3 Lembar)</li>
              <li>FC Raport Semester 5/6 (3 Lembar)</li>
              <li>Pas photo 3x4 (5 Lembar)</li>
              <li>FC Akta Kelahiran (3 Lembar)</li>
              <li>FC KK (3 Lembar)</li>
              <li>Materai 10.000 (3 Lembar)</li>
              <li>Sertifkat pendukung (jika ada)</li>
              <li>Usia Maksimal 22th (khusus kelas-reguler)</li>
              <li>Surat keterangan bekerja atau berwirausaha (khusus program kelas karyawan)</li>
            </ul>
          </div>
          <div className="space-y-4 rounded-xl">
            <div className="w-full bg-white rounded-xl overflow-hidden drop-shadow">
              <h2 className="bg-[#3F91E2] text-white font-bold text-center py-2.5 text-sm px-2">Informasi Pendaftaran</h2>
              <div className="text-xs p-2 text-center space-y-2">
                <h4 className="bg-gray-100 px-2 py-1.5 rounded-xl">Gelombang 1 (Oktober - Desember)</h4>
                <h4 className="bg-gray-100 px-2 py-1.5 rounded-xl">Gelombang 2 (Januari - Maret)</h4>
                <h4 className="bg-gray-100 px-2 py-1.5 rounded-xl">Gelombang 3 (April - Juni)</h4>
                <h4 className="bg-gray-100 px-2 py-1.5 rounded-xl">Gelombang 4 (Juli - September)</h4>
              </div>
            </div>
            <h4 className="bg-white text-sky-700 font-bold text-lg px-4 py-3 drop-shadow text-center rounded-xl">GABUNG SEKARANG DI KAMPUS PENEMPATAN KERJA!</h4>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 mb-20">
          <Link to={`/pathregistration`} type="button">
            <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white" />
          </Link>
          <Link to={`/placement`} type="button">
            <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-white" />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default InfoPMB