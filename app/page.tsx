import Image from "next/image";
import Navbar from "./pageComponents/Navbar";
import HeroSection from "./pageComponents/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
}
