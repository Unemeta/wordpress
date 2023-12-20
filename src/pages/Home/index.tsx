export default function Home() {
  return (
    <div className="bg-[#F3F2F3] flex flex-col items-center justify-center relative">
      {/* <section className="bg-[url('/images/svg/bg.svg')] bg-contain bg-no-repeat bg-opacity-90">
        <section className="flex justify-center  items-center h-64">
          <img src="/images/oofi/20231220-174322.jpeg" />
        </section>
        <section className="flex justify-center items-center h-64">
          section1
        </section>
        <section className="flex justify-center h-64">
          <main className="md:w-[80%] w-full px-4">section1</main>
        </section>
      </section> */}
      <section className="flex justify-center">
        <img
          src="/images/oofi/20231220-190606.png"
          className="absolute md:top-36 top-12 w-6/12"
        />
      </section>
      <img src="/images/svg/page.svg" />
      <div className="bg-[#f00] md:h-28 h-14 absolute w-full md:bottom-3 bottom-0 grid grid-cols-2 opacity-0">
        <a href="#">good</a>
        <a href="https://twitter.com/oofi_vault">good</a>
      </div>
    </div>
  );
}
