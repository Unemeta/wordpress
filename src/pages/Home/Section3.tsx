import classNames from "classnames";
import Image from "next/image";

const Section3 = () => {
  return (
    <section
      className={classNames(
        "section bg-[#F2ECF6] flex justify-center items-center h-[100vh]"
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/oofi/section3_title.svg"
          width={400}
          height={100}
          alt="Picture of the author"
          className="mb-12"
        />
        <ul className="flex justify-center text-sm mb-10 relative">
          <li className="w-96 bg-white mr-2 p-5 rounded-lg shadow-md relative">
            <Image
              src="/images/oofi/icon1.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className="absolute left-[-60px] top-[-50px]"
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
          <li className="w-96 bg-white ml-2 p-5 rounded-lg shadow-md relative">
            <Image
              src="/images/oofi/icon2.png"
              width={100}
              height={100}
              alt="Picture of the author"
              className="absolute right-[-60px] bottom-[-50px]"
            />
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
      </div>
    </section>
  );
};

export default Section3;
