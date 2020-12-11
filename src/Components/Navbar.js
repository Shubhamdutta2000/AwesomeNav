import React, { useState } from 'react'

import "./Navbar.css";

export default function Navbar() {

     const [clicked, setClick] = useState(false);

     const handleClick = () => {
          setClick(!clicked);
     }

     return (
          <>
               <header>
                    <span>Author : <a href="#" target="_blank">Random</a></span>
                    {clicked ? 
                         <button className="hamburger" onClick={handleClick}>&#9776;</button>
                    : <button className="cross" onClick={handleClick}>&#735;</button>}
                    
               </header>

               {clicked ?
                    <div class="menu">
                         <ul>
                              <a href="#"><li>LINK ONE</li></a>
                              <a href="#"><li>LINK TWO</li></a>
                              <a href="#"><li>LINK THREE</li></a>
                              <a href="#"><li>LINK FOUR</li></a>
                              <a href="#"><li>LINK FIVE</li></a>
                         </ul>
                    </div>
                    : null}
          </>
     )
}
