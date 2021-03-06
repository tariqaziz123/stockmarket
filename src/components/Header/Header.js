import React from 'react';
import  {Link} from "react-router-dom";

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <React.Fragment>
                <nav className="navbar navbar-inverse">
                <div className="container-fluid" >
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        
                        </button>
                        <Link className="navbar-brand" to='/'>Stock Exchange</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to='/'>Home</Link></li>
                            
                            <li><Link to ='/chart'>Chart</Link></li>
                        </ul>
                    </div>
                </div>
               </nav>
            </React.Fragment>
   )

 }

export default Header