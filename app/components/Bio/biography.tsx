import Image from "next/image";
import sb from "@/public/sb-purple.png";

const BiographySection = () => {
  return (
    <section className="flex">
      {/* hero image */}
      <div className=" h-96 md:h-[35rem] w-full md:w-[40%] mt-10 md:mt-16 ">
        <div className="relative group cursor-pointer h-full">
          <Image
            src={sb}
            alt="hero-image"
            width={500}
            height={500}
            className="absolute top-0 w-96 md:w-[33rem] z-10 grayscale group-hover:grayscale-0 duration-1000"
          />
          <div className="absolute top-20 left-20 group-hover:left-0 group-hover:top-0 w-40 h-40 md:w-52 md:h-52 bg-purple-500 rounded-full duration-700"></div>
          <div className="absolute bottom-12 right-12 md:bottom-28 md:right-36 group-hover:right-5 group-hover:bottom-5 md:group-hover:right-6 md:group-hover:bottom-6 w-24 h-24 md:w-32 md:h-32 bg-purple-500 rounded-full duration-700"></div>

          {/* foreground */}
          <div className="absolute bottom-28 rotate-45 left-24 group-hover:left-28 group-hover:bottom-32 w-8 h-8 md:w-12 md:h-12 bg-fuchsia-500 rounded-full duration-700 z-10"></div>

          {/* heading */}

          {/* hero message */}
          <h3 className="absolute w-full -bottom-28 md:top-0 text-2xl text-center capitalize md:hidden">
            Hey there, my name is{" "}
            <span className="text-black group-hover:text-purple-500 text-7xl font-black flex flex-col justify-center items-center duration-700">
              <div>Shaquille</div>
              <div className="h-2 w-60 bg-black group-hover:bg-purple-500 group-hover:-rotate-3 rotate-3 duration-700"></div>
            </span>
          </h3>
        </div>

        <div className="mt-36 md:hidden flex flex-col">
          <p className="item-center w-full text-center text-lg">
            I am a creative and detail-oriented UX/UI designer, graphic artist,
            and front end developer with over 8 years of experience. I am
            passionate about crafting intuitive and user-friendly digital
            experiences.
          </p>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col mt-16 w-[60%] gap-8 px-5">
        {/* desktop display */}

        <h3 className="w-full text-2xl md:text-3xl md:font-medium text-center md:text-start md:flex md:flex-col items-start capitalize hidden ">
          Hey there, my name is{" "}
          <span className="text-black md:text-purple-500 group-hover:text-purple-500 text-7xl md:text-[5.8rem] font-black flex flex-col justify-center items-center duration-700">
            <div>Shaquille</div>
            <div className="h-2 w-60 md:w-96 bg-black md:bg-purple-500 group-hover:bg-purple-500 group-hover:-rotate-3 rotate-3 md:-rotate-3 duration-700"></div>
          </span>
        </h3>

        <p className="md:text-2xl md:mt-3 justify-start w-full hidden md:block">
          I am a creative and detail-oriented UX/UI designer, graphic artist,
          and front end developer with over 8 years of experience. I am
          passionate about crafting intuitive and user-friendly digital
          experiences.
        </p>
      </div>
    </section>
  );
};
export default BiographySection;
