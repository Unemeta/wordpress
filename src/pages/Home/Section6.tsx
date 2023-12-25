import classNames from "classnames";
import Image from "next/image";

const Section4 = () => {
  return (
    <section
      className={classNames(
        "section bg-[#000] flex justify-center items-center md:h-[100vh] bg-[url('/images/oofi/section6_bg.svg')] bg-cover bg-no-repeat"
      )}
    >
      <div className="flex flex-col justify-center items-center">
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
          className="md:hidden block"
        />
      </div>
    </section>
  );
};

export default Section4;
