🎥 Movie Collection App

A React.js application that allows users to search for movies and view details about specific movies. The app uses the OMDB API to fetch movie information.

📝 Features

Search for Movies: Users can search for movies by typing in the name of the movie.
Movie Collection Display: After searching, a collection of movies matching the search query is displayed.
Movie Details Page: By clicking on a specific movie, users are navigated to a page with more details about the movie such as the title, release year, runtime, director, language, IMDb rating, and awards.
Responsive Design: The app is designed to be responsive and user-friendly across various devices.
🚀 Live Demo

Movie Collection App Demo <!-- Add the live link if deployed -->

🛠️ Technologies Used
* React.js: Frontend library for building user interfaces.
* OMDB API: Used to fetch movie data such as titles, posters, descriptions, and more.
* Axios: For making HTTP requests to the OMDB API.
* React Router: For handling page navigation between movie search results and movie details.
* CSS: For styling the app and creating a responsive layout.

🌐 OMDB API
This project uses the OMDB API to fetch movie information. You need to obtain an API key by signing up on the OMDB website.

* API Base URL: http://www.omdbapi.com/
* Example Request: http://www.omdbapi.com/?s=batman&apikey=your_api_key

 API Endpoints Used

* Search Movies: http://www.omdbapi.com/?s={movie_name}&apikey={api_key}
* Movie Details: http://www.omdbapi.com/?i={imdb_id}&apikey={api_key}

⚙️ Installation and Setup
Prerequisites
Make sure you have the following installed on your local machine:

Node.js (v14 or above)
npm or yarn
Step-by-Step Guide:

1.Clone the Repository:
   
    ```bash
    git clonehttps://github.com/RVJVIJAY/Movie-Collection-Project.git
    cd Movie-Collection-Project

2.Install Dependencies:
    npm install
3.Obtain OMDB API Key:
    Go to the OMDB website and generate your API key.
4.Start the Development Server:
    npm start


💡 Usage
Search Movies: Enter the name of a movie in the search bar. The app will fetch a collection of movies matching the query.

View Movie Details: Click on any movie in the collection to view more details about it on a new page.

🛠️ Tools and Libraries
React: A JavaScript library for building user interfaces.
Axios: For making HTTP requests to the OMDB API.
React Router: For handling routes and navigation.
CSS: For styling components and layouts.

🤝 Contributing
If you would like to contribute to this project, feel free to submit a pull request. Please make sure to follow the code of conduct before contributing.

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

🙏 Acknowledgements
OMDB API for providing movie data.
React for the powerful frontend library.
Axios for simplifying API requests.

