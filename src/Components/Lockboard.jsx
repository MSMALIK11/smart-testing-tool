
import React from 'react'
import "./Home.css";
import Menu from './Menu';
function Lockboard() {
    return (
        <div className="container">
            <Menu />
            <div className="lockboard">

                <div className="lockboard-testing">

                    <div className="title">
                        <p id='title'>Lockboard Testing</p>
                    </div>
                    <div className="action">
                        <select className='btn' name="" id="checkbox">
                            <option value=""> 55</option>
                            <option value=""> 32 </option>
                            <option value=""> 44 </option>
                        </select>
                        <select className='btn' name="" id="checkbox">
                            <option value=""> 55</option>
                            <option value=""> 32 </option>
                            <option value=""> 44 </option>
                        </select>
                        <select className='btn' name="" id="checkbox">
                            <option value=""> 55</option>
                            <option value=""> 32 </option>
                            <option value=""> 44 </option>
                        </select>
                        <button className='btn btn-secondry'>Open Port</button>
                        <button className='btn bgs2'>Pause</button>
                        <button className='btn exits2'>Refresh Loacker Status</button>
                    </div>


                </div>


            </div>
            <div className="logs">
                <p>logs for working</p>
            </div>


        </div>
    )
}

export default Lockboard