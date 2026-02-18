import "./App.css";
import Wolf from "./components/Wolf";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <>
      <main>
        <Canvas
          style={{
            height: "100vh",
            width: "100vw",
            left: "0px",
            position: "fixed",
            backgroundImage: "url(./background-l.png)",
            backgroundSize: "cover",
            backgroundRepeat: "non-repeat",
          }}
        >
          <Wolf />
        </Canvas>
        <section id="section-1">
          <div className="flex flex-column w-[100%] h-[5rem] justify-between p-[2.5rem] top-3 text-white leading-tight">
            <div className="font-bold cursor-pointer">
              WOLFSTUDIO <br /> / DEPT
              <span className="text-gray-500 font-extrabold">.</span>
            </div>
            <div className="cursor-pointer">
              <span className="text-red-400  ">
                <i class="ri-arrow-right-s-line"></i>
              </span>
              Our Showreels
            </div>
            <div className="cursor-pointer">
              <span className="font-extrabold">
                <i class="ri-menu-3-line"></i>
              </span>
            </div>
          </div>
          <div className="flex">
            {/* Left Side */}
            <div className="w-1/2  text-right pt-[3.5rem] text-amber-50 leading-20">
              <p className="font-bold text-[5rem] ">
                We <br /> Make <br /> Good <br /> Shit
              </p>
            </div>

            {/* Right Side */}
            <div className="w-1/2 text-center text-white">
              {/* Main Paragraph */}
              <p className="text-xl leading-relaxed font-light max-w-xl w-[16rem] mx-auto">
                Dogstudio is a multidisciplinary creative studio at the
                intersection of art, design and technology.
              </p>

              {/* Secondary Paragraph */}
              <p className="mt-6 text-base leading-relaxed text-white/70 max-w-xl mx-auto">
                Our goal is to deliver amazing experiences that make people
                talk, and build strategic value for brands, tech, entertainment,
                arts & culture.
              </p>

              {/* Social Links */}
              <p className="mt-10 text-sm tracking-widest uppercase text-white/80">
                <span className="hover:text-white cursor-pointer">
                  Facebook
                </span>{" "}
                /
                <span className="hover:text-white cursor-pointer">
                  {" "}
                  Instagram
                </span>{" "}
                /
                <span className="hover:text-white cursor-pointer">
                  {" "}
                  Dribbble
                </span>{" "}
                /
                <span className="hover:text-white cursor-pointer">
                  {" "}
                  Twitter
                </span>{" "}
                /
                <span className="hover:text-white cursor-pointer">
                  {" "}
                  Newsletter
                </span>
              </p>
            </div>
          </div>
        </section>
        <section id="section-2"></section>
        <section id="section-3"></section>
      </main>
    </>
  );
};

export default App;
