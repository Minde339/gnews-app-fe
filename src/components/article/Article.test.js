import { render } from "@testing-library/react";
import Article from "./Article";

test("renders article element", () => {
  const testData = {
    title: "Test Title",
    image: "urlImage",
    publishedAt: "2021-07-11",
    description: "testing",
  };
  const { queryByTestId } = render(
    <Article
      title={testData.title}
      image={testData.image}
      publishedAt={testData.publishedAt}
      description={testData.description}
    />
  );
  const element = queryByTestId("article");
  expect(element).toBeInTheDocument();
});
