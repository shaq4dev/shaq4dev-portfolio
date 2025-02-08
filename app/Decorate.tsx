import Moon from "./Moon";
import Star from "./Star";

const Decorate = () => {
  return (
    <>
      {/* moon */}

      <Moon
        position="top-10 right-5 md:right-20"
        size="h-24 w-24"
        color="bg-gradient-to-b from-purple-700"
        shape="rounded-full"
      />
      <Moon
        position="-bottom-96 -right-16 md:-bottom-32 md:-right-16 md:-right-32"
        size="h-[35rem] w-[35rem]"
        color="bg-gradient-to-tl from-purple-500 opacity-50"
        shape="rounded-full blur-2xl"
      />
      <Moon
        position="top-20 -right-16 md:-left-60 hidden md:block"
        size="h-[48rem] w-[48rem]"
        color="bg-gradient-to-tl from-purple-600 opacity-10"
        shape="rounded-full"
      />

      {/* stars */}

      <Star
        position="top-[26rem] right-[24rem] animate-spin"
        opacity={0.1}
        size="h-1 w-6"
        spinRate={30}
      />
      <Star
        position="top-[45rem] left-[34rem]"
        opacity={0.3}
        size="h-1 w-6"
        spinRate={20}
      />
      <Star
        position="top-[60rem] left-[20rem]"
        opacity={0.1}
        size="h-2 w-12"
        spinRate={40}
      />
      <Star
        position="top-[54rem] right-[12rem]"
        opacity={0.3}
        size="h-1 w-8"
        spinRate={45}
      />

      <Star
        position="top-[12rem] left-[4rem]"
        opacity={0.5}
        size="h-1 w-6"
        spinRate={30}
      />
      <Star
        position="top-[5rem] left-[52rem]"
        opacity={0.3}
        size="h-1 w-6"
        spinRate={8}
      />
      <Star
        position="top-[82rem] right-[20rem]"
        opacity={0.1}
        size="h-2 w-16"
        spinRate={25}
      />
      <Star
        position="top-[78rem] left-[35rem]"
        opacity={0.3}
        size="h-1 w-8"
        spinRate={55}
      />
    </>
  );
};
export default Decorate;
