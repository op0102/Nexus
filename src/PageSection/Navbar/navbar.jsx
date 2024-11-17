import React, { useState } from 'react';

import "./navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleDropdown = () => { setIsOpen(!isOpen) };
    const toggleDropdown1 = () => { setIsOpen1(!isOpen1) };



    return (
        <>
            <div className='Main_Navbar_Container'>
                <div className="Main_Navbar_Child">
                    <a href="/">
                        <img src="	https://nexusautotransport.com/img/homev2/nexus-logo.svg" />
                        {/* <img src="https://nexusautotransport.com/img/homev2/nexus-logo-navy.svg" alt="nexus logo" /> */}
                    </a>
                    <a href="/how-it-works/" title="how-it-works">How it works</a>
                    <a href="javascript:void(0)" title="Transport Options" className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} >
                        <span className="dropdown-button" >
                            Transport Options
                        </span>
                        <img src="https://cdn-icons-png.flaticon.com/128/189/189262.png" alt="drop-down" style={{ width: "20px", marginLeft: "-25px", color: "#fff" }} />
                        {isOpen && (
                            <ul className="dropdown-list">
                                <li>
                                    <a href="/what-we-do/" title="All">All</a>
                                </li>
                                <li>
                                    <a href="/door-to-door-shipping/" title="Door-to-door">Door-to-door</a>
                                </li>
                                <li>
                                    <a href="/open-auto-transport/" title="Open Car Hauler">Open Car Hauler</a>
                                </li>
                                <li>
                                    <a href="/enclosed-auto-transport/" title="Enclosed Car Hauler">Enclosed Car Hauler</a>
                                </li>
                                <li>
                                    <a href="/expedited-auto-shipping/" title="Expedited Car Shipping">Expedited Car Shipping</a>
                                </li>
                                <li>
                                    <a href="/ship-a-car-across-country/" title="Cross Country Car Shipping">Cross Country Car Shipping</a>
                                </li>
                                <li>
                                    <a href="/ship-car-to-another-state/" title="Ship Car to Another State">Ship Car to Another State</a>
                                </li>
                                <li>
                                    <a href="/classic-car-auto-shipping/" title="Classic Car Shipping">Classic Car Shipping</a>
                                </li>
                            </ul>
                        )}

                    </a>

                    <a href="javascript:void(0)" title="Transport Options" className="dropdown" onMouseEnter={toggleDropdown1} onMouseLeave={toggleDropdown1}>
                        <span className="dropdown-button" > Who We Serve</span>
                        <img src="https://cdn-icons-png.flaticon.com/128/189/189262.png" alt="drop-down" style={{ width: "20px", marginLeft: "-25px", color: "#fff" }} />
                        {isOpen1 && (
                            <ul className="dropdown-list">
                                <li>
                                    <a href="/best-online-car-auction-websites-to-buy-a-car/" title="Auto Auctions">Auto Auctions</a>
                                </li>
                                <li>
                                    <a href="/best-websites-to-sell-a-car/" title="Online Car Sellers">Online Car Sellers</a>
                                </li>
                                <li>
                                    <a href="/seasonal-auto-relocation/" title="Car Relocation Services">Car Relocation Services</a>
                                </li>
                                <li>
                                    <a href="/best-car-dealerships/" title="Car Dealerships">Car Dealerships</a>
                                </li>
                                <li>
                                    <a href="/military-car-shipping/" title="Military Members">Military Members</a>
                                </li>
                            </ul>
                        )}
                    </a>

                    <a class="nav-link" href="/why-nexus/" title="Why Nexus">Why Nexus</a>

                    <a href="/car-shipping-calculator/" title="Cost Calculator">
                        <span style={{ color: "#bbf77f" }}>Cost Calculator</span><img src="https://nexusautotransport.com/img/homev2/right-arrow.svg" alt="right-arrow-circle" />
                    </a>


                </div>
            </div >
        </>

    )
}


export default Navbar;