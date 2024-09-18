import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



import "./footer.css";
import { FacebookLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <div className="export const Footer = () => {
">
        <div className="footer">
            <footer>
                <div className="ft-raw">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaSquareXTwitter /></a>
                </div>
                <div className="ft-sec-raw">
                    <a>Contact Us</a>
                    <a>Return Policy</a>
                    <a>Privacy Policy</a>
                    <a>Terms & Conditions</a>
                    <a>Carrers</a>
                </div>
            </footer>
        </div>
    </div>
  );
};
