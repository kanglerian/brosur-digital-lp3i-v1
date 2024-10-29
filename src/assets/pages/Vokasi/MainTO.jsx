import {faChevronCircleLeft, faChevronCircleRight, faGlobe, faHome} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import CoverTO from '../../images/cover-to-detail.png'

const MainTO = () => {
    return (
        <main className="relative w-full max-w-2xl mx-auto bg-gradientto overflow-hidden">
            <div className="absolute w-full h-full bg-background-to bg-cover z-0"></div>
            <section className="w-full max-w-lg mx-auto relative z-10 px-5 md:px-0">
                {/* Navbar */}
                <nav className="max-w-md mx-auto flex justify-between items-center py-5">
                    <a href="https://politekniklp3i-tasikmalaya.ac.id" target="_blank"
                       className="bg-white/30 hover:bg-white/20 py-2.5 px-5 rounded-full space-x-2 border-2 border-white/30"
                       data-aos="fade-down">
                        <FontAwesomeIcon icon={faGlobe} className="text-white drop-shadow"/>
                        <span className="text-white drop-shadow text-sm">Official Website</span>
                    </a>
                    <Link to={`/main`} type="button"
                          className="bg-white hover:bg-gray-50 py-2.5 px-5 rounded-full space-x-2 shadow-lg"
                          data-aos="fade-down" data-aos-delay="100">
                        <FontAwesomeIcon icon={faHome}/>
                        <span className="text-gray-800 text-sm">Beranda</span>
                    </Link>
                </nav>
            </section>
            <header className="relative flex items-center pt-5 pb-10">
                <div className="w-1/2 relative ml-5 z-30 space-y-3" data-aos="fade-right" data-aos-delay={100}>
                    <h2 className="text-white font-bold text-2xl">Vokasi 2 Tahun Teknik Otomotif</h2>
                </div>
                <img src={CoverTO} alt="Cover MP" className="w-1/2" data-aos="fade-left" data-aos-delay={100} />
            </header>
            <section className="w-full max-w-lg mx-auto p-5" data-aos="fade-left" data-aos-delay={100}>
                <div className="bg-to drop-shadow rounded-2xl p-4 text-white space-y-3">
                    <h2 className="inline-block bg-[#E16A48] text-[#6B220E] px-5 py-2 rounded-xl font-bold">Prospek
                        Karir</h2>
                    <p className="text-sm">Mekanik - Frontliner Service - Staff Adm. Spartpart -Warehouse -
                        Marketing Otomotif - Entrepreneur</p>
                </div>
            </section>
            <section className="w-full max-w-lg mx-auto p-5" data-aos="fade-right" data-aos-delay={100}>
                <div className="bg-to drop-shadow rounded-2xl p-4 text-white space-y-3">
                    <h2 className="inline-block bg-[#E16A48] text-[#6B220E] px-5 py-2 rounded-xl font-bold">Keunggulan</h2>
                    <ul className="list-disc ml-4 text-sm space-y-1.5">
                        <li>Mampu berkomunikasi dengan bahasa inggris.</li>
                        <li>Mampu mengerjakan administrasi perbengkelan.</li>
                        <li>Mampu mengerjakan Tune up /perawantan routin resvice mesin bensin dan Diesel Mampu melakukan
                            teknik persentasi dan negosiasi untuk pekerjaan marketing otomotif Mampu melakukan
                            diagnostic kerusakan pada kendaraan.
                        </li>
                        <li>Mampu merawat dan memperbaiki sistem AC kendaraan.</li>
                        <li>Mampu melakukan perawatan dan perbaikan engine EFI.</li>
                        <li>Mampu berkumunikasi dengan baik untuk pekerjaan perbengkelan.</li>
                        <li>Berjiwa Enterpraneur.</li>
                        <li>Mampu membaca buku manual berbahasa jepang.</li>
                    </ul>
                </div>
            </section>
            <div className="relative flex justify-center items-center gap-5 mb-20">
                <Link to={`/vokasi`} type="button">
                    <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white"/>
                </Link>
                <Link to={`/to/work`} type="button">
                    <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-white"/>
                </Link>
            </div>
        </main>
    )
}

export default MainTO