// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function Button({ backgroundColor = "#074EE8", textColor = "#fff" }) {
  return (
    <>
      <button
        css={css`
          background-color: ${backgroundColor};
          color: ${textColor};
          font-family: Kanit;
          font-size: 20px;
          font-style: normal;
          line-height: normal;
        `}
      >
        button
      </button>
    </>
  );
}
