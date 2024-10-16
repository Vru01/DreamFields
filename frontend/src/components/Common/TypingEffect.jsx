import React, { useEffect, useState } from "react";

const TypingEffect = ({ data, period = 2000 }) => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let delta = 200 - Math.random() * 100;
    const toRotate = data;
    const i = loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    if (isDeleting) {
      setText(fullTxt.substring(0, text.length - 1));
    } else {
      setText(fullTxt.substring(0, text.length + 1));
    }

    if (isDeleting) {
      delta /= 2;
    }

    if (!isDeleting && text === fullTxt) {
      delta = period;
      setIsDeleting(true);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      delta = 500;
    }

    const timeoutId = setTimeout(() => {
      // Update text after calculated delay
    }, delta);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, loopNum, data, period]);

  return <span className="typewriter">{text}</span>;
};

export default TypingEffect;
