import React, { createRef, useEffect, useState } from "react";

const THRESHOLD = 10;

export default function InfiniteScrollHooks() {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(THRESHOLD);
    let $bottomElement = createRef();
    let $topElement = createRef();

    const intiateScrollObserver = (observer) => {
        const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
        };
        observer = new IntersectionObserver(callback, options);
        if ($topElement.current) {
        observer.observe($topElement.current);
        }
        if ($bottomElement.current) {
        observer.observe($bottomElement.current);
        }
    };

    useEffect(() => {
        intiateScrollObserver();
    }, []);

    useEffect(() => {
        if (
            setEnd !== end ||
            setStart !== start
        ) {
            intiateScrollObserver();
        }
    }, [start, end]);

    const callback = (entries, observer) => {
        entries.forEach((entry, index) => {
        const listLength = this.props.list.length;
        // Scroll Down
        // We make increments and decrements in 10s
        if (entry.isIntersecting && entry.target.id === "bottom") {
            const maxStartIndex = listLength - 1 - THRESHOLD; // Maximum index value `start` can take
            const maxEndIndex = listLength - 1; // Maximum index value `end` can take
            const newEnd = end + 10 <= maxEndIndex ? end + 10 : maxEndIndex;
            const newStart = end - 5 <= maxStartIndex ? end - 5 : maxStartIndex;
            updateState(newStart, newEnd);
        }
        // Scroll up
        if (entry.isIntersecting && entry.target.id === "top") {
            const newEnd =
            end === THRESHOLD
                ? THRESHOLD
                : end - 10 > THRESHOLD
                ? end - 10
                : THRESHOLD;
            let newStart = start === 0 ? 0 : start - 10 > 0 ? start - 10 : 0;
            updateState(newStart, newEnd);
        }
        });
    };

    const resetObservation = (observer) => {
        observer.unobserve($bottomElement.current);
        observer.unobserve($topElement.current);
        $bottomElement = React.createRef();
        $topElement = React.createRef();
    };

    const updateState = (newStart, newEnd) => {
        if (start !== newStart || end !== newEnd) {
        resetObservation();
        setStart(newStart);
        setEnd(newEnd);
        }
    };

    const getReference = (index, isLastIndex) => {
        if (index === 0) return $topElement;
        if (isLastIndex) return $bottomElement;
        return null;
    };

    const { list, height } = this.props;
    const updatedList = list.slice(start, end);
    const lastIndex = updatedList.length - 1;
    return (
      <ul style={{ position: "relative" }}>
        {updatedList.map((item, index) => {
          const top = height * (index + start) + "px";
          const refVal = getReference(index, index === lastIndex);
          const id = index === 0 ? "top" : index === lastIndex ? "bottom" : "";
          return (
            <li
              className="li-card"
              key={item.key}
              style={{ top }}
              ref={refVal}
              id={id}
            >
              {item.value}
            </li>
          );
        })}
      </ul>
    );
};