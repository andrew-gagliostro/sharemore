import React, {useState} from "react";
import ReactDOM from "react-dom";


import { Link } from 'react-router-dom';

import { Dropdown } from 'react-bootstrap';
import AccountLinks from './AccountLinks';


//inside of return



const DropDown = () => {

    /*
     <Menu id="dropDownMenu">
        <Dropdown text='Menu'>
            <Dropdown.Menu>
            <Dropdown.Item>
            <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop ShareMore</Link>
                </li>
                <li>
                    <Link to="/doner">Doner/Partner Info</Link>
                </li>
            </ul>
            </div>
            </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </Menu>
    */
           /*
        <div id="dropDownMenu">
        <Menu >
        <Dropdown text='Menu'>
            <Dropdown.Menu id="menuContainer">

                <Dropdown.Item id="dropDownItem">

                    <Link to="/">Home</Link>
                
                </Dropdown.Item>
                <Dropdown.Item id="dropDownItem">

                    <Link to="/shop">Shop ShareMore</Link>

                </Dropdown.Item>

                <Dropdown.Item id="dropDownItem">


                    <Link to="/doner">Doner/Partner Info</Link>
                </Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown>
        </Menu>
        </div>
        */

    

    
    

    return (
        
        <Dropdown id="dropdownMenu">
        <Dropdown.Toggle id="dropDownMenu"><div>Menu</div></Dropdown.Toggle>
        <Dropdown.Menu id="homenav" >
            <Dropdown.Item href="#" id="dropDownItem"><Link to="/">Home</Link></Dropdown.Item>
            <Dropdown.Item href="#" id="dropDownItem"><Link to="/shop">Shop ShareMore</Link></Dropdown.Item>
            <Dropdown.Item href="#" id="dropDownItem"><Link to="/doner">Doner/Partner Info</Link></Dropdown.Item>
            <Dropdown.Item href="#" id="dropDownItem"><AccountLinks></AccountLinks></Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        
    )

}

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable


export default DropDown
                