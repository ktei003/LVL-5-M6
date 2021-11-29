import '../styles/header.css';
import React from "react";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { minHeight } from '@mui/system';

const Header = () => {
	return (
        <div className="header-container">
            <div className="header-logo">
            <button type="button" className="header-text" onClick="">DATACOM</button>
            </div>
            <div className="header-options">
            <button type="button" className="header-text-options" onClick="">Solution</button>
            </div>
            <div className="header-options">
            <button type="button" className="header-text-options" onClick="">Industries</button>
            </div>
            <div className="header-options">
                <button type="button" className="header-text-options" onClick="">Discover</button>
                </div>
            <div className="header-options">
                <button type="button" className="header-text-options" onClick="">About us</button>
                </div>
            <div className="header-options">
                <button type="button" className="header-text-options" onClick="">Careers</button>
                </div>
            <div className="right-btns">
            <div className="s1-btn">
                <button type="button" className="sign-in-btn" onClick="">Sign in</button>
                </div>
            <div className="s2-btn">
            <button type="button" className="search-btn" onClick=""
            ><SearchIcon style={{minHeight:"60px",minWidth:"60px"}}/>
            </button>
            </div>
            </div>

        </div>
    )
    }

export default Header;
