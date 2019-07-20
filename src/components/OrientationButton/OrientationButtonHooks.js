import React, { useState } from "react";

export default function OrientationButton() {
  const [direction, setDirection] = useState(false);
  const [oneFull, setOneFull] = useState(true);
  const [twoFull, setTwoFull] = useState(true);
  
  const toggle = () => setDirection(!direction);
  const toggle2 = () => setOneFull(!oneFull);
  const toggle3 = () => setTwoFull(!twoFull);

  let container_class = direction ? "object-container-row" : "object-container-column";
  let object1_class = oneFull ? "object-one" : "object-one-none";
  let object2_class = twoFull ? "object-two" : "object-two-none";

  let disableButtonOne = oneFull ? false : true;
  let disableButtonTwo = twoFull ? false : true;

  return (
        <React.Fragment>
            <div className="button-container">
                <button 
                    className="orientation-button"
                    onClick={toggle}
                >
                    Change Flex Direction
                </button>
                <button 
                    className="orientation-button"
                    onClick={toggle2}
                    disabled={disableButtonTwo}
                >
                    Show/Hide Object 1
                </button>
                <button 
                    className="orientation-button"
                    onClick={toggle3}
                    disabled={disableButtonOne}
                >
                    Show/Hide Object 2
                </button>
            </div>
            <div className={container_class}>
                <div className={object1_class}>Object 1</div>
                <div className={object2_class}>Object 2</div>
            </div>
        </React.Fragment>
  );
}
