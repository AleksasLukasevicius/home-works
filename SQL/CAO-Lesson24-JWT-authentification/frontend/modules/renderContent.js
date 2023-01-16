import { getContent } from "./getContent.js";

const renderContent = async () => {
  const contents = await getContent();

  const sectionContainer = document.body.querySelector("#content");
  sectionContainer.replaceChildren();

  if (!contents.length) {
    const noDataElement = document.createElement("h2");
    noDataElement.textContent = "No data in database";

    sectionContainer.append(noDataElement);
  }

  contents.forEach((article) => {
    const { date, title, content } = article;

    const contentContainer = document.createElement("div");
    contentContainer.className = "contentContainer";

    const titleContainer = document.createElement("div");
    titleContainer.className = "titleContainer";

    const dateElement = document.createElement("p");
    const titleElement = document.createElement("h2");
    const contentElement = document.createElement("p");

    dateElement.textContent = date.slice(0, 10);
    titleElement.textContent = title;
    contentElement.textContent = content;

    titleContainer.append(dateElement, title);

    contentContainer.append(titleContainer, content);

    sectionContainer.append(contentContainer);
  });
};

await renderContent();
