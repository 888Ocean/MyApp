import { DepthRuler } from "@/components/DepthRuler";
import { SectionArchive } from "@/components/SectionArchive";
import { SectionBuild } from "@/components/SectionBuild";
import { SectionPortrait } from "@/components/SectionPortrait";
import { SectionSurface } from "@/components/SectionSurface";
import { TideDivider } from "@/components/TideDivider";

export default function Home() {
  return (
    <>
      <DepthRuler />
      <main>
        <SectionSurface />
        <TideDivider />
        <SectionPortrait />
        <TideDivider />
        <SectionBuild />
        <TideDivider />
        <SectionArchive />
      </main>
    </>
  );
}
