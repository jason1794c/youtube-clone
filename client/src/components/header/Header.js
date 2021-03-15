import React, { useState, useContext } from 'react';
import '../../css/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { SearchContextProvider } from '../../context/SearchContext';


function Header() {
    const [searchInput, setSearchInput] = useState('')
    const { setSearch } = useContext(SearchContextProvider)
    
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png"
                        alt=""
                    />
                </Link>
                
            </div>
            
            <div className="header__input">
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchInput} 
                    onChange={e => setSearchInput(e.target.value)}
                />
                <Link 
                    className="header__inputButton__link"
                    to={`/search/${searchInput}`} 
                    onClick={() => setSearch(searchInput)}
                >
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar
                    alt="Remy Sharp"
                    src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
                />
            </div>       
        </div>
    )
}

export default Header
