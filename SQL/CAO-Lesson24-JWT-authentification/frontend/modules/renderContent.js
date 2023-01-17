import { getContent } from "./getContent.js";

const renderContent = async () => {
  const content = await getContent();

  const sectionContentContainer = document.body.querySelector("#content");
  sectionContentContainer.replaceChildren();

  if (!content.length) {
    const noDataElement = document.createElement("h2");
    noDataElement.textContent = "No content in database";

    sectionContentContainer.append(noDataElement);
  }

  content.forEach((article) => {
    const { date, title, content } = article;

    const contentContainer = document.createElement("div");
    contentContainer.className = "contentContainer";

    const titleContainer = document.createElement("div");
    titleContainer.className = "titleContainer";

    const dateElement = document.createElement("h6");
    const titleElement = document.createElement("h3");
    const contentElement = document.createElement("p");

    dateElement.textContent = date.slice(0, 10);
    titleElement.textContent = title;
    contentElement.textContent = content;

    titleContainer.append(title);

    contentContainer.append(titleContainer, dateElement, content);

    sectionContentContainer.append(contentContainer);
  });
};

await renderContent();
