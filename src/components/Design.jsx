import HoverLink from "./HoverLink";
import viasat_white from "../assets/image copy 4.png";

function Design() {
  return (
    <section className="w-full py-7">
      {/* Main content */}
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col">
          <h2 className="mb-3 font-sans text-[28px] font-normal leading-tight md:text-[32px]">
            Experiance
          </h2>

          <p className="font-sans text-[18px] leading-[1.3] md:text-[20px] md:leading-[1.2]">
            My time with the MLOps team at Viasat was my first real taste of
            working on software that wasn’t mine alone. Reading a large
            codebase, debugging code I hadn’t written, and writing with the
            next engineer in mind changed the way I approach development. I
            worked on building AI-powered automation workflows for satellite
            design validation and engineering document review, to know more
            click{" "}
            <HoverLink href="https://drive.google.com/file/d/1iJ5o_fg3S1dKA9bDQklOo4fVJ15xAnSQ/view?usp=sharing">
              here
            </HoverLink>
            . Working at Viasat also taught me that good engineering is as much
            about testing, asking the right questions, and knowing when to
            reach out as it is about writing the code itself.
          </p>

          <div className="mt-6">
            <HoverLink href="https://drive.google.com/file/d/1eNuRwIN4qj8OyUCZs36LrapMBl07QHfC/view?usp=sharing">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-[20px] text-white no-underline">
                ↗
              </span>
              Link
            </HoverLink>
          </div>
        </div>

        {/* Right */}
        {/* Viasat Image */}
        <div className="flex justify-start">
          <div className="group relative h-[220px] w-full shrink-0 overflow-hidden md:h-[300px]">
            <img
              src={viasat_white}
              alt="Viasat"
              className="image-grayscale h-full w-full scale-150 object-contain md:scale-220"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Design;