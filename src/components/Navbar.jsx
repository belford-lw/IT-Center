import { FaCode, FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react"
import IconButton from "@mui/material/IconButton"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"

const Navbar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
    })
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg shadow-md">
      <nav
        data-aos="fade-down"
        className="px-5 sm:px-10 py-4 flex items-center justify-between"
      >
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <span className="p-2 rounded-xl bg-blue-800 text-white shadow">
            <FaCode />
          </span>
          IT <span className="text-blue-500">Center</span>
        </Link>
        <div className="hidden md:flex gap-10 text-lg">
          <Link to="/" className="hover:text-blue-500 transition">
            Bosh sahifa
          </Link>
          <Link to="/courses" className="hover:text-blue-500 transition">
            Kurslar
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Bog`lanish
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton>
              <button className="hidden sm:block px-4 py-2 rounded-xl bg-blue-800 hover:bg-blue-700 transition">
                Ro`yxatdan o`tish
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <IconButton
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          >
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl px-5 pb-5">
          <div className="flex flex-col gap-4 text-lg">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="hover:text-blue-500"
            >
              Bosh sahifa
            </Link>
            <Link
              to="/courses"
              onClick={() => setOpen(false)}
              className="hover:text-blue-500"
            >
              Kurslar
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-blue-500"
            >
              Bog`lanish
            </Link>
            <SignedOut>
              <SignInButton>
                <button className="mt-2 px-4 py-2 rounded-xl bg-blue-800">
                  Ro`yxatdan o`tish
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
