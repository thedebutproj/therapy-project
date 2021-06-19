import { useEffect, useRef, useState } from "react";
import * as fs from "fs";
import { Stream } from "stream";
// import showdown from "showdown";

const Article = () => {
  const container = useRef();

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/drive/v3/files/1_zpGyay34NvIM2H11RiaXsqNLVC_3NsD/"
    )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="article-container" ref={container}>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vSZejDs2HaOZWqXY8KjDXTnU9EYLFFEd7Ihl5nBBC_cyq4crNEX3-DPe7dreT330YC8rDLgIBBx4-NX/pub?embedded=true"></iframe>
    </div>
  );
};

export default Article;
