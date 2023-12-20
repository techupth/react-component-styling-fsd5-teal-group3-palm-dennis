// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function Button({ buttonType }) {
  const Primary = "#074EE8";
  const Secondary = "#07A4E8";
  return (
    <button
      type="submit"
      css={css`
        background-color: ${buttonType === "Primary"
          ? Primary
          : buttonType === "Secondary"
          ? Secondary
          : "black"};
      `}
    >
      {buttonType}
    </button>
  );
}
