import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome"
import { faChevronCircleLeft, faChevronCircleRight, faGlobe, } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import EduIconPrakuliah from "../images/edu-icon-prakuliah.svg"
import EduIconSMT1 from "../images/edu-icon-smt1.svg"
import EduIconSMT2 from "../images/edu-icon-smt2.svg"
import EduIconSMT3 from "../images/edu-icon-smt3.svg"
import EduIconSMT4 from "../images/edu-icon-smt4.svg"
import EduIconSMT5 from "../images/edu-icon-smt5.svg"
import EduIconSMT6 from "../images/edu-icon-smt6.svg"

const Education = () => {
  return (
    <main className="relative w-full max-w-2xl mx-auto bg-gradienteducation overflow-hidden">
      <div className="absolute w-full h-full bg-background-education bg-cover z-0"></div>
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
        <h2 className="text-2xl text-center text-white font-bold mt-5 drop-shadow" data-aos="fade-right" data-aos-delay="300">Alur Pendidikan D3 yang Cepat dan Praktis!</h2>
        <section className="grid grid-cols-2 gap-3 py-10" data-aos="fade-down" data-aos-delay="100">
          <div className="bg-white rounded-xl space-y-2 p-4">
            <img src={EduIconPrakuliah} alt="Icon"/>
            <h2 className="font-bold text-lg">Prakuliah</h2>
            <ul className="list-disc text-sm ml-4">
              <li>Matrikulasi</li>
              <li>PKKMB / PSPL</li>
              <li>Tes Kecerdasan</li>
              <li>Visi & Misi</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl space-y-2 p-4">
            <img src={EduIconSMT1} alt="Icon"/>
            <h2 className="font-bold text-lg">Semester 1</h2>
            <ul className="list-disc text-sm ml-4">
              <li>Training Soft Skill</li>
              <li>TOEIC Preparation</li>
              <li>Badan Eksekutif Mahasiswa (BEM)</li>
              <li>Mentoring</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl space-y-2 p-4">
            <img src={EduIconSMT2} alt="Icon"/>
            <h2 className="font-bold text-lg">Semester 2</h2>
            <ul className="list-disc text-sm ml-4">
              <li>Training Soft Skill</li>
              <li>TOEIC Preparation</li>
              <li>Sertifikasi TOK</li>
              <li>Mentoring</li>
              <li>Seminar Wajib</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl space-y-2 p-4">
            <img src={EduIconSMT3} alt="Icon"/>
            <h2 className="font-bold text-lg">Semester 3</h2>
            <ul className="list-disc text-sm ml-4">
              <li>Training Soft Skill</li>
              <li>TOEIC Preparation</li>
              <li>Company Visit</li>
              <li>Beauty Class</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl space-y-2 p-4">
            <img src={EduIconSMT4} alt="Icon"/>
            <h2 className="font-bold text-lg">Semester 4</h2>
            <ul className="list-disc text-sm ml-4">
              <li>Training Soft Skill</li>
              <li>TOEIC Test</li>
              <li>Screening Test</li>
              <li>Table Manner</li>
              <li>Seminar Wajib</li>
              <li>Kuliah Kerja Nyata (KKN)</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl space-y-2 p-4">
            <img src={EduIconSMT5} alt="Icon"/>
            <h2 className="font-bold text-lg">Semester 5</h2>
            <ul className="list-disc text-sm ml-4">
              <li>Sertifikasi Keahlian Peminatan</li>
              <li>Magang/Kuliah Kerja Industri (KKI)</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl space-y-2 p-4">
            <img src={EduIconSMT6} alt="Icon"/>
            <h2 className="font-bold text-lg">Semester 6</h2>
            <ul className="list-disc text-sm ml-4">
              <li>Tugas Akhir</li>
              <li>Penempatan Kerja</li>
              <li>Wisuda</li>
            </ul>
          </div>
        </section>
        <div className="bg-white p-4 rounded-2xl space-y-2 mb-10">
          <h2 className="font-bold text-lg">Bekerja & Berbisnis Sebelum Wisuda</h2>
          <ul className="list-disc text-sm ml-4">
            <li>Ijazah</li>
            <li>Transkip Nilai</li>
            <li>SKPI</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5 mb-20">
          <Link to={`/practice`} type="button">
            <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white"/>
          </Link>
          <Link to={`/facility`} type="button">
            <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-white"/>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Education