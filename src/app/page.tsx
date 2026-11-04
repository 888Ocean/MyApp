import { DepthRuler } from "@/components/DepthRuler";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionPhotos } from "@/components/SectionPhotos";
import { SectionSurface } from "@/components/SectionSurface";
import { SectionWork } from "@/components/SectionWork";
import { TideDivider } from "@/components/TideDivider";

export default function Home() {
  return (
    <>
      <DepthRuler />
      <main>
        <SectionSurface />
        <TideDivider />
        <SectionWork />
        <TideDivider />
        <SectionPhotos />
        <TideDivider />
        <SectionAbout />
      </main>
    </>
  );
}
