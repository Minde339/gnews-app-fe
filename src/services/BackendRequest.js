import axios from "axios";

const urlSearch = "http://localhost:4000/searched";
const clickedUrl = "http://localhost:4000/clickedUrl";

const searchedUrl = (searchedData) => {
  const json = JSON.stringify({ searchedValue: searchedData });
  axios
    .post(urlSearch, json, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((err) => console.log(err));
};

const clickedUrls = (url) => {
  const json = JSON.stringify({ clickedUrlData: url });
  axios
    .post(clickedUrl, json, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((err) => console.log(err));
};

export { searchedUrl, clickedUrls };
