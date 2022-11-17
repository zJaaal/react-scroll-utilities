import React, { useRef } from "react";
import { useDynamicColor, Rectangle } from "../../../lib";

const Footer = () => {
  const ref = useRef(null);

  const backgroundColor = useDynamicColor({
    startColor: [159, 212, 163],
    endColor: [0, 0, 0],
    elementRef: ref,
  });
  return (
    <div
      style={{
        height: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor,
        paddingTop: "30px",
      }}
      ref={ref}
    >
      <h1 style={{ color: "white", fontSize: "40px" }}>Wanna test it?</h1>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <a
          href="https://www.npmjs.com/package/react-scroll-utilities"
          target="_blank"
        >
          <img
            src="https://raw.githubusercontent.com/npm/logos/master/npm%20square/n-64.png"
            alt="NPM Logo"
          />
        </a>
        <a
          href="https://github.com/zJaaal/react-scroll-utilities"
          target="_blank"
        >
          <img
            style={{ height: "60px", width: "60px" }}
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="Github Logo"
          />
        </a>
      </div>

      <p style={{ color: "white", marginBottom: "10px" }}>
        Powered By{" "}
        <span style={{ color: "#845fe6", fontWeight: 700 }}>zJaaal</span>
      </p>
    </div>
  );
};

export default Footer;
