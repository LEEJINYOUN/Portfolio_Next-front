import NavbarLink from "@/components/link/NavbarLink";

export default function Home() {
  return (
    <section className="section">
      <div className="bg-home bg-no-repeat bg-cover bg-bottom w-full relative z-10 h-full">
        <div className="container mx-auto h-full flex justify-center items-center">
          <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 m-auto px-[50px] py-[20px] max-w-[1000px] w-[90%] sm:justify-items-start sm:order-2 text-center sm:text-start">
            <h1 className="homeText text-[32px] md:text-[40px]">
              안녕하세요, <span></span>
            </h1>
            <h1 className="homeText text-[32px] md:text-[40px]">
              신입 개발자 <span></span>
            </h1>
            <h1 className="homeText text-[32px] md:text-[40px]">
              이진영입니다. <span></span>
            </h1>
            <NavbarLink
              href={"/resume"}
              className={
                "bg-slate-500/80 hover:bg-slate-600 text-white duration-150 mt-[30px] p-5 inline-block items-center w-auto text-xl rounded-md"
              }
            >
              더 알아보기 <span></span>
            </NavbarLink>
          </div>
        </div>
      </div>
    </section>
  );
}
