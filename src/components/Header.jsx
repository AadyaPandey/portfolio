import HoverLink from "./HoverLink";

function Header() {
  return (
    <header className="w-full pt-6 text-black md:pt-8">
      {/* Top row */}
      <div className="flex flex-col gap-5 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-8">
        {/* Left */}
        <div className="flex min-w-0 items-center gap-3 font-sans text-[16px]">
          <span className="hidden h-px min-w-[40px] flex-1 bg-black md:block" />
        </div>

        {/* Center */}
        <div className="relative z-10 bg-white px-2.5 text-center">
          <h1 className="font-sans text-[26px] font-normal leading-none md:whitespace-nowrap md:text-[30px]">
            AADYA PANDEY
          </h1>
        </div>

        {/* Right */}
        <nav className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 font-sans text-[14px] md:justify-end md:whitespace-nowrap md:text-[16px]">
          <span className="hidden h-px min-w-[40px] flex-1 bg-black md:block" />

          <HoverLink href="https://drive.google.com/file/d/1iJ5o_fg3S1dKA9bDQklOo4fVJ15xAnSQ/view?usp=sharing">
            Resume
          </HoverLink>

          <span>–</span>

          <HoverLink href="https://www.linkedin.com/in/aadya-pandey-ab8272279/">
            LinkedIn
          </HoverLink>

          <span>–</span>

          <HoverLink href="https://github.com/AadyaPandey">
            Github
          </HoverLink>

          <span>–</span>

          <HoverLink href="https://leetcode.com/u/aadyapandey/">
            Leetcode
          </HoverLink>

          <span className="hidden md:inline">–</span>
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