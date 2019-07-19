/** @jsx jsx */
import { jsx } from "@emotion/core";

export default function NavButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="NavButton"
    >
      {children}
    </button>
  );
}