import {
    faBriefcase,
    faChevronCircleLeft,
    faChevronCircleRight,
    faGlobe,
    faHome, faUser
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import MRafi from '../../cnp/mp/muhammad-rafi.png'
import {faSchool} from "@fortawesome/free-solid-svg-icons/faSchool";

const WorkMKP = () => {
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
            <h2 className="text-2xl text-center text-white font-bold drop-shadow mt-4 mx-5" data-aos="fade-right" data-aos-delay="100">Mereka yang Sudah Berkarir Diusia Muda!</h2>
            <section className="relative w-full max-w-lg mx-auto grid grid-cols-2 gap-3 mt-10 px-5" data-aos="fade-left" data-aos-delay="100">
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start bg-white rounded-xl overflow-hidden">
                    <img src={MRafi} alt="Photo" className="w-full"/>
                    <div className={`p-4 space-y-2`}>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faBriefcase} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Bekerja di</h3>
                                <p className={`font-bold`}>PT. Maya Graha Indah</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faUser} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Posisi</h3>
                                <p className={`font-bold`}>Marketing</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FontAwesomeIcon icon={faSchool} className="mt-1"/>
                            <div className={`text-sm`}>
                                <h3>Asal Sekolah</h3>
                                <p className={`font-bold`}>SMAN 4 Tasikmalaya</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative flex justify-center items-center gap-5 mb-20 mt-10">
                <Link to={`/mkp`} type="button">
                    <FontAwesomeIcon icon={faChevronCircleLeft} size="xl" className="text-white"/>
                </Link>
            </div>
        </main>
    )
}

export default WorkMKP