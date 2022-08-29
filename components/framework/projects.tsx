import ProjectCard from "@/Cards/projectCard";

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen">
      <h1 className="text-2xl text-center font-extrabold py-8">
        My Recent Work
      </h1>

      <div className="flex flex-col gap-20 w-11/12 h-80vh mx-auto grid-rows-2">
        {Array(3)
          .fill(10)
          .map((item, i) => {
            return i % 2 === 0 ? (
              <ProjectCard
                key={i}
                classnames={{
                  order: "",
                  position: "justify-end items-end right-0",
                  align: "text-right",
                  image: "h-80",
                  width: ["w-1/2 ", "w-1/2"],
                }}
              />
            ) : (
              <ProjectCard
                key={i}
                classnames={{
                  order: "order-last",
                  position: "justify-center items-start left-0",
                  align: "text-left",
                  image: "h-[450px]",
                  width: ["w-2/3", "w-1/3"],
                }}
              />
            );
          })}
      </div>
    </section>
  );
};
export default Projects;
