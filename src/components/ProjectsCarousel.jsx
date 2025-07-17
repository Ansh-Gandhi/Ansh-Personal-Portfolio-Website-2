import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "./styling/ProjectsCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub } from "react-icons/fa";
import movieRecommenderImage from "../assests/images/4831192.png";
import chatAppImage from "../assests/images/unnamed-removebg-preview (1).png"; 
import nomApetitImage from "../assests/images/image.png";
import stockTrendImage from "../assests/images/stocks-removebg-preview.png";
import graphImage from "../assests/images/Directed.svg.png"; 
import concurrentServerImage from "../assests/images/server-removebg-preview.png"; 
import epilogImage from "../assests/images/Custom Size 1.png"


const projects = [
  {
    title: "Movie Recommender",
    description: [
      "Developing a dynamic React front end for users to select a movie and receive personalized recommendations",
      "Building a machine learning back end in Python using Flask to analyze movie data and generate personalized recommendations based on user input",
      "Integrating RESTful APIs for seamless communication and real-time recommendations",
    ],
    image: movieRecommenderImage,
    github: "https://github.com/Ansh-Gandhi/Movie-Recommender-Web-App",
  },
  {
    title: "Chatting Web Application",
    description: [
      "Developed a dynamic, real-time chat application using HTML, CSS, and JavaScript for the frontend",
      "Implemented a robust back end using Node.js, Express.js, and WebSockets to handle real-time messaging and user interactions efficiently",
      "Integrated RESTful APIs for user authentication, chat room creation, and message history and MongoDB for data storage",
    ],
    image: chatAppImage,
    github: "https://github.com/Ansh-Gandhi/Chat-Web-application",
  },
  {
    title: "Stock Trend Prediction",
    description: [
      "Developed a web application using Streamlit to visualize actual stock price trends over time versus predicted prices, while incorporating 100-day and 200-day moving averages for a deeper analysis",
      "Built and trained a Long Short-Term Memory (LSTM) network, using Scikit-learn and Keras in python, for predicting stock prices, using sequential data to improve prediction accuracy",
      "Designed intuitive, data-driven visualizations with Matplotlib and incorporated interactive trend graphs into the web app to enhance the user experience",
    ],
    image: stockTrendImage,
    github:"https://github.com/Ansh-Gandhi/Stock-Trend-Prediction-Website"
  },
  {
    title: "Nom Appetit",
    description: [
      "Developed a social restaurant tracking mobile app, focusing on creating shareable lists and implementing a machine-learning algorithm for the restaurant recommendation feature",
      "Designed and implemented a user-friendly front-end using Typescript and React Native which allows users to make seamless dining decisions",
      "Utilized Firebase and Express to enable auto-population and import functionalities for restaurant lists with advanced sorting and commenting functionalities",
    ],
    image: nomApetitImage,
    github: "https://github.com/ubclaunchpad/nom-appetit"
  },
  {
    title: "Graph Abstract Data Type",
    description: [
      "Implemented an adjacency matrix and adjacency list graph representation in Java to model sea levels across divserse terrains in order to predict the impact of seal level rise for city planners",
      "Applied Dijkstra's algorithm to efficiently compute the shortest path between two nodes on the graph",
      "Utilized JUnit testing to ensure full confidence in all the code by testing all edge cases and achieving 100% line and branch coverage",
    ],
    image: graphImage,
  },
  {
    title: "Concurrent Server",
    description: [
        "Devloped the server to handle multiple concurrent clients utilizing Java's socket class to interact between them",
        "Implemented a filtering mechanism that sifts through events to ensure only relevent events are passed to the client",
        "Utilized JUnit testing to ensure full confidence in all the code by testing all edge cases and achieving 100% line and branch coverage",
    ],
    image: concurrentServerImage,
  },
  {
    title: "Epilog",
    description: [
        "Led the design of a user centric mHealth app, simplifying epilepsy management for individuals and caregivers through streamlined tasks",
        "Coded the front-end of the reminders page and linked it to the back end using React Native, JavaScript, and Firebase",
        "Led the design and created the logo for the app",
    ],
    image: epilogImage,
    github: "https://github.com/ubclaunchpad/epilog"
  }
];

function ProjectsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.section
      id="projects"
      className="carousel-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2>Projects</h2>
      <Slider {...settings}>
        {projects.map((project, idx) => (
          <div className="project-slide" key={idx}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <ul className="project-description">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {project.github && (
                <a
                    href={project.github}
                    className="github-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub className="github-icon" />
                    View on GitHub
                </a>
            )}
          </div>
        ))}
      </Slider>
    </motion.section>
  );
}

export default ProjectsCarousel;
