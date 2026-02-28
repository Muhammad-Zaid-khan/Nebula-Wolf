import "./App.css";
import Wolf from "./components/Wolf";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <>
      <main>
        <div className="images">
          <img id="tommorowland" src="./tommorowland.png" alt="" />
          <img id="navy-pier" src="./navy-pier.png" alt="" />
          <img id="msi-chicago" src="./msi-chicago.png" alt="" />
          <img id="phone" src="./phone.png" alt="" />
          <img id="kikk" src="./kikk.png" alt="" />
          <img id="kennedy" src="./kennedy.png" alt="" />
          <img id="opera" src="./opera.png" alt="" />
        </div>
        <Canvas
          id="canvas-elem"
          style={{
            height: "100vh",
            width: "100vw",
            left: "0px",
            position: "fixed",
            // backgroundImage: "url(./background-l.png)",
            // backgroundSize: "cover",
            // backgroundRepeat: "non-repeat",
          }}
        >
          <Wolf />
        </Canvas>
        <section id="section-1">
          {/* ----- Top ----- */}
          <div className="flex flex-column w-[100%] h-[5rem] justify-between p-[2.7rem] top-3 text-white leading-tight">
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

          {/* ----- Middle ----- */}

          <div className="flex ">
            {/* ----- Left ----- */}
            <div className=" w-1/2">
              <p className=" text-[8rem] font-bold text-white leading-[6.5rem] text-right pt-[6.5rem]">
                We
                <br />
                Make
                <br />
                Good
                <br />
                Shit
              </p>
            </div>
            {/* ------ Right ------ */}
            <div className=" w-1/2"></div>
          </div>

          {/* ----- Bottom ------ */}
          <div className="flex ">
            {/* ------ Left ------ */}
            <div className="w-1/2 "></div>
            {/* ------ Right ------ */}
            <div className="w-1/2 items-center pt-[6.5rem]">
              <p className=" text-white text-3xl font-light">
                Dogstudio is a multidisciplinary <br /> creative studio at the
                intersection <br /> of art, design and technology.
              </p>
              <p className="text-gray-500 font-light pt-5 ">
                Our goal is to deliver amazing experiences that make <br />{" "}
                people talk, and build strategic value for brands, tech, <br />{" "}
                entertainment, arts & culture.
              </p>
              <p className="text-white font-normal pt-14">
                <span className=" pr-2 cursor-pointer text-white hover:text-gray-500">
                  {" "}
                  Facebook{" "}
                </span>{" "}
                /{" "}
                <span className=" pr-2 pl-2 cursor-pointer text-white hover:text-gray-500">
                  {" "}
                  Instagram{" "}
                </span>{" "}
                /
                <span className=" pr-2 pl-2 cursor-pointer text-white hover:text-gray-500">
                  {" "}
                  Dribbble{" "}
                </span>{" "}
                /
                <span className=" pr-2 pl-2 cursor-pointer text-white hover:text-gray-500">
                  {" "}
                  Twitter{" "}
                </span>
                /{" "}
                <span className=" pl-2 cursor-pointer text-white hover:text-gray-500">
                  {" "}
                  Newsletter{" "}
                </span>
              </p>
            </div>
            {/* ----- Long line ----- */}
            <div id="long" className="absolute w-[32rem] h-[1px] "></div>
            {/* ----- Short Line ----- */}
            <div
              id="short"
              className="absolute w-[6rem] h-[1px] top-[15%] right-[15%]"
            ></div>
          </div>
        </section>
        <section id="section-2">
          <div id="titles" className="flex flex-col w-full pt-8">
            <p className="text-white text-xs tracking-[0.3em] uppercase opacity-60 mb-8 text-center">
              Featured Projects
            </p>

            <div
              id="title"
              img-title="tommorowland"
              className="flex items-baseline gap-16 py-2 group cursor-pointer"
            >
              <small
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  minWidth: "8rem",
                  fontFamily: "monospace",
                }}
              >
                2020 – ONGOING
              </small>
              <h1
                className="title"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: "300",
                  color: "rgba(255,255,255,0.15)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.15)")
                }
              >
                Tomorrowland
              </h1>
            </div>

            <div
              id="title"
              img-title="navy-pier"
              className="flex items-baseline gap-16 py-2 group cursor-pointer"
            >
              <small
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  minWidth: "8rem",
                  fontFamily: "monospace",
                }}
              >
                2018 – TODAY
              </small>
              <h1
                className="title"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: "300",
                  color: "rgba(255,255,255,0.15)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.15)")
                }
              >
                Navy Pier
              </h1>
            </div>

            <div
              id="title"
              img-title="msi-chicago"
              className="flex items-baseline gap-16 py-2 group cursor-pointer"
            >
              <small
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  minWidth: "8rem",
                  fontFamily: "monospace",
                }}
              >
                2015 – TODAY
              </small>
              <h1
                className="title"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: "300",
                  color: "rgba(255,255,255,0.15)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.15)")
                }
              >
                MSI Chicago
              </h1>
            </div>

            <div
              id="title"
              img-title="phone"
              className="flex items-baseline gap-16 py-2 group cursor-pointer"
            >
              <small
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  minWidth: "8rem",
                  fontFamily: "monospace",
                }}
              >
                2016
              </small>
              <h1
                className="title"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: "300",
                  color: "rgba(255,255,255,0.15)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.15)")
                }
              >
                This Was Louise's Phone
              </h1>
            </div>

            <div
              id="title"
              img-title="kikk"
              className="flex items-baseline gap-16 py-2 group cursor-pointer"
            >
              <small
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  minWidth: "8rem",
                  fontFamily: "monospace",
                }}
              >
                2018 – ONGOING
              </small>
              <h1
                className="title"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: "300",
                  color: "rgba(255,255,255,0.15)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.15)")
                }
              >
                KIKK Festival 2018
              </h1>
            </div>

            <div
              id="title"
              img-title="kennedy"
              className="flex items-baseline gap-16 py-2 group cursor-pointer"
            >
              <small
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  minWidth: "8rem",
                  fontFamily: "monospace",
                }}
              >
                2017
              </small>
              <h1
                className="title"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: "300",
                  color: "rgba(255,255,255,0.15)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.15)")
                }
              >
                The Kennedy Center
              </h1>
            </div>

            <div
              id="title"
              img-title="opera"
              className="flex items-baseline gap-16 py-2 group cursor-pointer"
            >
              <small
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  minWidth: "8rem",
                  fontFamily: "monospace",
                }}
              >
                2016 – ONGOING
              </small>
              <h1
                className="title"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: "300",
                  color: "rgba(255,255,255,0.15)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.7)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.15)")
                }
              >
                Royal Opera Of Wallonia
              </h1>
            </div>
          </div>
        </section>
       <section
      id="section-3"
      style={{
        minHeight: "100vh",
        padding: "80px 60px",
        fontFamily: "'Georgia', serif",
        color: "#e8e8e8",
        position: "relative",
        overflow: "hidden",
        paddingTop:"8rem"
      }}
    >
      {/* Subtle background overlay effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "960px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* -----Top---- */}
        <div style={{ display: "flex", marginBottom: "80px" }}>
          {/* -----Left----- */}
          <div style={{ width: "55%" }}>
            <p
              style={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "11px",
                fontWeight: "600",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(200, 210, 230, 0.6)",
                marginBottom: "28px",
              }}
            >
              This is how we do it
            </p>
            <h1
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: "700",
                lineHeight: "1.1",
                color: "#f0f2f5",
                margin: 0,
                letterSpacing: "-0.02em",
                zIndex: "-1"
              }}
            >
              We're crafting
              <br /> emotional
              <br /> experiences aimed
              <br /> at improving
              <br /> results
            </h1>
          </div>
          {/* ------Right------ */}
          <div style={{ width: "45%" }} />
        </div>

        {/* -----Bottom----- */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "40px" }}>
          {/* -----Left----- */}
          <div style={{ width: "45%" }} />

          {/* ------Right------ */}
          <div
            style={{
              width: "55%",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <p
              style={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "15px",
                lineHeight: "1.75",
                color: "rgba(200, 210, 230, 0.8)",
                margin: 0,
              }}
            >
              Dogstudio is a design &amp; technology firm working globally from
              our offices based in Belgium and Chicago. Our strong focus on
              producing high quality &amp; emotional brandings, digital products
              and experiences became a signature.
            </p>
            <p
              style={{
                fontFamily: "'Arial', sans-serif",
                fontSize: "15px",
                lineHeight: "1.75",
                color: "rgba(200, 210, 230, 0.8)",
                margin: 0,
              }}
            >
              We're passionate about moving people and solving problems for the
              likes of Microsoft, The Museum of Science And Industry Of Chicago,
              The Kennedy Center of Washington, Dragone, Quanta Magazine, and
              many more.
            </p>

            {/* Discover our values link */}
            <div style={{ marginTop: "16px" }}>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  fontFamily: "'Arial', sans-serif",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#4a90d9",
                  textDecoration: "none",
                  paddingBottom: "6px",
                  borderBottom: "2px solid #4a90d9",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#6aabef";
                  e.target.style.borderColor = "#6aabef";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#4a90d9";
                  e.target.style.borderColor = "#4a90d9";
                }}
              >
                Discover our values
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
      </main>
    </>
  );
};

export default App;
