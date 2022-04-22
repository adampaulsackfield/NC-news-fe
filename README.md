# NC News

## Overview

NC News is a Full-Stack Application built using Node, Express, React and SQl. It has full CRUD functionality and mocks a logged in user. This app utilizes a variety of technologies, best practices and packages. React's Context API is used for managing the User State, this decision was made purely to get experience with Context API as it is overkill for it's current use. The rest of the applications state is managed through props.

When the app loads, all users are returned from the database and a random one is selected, when clicking on Login, you will be logged in as that user and can make any requests that are requried a logged in user. You can comment, upvote and delete your own comments. Throughout the app the user is informed of changes via Toast notifications. If the user is not logged in then certain functionality has been disabled: deleting a comment that isn't your own and upvoting.

The application has been designed with a mobile first approach and should scale well across a multitude of device sizes. Styling was implemented using Tailwindcss, using custom colour, fonts and breakpoints.

### Features

- List all articles [API Call]
- List a single article [API Call]
- Filter Articles [Local State, if this was a larger app with more content then I would use the API endpoint and only return selected articles]
- List all comments for an article [API Call]
- Upvote an article [API Call with Optimistic Rendering] [Can be actions from articles listing or single article components]
- Add a comment to an article [API Call with Optimistic Rendering]
- Delete a comment that the user is the owner of [API Call with Optimistic Rendering]

#### Technologies

##### Backend

- Express - Lightweight framework for building APIs
- PG - Postgres for Node
- DOTENV - Used to obfuscate sensitive data from the code base
- CORS - Used for making requests to the API from a different host
- Jest - A framework used for Testing and Test Driven Development
- Jest-sorted - A Jest package for checking the order of returned values

##### Frontend

- React - Frontend framework in JavaScript
- React-router-dom - A package used for routing of a React Application
- React-icons - A package used for adding Font Icons
- React-toastify - A package for delivering constistent notifcations to the user
- React-moment - A package for formatting date and time
- React-hamburger - A package for adding simple hamburger menus
