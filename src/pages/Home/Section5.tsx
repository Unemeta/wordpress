import classNames from "classnames";
import Image from "next/image";

const Section4 = () => {
  return (
    <section
      className={classNames(
        "section bg-[#FFFBEF] flex justify-center items-center h-[100vh]"
      )}
    >
      <div className="flex flex-col justify-center items-center">
        {/* <Image
          src="/images/oofi/section5_title.svg"
          width={300}
          height={100}
          alt="Picture of the author"
          className="mb-16"
        /> */}
        <Image
          src="/images/oofi/section5.svg"
          fill
          alt="Picture of the author"
        />
      </div>
    </section>
  );
};

export default Section4;
