import Image from "next/image";
import sb from "@/public/sb-purple.png";
import sbbw from "@/public/sb-bw.png";

const BiographySection = () => {
  return (
    <section>
      {/* hero image */}
      <div className=" h-96 md:h-[28rem] w-full md:w-1/2 mt-10">
        <div className="relative group cursor-pointer h-full">
          <Image
            src={sb}
            alt="hero-image"
            width={500}
            height={500}
            className="absolute top-0 w-96 md:w-[28rem] z-10 grayscale group-hover:grayscale-0 duration-1000"
          />
          <div className="absolute top-10 left-10 group-hover:left-0 group-hover:top-0 w-40 h-40 bg-purple-500 rounded-full duration-700"></div>
          <div className="absolute bottom-12 right-12 group-hover:right-5 group-hover:bottom-5 w-24 h-24 bg-purple-500 rounded-full duration-700"></div>

          {/* foreground */}
          <div className="absolute bottom-28 rotate-45 left-24 group-hover:left-28 group-hover:bottom-32 w-8 h-8 bg-fuchsia-500 rounded-full duration-700 z-10"></div>

          {/* heading */}

          {/* hero message */}
          <h3 className="absolute w-full -bottom-28 text-2xl text-center capitalize">
            Hey there, my name is{" "}
            <span className="text-black group-hover:text-purple-500 text-7xl font-black flex flex-col justify-center items-center duration-700">
              <div>Shaquille</div>
              <div className="h-2 w-60 bg-black group-hover:bg-purple-500 -rotate-3 duration-700"></div>
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};
export default BiographySection;
