import ProjectCard from "@/Cards/projectCard";

const Projects: React.FC = () => {
  return (
    <section className="w-5/6 mx-auto mb-24">
      <h1 className="text-4xl font-extrabold pt-8">
        QUALITY WORK <br />
        RECENTLY DONE PROJECT
      </h1>
      <ul className="uppercase flex gap-8  my-10 items-center">
        <li className="text-[#f56]">
          All
        </li>
        <li>
          Popular
        </li>
        <li>
          Latest
        </li>
        <li>
          Following
        </li>
        <li>
          Upcoming
        </li>
      </ul>
      <div className="grid grid-cols-3 gap-3 h-max">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};
export default Projects;
