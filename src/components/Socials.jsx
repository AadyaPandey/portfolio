import HoverLink from "./HoverLink";

import linkedin from "../assets/image copy.png";
import github from "../assets/image copy 2.png";
import leetcode from "../assets/image copy 3.png";

const profiles = [
  {
    image: leetcode,
    title: "LeetCode",
    link: "https://leetcode.com/u/aadyapandey/",
  },
  {
    image: github,
    title: "GitHub",
    link: "https://github.com/AadyaPandey",
  },
  {
    image: linkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/aadya-pandey-ab8272279/",
  },
];

function Socials() {
  return (
    <section className="w-full">
      {/* Section label */}
      <div className="mb-7 flex items-center gap-3 font-sans text-[16px]">
        <span></span>
      </div>

      {/* Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {profiles.map((profile, index) => (
          <article
            key={profile.title}
            className={`
              ${index !== 0 ? "border-l border-black" : ""}
              px-3
              ${index === 0 ? "pl-0" : ""}
              ${index === profiles.length - 1 ? "pr-0" : ""}
            `}
          >
            {/* Image */}
            <div className="group mb-5 h-[260px] w-full overflow-hidden sm:h-[285px] lg:h-[310px]">
              <img
                src={profile.image}
                alt={profile.title}
                className="image-grayscale h-full w-full object-cover object-center"
              />
            </div>

            {/* Title */}
            <h2 className="font-sans text-[30px] font-normal leading-[1.15]">
              {profile.title}
            </h2>

            {/* Link */}
            <div className="mt-5">
              <HoverLink href={profile.link}>
                <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-[13px] text-white no-underline">
                  ↗
                </span>
                View Profile
              </HoverLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Socials;
