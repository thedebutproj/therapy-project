import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { homeDirectory, blog_CLOUD1, blog_CLOUD2 } from "../../assets";
import "./Blog.css";

import { fetchSheet } from "../../api";

const Blog = () => {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    fetchSheet(1).then((rows) => {
      setBlogData(rows);
    });
  }, []);

  return (
    <div className="blog-container">
      {blogData == undefined ? (
        <h1 className="loading">...Loading</h1>
      ) : (
        <>
          {/* <div className="blog-lhsPatch">
            <img src={blog_CLOUD1} alt="cloud1" />
          </div> */}

          <div className="blog-rhsPatch">
            <img src={blog_CLOUD2} alt="cloud2" />
          </div>

          <div className="blog-featured">
            <h1>FEATURED BLOG</h1>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-md-1-2">
                <div className="blog-img-container">
                  <img className="pure-img  blog-img " src={homeDirectory} />
                </div>
              </div>
              <div className="pure-u-1 pure-u-md-1-2 pure-img">
                <h2 className="b-h2">{blogData[0]["Heading"]}</h2>
                <p className="b-p">{blogData[0]["Description"]}</p>
                <p className="b-p" style={{ color: "white" }}>
                  <span>{blogData[0]["Time To Read"]}</span>
                  <span> {"\u2022"} </span>
                  <span>{blogData[0]["Date"]}</span>
                </p>
                <Link to={`/blog/${blogData[0]._rowNumber}`}>
                  <button className="b-heading-btn">READ MORE</button>
                </Link>
              </div>
            </div>
          </div>

          <h1 className="blog-list-heading">More Articles</h1>
          <div className="blog-list pure-g">
            {blogData.slice(1).map((row) => {
              return (
                <div className="pure-u-1 pure-u-md-1-3" key={row._rowNumber}>
                  <div className="blog-box">
                    <img className="blog-img pure-img" src={homeDirectory} />
                    <h3 className="b-h3">{row["Heading"]}</h3>
                    <p className="b-p">{row["Description"]}</p>
                    <Link to={`/blog/${row._rowNumber}`}>
                      <button className="b-btn">READ MORE</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
