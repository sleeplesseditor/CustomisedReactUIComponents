import React, { useState } from "react";

export default function OrientationButton() {
  const [direction, setDirection] = useState(false);
  const [oneFull, setOneFull] = useState(true);
  const [twoFull, setTwoFull] = useState(true);
  
  const toggle = () => setDirection(!direction);
  const toggle2 = () => setOneFull(!oneFull);
  const toggle3 = () => setTwoFull(!twoFull);

  let container_class = direction ? "object-container-row" : "object-container-column";

  let object1_class = twoFull ? "object-one" : "object-one-large";
  let object2_class = oneFull ? "object-two" : "object-two-large";
  
  let object1_container = oneFull ? "object-one-container" : "object-one-container-none";
  let object2_container = twoFull ? "object-two-container" : "object-two-container-none";

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
                    Show/Hide Object One
                </button>
                <button 
                    className="orientation-button"
                    onClick={toggle3}
                    disabled={disableButtonOne}
                >
                    Show/Hide Object Two
                </button>
            </div>
            <div className={container_class}>
                <div className={object1_container}>
                    <div className={object1_class}>Object One</div>
                </div>
                <div className={object2_container}>
                    <div className={object2_class}>Object Two</div>
                </div>
            </div>
        </React.Fragment>
  );
}
