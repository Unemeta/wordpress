import classNames from "classnames";
import Image from "next/image";

const Section1 = () => {
  return (
    <section
      className={classNames(
        "section bg-[#fff] bg-[url('/images/oofi/section1_bg.svg')] bg-cover bg-no-repeat flex justify-center items-center h-[100vh]"
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/images/oofi/logo.svg"
          width={100}
          height={100}
          alt="Picture of the author"
          className="mb-14"
        />
        <Image
          src="/images/oofi/title.svg"
          width={500}
          height={100}
          alt="Picture of the author"
          className="mb-14"
        />
        {/* <nav className="grid grid-cols-2 gap-7 pb-10">
          <a className="transition duration-150 ease-in-out transform hover:scale-125 bg-[#582889] text-white font-semibold py-3 px-6 rounded-md">
            Coming Soon
          </a>
          <a className="transition duration-150 ease-in-out transform hover:scale-125 border-solid border-[#582889] border-[1px] text-[#582889] font-semibold py-3 px-6 rounded-md flex justify-between items-center">
            Doscument
            <Image
              src="/images/oofi/arrow_right_icon.svg"
              width={14}
              height={14}
              alt="Picture of the author"
              className="ml-4"
            />
          </a>
        </nav> */}
      </div>
    </section>
  );
};

export default Section1;
