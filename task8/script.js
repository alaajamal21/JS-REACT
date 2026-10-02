
let articles = [
  { id: 1, title: "Programming Article", content: "First article content", image: "Programming image" },
  { id: 2, title: "Design Article", content: "Second article content", image: "Design image" },
  { id: 3, title: "Sports Article", content: "Third article content" },
  { id: 4, title: "Travel Article", content: "Fourth article content", image: "Travel image" },
  { id: 5, title: "Cooking Article", content: "Fifth article content" }
];

articles.forEach(function (article) {
  if (article.image) {
    console.log(`${article.id} - ${article.title}:
        ${article.content} | ${article.image}`);
  } else {
    console.log(`${article.id} - ${article.title}:
        ${article.content} | default image`);
  }
});