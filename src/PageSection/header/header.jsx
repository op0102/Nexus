import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <>
            <div className="Main_Header">
                <div className="Header_Left">
                    <a href="/blog/" title="Blog">Blog</a>
                    <a href="/reviews/" title="Reviews">Reviews</a>
                    <a href="/faq/" title="FAQ">FAQ</a>
                    <a href="/movers/" title="Moving Cost Calculator">Moving Cost Calculator</a>
                    <a href="/contact/" title="Contact">Contact</a>
                    <a href="tel:224-218-2949" className="phone" style={{ color: "#fff " }}>
                        <img src="https://www.svgrepo.com/show/17981/headphones-with-mic.svg" style={{ widht: "15px", height: "15px", marginRight: "15px"}} alt="headphones-icon" />
                        224-218-2949
                    </a>
                </div>
            </div>
        </>
    )
}



export default Header;