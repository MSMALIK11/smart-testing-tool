import React from 'react'

function Menu({ props }) {
    return (

        <>
            <div className="action-btn">
                <button data-testid="primary-btn" className='btn btn-primary'>Home</button>
                <button className='btn'>Home</button>
            </div>
            <div className="menu-btn">
                <div className="section1">
                    <select className='btn' name="" id="checkbox">
                        <option value=""> 55</option>
                        <option value=""> 32 </option>
                        <option value=""> 44 </option>
                    </select>
                    <select data-testid="toggle-input" onChange={(e) => props.toggleLocker(e.target.value)} defaultValue="L" className='btn' name="toggleLocker" id="checkbox">
                        <option data-testid="left" value="L">Left</option>
                        <option data-testid="right" value="R">Right</option>
                    </select>
                    <button data-testid="openPortBtn" className='btn btn-secondry'>Open Port</button>
                    <button data-testid="scannerBtn" className='btn' >Scanner On</button>
                    <input data-testid="barcoadScannerInput" className='btn input-field' placeholder='Barcoad Scanner' type="text" name="barcoadScanner" id="" />
                </div>
                <div className="section2">
                    <button data-testid="checkPowerBtn" className='btn-s2 bgs2' >Check Power</button>
                    <button data-testid="checkVersionBtn" className='btn-s2' >Check Version</button>
                    <input type="text" data-testid="icCardInput" className='btn' placeholder='IC Card' name="IC Card" id="icCard" />
                    <button data-testid="exitBtn" className='btn-s2 exits2' >Exit</button>
                </div>
            </div>
        </>
    )
}

export default Menu