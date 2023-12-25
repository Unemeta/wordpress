import Image from "next/image";
import AccountMenu from "./Menu";

const MainMenu = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        zIndex: "999",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
      }}
      className="bg-white bg-opacity-50 h-12"
    >
      <h1>
        <Image
          src="/images/oofi/logo.svg"
          width={32}
          height={32}
          alt="Picture of the author"
        />
      </h1>
      <ul className="hidden md:grid grid-cols-3 gap-4 text-[#582889]">
        <li>Home</li>
        <li>Project</li>
        <li>About us</li>
      </ul>
      <section className="hidden md:block rounded-[1.2rem] border-solid border-[2px] border-[#582889] text-[#582889] px-3 py-1">
        Launch App
      </section>
      <div className="block md:hidden">
        <AccountMenu />
      </div>
    </div>
  );
};

export default MainMenu;
