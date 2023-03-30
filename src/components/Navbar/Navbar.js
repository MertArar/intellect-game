import React, {useState} from 'react'
import { Button } from './Button/Button'
import { Link } from 'react-router-dom'
import '../Navbar/navbar.css'
import Dropdown from './Dropdown/Dropdown'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobilMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        }else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }else {
            setDropdown(false)
        }
    };

    return (
        <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo' onClick={closeMobilMenu}>
            Mert
            <i class='fab fa-firstdraft'/>
            </Link>
        </nav>
        </>
    )

}

export default Navbar