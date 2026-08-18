import HoverLink from "./HoverLink";
import image from "../assets/image.png";

function Footer() {
  return (
    <footer className="mt-8">
      {/* Footer rule */}
      <div className="h-[3px] bg-black" />

      {/* Footer info */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8 py-5 font-sans text-[14px]">
        {/* Left */}
        <div className="flex min-w-0 items-center">
        </div>

        {/* Center */}
        <div />

        {/* Right */}
        <div className="flex items-center justify-end">
          <span>
          </span>
        </div>
        <div>
            <img src={image} alt="TV Static" className="w-full" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;