import { timeline } from "@/lib/auxFunctions";
import Image from "next/image";

const Stack = ({ label, type }: { label: string; type: any }) => {
  const imageSize = 40;
  return (
    <div className="w-full">
      <h3 className="font-bold text-lg py-8 text-purple-950 capitalize">
        {label}
      </h3>

      <ul className="flex flex-col gap-2 ">
        {type?.technology.map((i: any) => (
          <div key={i.tech} className="md:flex items-center gap-3 hidden">
            <Image
              src={i.image}
              alt={"fs"}
              width={imageSize}
              height={imageSize}
            />
            <div
              style={{
                width: `${
                  i.since - 2015 > 3 ? timeline(i.since) * 3 : timeline(i.since)
                }%`,
              }}
              className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white h-[50px] rounded-lg flex flex-col justify-center items-end px-3"
            >
              <div className="text-sm font-black">{i.label}</div>
              <div className="text-xs font-semibold">{i.since}</div>
            </div>
          </div>
        ))}
        {type?.technology.map((i: any) => (
          <div key={i.tech} className="flex items-center gap-3 md:hidden">
            <Image
              src={i.image}
              alt={"fs"}
              width={imageSize}
              height={imageSize}
            />
            <div
              style={{
                width: `${
                  i.since - 2015 > 3 ? timeline(i.since) * 5 : timeline(i.since)
                }%`,
              }}
              className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white h-[50px] rounded-lg flex flex-col justify-center items-end px-3"
            >
              <div className="text-sm font-black">{i.label}</div>
              <div className="text-xs font-semibold">{i.since}</div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Stack;
