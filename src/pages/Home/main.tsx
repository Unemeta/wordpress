"use client";

import { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

export default function Main() {
  return (
    // <ReactFullpage
    //   credits={{
    //     enabled: false,
    //   }}
    //   licenseKey={"YOUR_KEY_HERE"}
    //   scrollingSpeed={1000} /* Options here */
    //   render={({ state, fullpageApi }) => {
    //     return (
    //       <ReactFullpage.Wrapper>
    //         <div className="section">good</div>
    //         <Section1 />
    //         <Section2 />
    //         <Section3 />
    //         <Section4 />
    //       </ReactFullpage.Wrapper>
    //     );
    //   }}
    // />
    <>
      <section className="w-full h-[100vh]">
        <Section1 />
      </section>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </>
  );
}
