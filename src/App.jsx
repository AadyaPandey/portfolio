import Articles from "./components/Articles";
import Design from "./components/Design";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Socials from "./components/Socials";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <Header />
        <Intro />

        <div className="mt-4 h-[2px] w-full bg-black" />
        <div className="mt-1 h-px w-full bg-black" />

        <Design />

        <div className="mt-4 h-[2px] w-full bg-black" />
        <div className="mt-1 h-px w-full bg-black" />

        <Articles />

        <div className="mt-4 h-[2px] w-full bg-black" />
        <div className="mt-1 h-px w-full bg-black" />

        <TechStack />

        <div className="mt-4 h-[2px] w-full bg-black" />
        <div className="mt-1 h-px w-full bg-black" />

        <Socials />

        <Footer />
      </div>
    </div>
  );
}

export default App;