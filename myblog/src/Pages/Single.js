import React, {useEffect} from 'react'
import {useLocation} from 'react-router'
import './singlepage.css'

function Single() {
    const location = useLocation();
    const title = location.pathname.split("/")[2];
    const body = location.pathname.split("/")[3];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container singleblog">
            {/* <img src="../Images/image1.jpg" className="img-fluid" alt="Responsive"></img> */}
            <h3 className="mt-4 mb-4 px-4 font-weight-bold text-warning" >{title}</h3>
            <p className="my-4 px-4">{body}</p>
            </div>
    )
}

export default Single
