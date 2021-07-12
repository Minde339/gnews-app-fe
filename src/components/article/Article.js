import React from "react";
import Card from "react-bootstrap/Card";

function Article(props) {
  const { image, title, publishedAt, description } = props;
  const truncDesc = (str) => {
    if (str.length > 125) {
      let trunDescription = str.slice(0, 100) + " ...";
      return trunDescription;
    } else {
      return str;
    }
  };

  const convertData = (data) => {
    let formatedData = data.substring(0, 10) + " " + data.substring(11, 19);
    return formatedData;
  };
  return (
    <Card data-testid="article">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{convertData(publishedAt)}</Card.Text>
        <Card.Text>{truncDesc(description)}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Article;
