import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container text-center text-md-left">
            <h6 className="mb-4 text-white">All Rights Reserved &copy; www.myblog.in</h6>
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company name</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, a voluptatem. Ad saepe, dolore quod optio voluptatem necessitatibus ratione maiores!</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                        <p><i className="fas fa-home mr3"></i> Pune, Maharashtra.</p>
                        <p><i className="fas fa-envelope mr3"></i> example@email.mail</p>
                        <p><i className="fas fa-phone mr3"></i> example@email.mail</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Social Media</h5>
                        <p> <a href="#" style={{textDecoration: "none"}}><i className="fab fa-facebook-square mx-2" style={{ fontSize: "24px", color: "white"}}></i></a>
                        <a href="#" style={{textDecoration: "none"}}><i className="fab fa-instagram-square mx-2" style={{ fontSize: "24px", color: "white"}}></i></a>
                        <a href="#" style={{textDecoration: "none"}}> <i className="fab fa-twitter-square mx-2" style={{ fontSize: "24px", color: "white"}}></i></a>
                        <a href="#" style={{textDecoration: "none"}}> <i className="fab fa-linkedin mx-2" style={{ fontSize: "24px", color: "white"}}></i></a></p>

                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer
