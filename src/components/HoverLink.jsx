function HoverLink({ children, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-block"
    >
      {/* Yellow highlight */}
      <span
        className="
          absolute
          bottom-0
          left-0
          z-0
          h-[75%]
          w-full
          origin-left
          scale-x-0
          bg-[#fff19a]
          transition-transform
          duration-300
          ease-out
          group-hover:scale-x-100
        "
      />

      {/* Text */}
      <span
        className="
          link-text
          relative
          z-10
          underline
          decoration-[1px]
          underline-offset-[4px]
        "
      >
        {children}
      </span>
    </a>
  );
}

export default HoverLink;
