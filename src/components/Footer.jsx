import HoverLink from "./HoverLink";
import image from "../assets/image.png";

function Footer() {
  return (
    <footer className="mt-8">
      {/* Footer rule */}
      <div className="h-[3px] bg-black" />

      {/* Footer info */}
      <div className="grid grid-cols-1 items-center gap-4 py-5 font-sans text-[14px] md:grid-cols-[1fr_auto_1fr] md:gap-8">
        {/* Left */}
        <div className="flex min-w-0 items-center"></div>

        {/* Center */}
        <div />

        {/* Right */}
        <div className="flex items-center justify-end"></div>
      </div>

      {/* TV Static */}
      <div className="w-full overflow-hidden">
        <img
          src={image}
          alt="TV Static"
          className="block h-auto w-full"
        />
      </div>
    </footer>
  );
}

export default Footer;