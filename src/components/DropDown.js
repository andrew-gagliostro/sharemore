import React from "react";


import { Link } from 'react-router-dom';

import { Dropdown } from 'react-bootstrap';
import AccountLinks from './AccountLinks';
import { useHistory } from "react-router-dom";

const DropDown = () => {


    const history = useHistory();


    return (
        
        <Dropdown>
        <Dropdown.Toggle id="dropDownMenu">
        <div className="container">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        </Dropdown.Toggle>
        <Dropdown.Menu id="homenav" >
            <Dropdown.Item href="#" id="dropDownItem" onClick={() => { history.push('/') }}>Home</Dropdown.Item>
            <Dropdown.Item href="#" id="dropDownItem" onClick={() => { history.push('/shop') }}><Link to="/shop">Shop ShareMore</Link></Dropdown.Item>
            <Dropdown.Item href="#" id="dropDownItem" onClick={() => { history.push('/doner') }}><Link to="/doner">Doner/Partner Info</Link></Dropdown.Item>
            <Dropdown.Item href="#" id="dropDownItem"><AccountLinks></AccountLinks></Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        
    )

}

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable


export default DropDown
    