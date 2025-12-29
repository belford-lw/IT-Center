import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center from-gray-50 to-white px-6 py-12">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" className="w-64 h-48 md:w-80 md:h-64" aria-hidden>
            <g fill="none" fillRule="evenodd">
              <rect width="600" height="400" rx="24" fill="#f3f4f6" />
              <g transform="translate(80 60)">
                <circle cx="120" cy="80" r="80" fill="#e0e7ff" />
                <path
                  d="M40 240c24-36 64-56 112-56s88 20 112 56H40z"
                  fill="#eef2ff"
                />
                <h1 x="120" y="95" textAnchor="middle" fontSize="48" fontWeight="700" fill="#4338ca">404</h1>
              </g>
            </g>
          </svg>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Sahifa topilmadi</h1>
          <p className="text-gray-600 mb-6">Siz izlagan sahifa bu yerdan ko`chib ketgan yoki umuman mavjud emas.</p>
          <div className="flex justify-center mt-6">
            <button onClick={() => navigate(-1)} className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
              Orqaga
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">Agar bu xatolik bo`lsa — bizga xabar bering yoki manzilni tekshirib ko`ring.</p>
        </div>
      </div>
    </div>
  );
}
