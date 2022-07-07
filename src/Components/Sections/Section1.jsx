import React from "react";
import './Sections.css'
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
      tagName: "Left",
      testId:'left'
    },
    {
      id: 2,
      val: "R",
      tagName:'Right',
      testId:'right'
    },
  ];
  return (
    <div className="section1">
      <SelectBox
        name="checkBox"
        data={value}
        defaultValue="55"
        id="checkbox"
        dataTestId="toggle-port"
      />
     
      <SectionButton
        variant="secondary"
        title="Open Port"
        dataTestId="openPortBtn"
     
      />
     
      <SelectBox
        name="checkBox"
        data={value2}
        defaultValue="L"
        id="checkbox"
        handleSelectChange={toggleLocker}
        dataTestId="toggle-input"

      />
     
      <SectionButton
        title="Scanner On"
        btnClass="btn-secondary"
        dataTestId="scannerBtn"
      />
     

      <InputBox
        type="text"
        name="barcoadScanner"
        placeHolderTitle="Barcoad Scanner"
        inputClass="btn input-field"
        id=""
        dataTestId="barcoadScannerInput"
      />
      
    </div>
  );
}

export default Section1;
