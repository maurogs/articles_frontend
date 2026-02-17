# Angular Frontend – Articles & Comments

This project is an Angular-based frontend application that interacts with a Ruby on Rails API to manage articles, comments, and engagement information.

# Requirements

- Node.js v20.19.0
- Angular CLI 21.1.4

## Installation

Install the dependencies
```
npm install
```

Run the server
```
ng serve
```
or
```
npm start
```

The application will be available at http://localhost:4200

## Features

The application provides the following views:

### Articles List

- Displays all articles
- Shows title, author, creation date, and number of comments
- Allows navigation to article-specific comments

### Article Comments List

- Lists all comments associated with a selected article
- Shows author, body, and creation date
- Includes a button to add a new comment

### Create Article

- Form to create a new article
- Fields: title, body, author name

### Create Comment

- Form to add a comment to a specific article
- Fields: author name, body
- Automatically links the comment to the selected article

### Overview Dashboard

- Displays basic engagement metrics:
  - Total number of articles
  - Total number of comments
  - Most commented articles

## API Integration

The frontend communicates with the Rails backend using HTTP services.
Endpoints consumed include:

- GET /api/articles
- POST /api/articles
- GET /api/articles/:id/comments
- GET /api/comments
- POST /api/comments

## Code Quality Tools

The project uses ESLint and Prettier for code quality and formatting.

Run ESLint:
```
npm run lint
```

Run Prettier:
```
npm run format
```

## Improvements

- Testing components and services
- Improve styling (plus responsive)
- Edit and Delete articles and comments

