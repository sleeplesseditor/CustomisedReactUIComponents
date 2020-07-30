/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import HeaderIcon from '../../img/baseline_menu_white_18dp.png';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 100vw)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <h3 className="navbar-heading">
          <Link 
            to={"/"}
            style={{ textDecoration: 'none' }}
          >
            React Customised UI Components
          </Link>
        </h3>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
            <Link 
                to={"/"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                React DatePicker
            </Link>
            <Link 
                to={"/updated-date-picker"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Updated React DatePicker
            </Link>
            <Link 
                to={"/orientation"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Orientation Change Button
            </Link>
            <Link 
                to={"/json-form"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Dynamic JSON Generated Form
            </Link>
            <Link 
                to={"/infinite-scroll"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Infinite Scroll
            </Link>
            <Link 
                to={"/progress-circle"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Progress Circle
            </Link>
            <Link 
                to={"/background-video"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Background Video
            </Link>
            <Link 
                to={"/browser-detection"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Browser Detection 
            </Link>
            <Link 
                to={"/collapsible-content"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Collapsible Content 
            </Link>
            <Link 
                to={"/sticky-properties"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Sticky Properties 
            </Link>
            <Link 
                to={"/upload-preview"}
                style={{ textDecoration: 'none' }}
                onClick={toggleNav}
            >
                Upload Preview 
            </Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="header-button">
        <img 
            src={HeaderIcon} 
            alt="HeaderIcon"
        />
      </button>
    </header>
  );
}