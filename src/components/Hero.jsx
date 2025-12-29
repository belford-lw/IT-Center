import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import { FiUsers } from "react-icons/fi"
import { GrTrophy } from "react-icons/gr"
import { PiStarFourBold } from "react-icons/pi"
import HeroImg from '../assets/removeimg.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Hero = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <section className="px-5 sm:px-10 lg:px-20 pt-50">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div data-aos="fade-right" className="flex justify-center">
          <img
            src={HeroImg}
            alt="Hero"
            className="w-full max-w-lg"
          />
        </div>
        <div data-aos="fade-left" className="text-center lg:text-left">
          <h1 className="font-bold font-sans text-3xl sm:text-5xl lg:text-6xl">
            Kelajagingizni <span className="text-blue-700">IT Center</span> bilan quring.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed">
            Ilg'or dasturlash kurslari bilan karerangizni o'zgartiring.
            Mutaxassislardan o'rganing, haqiqiy loyihalarni yarating va
            muvaffaqiyatli ishlab chiquvchilar hamjamiyatiga qo'shiling.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/courses">
              <button
                data-aos="zoom-in"
                data-aos-delay="200"
                className="flex items-center gap-2 px-6 py-4 rounded-xl
                           bg-blue-700 text-lg shadow-md
                           hover:bg-blue-500 transition"
              >
                Kurslarni ko'rish <FaLongArrowAltRight />
              </button>
            </Link>
            <Link to="/contact">
              <button
                data-aos="zoom-in"
                data-aos-delay="400"
                className="px-6 py-4 rounded-xl text-lg
                           border border-white/30 shadow-md
                           hover:bg-blue-700 transition"
              >
                Biz bilan bog'laning
              </button>
            </Link>
          </div>
        </div>
      </div>
      <h1
        data-aos="fade-up"
        className="text-center font-bold text-3xl sm:text-4xl mt-20"
      >
        Bizning yutuqlarimiz
      </h1>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center border border-white/20 rounded-2xl p-6 shadow-md"
        >
          <FiUsers className="text-blue-700 text-4xl mx-auto mb-3" />
          <h1 className="text-3xl font-bold">10,000+</h1>
          <p className="text-white/60">Talabalar ro‘yxatga olingan</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center border border-white/20 rounded-2xl p-6 shadow-md"
        >
          <GrTrophy className="text-blue-700 text-4xl mx-auto mb-3" />
          <h1 className="text-3xl font-bold">95%</h1>
          <p className="text-white/60">Muvaffaqiyat darajasi</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-center border border-white/20 rounded-2xl p-6 shadow-md"
        >
          <PiStarFourBold className="text-blue-700 text-4xl mx-auto mb-3" />
          <h1 className="text-3xl font-bold">50+</h1>
          <p className="text-white/60">Ekspert kurslari</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
