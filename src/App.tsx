import Marquee from "react-fast-marquee";
import Camera from "./assets/camera.png";
import Spanner from "./assets/spanner.png";
import WhatIsText from "./assets/what_is_text.svg";
import WhyText from "./assets/why_text.svg";
import HardwareImage from "./assets/hardwareimg.png";
import SoftwareImage from "./assets/softwareimg.png";
import BorderWaveBottom from "./assets/border_wave_b.png";
import BorderWaveTop from "./assets/border_wave_t.png";
import bagImg from "./assets/bag.png";
import handImg from "./assets/hand.png";
import DesignImage from "./assets/designimg.png";
import Navbar from "./components/Navbar";
import Balloon from "./assets/balloon.png";
import { sponsorsList } from "./utils/sponsors";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import PrizeCard from "./components/PrizeCard";
import heartBalloon from "./assets/heart_balloon.png";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import landingBottomLeftImg from "./assets/landing_bottom_left.png";
import landingBottomRightImg from "./assets/landing_bottom_right.png";
import landingBottomRight1Img from "./assets/landing_bottom_right_1.png";
import { useEffect, useState } from "react";

function getImageUrl(name: string) {
  return new URL(`./assets/sponsors/${name}`, import.meta.url).href;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setTimeout(() => {
      if (isLoading) setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    setTimeout(() => {
      if (isLoading) setIsLoading(false);
    }, 5000);
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);
  return (
    <>
      <div
        className="relative h-full w-full overflow-hidden  font-gilroy text-black"
        id="home"
      >
        <AnimatePresence>
          {isLoading && (
            <motion.div
              animate={{ backgroundColor: ["#ecf016", "#fb2a9b", "#051a25"] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "reverse",
              }}
              exit={{
                backgroundColor: ["#051a25"],
                top: "100%",
                transition: { duration: 0.5 },
              }}
              className="fixed z-[99] flex h-full w-full items-center justify-center bg-yellow bg-overlay-dark bg-blend-overlay"
            >
              <img
                className="absolute bottom-[100%] h-fit w-full"
                src={BorderWaveTop}
                alt="border"
              />
              <motion.svg
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                exit={{ opacity: 0 }}
                transition={{ repeat: Infinity, repeatDelay: 0.5, duration: 1 }}
                className="h-full w-[50%] max-w-[300px]"
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="38"
                viewBox="0 0 42 38"
                fill="none"
              >
                <path
                  d="M8.24314 3.88483L8.81327 0.0132588H23.8355L23.2521 3.97764L8.24314 3.88483Z"
                  fill="#faffe7"
                />
                <path
                  d="M23.9416 4.82621L24.7106 0.0132588L39.693 0L36.3386 20.9489H21.3694L22.1782 15.778H0.5L2.14409 4.82621H23.9416Z"
                  fill="#faffe7"
                />
                <path
                  d="M33.4498 34.0641L32.8797 37.9357H17.8575L18.4409 33.9713L33.4498 34.0641Z"
                  fill="#faffe7"
                />
                <path
                  d="M17.7514 33.1228L16.9824 37.9357L1.99995 37.949L5.35443 17.0001H20.3236L19.5148 22.171H41.193L39.5489 33.1228H17.7514Z"
                  fill="#faffe7"
                />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute top-0 z-10 w-full">
          <Marquee
            autoFill={true}
            className="home_marquee max-w-screen h-[60px] bg-darkbg font-semibold text-white"
          >
            <h4 className="mx-5">#defineisback</h4>
          </Marquee>
          <Navbar />
        </div>
        <section
          id="home"
          className="relative h-full bg-lightbg bg-overlay-light pt-[100px]"
        >
          <img
            src={landingBottomLeftImg}
            className="absolute bottom-0 left-0 h-[120px] md:h-[200px] lg:h-auto"
            alt="asset"
          />
          <img
            src={landingBottomRightImg}
            className="absolute bottom-0 right-0 h-[120px] md:h-[200px] lg:h-auto"
            alt="asset"
          />
          <img
            src={landingBottomRight1Img}
            className="min absolute bottom-0 right-0 h-[120px] md:h-[200px] lg:h-auto"
            alt="asset"
          />
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
              <motion.img
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1, ease: easeInOut }}
                onMouseMove={(ele) => {
                  ele.currentTarget.style.transform = `translateX(-${(window.innerWidth - ele.pageX) / 40}px) translateY(${(window.innerWidth - ele.pageY) / 40}px)`;
                }}
                className=""
                src={Balloon}
              />
            </div>
          </div>
          <div className="w-full">
            <h3 className="text-center text-xl md:text-3xl">april 2024</h3>
          </div>
          <img
            className="h-auto w-[100vw] scale-x-110"
            src={BorderWaveTop}
            alt=""
          />
        </section>

        <section
          id="about"
          className="home_about bg-darkbg bg-overlay-dark text-lightbg bg-blend-overlay"
        >
          <div className=" mx-auto flex w-[1000px] flex-col gap-10 py-10 md:flex-row md:justify-between ">
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
              <motion.img
                initial={{ opacity: 0, translateX: "-60%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5, damping: 0.5 }}
                src={Spanner}
                alt="spanner_image"
                className="img_placeholder relative left-0 w-[300px] max-w-[500px] md:absolute md:w-auto"
              />
            </div>
            <div className="why flex w-full flex-col-reverse overflow-hidden md:flex-col">
              <motion.img
                initial={{ opacity: 0, translateX: "60%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1, damping: 0.5 }}
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
        <section id="theme" className="relative">
          <img
            className="absolute top-0 h-auto w-[120vw]"
            src={BorderWaveBottom}
            alt=""
          />
          <div className="flex flex-col items-center justify-center bg-overlay-light">
            <h1 className="pt-20 text-5xl md:hidden md:text-6xl">Tracks</h1>
            <div className="flex w-full flex-col items-center justify-center md:flex-row">
              <div className="flex h-full w-full flex-col items-center justify-center py-5 md:pt-[200px]">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-[300px]"
                  src={HardwareImage}
                  alt="hardware"
                />
                <h2 className="text-2xl md:text-3xl">hardware</h2>
              </div>
              <div className="order-3 flex h-full w-full flex-col items-center justify-center bg-yellow bg-overlay-light py-5 md:order-none md:min-h-[900px] md:pt-[200px]">
                <h1 className="absolute bottom-[700px] left-1/2 hidden -translate-x-1/2 md:block md:text-4xl">
                  Tracks
                </h1>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-[300px]"
                  src={SoftwareImage}
                  alt="software"
                />
                <h2 className="text-2xl md:text-3xl">software</h2>
              </div>
              <div className="flex h-full w-full flex-col items-center justify-center bg-pink bg-overlay-light py-5 md:min-h-[900px] md:pt-[200px]">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-[300px]"
                  src={DesignImage}
                  alt="design"
                />
                <h2 className="text-2xl md:text-3xl">design</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center bg-overlay-light">
          <div className="relative mb-5 flex h-[100px] w-[33%] flex-col justify-end bg-yellow bg-overlay-light md:h-[200px]">
            <h2 className="text-lg sm:text-3xl md:text-6xl">‘vision’</h2>
            <h3 className="absolute right-full w-max text-xs sm:text-2xl md:text-4xl">
              wanda and our
            </h3>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex">
              <div className="max-w-[70vw]">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className=" w-full px-4 text-xs sm:text-xl md:pl-[100px] md:text-3xl lg:text-4xl"
                >
                  <b>"Build Beyond Boundaries"</b> conveys a sense of ambition,
                  innovation, and the drive to create something extraordinary
                  that transcends limitations. It's a call to action for
                  individuals and teams to think big, dream boldly, and push the
                  boundaries of what is achievable.
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, translateX: "50%", translateY: "20%" }}
              whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.5 }}
              className="flex h-full w-[60%] flex-col items-center"
            >
              <img className="h-full w-full" src={handImg} alt="hand" />
            </motion.div>
          </div>
        </section>
        <section
          id="prizes"
          className="relative flex min-h-[600px] flex-col items-center bg-darkbg bg-overlay-dark py-20 text-white bg-blend-overlay"
        >
          <img
            className="absolute right-0 top-0 hidden w-[250px] md:block"
            src={bagImg}
            alt="bag"
          />
          <h2 className="w-full pb-20 text-center text-5xl md:w-[500px] md:text-6xl">
            claim your rewards
          </h2>
          <div className="flex flex-col gap-5 md:flex-row">
            <PrizeCard
              title={"grand prize"}
              prizes={
                <>
                  <h1 className="font-gilroy font-bold">20k</h1>
                </>
              }
            />
            <PrizeCard
              title={"track prizes"}
              prizes={
                <>
                  <p className="text-xl">Software - 10k</p>
                  <p className="text-xl">Hardware - 10k</p>
                  <p className="text-xl">Design - 10k</p>
                </>
              }
            />
            <PrizeCard
              title={"for everyone"}
              prizes={
                <>
                  <p className="text-xl">Swags</p>
                  <p className="text-xl">Stickers</p>
                  <p className="text-xl">T-Shirts</p>
                  <p className="text-xl">Certificate of Participation</p>
                </>
              }
            />
          </div>
        </section>
        <section
          id="sponsors"
          className="relative flex flex-col items-center gap-10 bg-overlay-light py-20"
        >
          <h2 className="text-5xl md:text-6xl">Sponsors</h2>
          <motion.img
            initial={{ opacity: 0, translateY: "500px" }}
            whileInView={{
              opacity: 1,
              translateY: "0px",
              translateX: [0, "-10%", "10%", 0],
            }}
            whileTap={{
              top: "-20px",
              translateX: [0, "-4%", "2%", 0],
            }}
            transition={{ duration: 1 }}
            className="absolute right-[100px] top-[200px] hidden w-[200px] md:block"
            src={heartBalloon}
            alt="heart shaped balloon"
          />
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
                          className="z-10 mt-5 flex w-[full] flex-col items-center justify-center text-center font-bold"
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
        <section
          id="gallery"
          className="flex flex-col bg-darkbg bg-overlay-dark py-10 text-center text-white bg-blend-overlay"
        >
          <h1 className="mb-10 text-5xl md:text-6xl">gallery</h1>
          <Gallery />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
