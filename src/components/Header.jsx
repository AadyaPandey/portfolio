import HoverLink from "./HoverLink";

function Header() {
  return (
    <header className="w-full pt-8 text-black">
      {/* Top row */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
        {/* Left */}
        <div className="flex min-w-0 items-center gap-3 font-sans text-[16px]">
          <span className="h-px min-w-[40px] flex-1 bg-black" />
        </div>

        {/* Center */}
        <div className="relative z-10 bg-white px-2.5">
          <h1 className="whitespace-nowrap font-sans text-[30px] font-normal leading-none">
            AADYA PANDEY
          </h1>
        </div>

        {/* Right */}
        <nav className="flex items-center justify-end gap-2.5 whitespace-nowrap font-sans text-[16px]">
          <span className="h-px min-w-[40px] flex-1 bg-black" />

          <HoverLink href="https://drive.google.com/file/d/1iJ5o_fg3S1dKA9bDQklOo4fVJ15xAnSQ/view?usp=sharing">Resume</HoverLink>

          <span>–</span>

          <HoverLink href="https://www.linkedin.com/in/aadya-pandey-ab8272279/">
            LinkedIn
          </HoverLink>

          <span>–</span>

          <HoverLink href="https://github.com/AadyaPandey">Github</HoverLink>

          <span>–</span>

          <HoverLink href="https://leetcode.com/u/aadyapandey/">
            Leetcode
          </HoverLink>

          <span>–</span>
        </nav>
      </div>

      {/* Bottom rule */}
      <div className="relative mt-5 h-[12px] border-t-[5px] border-black">
        {/* Handle */}
      </div>
    </header>
  );
}

export default Header;
