import React from 'react';
import './Sections.css'
import InputBox from '../common/InputBox'
import SectionButton from '../common/SectionButton';

function Section2() {
    return (
      <div className="section2">
        <SectionButton
          title="Check Power"
          dataTestId="checkPowerBtn"
          btnClass="bgs2"
        />
        {/* <button data-testid="checkPowerBtn" className="btn-s2 bgs2">
          Check Power
        </button> */}
        <SectionButton
          title="Check Version"
          dataTestId="checkVersionBtn"
          btnClass=""
        />
        

        <InputBox
          type="text"
          name="IC Card"
          placeHolderTitle="Barcoad Scanner"
          inputClass="btn input-field"
          id=""
          dataTestId="icCardInput"
        />
        {/* <input type="text" data-testid="icCardInput" className='btn' placeholder='IC Card' name="IC Card" id="icCard" /> */}
        <button data-testid="exitBtn" className="btn-s2 exits2">
          Exit
        </button>
      </div>
    );
}

export default Section2