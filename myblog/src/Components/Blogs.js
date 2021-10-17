import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { LOAD_BLOGS } from '../Queries/Queries'

const Blogs = () => {

    const { data } = useQuery(LOAD_BLOGS);
    const [bloglist, setBlog] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [blogsPerPage] = useState(6);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (data) {
            setBlog(data.blogs);
            setLoading(true);
        }
    }, [data]);

   
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = bloglist.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalBlogs = bloglist.length;
    const pageNumbers = [];
    const paginate = (number) => setCurrentPage(number);

    for (let index = 1; index < Math.ceil(totalBlogs / blogsPerPage); index++) {
        pageNumbers.push(index);
    }

    return (
        <div className="container h-100 mb-4">
            <h1 className="text-uppercase text-center mt-4 mb-4 font-weight-bold text-warning" >Some blogs</h1>

           <div className="row">
                {/* Displaying blogs, and spinner while loading*/}
                 {loading && bloglist ? currentBlogs.map((blg) => {
                    const title = blg.title;
                    const body = blg.body;
                    return (
                        <div className="col">
                            <div className="card my-4 mx-2 cardblog" style={{ width: "20rem" }}>
                                {/* <img className="card-img-top" src="https://source.unsplash.com/1600x900/?programming,computer" alt="Card cap" /> */}
                                <div className="card-body">
                                    <h5 className="mb-4 font-weight-bold text-warning blogtitle">{blg.title}</h5>
                                    <p className="card-text blogbody">{blg.body}</p>
                                    <div className="readmorebtn">
                                        <button type="button" className="btn btn-warning">
                                            <Link className="readmore" to={`/singleblog/${title}/${body}`} style={{ textDecoration: "none" }}>Read more</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }) : <div className="spin"><div className="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                     </div></div>} 
            </div>

            {/* Paginating blogs */}
            <div className="pagi">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                    {pageNumbers.map((number) => {
                        return (
                            <li key={number} className="page-item">
                                <a onClick={() => paginate(number)} className="page-link" href="#">
                                    {number}
                                </a>
                            </li>
                        )
                    })}
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Blogs
