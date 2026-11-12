
const packages = [
  {
    name: "NumPy",
    icon: "🔢",
    level: "Beginner",
    description: "Used for numerical calculations and working with arrays.",
    uses: "Scientific computing, mathematics, arrays and matrix operations.",
    install: "pip install numpy",
    example: `import numpy as np

numbers = np.array([10, 20, 30])
print(numbers)
print(numbers.mean())`
  },
  {
    name: "Pandas",
    icon: "🐼",
    level: "Beginner",
    description: "Helps organize, analyze and manage data.",
    uses: "Data analysis, spreadsheets, CSV files and data cleaning.",
    install: "pip install pandas",
    example: `import pandas as pd

data = {
    "Name": ["Ali", "John"],
    "Age": [20, 22]
}

df = pd.DataFrame(data)
print(df)`
  },
  {
    name: "Matplotlib",
    icon: "📊",
    level: "Beginner",
    description: "Creates charts and graphs from data.",
    uses: "Data visualization, bar charts, line graphs and reports.",
    install: "pip install matplotlib",
    example: `import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [10, 20, 15, 30]

plt.plot(x, y)
plt.title("My First Graph")
plt.show()`
  },
  {
    name: "Requests",
    icon: "🌐",
    level: "Beginner",
    description: "Makes HTTP requests to websites and APIs.",
    uses: "API integration, web data and HTTP communication.",
    install: "pip install requests",
    example: `import requests

response = requests.get(
    "https://api.github.com"
)

print(response.status_code)`
  },
  {
    name: "BeautifulSoup",
    icon: "🍲",
    level: "Intermediate",
    description: "Extracts information from HTML pages.",
    uses: "Web scraping, extracting titles, links and website data.",
    install: "pip install beautifulsoup4",
    example: `from bs4 import BeautifulSoup

html = "<h1>Hello Python</h1>"

soup = BeautifulSoup(html, "html.parser")

print(soup.h1.text)`
  },
  {
    name: "Seaborn",
    icon: "🎨",
    level: "Intermediate",
    description: "Creates attractive statistical visualizations.",
    uses: "Statistical graphs, heatmaps and data exploration.",
    install: "pip install seaborn",
    example: `import seaborn as sns
import matplotlib.pyplot as plt

data = [10, 20, 15, 30, 25]

sns.histplot(data)
plt.show()`
  },
  {
    name: "OpenCV",
    icon: "📷",
    level: "Intermediate",
    description: "Works with images and videos using computer vision.",
    uses: "Face detection, image processing and video analysis.",
    install: "pip install opencv-python",
    example: `import cv2

image = cv2.imread("photo.jpg")

if image is not None:
    gray = cv2.cvtColor(
        image, cv2.COLOR_BGR2GRAY
    )
    print(gray.shape)`
  },
  {
    name: "Flask",
    icon: "🔥",
    level: "Intermediate",
    description: "A lightweight framework for building web applications.",
    uses: "Websites, backend development and REST APIs.",
    install: "pip install flask",
    example: `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello Python!"

if __name__ == "__main__":
    app.run(debug=True)`
  },
  {
    name: "Django",
    icon: "🌍",
    level: "Advanced",
    description: "A powerful framework for building complete websites.",
    uses: "Backend development, databases, authentication and web apps.",
    install: "pip install django",
    example: `# Create a Django project
# Run in your terminal:

django-admin startproject mysite

cd mysite

python manage.py runserver`
  },
  {
    name: "Scikit-learn",
    icon: "🤖",
    level: "Advanced",
    description: "Provides tools for machine learning.",
    uses: "Classification, regression, clustering and predictions.",
    install: "pip install scikit-learn",
    example: `from sklearn.linear_model import LinearRegression

model = LinearRegression()

model.fit([[1], [2], [3]], [2, 4, 6])

print(model.predict([[4]]))`
  },
  {
    name: "TensorFlow",
    icon: "🧠",
    level: "Advanced",
    description: "A library for machine learning and deep learning.",
    uses: "Neural networks, AI applications and deep learning.",
    install: "pip install tensorflow",
    example: `import tensorflow as tf

tensor = tf.constant([1, 2, 3])

print(tensor)`
  },
  {
    name: "PyTorch",
    icon: "⚡",
    level: "Advanced",
    description: "A deep learning framework used to build AI models.",
    uses: "Neural networks, computer vision and natural language processing.",
    install: "pip install torch",
    example: `import torch

x = torch.tensor([1, 2, 3])

print(x)
print(x * 2)`
  }
];

const grid = document.getElementById("packageGrid");
const searchInput = document.getElementById("searchInput");
const filters = document.querySelectorAll(".filter");
const modal = document.getElementById("packageModal");
const modalDetails = document.getElementById("modalDetails");

let selectedLevel = "All";

function displayPackages() {
  const search = searchInput.value.toLowerCase();

  const filtered = packages.filter(pkg => {
    const matchesSearch =
      pkg.name.toLowerCase().includes(search) ||
      pkg.description.toLowerCase().includes(search) ||
      pkg.uses.toLowerCase().includes(search);

    const matchesLevel =
      selectedLevel === "All" ||
      pkg.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  grid.innerHTML = "";

  document.getElementById("noResults").hidden =
    filtered.length !== 0;

  filtered.forEach(pkg => {
    const card = document.createElement("article");
    card.className = "package-card";

    const icon = document.createElement("div");
    icon.className = "package-icon";
    icon.textContent = pkg.icon;

    const title = document.createElement("h3");
    title.textContent = pkg.name;

    const description = document.createElement("p");
    description.textContent = pkg.description;

    const level = document.createElement("span");
    level.className = "level";
    level.textContent = pkg.level;

    const button = document.createElement("button");
    button.className = "learn-btn";
    button.textContent = "Explore Package →";
    button.addEventListener("click", () => openPackage(pkg.name));

    card.append(icon, title, description, level, button);
    grid.appendChild(card);
  });
}

function openPackage(name) {
  const pkg = packages.find(p => p.name === name);

  if (!pkg) return;

  modalDetails.replaceChildren();

  const icon = document.createElement("div");
  icon.className = "package-icon";
  icon.textContent = pkg.icon;

  const heading = document.createElement("h2");
  heading.textContent = pkg.name;

  const level = document.createElement("span");
  level.className = "level";
  level.textContent = pkg.level;

  const description = document.createElement("p");
  description.textContent = pkg.description;

  const usesHeading = document.createElement("h3");
  usesHeading.textContent = "Where is it used?";

  const uses = document.createElement("p");
  uses.textContent = pkg.uses;

  const installHeading = document.createElement("h3");
  installHeading.textContent = "Installation";

  const install = document.createElement("pre");
  install.textContent = pkg.install;

  const exampleHeading = document.createElement("h3");
  exampleHeading.textContent = "Code Example";

  const example = document.createElement("pre");
  example.textContent = pkg.example;

  modalDetails.append(
    icon,
    heading,
    level,
    description,
    usesHeading,
    uses,
    installHeading,
    install,
    exampleHeading,
    example
  );

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    selectedLevel = button.dataset.level;

    displayPackages();
  });
});

searchInput.addEventListener("input", displayPackages);

document.getElementById("closeModal")
  .addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});

displayPackages();
