import { homeDirectory, blog_CLOUD1, blog_CLOUD2 } from "../../assets";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-lhsPatch">
        <img src={blog_CLOUD1} alt="cloud1" />
      </div>

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
          <div className="pure-u-1 pure-u-md-1-2">
            <h2 className="b-h2">Lorem Ipsum</h2>
            <p className="b-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <button className="b-heading-btn">Read More</button>
          </div>
        </div>
      </div>

      <div className="blog-list pure-g">
        <div className="pure-u-1 pure-u-md-1-3">
          <div className="blog-box">
            <img className="blog-img pure-img" src={homeDirectory} />
            <h3 className="b-h3">Lorem Ipsum</h3>
            <p className="b-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <button className="b-btn">Read More</button>
          </div>
        </div>

        <div className="pure-u-1 pure-u-md-1-3">
          <div className="blog-box">
            <img className="blog-img pure-img" src={homeDirectory} />
            <h3 className="b-h3">Lorem Ipsum</h3>
            <p className="b-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <button className="b-btn">Read More</button>
          </div>
        </div>

        <div className="pure-u-1 pure-u-md-1-3">
          <div className="blog-box">
            <img className="blog-img pure-img" src={homeDirectory} />
            <h3 className="b-h3">Lorem Ipsum</h3>
            <p className="b-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <button className="b-btn">Read More</button>
          </div>
        </div>

        <div className="pure-u-1 pure-u-md-1-3">
          <div className="blog-box">
            <img className="blog-img pure-img" src={homeDirectory} />
            <h3 className="b-h3">Lorem Ipsum</h3>
            <p className="b-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <button className="b-btn">Read More</button>
          </div>
        </div>

        <div className="pure-u-1 pure-u-md-1-3">
          <div className="blog-box">
            <img className="blog-img pure-img" src={homeDirectory} />
            <h3 className="b-h3">Lorem Ipsum</h3>
            <p className="b-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <button className="b-btn">Read More</button>
          </div>
        </div>

        <div className="pure-u-1 pure-u-md-1-3">
          <div className="blog-box">
            <img className="blog-img pure-img" src={homeDirectory} />
            <h3 className="b-h3">Lorem Ipsum</h3>
            <p className="b-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <button className="b-btn">Read More</button>
          </div>
        </div>

        <div className="pure-u-1 pure-u-md-1-3">
          <div className="blog-box">
            <img className="blog-img pure-img" src={homeDirectory} />
            <h3 className="b-h3">Lorem Ipsum</h3>
            <p className="b-p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type
            </p>
            <button className="b-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
