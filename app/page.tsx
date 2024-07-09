import Image from "next/image";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";

export default function Home() {
  return (
    <div className="bg-white-900">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
