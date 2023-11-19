import { useState } from "react";
import clsx from "clsx";
import "./style.scss";

const FiveStarRating = ({ value = 0, disabled = false }) => {
  const [rating, setRating] = useState(value);
  const classes = (sterValue) =>
    clsx({
      ster: true,
      "ster--yellow": sterValue <= rating,
      "ster--disabled": disabled,
    });

  const rate = (sterId) => {
    if (!disabled) {
      setRating(sterId);
    }
  };

  const find = (e) => {
    const sterId = e.target.id;
    // console.log(sterId);
    rate(sterId);
  };

  return (
    <>
      <div onClick={find}>
        <span className={classes(1)} id="1"></span>
        <span className={classes(2)} id="2"></span>
        <span className={classes(3)} id="3"></span>
        <span className={classes(4)} id="4"></span>
        <span className={classes(5)} id="5"></span>
      </div>
    </>
  );
};

export default FiveStarRating;
