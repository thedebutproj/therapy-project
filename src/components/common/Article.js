import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
// import * as fs from "fs";
// import { Stream } from "stream";
import showdown from "showdown";

import { fetchSheetRow } from "../../api";
import "./Article.css";

const Article = () => {
  const { id } = useParams();
  const contentContainer = useRef();
  const [article, setArticle] = useState();

  useEffect(() => {
    fetchSheetRow(1, id).then((row) => {
      const text = row.Content;
      const converter = new showdown.Converter();
      converter.setOption("customizedHeaderId", true);

      // const ele = document.createElement("span");

      setArticle((value) => {
        // ele.innerHTML = converter.makeHtml(text);
        // contentContainer.current.appendChild(ele);
        contentContainer.current.innerHTML = converter.makeHtml(text);
        return row;
      });
    });
  }, []);

  return (
    <div className="article-container">
      {article == undefined ? (
        <h1 className="loading">...Loading</h1>
      ) : (
        <>
          <h1 className="article-heading">{article["Heading"]}</h1>
          <span style={{ color: "whitesmoke" }}>
            <span>{article["Time To Read"]}</span>
            <span> {"\u2022"} </span>
            <span>{article["Date"]}</span>
          </span>
          <p className="article-author">-by {article["Author"]}</p>
        </>
      )}
      <div className="article-content" ref={contentContainer}></div>
    </div>
  );
};

export default Article;
