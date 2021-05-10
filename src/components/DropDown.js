import React from "react";



import { Dropdown } from 'react-bootstrap';
import AccountLinks from './AccountLinks';
import { useHistory } from "react-router-dom";

const DropDown = () => {


    const history = useHistory();
    


    return (
        
        <Dropdown className="otherDrop">
        <Dropdown.Toggle id="dropDownMenu" className="otherDrop">
        <div className="container otherDrop">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        </Dropdown.Toggle>
        <Dropdown.Menu id="homenav" className="otherDrop" >
            <Dropdown.Item id="dropDownItem" onClick={() => { history.push('/') }}>Home</Dropdown.Item>
            <Dropdown.Item id="dropDownItem" onClick={() => { history.push('/shop') }}>Shop ShareMore</Dropdown.Item>
            <Dropdown.Item id="dropDownItem" onClick={() => { history.push('/doner') }}>Doner/Partner Info</Dropdown.Item>
            <Dropdown.Item id="dropDownItem"><AccountLinks></AccountLinks></Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        
    )

}

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
//


export default DropDown
    