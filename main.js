const articlesJSON = `
[
  {
    "userId": 10,
    "title": "Article Title Number 1",
    "description": "Article Description Number 1"
  },
  {
    "userId": 5,
    "title": "Article Title Number 2",
    "description": "Article Description Number 2"
  },
  {
    "userId": 5,
    "title": "Article Title Number 3",
    "description": "Article Description Number 3"
  },
  {
    "userId": 5,
    "title": "Article Title Number 4",
    "description": "Article Description Number 4"
  },
  {
    "userId": 5,
    "title": "Article Title Number 5",
    "description": "Article Description Number 5"
  },
  {
    "userId": 5,
    "title": "Article Title Number 6",
    "description": "Article Description Number 6"
  },
  {
    "userId": 25,
    "title": "Article Title Number 7",
    "description": "Article Description Number 7"
  },
  {
    "userId": 25,
    "title": "Article Title Number 8",
    "description": "Article Description Number 8"
  },
  {
    "userId": 15,
    "title": "Article Title Number 9",
    "description": "Article Description Number 9"
  },
  {
    "userId": 15,
    "title": "Article Title Number 10",
    "description": "Article Description Number 10"
  }
]
`;

function processArticles(data) {
  return new Promise((resolve, reject) => {
    try {
      const articles = JSON.parse(data);
      let output = "";
      for (let i = 0; i < 5; i++) {
        output += `<div>\n`;
        output += `  <h3>${articles[i].title}</h3>\n`;
        output += `  <p>${articles[i].description}</p>\n`;
        output += `  <p>User ID: ${articles[i].userId}</p>\n`;
        output += `</div>\n<hr>\n`;
      }
      resolve(output);
    } catch (error) {
      reject(error);
    }
  });
}

processArticles(articlesJSON)
  .then((htmlOutput) => {
    document.body.innerHTML = htmlOutput;
  })
  .catch((error) => {
    console.error("Error processing articles:", error);
    document.body.innerHTML = "<p>Error loading articles.</p>";
  });
