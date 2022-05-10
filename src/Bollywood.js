import React, { useState } from 'react';
import BollywoodChild from './BollywoodChild';
import './css/myStyle.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Bollywood = () =>{
    const [status, setStatus] = useState(false);
    const [location, setLocation] = useState('');
    const [countrylist, setCountryList] = useState(['India', 'UK', 'USA', 'Russia', 'South Africa', 'Mexico'])

    const showhide = () => {
        setStatus(!status);
    }


    const displayNorth = () => {
        setLocation('Northern_Hemisphere');
    }


    const displaySouth = () => {
        setLocation('Southern_Hemisphere');
    }

    return(
        <>
            <div>Bollywood</div>


            <br></br>
            <div>------------------------</div>

            <Button variant="secondary" onClick={showhide}> Show/Hide</Button>

            {
                status && <div>Div to be shown...</div>
            }



            <br></br>

            <div>-------------------------------</div>
            <button className="btn btn-primary bnt-sm" onClick={displayNorth}>India</button>
            <button className="btn btn-primary bnt-sm" onClick={displayNorth}>USA</button>
            <button className="btn btn-primary bnt-sm" onClick={displayNorth}>UK</button>
            <button className="btn btn-primary bnt-sm" onClick={displayNorth}>Russia</button>
            <button className="btn btn-primary bnt-sm" onClick={displayNorth}>Australia</button>
            <button className="btn btn-primary bnt-sm" onClick={displayNorth}>New-Zealand</button>
            <button className="btn btn-primary bnt-sm" onClick={displayNorth}>South Africa</button>
            <button className="btn btn-primary bnt-sm" onClick={displayNorth}>Mexico</button>
            <br></br>
            Hemisphere - 
            {
                (location !== '') && (location === 'Northern_Hemisphere') ? <span>North</span> : <span>South</span>
            }

            <br></br>
            <div>----------------------------------</div>
            <br></br>
            <ul>
                {
                    countrylist && countrylist.map((item, index) => {
                        return(
                            <li key={item + index}>{item}</li>
                        )
                    })
                }
            </ul>


            <BollywoodChild temp = "Runway 34" />

        </>
    )
}

export default Bollywood;