import React, {useEffect} from 'react'

function Home() {
    useEffect(() => {
       window.scrollTo(0,0);
    }, [])
    
    return (
            <div className="header homeheader">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, libero!</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Home
