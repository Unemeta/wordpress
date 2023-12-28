import classNames from "classnames";
import Image from "next/image";
import { Zoom } from "react-reveal";

const Section4 = () => {
  return (
    <section
      className={classNames(
        "section bg-[#F9F9F9] flex justify-center items-center md:h-[100vh]"
      )}
    >
      <Zoom>
        <div className="flex flex-col justify-center items-center">
          {/* <Image
          src="/images/oofi/section4_title.svg"
          width={600}
          height={100}
          alt="Picture of the author"
          className="mb-16 md:block hidden"
        /> */}
          <p className="my-12 font-['Gilroy'] font-black md:text-3xl text-[#582889]">
            First-Generation OOFP Product Concept
          </p>
          <Image
            src="/images/oofi/production_concept.svg"
            width={800}
            height={500}
            alt="Picture of the author"
            className="hidden md:block"
          />
          <Image
            src="/images/oofi/mobile/section4/page.svg"
            width={800}
            height={500}
            alt="Picture of the author"
            className="md:hidden w-[80%] mb-8"
          />
        </div>
      </Zoom>
    </section>
  );
};

export default Section4;
