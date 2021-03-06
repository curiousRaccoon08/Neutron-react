import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

const Menubar = () =>{
    return(
        <>
            <div className = 'row bg-info bg-opacity-75'>
                <div className='col-12 text-center'>
                    <Navbar>
                        <Link to='/test' className = 'nav-link btn btn-outline-success'>Test</Link>
                        <Link to='/home' className='nav-link btn bnt-outline-success'>home</Link>
                        <Link to='/cricket' className='nav-link btn btn-outline-success'>Bollywood</Link>
                        <Link to='/liftstate' className='nav-link btn btn-outline-success'>Lift State</Link>
                    </Navbar>
                </div>

            </div>
        </>
    )
}

export default Menubar;