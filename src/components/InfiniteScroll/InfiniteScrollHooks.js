import React, { useRef, useEffect, useState } from "react";

const THRESHOLD = 10;

export default function InfiniteScrollHooks(props) {

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(THRESHOLD);
    const $bottomElement = useRef();
    const $topElement = useRef();

    const { list, height } = props;
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const updateState = (newStart, newEnd) => {
        if (start !== newStart || end !== newEnd) {
            resetObservation();
            setStart(newStart);
            setEnd(newEnd);
        }
    };

    const resetObservation = () => {
        observer.unobserve($bottomElement.current);
        observer.unobserve($topElement.current);
    };

    const getReference = (index, isLastIndex) => {
        if (index === 0) return $topElement;
        if (isLastIndex) return $bottomElement;
        return null;
    };

    const callback = (entries, observer) => {
        entries.forEach((entry, index) => {
        const listLength = list.length;
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

    let observer = new IntersectionObserver(callback, options);

    const intiateScrollObserver = () => {
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

    const updatedList = list.slice(start, end);
    const lastIndex = updatedList.length - 1;
    
    return (
      <ul>
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