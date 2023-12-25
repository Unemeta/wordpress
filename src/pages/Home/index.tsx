"use client";

import ReactFullpage from "@fullpage/react-fullpage";
import MainMenu from "@/layout/MainMenu";
import Main from "./main";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

export default function Home() {
  return (
    <>
      <MainMenu />
      {/* <ReactFullpage
        credits={{
          enabled: false,
        }}
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
            <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section6 />
              <Section7 />
            </ReactFullpage.Wrapper>
          );
        }}
      /> */}
      <Main />
    </>
  );
}
