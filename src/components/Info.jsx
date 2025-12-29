import { FaCode } from "react-icons/fa6"
import { FiServer } from "react-icons/fi"
import { MdOutlineColorLens } from "react-icons/md"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Info = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <section className="px-5 sm:px-10 lg:px-20 py-20">
      <div data-aos="fade-up" className="text-center max-w-3xl mx-auto">
        <h1 className="font-bold font-sans text-2xl sm:text-3xl lg:text-4xl">
          Siz nimani o`rganishni xohlaysiz?
        </h1>
        <p className="mt-5 text-white/70 text-sm sm:text-base">
          Sizni boshlang'ichdan ishga tayyor dasturchigacha olib borish uchun
          mo'ljallangan keng qamrovli o'quv dasturlari.
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="border border-white/20 rounded-2xl p-6 shadow-md
                     hover:shadow-xl hover:scale-[1.03] transition"
        >
          <FaCode className="bg-blue-700 p-2 text-white w-10 h-10 rounded-xl" />
          <h1 className="text-xl sm:text-2xl font-bold mt-4">
            Frontend ishlab chiqish
          </h1>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Ajoyib foydalanuvchi interfeyslarini yaratish uchun React,
            TypeScript va zamonaviy CSS texnologiyalarini o'rganing.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="border border-white/20 rounded-2xl p-6 shadow-md
                     hover:shadow-xl hover:scale-[1.03] transition"
        >
          <FiServer className="bg-green-700 p-2 text-white w-10 h-10 rounded-xl" />
          <h1 className="text-xl sm:text-2xl font-bold mt-4">
            Backend ishlab chiqish
          </h1>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Ilovalaringizni quvvatlantirish uchun Node.js, Python,
            ma'lumotlar bazalari va API dizaynini o'rganing.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="border border-white/20 rounded-2xl p-6 shadow-md
                     hover:shadow-xl hover:scale-[1.03] transition"
        >
          <MdOutlineColorLens className="bg-pink-700 p-2 text-white w-10 h-10 rounded-xl" />
          <h1 className="text-xl sm:text-2xl font-bold mt-4">
            UI / UX dizayn
          </h1>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Figma va zamonaviy dizayn tamoyillari bilan chiroyli,
            foydalanuvchiga yo'naltirilgan interfeyslar yarating.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Info
