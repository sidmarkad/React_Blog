import React, { useState, useEffect } from 'react'

function NewBlog() {

    const [title, setTitle] = useState("");
    const [blogtext, setBlogText] = useState("");
    const [titleError, setTitleError] = useState("");
    const [blogtextError, setBlogTextError] = useState("");

    useEffect(() => {
       window.scrollTo(0,0);
    }, [])

    // Simple Form Validation to check empty fields
    function loginCheck(event) {
        event.preventDefault();

        if (title.trim().length === 0) {
            setTitleError("Title must not be empty");
        }

        if (blogtext.trim().length === 0) {
            setBlogTextError("Blog Text must not be empty");
        }
    }

    function titleCheck(event) {
        let title = event.target.value;

        if (title.trim().length < 5) {
            setTitleError("Title must not be less than 5 characters");
        } else {
            setTitleError("");
        }

        setTitle(title);
    }

    function blogtextCheck(event) {
        let blogtext = event.target.value;

        if (blogtext.trim().length < 100) {
            setBlogTextError("Blog text must be at least 100 characters");
        } else {
            setBlogTextError("");
        }

        setBlogText(blogtext);
    }

    return (
        <div className="container newblog">
            <form onSubmit={loginCheck}>
                <h1 className="text-uppercase text-center mb-4 font-weight-bold text-warning" >Write a blog here!</h1>
                <div className="mb-4">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Blog Title</label>
                    <input type="text" onChange={titleCheck} className="form-control" id="title" placeholder="Your title goes here" autoComplete="off" />
                    <div className="error-div">
                        <p className="text-danger">{titleError}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="blogtext" className="form-label">Your blog</label>
                    <textarea onChange={blogtextCheck} className="form-control" id="blogtext" rows="8"></textarea>
                    <div className="error-div">
                        <p className="text-danger">{blogtextError}</p>
                    </div>
                </div>

                <div className="mb-4">
                    <button type="submit" className="btn btn-warning">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewBlog

