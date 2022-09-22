import React from 'react'
import { NavLink } from 'react-router-dom'



const Home = () => {
    return (
        <div>
            <h1 className='head'>Toll Management Application</h1>
            <div className="navbar head">
                <a >Tolls Entries / Vehicle Entries</a>
                <div className="dropdown">
                    <button className="dropbtn">
                        <i className="fa fa-filter" aria-hidden="true"></i>
                    </button>
                    <div className="dropdown-content">
                        <a>All</a>
                        <a>Kapplur</a>
                        <a>Chengapalli</a>
                    </div>
                </div>
                <a><input type="search" placeholder='search'></input></a>
                <div className="dropdown">
                    <button className="dropbtn">
                        <i className="fa fa-angle-double-down" aria-hidden="true">Services</i>
                    </button>
                    <div className="dropdown-content">
                        <NavLink to='/addvehicle'>Add Vehicle Entry</NavLink>
                        <NavLink to='/addtoll'>Add New Toll</NavLink>
                        <NavLink to='/viewtoll'>View All Tolls</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home