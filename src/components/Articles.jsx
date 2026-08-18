import HoverLink from "./HoverLink";

import article1 from "../assets/Project_1.jpeg";
import article2 from "../assets/Project_2.jpeg";
import article3 from "../assets/Project_3.jpeg";

const articles = [
  {
    image: article1,
    title: "FundWise",
    description:
      "A multi-agent AI system built to automate NGO grant application evaluation using intelligent AI agents and RAG.",
    link: "https://github.com/AadyaPandey/FUNDWISE",
  },
  {
    image: article2,
    title: "Notification System",
    description:
      "A scalable notification system built with microservices and event-driven architecture for reliable asynchronous communication.",
    link: "https://github.com/AadyaPandey/notification_system",
  },
  {
    image: article3,
    title: "Weave",
    description:
      "An AI-powered workflow automation platform that lets you visually build and execute custom workflows.",
    link: "https://github.com/AadyaPandey/weave_backend",
  },
];

function Articles() {
  return (
    <section className="w-full py-7">
      {/* Section label */}
      <div className="mb-6 flex items-center gap-3 font-sans text-[30px]">
        <span>Projects</span>
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {articles.map((article, index) => (
          <article
            key={article.title}
            className={`
              ${index !== 0 ? "border-l border-black" : ""}
              px-3
              ${index === 0 ? "pl-0" : ""}
              ${index === articles.length - 1 ? "pr-0" : ""}
            `}
          >
            {/* Image */}
            <div className="group relative mb-5 h-[260px] w-full overflow-hidden rounded-none sm:h-[285px] lg:h-[310px]">
              <img
                src={article.image}
                alt=""
                className="image-grayscale h-full w-full object-cover object-center"
              />
            </div>

            {/* Title */}
            <h2 className="font-sans text-[30px] font-normal leading-[1.15]">
              {article.title}
            </h2>

            {/* Description */}
            <p className="mt-3 font-sans text-[16px] leading-[1.5]">
              {article.description}
            </p>

            {/* Link */}
            <div className="mt-6">
              <HoverLink href={article.link}>
                <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-[13px] text-white no-underline">
                  ↗
                </span>
                Github
              </HoverLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Articles;
