import Image from "next/image";
import Hero from "./components/hero/Hero";
import Feature from "./components/feature/Feature";

export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
    </div>
  );
}
