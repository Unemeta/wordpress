import classNames from "classnames";
import Image from "next/image";

const Section3 = () => {
  return (
    <section
      className={classNames(
        "section bg-[#F2ECF6] flex justify-center items-center md:h-[100vh]"
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/oofi/section3_title.svg"
          width={400}
          height={100}
          alt="Picture of the author"
          className="my-12 w-[30%] md:w-[360px]"
        />
        <ul className="flex flex-wrap  justify-center text-sm mb-10 relative">
          <li className="w-[90%] md:w-96 mb-6 md:mb-0 bg-white md:mr-2 p-5 rounded-lg shadow-md relative">
            <Image
              src="/images/oofi/icon1.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className="absolute md:left-[-60px] md:top-[-50px] right-0 top-[-2rem]"
            />
            <h4 className="font-bold text-lg mb-8">All Protocol</h4>
            <p className="mb-8">
              OOFI will start with the BRC20 protocol as a foundation and extend
              its services to various protocol layers within the Bitcoin
              ecosystem.
            </p>
            <p className="bg-[#F2ECF5] rounded-md p-3 text-[#6F49C5]">
              This expansion will enable a broader range of assets to benefit
              from the value-added services provided by OOFI.
            </p>
          </li>
          <li className="w-[90%] md:w-96 bg-white md:ml-2 p-5 rounded-lg shadow-md relative">
            {/* after:content-link after:absolute after:w-9 after:h-6 */}

            <h4 className="font-bold text-lg mb-8">All Assets</h4>
            <p className="mb-8">
              OOFI will include assets such as inscriptions, runes, non-fungible
              tokens (NFTs), and other digital assets.
            </p>
            <p className="bg-[#FFEDC0] rounded-md p-3 text-[#A17533]">
              OOFI seeks to elevate the value and unlock the growth potential of
              these assets within the ecosystem.
            </p>
          </li>
        </ul>
        <div>
          <Image
            src="/images/oofi/icon2.svg"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
            alt="Picture of the author"
            className="md:transform md:translate-x-[404px] md:translate-y-[-100px] absolute md:relative translate-x-[5rem] translate-y-[-21rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
