import techstack from "../assets/techstack(1).png";

function TechStack() {
  return (
    <section className="w-full py-5">
      <div className="w-full overflow-hidden">
        <img
          src={techstack}
          alt="Technology stack"
          className="image-grayscale block h-auto w-full"
        />
      </div>
    </section>
  );
}

export default TechStack;