"use client";

import { useEffect } from "react";
import fullpage from "fullpage.js";
import ReactFullpage from "@fullpage/react-fullpage";
import Section1 from "./Section1";

export default function Main() {
  useEffect(() => {
    console.log(document.querySelector("#fullpage"));
    new fullpage("#fullpage", {
      //options here
      autoScrolling: true,
      scrollHorizontally: true,
    });
  }, []);

  return (
    <ReactFullpage
      credits={{
        enabled: false,
      }}
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Section1 />
            <div className="section">Some section</div>
            <div className="section">Some section</div>
            <div className="section">Some section</div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
