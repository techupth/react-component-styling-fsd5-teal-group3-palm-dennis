// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import smile from "../assets/frown.svg";
export function Alert({ icon, message, bgColor, color = "#444" }) {
  return (
    <>
      <section>
        <div
          css={css`
            background-color: ${bgColor};
            display: flex;
            border-radius: 5px;
            padding: 10px;
            gap: 30px;
            width: 650px;
          `}
        >
          <img src={`${icon}`} alt="icon" />
          <p
            css={css`
              color: ${color};
              font-family: Kanit;
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            `}
          >
            {message}
          </p>
        </div>
      </section>
    </>
  );
}
