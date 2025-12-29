import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Call from '../assets/calling.png'
import AOS from 'aos'; import 'aos/dist/aos.css'; 
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
          AOS.init({ once: true });
        }, []);
  return (
    <div className="w-full py-16 px-10 mt-20">
      <div data-aos="zoom-in" data-aos-delay="100" className="flex gap-10 justify-center">
        <img src={Call} alt="Call CenterIMG" className="w-[20%]"/>
        <div className="text-center mb-14 mt-25">
        <h1 className="text-4xl font-bold">
          Aloqa Markazi
        </h1>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Kurslarimiz haqida savollaringiz bormi? Sizdan eshitishni istardik. Bizga yuboring 
          xabar qiling va biz imkon qadar tezroq javob beramiz.
        </p>
      </div>
      </div>
      <div data-aos="zoom-in" data-aos-delay="300" className="flex gap-10 max-w-6xl mx-auto">
        <div className="w-1/2 rounded-xl shadow-lg p-8 border">
          <h2 className="text-xl font-semibold mb-6">Xabar yuborish uchun to'ldiring</h2>
          <div className="mb-4">
            <h1 className="text-sm font-medium mb-1">Ism</h1>
            <input type="text" placeholder="Ismingiz" className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-500"/>
          </div>
          <div className="mb-4">
            <h1 className="text-sm font-medium mb-1">Email</h1>
            <input type="email" placeholder="your@email.com" className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-500"/>
          </div>
          <div className="mb-6">
            <h1 className="text-sm font-medium mb-1">Xabar </h1>
            <input placeholder="Qaysi kursga yozilmoqchisiz yoki fikringiz..." className="w-full border rounded-lg px-4 py-2 outline-none focus:border-blue-500"/>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer">
            Xabarni Yuborish
          </button>
        </div>
        <div className="w-1/2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Bog'lanish uchun ma'lumot</h2>
            <div className="border rounded-xl p-4 flex items-center gap-4 mb-4">
              <span className="bg-blue-600 text-white p-3 rounded-lg">
                <MdEmail size={20} />
              </span>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">hello@itcenter.com</p>
              </div>
            </div>
            <div className="border rounded-xl p-4 flex items-center gap-4 mb-4">
              <span className="bg-blue-600 text-white p-3 rounded-lg">
                <MdPhone size={20} />
              </span>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">+998 (94) 439-09-10</p>
              </div>
            </div>
            <div className="border rounded-xl p-4 flex items-center gap-4">
              <span className="bg-blue-600 text-white p-3 rounded-lg">
                <MdLocationOn size={20} />
              </span>
              <div>
                <p className="text-sm text-gray-500">Manzil</p>
                <p className="font-medium">
                  Zarbdor Tumani, Hokimyat to'g'risida, Adliya bo'limining <br /> 1-qavati
                </p>
              </div>
            </div>
          </div>
          <div className="border rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Ish Vaqtlari</h2>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Dushanba - Juma</span>
              <span className="font-medium">9:00 dan 18:00 gacha</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-500">Shanba</span>
              <span className="font-medium">10:00 dan - 4:00 gacha</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Yakshanba</span>
              <span className="font-medium">Yopiq</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;