import classNames from "classnames";
import Image from "next/image";
import { Zoom } from "react-reveal";

const Section4 = () => {
  return (
    <section
      className={classNames(
        "section bg-[#F2ECF5] flex justify-center items-center h-20"
      )}
    >
      <Zoom>
        <div className="flex justify-center items-center">
          <ul className="grid grid-cols-2 gap-8 pt-2">
            <li>
              <a href="#">
                <Image
                  src="/images/oofi/logo.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Oofp_Vault">
                <Image
                  src="/images/oofi/twitter.png"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </a>
            </li>
          </ul>
        </div>
      </Zoom>
    </section>
  );
};

export default Section4;
