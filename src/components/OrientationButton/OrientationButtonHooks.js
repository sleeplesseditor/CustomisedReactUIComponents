import React, { useState } from "react";

export default function OrientationButton() {
  const [direction, setDirection] = useState(false);
  const toggle = () => setDirection(!direction);

  let container_class = direction ? "object-container-row" : "object-container-column"

  return (
        <React.Fragment>
            <div className="button-container">
                <button 
                    className="orientation-button"
                    onClick={toggle}
                >
                    Change Flex Direction
                </button>
            </div>
            <div className={container_class}>
                <div className="object-one">Object 1</div>
                <div className="object-two">Object 2</div>
            </div>
        </React.Fragment>
  );
}
