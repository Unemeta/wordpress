import classNames from "classnames";
import Image from "next/image";

const Section1 = () => {
  return (
    <section className="section">
      <section
        className={classNames(
          "bg-[#fff] bg-[url('/images/oofi/section1_bg.svg')] bg-cover bg-no-repeat flex justify-center items-center md:h-[100vh] pt-20 md:pt-0"
        )}
      >
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/oofi/logo.svg"
            width={100}
            height={100}
            alt="Picture of the author"
            className="mb-14 w-16 md:w-20"
          />
          <Image
            src="/images/oofi/title.svg"
            width={500}
            height={100}
            alt="Picture of the author"
            className="mb-14 w-[90%] md:w-[50%]"
          />
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-7 pb-10 md:w-auto">
            <a className="transition duration-150 ease-in-out transform hover:scale-125 bg-[#582889] text-white font-semibold py-3 px-6 rounded-md">
              Coming Soon
            </a>
            <a href="https://odfi.gitbook.io/oofi/" className="transition duration-150 ease-in-out transform hover:scale-125 border-solid border-[#582889] border-[1px] text-[#582889] font-semibold py-3 px-6 rounded-md flex justify-between items-center">
              Document
              <Image
                src="/images/oofi/arrow_right_icon.svg"
                width={14}
                height={14}
                alt="Picture of the author"
                className="ml-4"
              />
            </a>
          </nav>
        </div>
      </section>
    </section>
  );
};

export default Section1;
