import HoverLink from "./HoverLink";
import avatarColor from "../assets/avatar_color.jpeg";

function Intro() {
  return (
    <section className="py-3">
      <div className="flex items-center gap-7">
        {/* Avatar */}
        <div className="group relative h-[200px] w-[200px] shrink-0 overflow-hidden rounded-full">
          <img
            src={avatarColor}
            alt="Helena Zhang"
            className="image-grayscale h-full w-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="max-w-[1150px]">
          <p className="font-sans text-[20px] leading-[1.2]">
            Hey, i’m Aadya :)
          </p>
          <p className="font-sans text-[20px] leading-[1.2]">
            A recent 2026 CSE graduate, ex-SWE intern @ Viasat, and someone who genuinely enjoys building with code.
          </p>
          <p className="font-sans text-[20px] leading-[1.2]">
            I’m into backend engineering, building things from scratch, and figuring out how systems work under the hood.
          </p>
          <p className="font-sans text-[20px] leading-[1.2]">
            When i’m not coding, i’m probably reading a mystery novel.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
