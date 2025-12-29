import { FaCode } from "react-icons/fa6"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { HiOutlineMail } from "react-icons/hi"
import { Link } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Footer = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <footer className="mt-20 px-5 sm:px-10 lg:px-20">
      <hr className="border-gray-700 mb-10" />
      <div
        data-aos="fade-up"
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            <FaCode className="bg-blue-700 p-2 text-white w-10 h-10 rounded-xl" />
            IT <span className="text-blue-500">Center</span>
          </h1>
          <p className="mt-5 text-white/70 text-sm leading-relaxed">
            Ishlab chiquvchilarning keyingi avlodiga jahon darajasidagi
            IT-ta'lim va amaliy mashg'ulotlar bilan ta'minlash.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-5">Quick Links</h1>
          <ul className="space-y-3 text-white/70">
            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition">
              Courses
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-5">Biz bilan bog‘laning</h1>

          <div className="flex gap-4">
            {[
              <FiGithub />,
              <FiLinkedin />,
              <FiTwitter />,
              <HiOutlineMail />
            ].map((Icon, index) => (
              <a
                key={index}
                href="#"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="w-10 h-10 flex items-center justify-center 
                           bg-white/10 rounded-xl shadow-lg 
                           hover:bg-blue-700 transition"
              >
                {Icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-gray-700 my-10" />
      <p className="text-center text-gray-500 text-sm pb-10">
        © 2025 IT Center. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
