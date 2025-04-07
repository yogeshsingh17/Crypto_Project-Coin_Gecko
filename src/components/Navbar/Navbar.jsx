// import { useContext } from "react";
// import { CurrencyContext } from "../../context/CurrencyContext";
import { useNavigate } from 'react-router-dom';
import currencyStore from '../../state/store'
import { useState } from 'react';

function Navbar(){

    // const { setCurrency } = useContext(CurrencyContext);        
                                                                /* The useContext is going to return a value object
                                                                   which we passed inside the value prop of 
                                                                   provider component in App.jsx*/
                                                                /* We can de-structure the value object. */
    
    const { setCurrency } = currencyStore();

    const navigate = useNavigate();

    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const toggleSearchBar = () => setIsSearchVisible(prev => !prev);

    function goToHome(){
        navigate('/')
    }

    return (
        <>
            <div className="shadow-sm navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="w-5 h-5" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            > 
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M4 6h16M4 12h16M4 18h7" 
                                /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52">
                            <li onClick={() => setCurrency('inr')}><a>INR</a></li>
                            <li onClick={() => setCurrency('usd')}><a>USD</a></li>
                        </ul>
                    </div>
                </div>
                <div onClick={goToHome} className="navbar-center">
                    <a className="text-xl btn btn-ghost">Crypto Tracker</a>
                </div>
                <div className="navbar-end">
                    <div className="flex border border-orange-400">
                        {isSearchVisible && (
                            /* Input Search Bar */
                            <input 
                                type="search" 
                                placeholder='search' 
                                className="w-64 p-2 border rounded"
                                onChange={console.log("Change has been made")}              //api implementation should be done here.
                            />
                        )}
                        <button 
                            /* Search Icon */
                            className="btn btn-ghost btn-circle" 
                            onClick={toggleSearchBar}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="w-5 h-5" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            > 
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                                /> 
                            </svg>
                        </button>
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            > 
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                                /> 
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar;