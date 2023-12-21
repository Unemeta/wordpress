import classNames from "classnames";
import Image from "next/image";

const Section2 = () => {
  return (
    <section
      className={classNames(
        "section bg-[#F9F9F9] flex justify-center items-center"
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/oofi/get_to_know.svg"
          width={400}
          height={100}
          alt="Picture of the author"
          className="mb-12"
        />
        <ul className="flex justify-center text-sm mb-10 relative">
          <li className="w-96 bg-white mr-2 p-5 rounded-lg shadow-md">
            <Image
              src="/images/oofi/coin.png"
              width={120}
              height={100}
              alt="Picture of the author"
              className="mb-4 mx-auto"
            />
            <p>
              OOFI is a project within the Bitcoin ecosy-stem that provides
              valueadd-ed services for assets like inscriptio-ns, runes, and
              NFTs.
            </p>
          </li>
          <li className="w-96 bg-white ml-2 p-5 rounded-lg shadow-md">
            <Image
              src="/images/oofi/top_arrow.png"
              width={120}
              height={100}
              alt="Picture of the author"
              className="mb-4 mx-auto"
            />
            <p>
              It combines a vault pool for mining with strategies like hodling,
              staking, and DeFi to enhance asset appreci-ation and growth.
            </p>
          </li>
          <li className="absolute right-[-60px] bottom-[-168px]">
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
          className="mb-4"
        />
        <Image
          src="/images/oofi/section2_subtitle.svg"
          width={600}
          height={200}
          alt="Picture of the author"
          className="mb-4"
        />
      </div>
    </section>
  );
};

export default Section2;
