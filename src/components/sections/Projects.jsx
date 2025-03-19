import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition relative h-[400px] md:h-[350px]">
              <div>
              <h3 className="text-xl font-bold mb-2"> Audience Builder</h3>
              <p className="text-gray-400 mb-4">
              Audience Builder is a project within the media and advertising domain that enables users to create and manage tailored audiences for specific clients, 
              markets, and brands. Users can activate these audiences across various platforms, such as Facebook, by utilizing CCS (Third Party API) data.
              </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 absolute bottom-0">
                {["React", "Node.js", "Express", "MongoDB", "Typescript", "GraphQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all relative h-[400px] md:h-[350px]
            "
            >
              <div>
              <h3 className="text-xl font-bold mb-2">Streaming Data</h3>
              <p className="text-gray-400 mb-4">
              The Streaming Data project facilitates users in uploading CSV files directly from the front-end, 
              accommodating uploads for up to 500,000 products. It also enables users to download products uploaded on a 
              specific date and offers the option to download these products as a zip file. The maximum download limit is set at 1,000,000 products.
              </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 absolute bottom-0">
                {["MongoDB", "React", "Node.js" , "Express", "Typescript", "HTML", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all relative h-[400px] md:h-[350px]
            "
            >
              <div>
              <h3 className="text-xl font-bold mb-2">Core web Vitals</h3>
              <p className="text-gray-400 mb-4">
              Worked on optimizing Core Web Vitals (CWV) metrics, such as
              FCP, LCP, INP, and CLS, to improve page performance and search rankings. Focused on reducing load
              times, interaction delays, and ensuring visual stability. Leveraged technologies like React, AEM, and
              Solid.js for performance enhancements.
              </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 absolute bottom-0">
                {[ "React", "AEM", "Solid.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
