import { Cards } from '../constants/Index'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const CourseCard = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <section className="px-5 sm:px-10 lg:px-20 py-20">
      <img
        src="https://assets.superblog.ai/site_cuid_clvc4016q001j13bhaleswmt1/images/image-cp-1725263805006-compressed.webp"
        alt="Coding Illustration"
        data-aos="zoom-in"
        className="mx-auto w-full max-w-xl"
      />
      <div
        data-aos="fade-up"
        className="mt-16 text-center"
      >
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
          <span className="text-blue-700">Kurslarimiz</span> bilan tanishing
        </h1>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto">
          Frontenddan backendgacha, texnologiya sohasida martaba oshirish uchun mukammal kursni toping.
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {Cards.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="p-8 rounded-2xl border border-white/20 shadow-xl backdrop-blur-md hover:scale-[1.03] transition duration-300"
          >
            <span className="text-4xl">{item.icon}</span>
            <h2 className="inline-block px-4 py-1 mt-5 text-sm rounded-full bg-blue-700">
              {item.type}
            </h2>
            <h1 className="text-2xl font-bold mt-4 hover:text-blue-700 transition cursor-pointer">
              {item.header}
            </h1>
            <p className="mt-3 text-white/70 text-sm">
              {item.text}
            </p>
            <div className="flex items-center gap-5 mt-5">
              <p className="text-xl font-bold text-blue-700">
                {item.price}
              </p>
              <p className="line-through text-white/40">
                {item.oldprice}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CourseCard
