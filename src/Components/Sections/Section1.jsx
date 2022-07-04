import React from 'react'

function Section1({ props }) {
    return (
        <div className="section1">
            <select className='btn' name="" id="checkbox">
                <option value=""> 55</option>
                <option value=""> 32 </option>
                <option value=""> 44 </option>
            </select>
            <button data-testid="openPortBtn" className='btn btn-secondry'>Open Port</button>
            <select data-testid="toggle-input" onChange={(e) => props.toggleLocker(e.target.value)} defaultValue="L" className='btn' name="toggleLocker" id="checkbox">
                <option data-testid="left" value="L">Left</option>
                <option data-testid="right" value="R">Right</option>
            </select>
            <button data-testid="scannerBtn" className='btn' >Scanner On</button>
            <input data-testid="barcoadScannerInput" className='btn input-field' placeholder='Barcoad Scanner' type="text" name="barcoadScanner" id="" />
        </div>
    )
}

export default Section1