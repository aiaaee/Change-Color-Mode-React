import React from 'react'
import './style.css'
import photo1 from './image/1.jpg'
import photo2 from './image/2.jpg'
import photo3 from './image/3.jpg'

function App(){
    return(
        <>
            <div className=''>
                
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
                        <div className='cards-content d-flex '>
                            <div class="card" style={{width:"18rem"}}>
                                    <img className="card-img-top" src={photo1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Headsets</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Buy</a>
                                    </div>
                            </div>

                            <div class="card" style={{width:"18rem"}}>
                                    <img className="card-img-top" src={photo2} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Shoes</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Buy</a>
                                    </div>
                            </div>

                            <div class="card" style={{width:"17rem"}}>
                                    <img className="card-img-top" src={photo3} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Accessories</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Buy</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </main>
                
            </div>
        </>
    )
}

export default App


