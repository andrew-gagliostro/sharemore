import React from "react";
import '../index.css';
import { useHistory} from "react-router-dom";

const Footer = () => {

    const history = useHistory();
    

    return (
        <div id="footer">
            <section id="footer-left">
            ShareMore
            </section>
            <section id="footer-center">
            <div id="footer-div">| Thank you for visiting ShareMore! |</div><br/>
            <div id="footer-div">| Impact |</div><br/>
            <div id="footer-div">| Contact: argagliostro@gmail.com |</div><br/>
            <div onClick={() => { history.push('/donor') }} id="footer-div">| Get Involved |</div><br/>
            </section>
            <section id="footer-right">
               <h4><span>&#169;</span>ShareMore, 2020 </h4>
            </section>
        </div>

    )
}

export default Footer;