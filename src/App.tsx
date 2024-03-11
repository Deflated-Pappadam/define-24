import Marquee from "react-fast-marquee";
import Camera from "./assets/camera.png";
import Spanner from "./assets/spanner.png";
import WhatIsText from "./assets/what_is_text.svg";
import WhyText from "./assets/why_text.svg";
import HardwareImage from "./assets/hardwareimg.png";
import SoftwareImage from "./assets/softwareimg.png";
import BorderWaveBottom from "./assets/border_wave_b.png";
import BorderWaveTop from "./assets/border_wave_t.png";
import DesignImage from "./assets/designimg.png";
import Navbar from "./components/Navbar";
import Balloon from "./assets/balloon.png";
import { sponsorsList } from "./utils/sponsors";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function getImageUrl(name: string) {
  return new URL(`./assets/sponsors/${name}`, import.meta.url).href;
}

function App() {
  return (
    <>
      <div
        className="relative w-full overflow-hidden bg-lightbg font-gilroy text-black"
        id="home"
      >
        <Marquee
          autoFill={true}
          className="home_marquee max-w-screen absolute top-0 h-[60px] bg-darkbg font-semibold text-white"
        >
          <h4 className="mx-5">#defineisback</h4>
        </Marquee>
        <Navbar />
        <section className=" h-full bg-lightbg bg-overlay-light pt-[100px]">
          <div className="flex h-full min-h-[300px] items-center md:px-20">
            <div className="w-full pl-5">
              <h1 className="pt-5 text-5xl leading-[60px] text-black md:text-7xl">
                define.
              </h1>
              <h4 className="text-xl font-semibold md:text-2xl">
                build beyond{" "}
                <span className="font-semibold text-pink">boundaries</span>
              </h4>
              <button className="button-shadow mt-5 rounded-full bg-yellow px-7 py-2 text-xl font-semibold">
                register now
              </button>
            </div>
            <div className="w-full">
              <img
                onMouseMove={(ele) => {
                  ele.currentTarget.style.transform = `translateX(-${(window.innerWidth - ele.pageX) / 40}px) translateY(${(window.innerWidth - ele.pageY) / 40}px)`;
                }}
                className=""
                src={Balloon}
              />
            </div>
          </div>
          <img
            className="h-auto w-[100vw] scale-x-110"
            src={BorderWaveTop}
            alt=""
          />
        </section>

        <section className="home_about bg-darkbg bg-overlay-dark text-lightbg bg-blend-overlay">
          <div className="flex flex-col gap-10 py-10 md:flex-row ">
            <div className="what_is w-full">
              <div className="content max-w-[400px] px-10">
                <h3 style={{ position: "relative" }}>
                  define?
                  <img
                    style={{ position: "absolute", top: "-20%", left: "10%" }}
                    src={WhatIsText}
                    alt="why"
                  />
                </h3>
                <p>
                  Define’24 is the second edition of the flagship 24-hour
                  hackathon hosted by the Department of Computer Science and
                  Engineering of Mar Baselios College of Engineering and
                  Technology, Trivandrum as a part of its annual
                  inter-collegiate technical fest, Hash.
                </p>
              </div>
              <img
                src={Spanner}
                alt="spanner_image"
                className="img_placeholder w-[300px] max-w-[500px] md:w-auto"
              />
            </div>
            <div className="why flex w-full flex-col-reverse overflow-hidden md:flex-col">
              <img
                src={Camera}
                alt="camera_image"
                className="img_placeholder w-[300px] max-w-[500px] md:w-auto"
              />
              <div className="content w-[400px] px-10">
                <h3 style={{ position: "relative" }}>
                  define?
                  <img
                    style={{ position: "absolute", top: "-20%", left: "10%" }}
                    src={WhyText}
                    alt="why"
                  />
                </h3>
                <p>
                  Define is not some random hackathon, but is a place where you
                  will build solutions for the real world. It is your chance to
                  work on impactful problem statements, build collaboratively
                  and channelize your creative mindset to come up with
                  influential yet unique ideas, all during the world’s ‘realest’
                  hackathon.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative">
          <img
            className="absolute top-0 h-auto w-[120vw]"
            src={BorderWaveBottom}
            alt=""
          />
          <div className="flex flex-col items-center justify-center bg-overlay-light">
            <h1 className="pt-20 text-5xl md:hidden md:text-6xl">Tracks</h1>
            <div className="flex w-full flex-col items-center justify-center md:flex-row">
              <div className="flex h-full w-full flex-col items-center justify-center py-5 md:pt-[200px]">
                <img className="h-[300px]" src={HardwareImage} alt="hardware" />
                <h2 className="text-2xl md:text-3xl">hardware</h2>
              </div>
              <div className="flex h-full w-full flex-col items-center justify-center bg-yellow bg-overlay-light py-5 md:min-h-[900px] md:pt-[200px]">
                <h1 className="absolute bottom-[700px] left-1/2 hidden -translate-x-1/2 md:block md:text-4xl">
                  Tracks
                </h1>
                <img className="h-[300px]" src={SoftwareImage} alt="software" />
                <h2 className="text-2xl md:text-3xl">software</h2>
              </div>
              <div className="flex h-full w-full flex-col items-center justify-center bg-pink bg-overlay-light py-5 md:min-h-[900px] md:pt-[200px]">
                <img className="h-[300px]" src={DesignImage} alt="design" />
                <h2 className="text-2xl md:text-3xl">design</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="flex min-h-[600px] flex-col items-center bg-darkbg bg-overlay-dark py-20 text-white bg-blend-overlay">
          <h2 className="w-full pb-20 text-center text-5xl md:w-[500px] md:text-6xl">
            claim your rewards
          </h2>
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex aspect-square w-[230px] flex-col items-center justify-center rounded-lg border-4 border-pink bg-lightbg text-black">
              <div className="font-gilroy">
                <h1 className="font-gilroy font-bold">20k</h1>
              </div>
            </div>
            <div className="flex aspect-square w-[230px] flex-col items-center justify-center rounded-lg border-4 border-pink bg-lightbg text-black">
              <div className="font-gilroy font-black">
                <p>Software - 10k</p>
                <p>Hardware - 10k</p>
                <p>Design - 10k</p>
              </div>
            </div>
            <div className="flex aspect-square w-[230px] flex-col items-center justify-center rounded-lg border-4 border-pink bg-lightbg text-black">
              <div className="w-[60%] font-black">
                <p>Swags</p>
                <p>Stickers</p>
                <p>T-Shirts</p>
                <p>Certificate of Participation</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center gap-10 bg-overlay-light py-20">
          <h2 className="text-5xl md:text-6xl">Sponsors</h2>
          {Object.keys(sponsorsList).map((categoryKey, i) => {
            const category = sponsorsList[categoryKey];
            return (
              <div
                key={i}
                className="flex w-full flex-col items-center justify-center"
              >
                <div className="flex w-full flex-col items-center justify-between md:max-w-[900px] md:flex-row">
                  <div className="w-full text-center md:text-start">
                    <p className="text-xl font-black md:text-3xl">
                      {category.name}
                    </p>
                  </div>
                  <div className="flex w-full items-center justify-center gap-9 md:items-start md:justify-start">
                    {category.sponsors.map((sp, i) => {
                      const imgUrl = getImageUrl(sp.img);
                      return (
                        <div
                          className="mt-5 flex w-[full] flex-col items-center justify-center text-center font-bold"
                          key={`${i}_${sp.name}`}
                        >
                          <img
                            src={imgUrl}
                            alt={sp.name}
                            className="sponsor-shadow mb-2 h-[100px] w-fit max-w-[100px] rounded-lg bg-white"
                          />
                          <p>{sp.name}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        <section className="flex flex-col bg-darkbg bg-overlay-dark py-10 text-center text-white bg-blend-overlay">
          <h1 className="mb-10 text-5xl md:text-6xl">gallery</h1>
          <Gallery />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
