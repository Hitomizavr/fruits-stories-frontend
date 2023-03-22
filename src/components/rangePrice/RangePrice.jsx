import { useState, useEffect } from "react";

const RangePrice = ({ from, to, step, onChange }) => {
  const [min, setMin] = useState(from);
  const [max, setMax] = useState(to);

  useEffect(() => {
    onChange(Math.min(min, max), Math.max(min, max));
  }, [min, max]);

  return (
    <>
      <div className="range-slider">
        <input
          onChange={(e) => setMin(e.target.value)}
          value={min}
          min={from}
          max={to}
          step={step}
          type="range"
        />
        <input
          onChange={(e) => setMax(e.target.value)}
          value={max}
          min={from}
          max={to}
          step={step}
          type="range"
        />
      </div>
      <div className="inputs-fields-range">
        <label className="label-for-input-minmax">руб.</label>
        <input
          className="input-range-price"
          placeholder={from}
          value={Math.min(min, max)}
          onChange={(e) => setMin(e.target.value)}
        ></input>
        <label className="label-for-input-minmax"> руб.</label>
        <input
          className="input-range-price"
          placeholder={to}
          value={Math.max(min, max)}
          onChange={(e) => setMax(e.target.value)}
        ></input>
      </div>
    </>
  );
};

RangePrice.defaultProps = {
  from: 0,
  to: 100,
  step: 1,
  onChange: () => {},
};

export default RangePrice;
