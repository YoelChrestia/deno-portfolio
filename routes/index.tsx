import Experience from "../components/experience.tsx";
import Knowledge from "../components/knowledge.tsx";
import Presentation from "../components/presentation.tsx";
import Projects from "../components/projects.tsx";

export default function Home() {
  return (
    <>
      <main class="bg-primary px-3 py-5">
        <div class="m-auto flex flex-col max-w-4xl">
          <Presentation />
          <Experience />
          <Knowledge />
          <Projects />
        </div>
      </main>
    </>
  );
}
