import React , {useEffect, useState} from 'react'
import './style.css'
import photo1 from './image/1.jpg'
import photo2 from './image/2.jpg'
import photo3 from './image/3.jpg'

function App(){
    let changeMode = () => {
        let initialMode = localStorage.getItem('mode')
        if(initialMode == null){
            if(window.matchMedia('(prefer-color-scheme:dark)').matches){
                return true
            }
            else{
                return false
            }
        }
        else{
            return JSON.parse(localStorage.getItem('mode'))
        }
    }

    let [mode , setMode] = useState(changeMode())
    
    useEffect(() => {
        return localStorage.setItem('mode' , JSON.stringify(mode))
    } , [mode])
    
    return(
        <>
            <div className={`${mode ? 'bg-black' : ""}`}>
                
                <header className={`border border-1 ${mode ? "bg-lightgray" : ""}`}>
                     <div className='Main_header container p-3'>
                        <ul className='d-flex '>
                            <li className='fs-4 p-2'>Home</li>
                            <li className='fs-4 p-2 ps-4'>Contact Us</li>
                            <li className={`fs-4 p-2 ps-4 ${!mode? 'text-danger' : "text-primary" }`}>Mode</li>
                        </ul>
                        <label className={`mt-3 ${mode ? "bg-dark" : "bg-gray"}`}  >
                            <input type="checkbox" onChange={() => setMode(!mode)} checked={mode} /> 
                            <span></span>
                        </label>
                     </div>
                </header>
                <main>
                    <div className='container'>
                        <div className='text-center content'>
                            {
                               !mode ? 
                                    <>
                                    <h1>Light Mode is On</h1>
                                    <p className=' m-auto mt-3'>
                                        Light mode refers to the default setting on most devices where the background is light
                                    </p>
                                    </>
                                    : 
                                    <>
                                        <h1 className='text-light'>Dark Mode is On</h1>
                                        <p className='text-light m-auto mt-3'>
                                            Dark mode refers to the default setting on most devices where the background is Dark
                                        </p>
                                    </>
                            }
                        </div>
                        <div className='cards-content d-flex mb-5 '>
                            <div className="card" style={{width:"18rem"}}>
                                    <img className="card-img-top" src={photo1} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Headsets</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Buy</a>
                                    </div>
                            </div>

                            <div className="card" style={{width:"18rem"}}>
                                    <img className="card-img-top" src={photo2} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Shoes</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Buy</a>
                                    </div>
                            </div>

                            <div className="card" style={{width:"17rem"}}>
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
                <br/> 
            </div>
        </>
    )
}

export default App


