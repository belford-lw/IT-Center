import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Ready = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <section className="px-5 sm:px-10 lg:px-20 my-20">
      <div
        data-aos="zoom-in"
        className="rounded-3xl bg-blue-600 text-white
                   py-14 px-6 sm:px-10
                   flex flex-col items-center text-center"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          O`rganishni boshlashga tayyormisiz?
        </h1>
        <p className="max-w-xl text-sm sm:text-base opacity-90 mb-8">
          Mutaxassislar boshchiligidagi kurslarimiz bilan o`z kareralarini
          o`zgartirgan minglab talabalarga qo`shiling.
        </p>
        <Link to="/courses">
          <button
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex items-center gap-2
                       bg-white text-blue-700
                       px-6 py-3 rounded-xl font-medium
                       shadow-lg
                       hover:bg-blue-700 hover:text-white
                       transition"
          >
            Barcha kurslarni ko`rib chiqish
            <FaLongArrowAltRight />
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Ready
