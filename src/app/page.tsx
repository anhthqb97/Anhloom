import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Stats } from "@/components/sections/Stats";
import { TrustedBy } from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TrustedBy />
      <Services />
      <Solutions />
      <Process />
    </>
  );
}
