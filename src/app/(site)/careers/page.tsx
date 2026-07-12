import { CareersApplicationForm } from "@/components/sections/careers/CareersApplicationForm";
import {
  CareersBenefits,
  CareersCultureGrid,
  CareersHero,
} from "@/components/sections/careers/CareersPage";
import { CareersOpenPositions } from "@/components/sections/careers/CareersOpenPositions";

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersCultureGrid />
      <CareersBenefits />
      <CareersOpenPositions />
      <CareersApplicationForm />
    </>
  );
}
