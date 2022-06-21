
import React from 'react'
import "./Home.css"
function Home() {

    return (
        <div className="container">
            <div className="action-btn">
                <button className='btn btn-primary'>Home</button>
                <button className='btn'>Home</button>
            </div>

            <div className="menu-btn">
                <div className="section1">

                    <select className='btn' name="" id="checkbox">
                        <option value=""> 55</option>
                        <option value=""> 32 </option>
                        <option value=""> 44 </option>
                    </select>

                    <button className='btn btn-secondry'>Open Port</button>
                    <button className='btn' >Scanner On</button>
                    <input className='btn input-field' placeholder='Barcoad Scanner' type="text" name="barcoadScanner" id="" />
                </div>
                <div className="section2">
                    <button className='btn-s2 bgs2' >Check Power</button>
                    <button className='btn-s2' >Check Version </button>
                    <input type="text" className='btn' placeholder='IC Card' name="barcoadScanner" id="icCard" />
                    <button className='btn-s2 exits2' >Exit</button>
                </div>
            </div>

            <div className="port-status">
                <div className="status">
                    <p>32</p>
                    <p>close | Empty</p>
                </div>

            </div>

        </div>

    )
}

export default Home