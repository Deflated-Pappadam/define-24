import { ReactElement, JSXElementConstructor } from "react";

export default function PrizeCard(props: {
  title: string;
  prizes: ReactElement<any, string | JSXElementConstructor<any>> | string;
}) {
  return (
    <div className="perspective group aspect-square h-[250px] cursor-pointer bg-transparent">
      <div className="preserve-3d group-hover:rotate-y-180 relative h-full w-full duration-1000">
        <div className="backface-hidden absolute flex h-full w-full flex-col items-center justify-center  rounded-lg bg-pink text-center">
          <h3 className="w-[60%] font-gilroy text-4xl font-extrabold leading-tight">
            {props.title}
          </h3>
        </div>
        <div className="rotate-y-180 backface-hidden absolute h-full w-full overflow-hidden">
          <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 border-pink bg-white font-black text-black">
            <div className="w-[60%] font-black">{props.prizes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
