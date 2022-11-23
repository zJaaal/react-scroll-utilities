import React, { useRef } from "react";
import Render from "../../../example-components/render/Render";
import { useDynamicColor } from "../../../lib";

const Footer = () => {
  return (
    <div
      style={{
        height: "40%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
        paddingTop: "30px",
      }}
    >
      <h1 style={{ color: "white" }} className="section-title">
        Wanna test it?
      </h1>

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
            src="github.png"
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
