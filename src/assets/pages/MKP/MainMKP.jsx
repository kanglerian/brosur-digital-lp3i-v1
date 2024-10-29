import {faChevronCircleLeft, faChevronCircleRight, faGlobe, faHome} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"
import CoverMKP from '../../images/cover-mkp-detail.png'

const MainMKP = () => {
    return (
        <main className="relative w-full max-w-2xl mx-auto bg-gradientmkp overflow-hidden">
            <div className="absolute w-full h-full bg-background-mkp bg-cover z-0"></div>
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
                    <h2 className="text-white font-bold text-2xl">D3 Manajemen Keuangan Perbankan</h2>
                    <p className="text-white text-sm">(Akreditasi Baik Sekali)</p>
                </div>
                <img src={CoverMKP} alt="Cover MP" className="w-1/2" data-aos="fade-left" data-aos-delay={100} />
            </header>
            <section className="w-full max-w-lg mx-auto pl-10 pr-5 mb-5" data-aos="fade-up" data-aos-delay={100}>
                <ul className="text-white list-disc flex flex-col">
                    <li>Manajemen Keuangan</li>
                    <li>Manajemen Perbankan</li>
                    <li>Manajemen Perpajakan</li>
                </ul>
            </section>
            <section className="w-full max-w-lg mx-auto p-5" data-aos="fade-left" data-aos-delay={100}>
                <div className="bg-mkp drop-shadow rounded-2xl p-4 text-white space-y-3">
                    <h2 className="inline-block bg-[#FFC550] text-[#AD7300] px-5 py-2 rounded-xl font-bold">Prospek Karir</h2>
                    <p className="text-sm">Financial Analyst - Financial Controller - Business Controller - Staff Financial Reporting - Customer Service - Teller - Back Office Entrepreneur</p>
                </div>
            </section>
            <section className="w-full max-w-lg mx-auto p-5" data-aos="fade-right" data-aos-delay={100}>
                <div className="bg-mkp drop-shadow rounded-2xl p-4 text-white space-y-3">
                    <h2 className="inline-block bg-[#FFC550] text-[#AD7300] px-5 py-2 rounded-xl font-bold">Keunggulan</h2>
                    <ul className="list-disc ml-4 text-sm space-y-1.5">
                        <li>Pembelajaran Berbasis Praktik: Semua peminatan mengutamakan praktik langsung melalui kerja lapangan, magang, dan penggunaan perangkat lunak yang relevan di industri.</li>
                        <li>Kurikulum yang Selalu Terupdate: Kurikulum disesuaikan dengan kebutuhan dunia industri sehingga lulusan memiliki keterampilan yang relevan dan terkini.</li>
                        <li>Jaringan Industri yang Luas: Politeknik LP3I memiliki jaringan yang kuat dengan berbagai perusahaan, lembaga perbankan, dan instansi pajak yang memungkinkan lulusan mendapatkan peluang kerja yang lebih besar.</li>
                        <li>Pendidikan yang Terfokus pada Keterampilan Teknis dan Soft Skills: Selain keterampilan teknis di setiap peminatan, mahasiswa juga dibekali dengan keterampilan interpersonal, seperti kemampuan berkomunikasi, kepemimpinan, dan kerja sama tim yang sangat dibutuhkan di dunia kerja.</li>
                    </ul>
                </div>
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

export default MainMKP