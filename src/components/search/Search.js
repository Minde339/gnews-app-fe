import React, { useState } from "react";
import { clickedUrls, searchedUrl } from "../../services/BackendRequest";
import Article from "../article/Article";
import "./Search.css";

export default function Search() {
  const [state, setState] = useState({
    text: "",
    error: "",
  });
  const [articles, setArticles] = useState([]);

  const handleChange = (e) => {
    let newState = {
      text: e.target.value,
    };
    setState(newState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      getQuery();
    } else {
      let errorState = {
        error: "Invalid input",
        text: state.text,
      };
      setState(errorState);
    }
  };

  const validate = () => {
    const regex = new RegExp(/^[a-z0-9_ ]+$/i);
    if (state.text.length <= 40 && regex.test(state.text)) {
      return true;
    } else {
      return false;
    }
  };

  const url =
    "https://gnews.io/api/v4/search?q=&token=" +
    `${process.env.REACT_APP_API_KEY}`;

  const getQuery = async () => {
    let searchedValue = state.text;
    const position = 33;
    let finalUrl =
      url.substring(0, position) + searchedValue + url.substring(position);
    searchedUrl(searchedValue);
    const response = await fetch(finalUrl);
    const data = await response.json();
    setArticles(data.articles.splice(0, 9));
  };

  const openUrl = (url) => {
    clickedUrls(url);
    window.open(url, "_blank");
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="form">
        <div className="errorClass">{state.error}</div>
        <input
          data-testid="input"
          type="text"
          className="form-control"
          placeholder="Enter search phrase"
          value={state.text}
          onChange={handleChange}
        />
      </form>
      <div className="grid-container">
        {articles.map((article, index) => {
          return (
            <div
              className="grid-item"
              onClick={() => openUrl(article.url)}
              key={index}
            >
              <Article
                title={article.title}
                publishedAt={article.publishedAt}
                description={article.description}
                image={article.image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
