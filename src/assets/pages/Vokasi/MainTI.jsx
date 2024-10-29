import {faChevronCircleLeft, faChevronCircleRight, faGlobe, faHome} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import CoverTI from '../../images/cover-ti-detail.png'

const MainTI = () => {
    return (
        <main className="relative w-full max-w-2xl mx-auto bg-gradientti overflow-hidden">
            <div className="absolute w-full h-full bg-background-ti bg-cover z-0"></div>
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
                    <h2 className="text-white font-bold text-2xl">Vokasi 2 Tahun Teknik Informatika</h2>
                </div>
                <img src={CoverTI} alt="Cover MP" className="w-1/2" data-aos="fade-left" data-aos-delay={100} />
            </header>
            <section className="w-full max-w-lg mx-auto p-5" data-aos="fade-left" data-aos-delay={100}>
                <div className="bg-ti drop-shadow rounded-2xl p-4 text-white space-y-3">
                    <h2 className="inline-block bg-[#00BF8D] text-[#007455] px-5 py-2 rounded-xl font-bold">Prospek
                        Karir</h2>
                    <p className="text-sm">Web Programmer - Mobile Programmer - Graphic Designer  - Network Administrator - IT Support</p>
                </div>
            </section>
            <section className="w-full max-w-lg mx-auto p-5" data-aos="fade-right" data-aos-delay={100}>
                <div className="bg-ti drop-shadow rounded-2xl p-4 text-white space-y-3">
                    <h2 className="inline-block bg-[#00BF8D] text-[#007455] px-5 py-2 rounded-xl font-bold">Keunggulan</h2>
                    <ul className="list-disc ml-4 text-sm space-y-1.5">
                        <li>Memahami konsep merancang sebuah sistem informasi yang berbasiskan Desktop dan Mobile Android.</li>
                        <li>Terampil dalam membuat aplikasi dengan menggunakan bahasa komputer berbasis Visual Programming baik secara singel dan multi user, dengan berbasis data Microsoft Sql server, My Sql, Sqlite.</li>
                        <li>Terampil sebagai tenaga web development berbasis internet yang berorientasi pada database dengan menggunakan HTML5, J2SE, J2ME, Ajax, JqueryMobile, Json, Phonegap, Parsing XML.</li>
                        <li>Dapat merakit dan melakukan troubleshooting prangkat keras komputer.</li>
                        <li>Mampu sebagai technical support untuk melakukan instalasi perangkat lunak berbasis windows.</li>
                        <li>Memiliki jiwa entrepreneur.</li>
                    </ul>
                </div>
            </section>
            <div className="relative flex justify-center items-center gap-5 mb-20">
                <Link to={`/vokasi`} type="button">
                    <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white"/>
                </Link>
                <Link to={`/ti/work`} type="button">
                    <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-white"/>
                </Link>
            </div>
        </main>
    )
}

export default MainTI