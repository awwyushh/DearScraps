# DearScraps

**DearScraps** is a digital platform for creating, managing, and collaborating on scrapbooks. It allows users to preserve memories with photos, text, and media while connecting globally through a live feed of user-crafted "scraps."

---

## Table of Contents

- [Project Description](#project-description)
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Docker Setup](#docker-setup)
- [Contributing](#contributing)
- [License](#license)

---

## Project Description

DearScraps is a web-based tool that lets users:
- Build and organize digital scrapbooks with photos, notes, and media.
- Collaborate with others on shared scrapbook projects.
- Explore a real-time global feed of scraps from users worldwide.

It’s perfect for preserving memories or connecting through creative storytelling.

---

## Key Features

- **Scrapbook Creation**: Upload photos, add notes, and arrange memories.
- **Collaboration**: Invite others to contribute to your scrapbooks.
- **Global Feed**: View real-time scraps from around the world.
- **Easy Interface**: Simple, intuitive design for all users.

---

## Installation

Run DearScraps locally with these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) (v6+)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/dearscraps.git
   cd dearscraps
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment**:
   - Create a `.env` file.
   - Add variables (e.g., database credentials) from `.env.example`.

4. **Start the app**:
   ```bash
   npm start
   ```
   
5. **Open it**:
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

### Creating a Scrapbook

1. Sign up or log in.
2. Click **"New Scrapbook"** and add a title and description.
3. Upload photos, notes, or media.
4. Arrange items by dragging and dropping.

### Collaborating

1. From your scrapbook, click **"Invite."**
2. Enter collaborators’ email addresses.
3. They can add or edit content.

### Viewing the Feed

1. On the homepage, scroll the live feed.
2. Like, comment, or share inspiring scraps.

---

## Docker Setup

Run DearScraps using Docker:

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Steps

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/dearscraps.git
   cd dearscraps
   ```

2. **Build and start the container**:
   ```bash
   docker-compose up --build
   ```

3. **Access the app**:
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

4. **Stopping the container**:
   ```bash
   docker-compose down
   ```

---

## Contributing

We’d love your help! Here’s how to contribute:

### Steps

1. **Fork the repository**.
2. **Create a branch**:
   ```bash
   git checkout -b feature-name
   ```
3. Make and commit changes.
4. **Push to your fork**:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request to the `main` branch.

### Guidelines

- Match the code style.
- Use clear commit messages.
- Update docs if needed.
- Discuss big changes in an issue first.

---

## License

This project uses the **MIT License**.
