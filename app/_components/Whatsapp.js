import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918050923077?text=Hey%20I%20wanted%20to%20enquire%20about%20"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 z-50 bg-green-500  hover:bg-green-600 text-white p-3 rounded-full shadow-lg hover:shadow-green-400/50 transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
