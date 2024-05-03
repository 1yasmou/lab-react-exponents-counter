import React from "react";
const ExponentFour = ({ count }) => {
  const exponResult = count * count * count * count;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">n⁴</p>
      <p className="exponent-result">
        2 * 2 * 2 * 2 = <span className="total">{exponResult}</span>
      </p>
    </div>
  );
};
export default ExponentFour;
