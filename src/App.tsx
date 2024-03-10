import Marquee from "react-fast-marquee";
import Camera from "./assets/camera.png";
import Spanner from "./assets/spanner.png";
import WhatIsText from "./assets/what_is_text.svg";
import WhyText from "./assets/why_text.svg";
import HardwareImage from "./assets/hardwareimg.png";
import SoftwareImage from "./assets/softwareimg.png";
import DesignImage from "./assets/designimg.png";
import Navbar from "./components/Navbar";
import Balloon from "./assets/balloon.png";
import { sponsorsList } from "./utils/sponsors";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        className="relative w-full bg-lightbg font-gilroy text-black"
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

          <div className="relative h-full w-full pt-10">
            <svg
              className="absolute -bottom-1 h-fit w-full"
              width="1512"
              height="220"
              viewBox="0 0 1512 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_152_1283"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1512"
                height="220"
              >
                <rect width="1512" height="220" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_152_1283)">
                <path
                  height="220"
                  d="M274.996 54.4619C148.582 46.9931 24.3263 131.951 -22 175.364V982H1533.9V153.891C1533.9 26.5 1347.48 53.5283 1243.09 82.4701C1116.5 110.781 1025.29 202.625 812.825 175.364C547.242 141.287 433.013 63.798 274.996 54.4619Z"
                  fill="#051A25"
                />
                <path
                  d="M-73 248.501C-23 137.501 159.266 -14.0231 546 122.001C1053.5 300.502 1154 22.5013 1382 57.0013C1564.4 84.6013 1642 116.501 1658 129.001"
                  stroke="#FDF6F8"
                  strokeWidth="41"
                />
                <path
                  d="M-73 248.501C-23 137.501 159.266 -14.0231 546 122.001C1053.5 300.502 1154 22.5013 1382 57.0013C1564.4 84.6013 1642 116.501 1658 129.001"
                  stroke="#FDF6F8"
                  strokeWidth="41"
                />
                <path
                  d="M-73 248.501C-23 137.501 159.266 -14.0231 546 122.001C1053.5 300.502 1154 22.5013 1382 57.0013C1564.4 84.6013 1642 116.501 1658 129.001"
                  stroke="#ECF016"
                  strokeWidth="27"
                />
              </g>
            </svg>
          </div>
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
          <div className="wave_border relative h-full w-full">
            <svg
              className="absolute -top-1 h-fit w-full"
              width="1512"
              height="192"
              viewBox="0 0 1512 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_165_1296"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1512"
                height="192"
              >
                <path d="M0 0.5H1512V191.5H0V0.5Z" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_165_1296)">
                <path
                  d="M296.996 146.961C170.582 153.523 46.3263 78.8767 0 40.7331V-668H1555.9C1548.44 -471.813 1555.9 59.5998 1555.9 59.5998C1555.9 170.211 1369.48 147.781 1265.09 122.352C1138.5 97.4773 1047.29 16.7805 834.825 40.7331C569.242 70.6738 455.013 138.758 296.996 146.961Z"
                  fill="#051A25"
                />
                <path
                  d="M-27 -6.39316C23 91.1346 205.266 224.268 592 104.753C1099.5 -52.0824 1200 192.177 1428 161.864C1610.4 137.614 1688 109.586 1704 98.6028"
                  stroke="#FDF6F8"
                  strokeWidth="41"
                />
                <path
                  d="M-27 -6.39316C23 91.1346 205.266 224.268 592 104.753C1099.5 -52.0824 1200 192.177 1428 161.864C1610.4 137.614 1688 109.586 1704 98.6028"
                  stroke="#ECF016"
                  strokeWidth="27"
                />
              </g>
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="pt-20 text-5xl md:hidden md:text-6xl">Tracks</h1>
            <div className="flex w-full flex-col items-center justify-center md:flex-row">
              <div className="flex w-full flex-col items-center justify-center py-5 md:pt-[200px]">
                <img className="h-[300px]" src={HardwareImage} alt="hardware" />
                <h2 className="text-2xl md:text-3xl">hardware</h2>
              </div>
              <div className="flex w-full flex-col items-center justify-center bg-yellow py-5 md:pt-[200px]">
                <h1 className="absolute bottom-[400px] left-1/2 hidden -translate-x-1/2 md:block md:text-4xl">
                  Tracks
                </h1>
                <img className="h-[300px]" src={SoftwareImage} alt="software" />
                <h2 className="text-2xl md:text-3xl">software</h2>
              </div>
              <div className="flex w-full flex-col items-center justify-center bg-pink py-5 md:pt-[200px]">
                <img className="h-[300px]" src={DesignImage} alt="design" />
                <h2 className="text-2xl md:text-3xl">design</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="home_prizes flex flex-col items-center bg-darkbg bg-overlay-dark py-20 text-white bg-blend-overlay">
          <h2 className="pb-10 text-5xl md:text-6xl">prizes</h2>
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
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between px-5 md:max-w-[900px]">
              <div className="w-full">
                <p className="text-xl font-black md:text-3xl">
                  platinum sponsor
                </p>
              </div>
              <div className="flex w-full items-start justify-start">
                {sponsorsList.platinum.map((sp, i) => {
                  const imgUrl = new URL(sp.img, import.meta.url).href;
                  console.log(imgUrl);

                  return (
                    <div
                      className="mt-5 flex w-[120px] flex-col items-center justify-center text-center font-bold"
                      key={`${i}_${sp.name}`}
                    >
                      <img
                        src={imgUrl}
                        alt={sp.name}
                        className="sponsor-shadow mb-2 aspect-square w-[80px] rounded-lg bg-white"
                      />
                      <p>{sp.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between px-5 md:max-w-[900px]">
              <div className="w-full">
                <p className="text-xl font-black md:text-3xl">gold sponsor</p>
              </div>
              <div className="flex w-full items-start justify-start">
                {sponsorsList.gold.map((sp, i) => {
                  const imgUrl = new URL(sp.img, import.meta.url).href;
                  console.log(imgUrl);

                  return (
                    <div
                      className="mt-5 flex w-[120px] flex-col items-center justify-center text-center font-bold"
                      key={`${i}_${sp.name}`}
                    >
                      <img
                        src={imgUrl}
                        alt={sp.name}
                        className="sponsor-shadow mb-2 aspect-square w-[80px] rounded-lg bg-white"
                      />
                      <p>{sp.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full items-center justify-between px-5 md:max-w-[900px]">
              <div className="w-full">
                <p className="text-xl font-black md:text-3xl">
                  educational partner
                </p>
              </div>
              <div className="flex w-full items-start justify-start">
                {sponsorsList.educational_partner.map((sp, i) => {
                  const imgUrl = new URL(sp.img, import.meta.url).href;
                  console.log(imgUrl);

                  return (
                    <div
                      className="mt-5 flex w-[120px] flex-col items-center justify-center text-center font-bold"
                      key={`${i}_${sp.name}`}
                    >
                      <img
                        src={imgUrl}
                        alt={sp.name}
                        className="sponsor-shadow mb-2 aspect-square w-[80px] rounded-lg bg-white"
                      />
                      <p>{sp.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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
