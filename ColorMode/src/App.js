import React from 'react'
import './style.css'
function App(){
    return(
        <>
            <div>
                
                <header className='border border-1'>
                     <div className='Main_header container p-3'>
                        <ul className='d-flex '>
                            <li className='fs-4 p-2'>Home</li>
                            <li className='fs-4 p-2 ps-4'>Contact Us</li>
                            <li className='fs-4 p-2 ps-4 text-danger'>Mode</li>
                        </ul>
                        <label className='mt-3'>
                            <input type="checkbox" /> 
                            <span></span>
                        </label>
                     </div>
                </header>
                <main>
                    <div className='container'>
                        <div className='text-center content'>
                            <h1>Light Mode is On</h1>
                            <p className=' m-auto mt-3'>
                                Light mode refers to the default setting on most devices where the background is light
                            </p>
                        </div>
                    </div>
                </main>
                
            </div>
        </>
    )
}

export default App


