import IconLinkedin from "./icons/IconLinkedIn";
import IconMail from "./icons/IconMail";
import IconTwitter from "./icons/IconTwitter";
import IconInstagram from "./icons/iconInstagram";

export default function Footer() {
  return (
    <div className="bg-overlay-light py-10 text-center">
      <h1 className="my-4 text-5xl md:hidden md:text-7xl">define.</h1>
      <div className="my-4 flex  items-center justify-around">
        <a
          href="https://www.linkedin.com/company/definehack/"
          className="flex aspect-square h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-4 border-black p-2 transition-all duration-200 hover:bg-black"
        >
          <IconLinkedin width={20} fill="var(--lightbg)" />
        </a>
        <a
          href="https://twitter.com/definehack"
          className="flex aspect-square h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-4 border-black p-2 transition-all duration-200 hover:bg-black"
        >
          <IconTwitter width={20} fill="var(--lightbg)" />
        </a>
        <h1 className="hidden md:inline-block">define.</h1>
        <a
          href="mailto:hash@mbcet.ac.in"
          className="flex aspect-square h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-4 border-black p-2 transition-all duration-200 hover:bg-black"
        >
          <IconMail width={20} fill="var(--lightbg)" />
        </a>
        <a
          href="https://www.instagram.com/definehack/"
          className="flex aspect-square h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full border-4 border-black p-2 transition-all duration-200 hover:bg-black"
        >
          <IconInstagram width={20} fill="var(--lightbg)" />
        </a>
      </div>
      <p className="text-lg font-semibold">© 2024 HASH MBCET</p>
      <p className="text-lg font-semibold">All Rights Reserved</p>
    </div>
  );
}
