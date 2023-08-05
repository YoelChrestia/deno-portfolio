import Experience from "../components/experience.tsx";
import Presentation from "../components/presentation.tsx";

export default function Home() {
  return (
    <>
      <main class="bg-primary px-3 py-5">
        <Presentation />
        <Experience />
      </main>
    </>
  );
}
