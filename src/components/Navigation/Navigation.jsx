import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <>
        <h1 style={{color: "#0644B0"}}>HackerNews</h1>
        <div className='storyTypes'>
          <ul className='list'>
            <li className='nav-links'>
                <Link to="/" style={{ textDecoration: 'none' }} activeClassName="active-link"><span>New Stories</span></Link>
              </li>
              <li className='nav-links'>
                <Link to="/topstories" style={{ textDecoration: 'none' }} activeClassName="active-link"><span>Top Stories</span></Link>
              </li>
              <li className='nav-links'>
                <Link to="/beststories" style={{ textDecoration: 'none' }} activeClassName="active-link"><span>Best Stories</span></Link>
              </li>
            </ul>
        </div>
    </>
  )
}

export default Navigation