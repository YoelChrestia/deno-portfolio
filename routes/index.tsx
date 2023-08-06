import Experience from "../components/experience.tsx";
import Knowledge from "../components/knowledge.tsx";
import Links from "../components/links.tsx";
import Presentation from "../components/presentation.tsx";
import Projects from "../components/projects.tsx";

export default function Home() {
  return (
    <>
      <main class="bg-primary px-3 py-5 lg:p-12">
        <div class="m-auto flex flex-col max-w-3xl relative lg:grid lg:grid-cols-desktop lg:gap-16">
          <Presentation />
          <Experience />
          <Knowledge />
          <Projects />
          <Links />
        </div>
      </main>
    </>
  );
}
