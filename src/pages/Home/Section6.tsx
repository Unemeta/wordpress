import classNames from "classnames";
import Image from "next/image";

const Section6 = () => {
  return (
    <section
      className={classNames(
        "section bg-[rgba(0,0,0,0.9)] flex justify-center items-center md:h-[100vh] bg-[url('/images/oofi/section6_bg.svg')] bg-cover bg-no-repeat"
      )}
      id="project"
    >
      <div className="flex flex-col justify-center items-center">
        <p className="my-12 font-['Gilroy'] font-black md:text-3xl text-[#fff]">
          Product Roadmap
        </p>
        <Image
          src="/images/oofi/section6_main.svg"
          width={700}
          height={400}
          alt="Picture of the author"
          className="mb-16 hidden md:block"
        />

        <Image
          src="/images/oofi/mobile/section5/page.svg"
          width={700}
          height={400}
          alt="Picture of the author"
          className="md:hidden block w-[80%] pb-12"
        />
      </div>
    </section>
  );
};

export default Section6;
