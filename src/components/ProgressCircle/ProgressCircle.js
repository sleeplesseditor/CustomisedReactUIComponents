import React, { useState, useLayoutEffect, useRef } from "react";
import { CheckMark, Close } from "./icons";

function ProgressCircle() {
    const [progress, setProgress] = useState(0);
    const articleRef = useRef();

    useLayoutEffect(() => {
        const updateHeight = () => {
            if (!articleRef.current) return;

            const { height } = articleRef.current.getBoundingClientRect();

            setProgress(window.scrollY / (height - window.innerHeight));
        };

        updateHeight();

        window.addEventListener("scroll", updateHeight);
        return () => {
            window.removeEventListener("scroll", updateHeight);
        };
    }, []);
    const DIAMETER = 50;
    const STROKE_WIDTH = 6;
    const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
    const CIRCUMFERENCE = Math.PI * RADIUS * 2;
    const position = Math.max(1 - progress, 0);
    const complete = position === 0;
    const notMoved = position === 1;

  return (
    <div className="App">
      <div className="article" ref={articleRef}>
        <div
            style={{
            position: "fixed",
            top: "90px",
            right: "30px"
            }}
        >
            <button
                className="progress-circle-button"
                style={{
                    backgroundColor: complete ? "tomato" : "#FFF"
                }}
                >
                {complete ? <CheckMark /> : <Close />}
                {!notMoved && (
                    <svg
                    viewBox="0 0 50 50"
                    width="100px"
                    height="100px"
                    className="circle-progress"
                    >
                    <circle
                        cx={DIAMETER / 2}
                        cy={DIAMETER / 2}
                        r={RADIUS}
                        stroke="tomato"
                        fill="transparent"
                        strokeWidth={STROKE_WIDTH}
                        style={{
                        strokeDasharray: CIRCUMFERENCE,
                        strokeDashoffset: CIRCUMFERENCE * position
                        }}
                    />
                    </svg>
                )}
            </button>
        </div>
      </div>
    </div>
  );
}

export default ProgressCircle;