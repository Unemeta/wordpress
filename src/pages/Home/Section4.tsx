import classNames from "classnames";
import Image from "next/image";

const Section4 = () => {
  return (
    <section
      className={classNames(
        "section bg-[#F9F9F9] flex justify-center items-center h-[100vh]"
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/oofi/section4_title.svg"
          width={600}
          height={100}
          alt="Picture of the author"
          className="mb-16"
        />
        <Image
          src="/images/oofi/production_concept.svg"
          width={800}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};

export default Section4;
