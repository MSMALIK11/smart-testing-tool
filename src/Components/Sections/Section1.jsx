import React from "react";
import InputBox from "../common/InputBox";
import SectionButton from "../common/SectionButton";
import SelectBox from "../common/SelectBox";

function Section1({ toggleLocker }) {
  const value = [
    {
      id: 1,
      tagName: 55,
    },
    {
      id: 2,
      val: 44,
      tagName: 44,
    },
    {
      id: 3,
      val: 66,
      tagName: 66,
    },
  ];
  const value2 = [
    {
      id: 1,
      val: "L",
      tagName: "left",
    },
    {
      id: 2,
      val: "R",
      tagName:'right',
    },
  ];
  return (
    <div className="section1">
      <SelectBox
        name="checkBox"
        data={value}
        defaultValue="55"
        id="checkbox"
        dataTestId="toggle-input"
      />
      {/* <select className="btn" name="" id="checkbox">
        <option value=""> 55</option>
        <option value=""> 32 </option>
        <option value=""> 44 </option>
      </select> */}
      <SectionButton
        variant="secondary"
        title="open port"
        dataTestId="openPortBtn"
     
      />
      {/* <button data-testid="openPortBtn" className="btn btn-secondry">
          Open Port
        </button> */}
      <SelectBox
        name="checkBox"
        data={value2}
        defaultValue="L"
        id="checkbox"
        handleSelectChange={toggleLocker}
        dataTestId="toggle-input"

      />
      {/* <select
        data-testid="toggle-input"
        onChange={(e) => props.toggleLocker(e.target.value)}
        defaultValue="L"
        className="btn"
        name="toggleLocker"
        id="checkbox"
      >
        <option data-testid="left" value="L">
          Left
        </option>
        <option data-testid="right" value="R">
          Right
        </option>
      </select> */}
      <SectionButton
        title="Scanner On"
        btnClass="btn-secondary"
        dataTestId="scannerBtn"
      />
      {/* <button data-testid="scannerBtn" className="btn">
          Scanner On
        </button> */}

      <InputBox
        type="text"
        name="barcoadScanner"
        placeHolderTitle="Barcoad Scanner"
        inputClass="btn input-field"
        id=""
        dataTestId="barcoadScannerInput"
      />
      {/* <input
          data-testid="barcoadScannerInput"
          className="btn input-field"
          placeholder="Barcoad Scanner"
          type="text"
          name="barcoadScanner"
          id=""
        /> */}
    </div>
  );
}

export default Section1;
