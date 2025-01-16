const articles = document.querySelectorAll("regel");

articles.forEach(article => {
  article.addEventListener("mouseover", () => {
    article.style.backgroundColor = "#f0f0f0";
    article.style.border = "2px solid blue";
  });

  article.addEventListener("mouseout", () => {
    article.style.backgroundColor = "";
    article.style.border = "";
  });
});