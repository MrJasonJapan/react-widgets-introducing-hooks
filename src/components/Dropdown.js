import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      "click",
      (event) => {
        // do nothing if the clicked target is within/inside the Dropdown Components's top level element
        if (ref.current.contains(event.target)) {
          return;
        }
        setOpen(false);
      },
      // an adjustment recommended by newer versions of react
      // https://reactjs.org/blog/2020/08/10/react-v17-rc.html#fixing-potential-issues
      { capture: true }
    );
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value == selected.value) {
      return null;
    }

    return (
      <div
        key={option.key}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.value}
      </div>
    );
  });
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
