import classNames from "classnames";
import Image from "next/image";

const Section2 = () => {
  return (
    <section
      className={classNames(
        "section bg-[#F9F9F9] flex justify-center items-center md:h-[100vh]"
      )}
      id="aboutUs"
    >
      <div className="flex flex-col justify-center items-center">
        {/* <Image
          src="/images/oofi/get_to_know.svg"
          width={400}
          height={100}
          alt="Picture of the author"
          className="my-12 w-[50%] md:w-[360px]"
        /> */}
        <p className="my-12 font-['Gilroy'] font-black md:text-3xl text-[#582889]">
          Get to know OOFP
        </p>
        <ul className="flex flex-wrap justify-center text-sm mb-10 relative">
          <li className="w-[90%] md:w-96 md:h-64 h-auto bg-white md:mr-2 mb-4 p-5 rounded-lg shadow-md">
            <Image
              src="/images/oofi/coin.png"
              width={120}
              height={100}
              alt="Picture of the author"
              className="mb-4 mx-auto w-20 md:w-32"
            />
            <p>
              OOFP is a project within the Bitcoin ecosystem that provides
              valueadded services for assets like inscriptions, runes, and NFTs.
            </p>
          </li>
          <li className="w-[90%] md:w-96 md:h-64 h-auto bg-white md:ml-2 p-5 rounded-lg shadow-md">
            <Image
              src="/images/oofi/top_arrow.png"
              width={120}
              height={100}
              alt="Picture of the author"
              className="mb-4 mx-auto w-20 md:w-32"
            />
            <p>
              It combines a vault pool for mining with strategies like hodling,
              staking, and DeFi to enhance asset appreciation and growth.
            </p>
          </li>
          <li className="hidden md:block absolute right-[-60px] bottom-[-168px]">
            <Image
              src="/images/oofi/arrow_line.png"
              width={120}
              height={100}
              alt="Picture of the author"
            />
          </li>
        </ul>
        <Image
          src="/images/oofi/shield.png"
          width={80}
          height={80}
          alt="Picture of the author"
          className="md:mb-4 mb-0 w-12"
        />
        <p className="text-[#6F49C5] p-9 text-center font-bold md:font-['Gilroy'] md:font-extrabold text-[.85rem] md:text-xl md:w-[680px]">
          OOFP Aims To Create A Vibrant Ecosystem In Which Assets Within The
          Bitcoin Network Can Thrive.
        </p>
        {/* <Image
          src="/images/oofi/section2_subtitle.svg"
          width={600}
          height={200}
          alt="Picture of the author"
          className="mb-4 w-[80%] md:w-[600px] hidden md:block"
        /> */}
      </div>
    </section>
  );
};

export default Section2;
