import HoverLink from "./HoverLink";
import avatarColor from "../assets/avatar_color.jpeg";

function Intro() {
  return (
    <section className="py-5 md:py-3">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-7">
        {/* Avatar */}
        <div className="group relative h-[150px] w-[150px] shrink-0 overflow-hidden rounded-full md:h-[200px] md:w-[200px]">
          <img
            src={avatarColor}
            alt="Aadya Pandey"
            className="image-grayscale h-full w-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="max-w-[1150px] text-center md:text-left">
          <p className="font-sans text-[18px] leading-[1.3] md:text-[20px] md:leading-[1.2]">
            Hey, i’m Aadya :)
          </p>

          <p className="font-sans text-[18px] leading-[1.3] md:text-[20px] md:leading-[1.2]">
            A recent 2026 CSE graduate, ex-SWE intern @ Viasat, and someone who genuinely enjoys building with code.
          </p>

          <p className="font-sans text-[18px] leading-[1.3] md:text-[20px] md:leading-[1.2]">
            I’m into backend engineering, building things from scratch, and figuring out how systems work under the hood.
          </p>

          <p className="font-sans text-[18px] leading-[1.3] md:text-[20px] md:leading-[1.2]">
            When i’m not coding, i’m probably reading a mystery novel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;