import { useEffect, useRef, useState } from "react";
import showdown from "showdown";

import { fetchSheet } from "../../api";

const TermsandPrivacy = () => {
  const [termsContent, setTermsContent] = useState();
  const contentContainer = useRef();

  useEffect(() => {
    fetchSheet(2).then((rows) => {
      const text = rows[0].Content;
      const converter = new showdown.Converter();
      converter.setOption("customizedHeaderId", true);

      setTermsContent(() => {
        contentContainer.current.innerHTML = converter.makeHtml(text);
        return rows;
      });
    });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      {termsContent == undefined ? (
        <h1 className="loading">...Loading</h1>
      ) : (
        <></>
      )}
      <div className="textToHtml-container" ref={contentContainer}></div>
    </div>
  );
};

export default TermsandPrivacy;
