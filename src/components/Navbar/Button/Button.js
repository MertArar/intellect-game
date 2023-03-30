import React from 'react'
import './button.css';
import { Link } from 'react-router-dom';


export function Button () {
  return (
    <Link to='portfolio-website'>
        <button className='btn'>Portfolio</button>
    </Link>
  )
}

