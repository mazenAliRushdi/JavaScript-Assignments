const jsonData = `
[
  {
    "id": 1,
    "author": "Ahmed Ali",
    "category": "Technology",
    "title": "The Future of Artificial Intelligence",
    "content": "Artificial intelligence is rapidly evolving and its impact on various aspects of our lives is becoming increasingly significant..."
  },
  {
    "id": 2,
    "author": "Sara Mahmoud",
    "category": "Travel",
    "title": "Exploring the Ancient Wonders of Egypt",
    "content": "Egypt, a land steeped in history, offers a mesmerizing journey through time with its magnificent pyramids, temples, and the Nile River..."
  },
  {
    "id": 3,
    "author": "Omar Hassan",
    "category": "Science",
    "title": "The Mysteries of Quantum Physics",
    "content": "Quantum physics, a fundamental theory in physics, delves into the strange and fascinating world of atoms and subatomic particles..."
  },
  {
    "id": 4,
    "author": "Fatma Ibrahim",
    "category": "Food",
    "title": "A Culinary Journey Through Italian Cuisine",
    "content": "Italian cuisine, renowned for its diverse flavors and regional specialties, is a delightful experience for food lovers worldwide..."
  },
  {
    "id": 5,
    "author": "Youssef Khaled",
    "category": "Sports",
    "title": "The Thrill of the Global Football Championship",
    "content": "The global football championship brings together the best teams from around the world in a thrilling display of skill and competition..."
  }
]
`;

// Convert JSON Object to JavaScript Object
const mainData = JSON.parse(jsonData);

// Loop through all articles and change the category to "All"
for (let i = 0; i < mainData.length; i++) {
  mainData[i].category = "All";
}

// Print the content of the mainData variable
console.log(mainData);

// Convert the updated JavaScript Object back to JSON Object
const updatedData = JSON.stringify(mainData);

// Print the content of the updatedData variable
console.log(updatedData);
