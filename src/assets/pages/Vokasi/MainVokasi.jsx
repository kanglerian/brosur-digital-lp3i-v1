import {faChevronCircleLeft, faChevronCircleRight, faGlobe, faHome} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import CoverVokasi from '../../images/cover-vokasi.png'
import IconTO from '../../images/icon-to.svg'
import IconTI from '../../images/icon-ti.svg'

const MainVokasi = () => {
    return (
        <main className="relative w-full max-w-2xl mx-auto bg-gradientvokasi overflow-hidden h-screen">
            <div className="absolute w-full h-full bg-background-vokasi bg-cover z-0"></div>
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
            <section className="flex justify-center py-5">
                <img src={CoverVokasi} alt="Cover MP" data-aos="fade-left" data-aos-delay={100}/>
            </section>
            <section className="relative grid grid-cols-1 gap-3 p-5">
                <Link to={`/to`} type="button" className="bg-white rounded-3xl flex flex-col items-center justify-center gap-2 p-5 drop-shadow">
                    <img src={IconTO} alt="Icon"/>
                    <h3 className="font-bold">Teknik Otomotif</h3>
                </Link>
                <Link to={`/ti`} type="button" className="bg-white rounded-3xl flex flex-col items-center justify-center gap-2 p-5 drop-shadow">
                    <img src={IconTI} alt="Icon"/>
                    <h3 className="font-bold">Teknik Informatika</h3>
                </Link>
            </section>
            <div className="relative flex justify-center items-center gap-5 mb-20">
                <Link to={`/main`} type="button">
                    <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white"/>
                </Link>
                <Link to={`/mkp/work`} type="button">
                    <FontAwesomeIcon icon={faChevronCircleRight} size="xl" className="text-white"/>
                </Link>
            </div>
        </main>
    )
}

export default MainVokasi