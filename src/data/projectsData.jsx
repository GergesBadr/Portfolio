/* eslint-disable react/no-unescaped-entities */
import caraECommerce from "../assets/projects/cara-e-commerce.webp";
import ageCalculatorApp from "../assets/projects/age-calculator-app.webp";
import bookmark from "../assets/projects/bookmark-landing-page.webp";
import multiStepForm from "../assets/projects/multi-step-form.webp";
import quizApp from "../assets/projects/quiz-app.webp";
import restCountriesApi from "../assets/projects/rest-countries-api.webp";
import spaceTourism from "../assets/projects/space-tourism.webp";
import theWildOasis from "../assets/projects/the-wild-oasis.webp";
import todoApp from "../assets/projects/todo-app.webp";

const projectsData = [
  {
    id: 1,
    priority: 1,
    image: caraECommerce,
    title: "Cara E-Commerce",
    featured: true,
    description:
      "A creative e-commerce platform designed to provide users with a seamless shopping experience",
    tags: [
      "React",
      "Tailwind",
      "React query",
      "Framer motion",
      "React hot toast",
    ],
    gitHub: "https://github.com/GergesBadr/Cara-E-commerce",
    demo: "https://cara-ecommerce-platform.netlify.app/home",
    details: (
      <div className="project-details">
        <p>
          A creative e-commerce platform designed to provide users with a
          seamless shopping experience. With a user-friendly interface and a
          wide range of products
        </p>
        <h2 className="heading-2"> Features: </h2>
        <ul className="list-disc">
          <li>Responsive Design</li>
          <li>
            Animations: Raise your shopping experience with smooth and engaging
            animations throughout the website
          </li>
          <li>Product catalog: Browse products by it's categories</li>
          <li>Search Functionality: Get products fast by searching for it</li>
          <li>Recommended Products: Suggestion about products</li>
          <li>Cart: See all chosen products information before checkout</li>
        </ul>
        <h2 className="heading-2"> Learned lessons: </h2>
        <p>
          In this project, I discovered the amazing framer motion library, which
          allowed me, with a great developer experience, to implement exciting
          and engaging animations
        </p>
      </div>
    ),
  },

  {
    id: 3,
    priority: 2,
    image: ageCalculatorApp,
    title: "Age Calculator App",
    description:
      "Fast and simple way to calculate your age in years, months, and days, on the fly.",
    tags: ["HTML", "CSS", "JS"],
    gitHub: "https://github.com/GergesBadr/age-calculator-app",
    demo: "https://gergesbadr.github.io/age-calculator-app/",
    details: (
      <div className="project-details">
        <p>
          A challenge from frontend mentor website, it calculates user age in
          years, months and days, with a nice counter animation.
        </p>
        <p>
          Implemented form validation for user's birthday to make sure no wrong
          dates are added.
        </p>
      </div>
    ),
  },

  {
    id: 4,
    priority: 3,
    image: bookmark,
    title: "Bookmark Landing Page",
    description:
      "My first TailwindCss project, simple and static one page website.",
    tags: ["HTML", "Tailwind", "JS"],
    gitHub: "https://github.com/GergesBadr/bookmark",
    demo: "https://gergesbadr.github.io/bookmark/",
    details: (
      <div className="project-details">
        <p>
          It is my first TailwindCSS project, it makes my understand the
          framework more, how to deal with it effectively and what is it's tips.
        </p>
        <p>
          It's a frontend mentor challenge, with nice and simple UI, light/dark
          mode toggle and fully responsive.
        </p>
      </div>
    ),
  },

  {
    id: 5,
    priority: 2,
    image: multiStepForm,
    title: "Multi Step Form",
    description:
      "Simplifying the process of collecting information from the user through interactive and segmented steps",
    tags: ["HTML", "Tailwind", "JS"],
    gitHub: "https://github.com/GergesBadr/Multi-step-form",
    demo: "https://gergesbadr.github.io/Multi-step-form/",
    details: (
      <div className="project-details">
        <p>
          A user-friendly and intuitive frontend mentor challenge that
          simplifies the process of collecting information through interactive
          and segmented steps
        </p>
        <h2 className="heading-2">Features:</h2>
        <ul className="list-disc">
          <li>Customizable Fields</li>
          <li>Inputs validation</li>
          <li>Responsive Design</li>
          <li>Accessibility</li>
          <li>Dealing with data</li>
        </ul>
      </div>
    ),
  },

  {
    id: 6,
    priority: 3,
    image: quizApp,
    title: "Quiz App",
    description:
      "Advanced Quiz app that allows you define numbers Of questions, category, difficulty and time per question.",
    tags: ["HTML", "Tailwind", "JS"],
    gitHub: "https://github.com/GergesBadr/Quiz-App",
    demo: "https://gergesbadr.github.io/Quiz-App/",
    details: (
      <div className="project-details">
        <p>
          Recently, I have realized that you can be more familiar with
          JavaScript by creating advanced games, or some big apps (like this
          one). but these small tutorials which are everywhere on the internet
          won't help so much. So I decided to start this advanced journey.
        </p>
        <h2 className="heading-2">Features:</h2>
        <ul className="list-disc">
          <li>
            User can choose number of questions, category, difficulty and time
            per question
          </li>
          <li>Timer with seconds and progress animation for every question</li>
          <li>Specially display user's score</li>
        </ul>
      </div>
    ),
  },

  {
    id: 7,
    priority: 3,
    image: restCountriesApi,
    title: "Rest Countries Api",
    featured: true,
    description:
      "Explore the world, in a user-friendly interface you will discover all needed information about countries, easily!",
    tags: ["React", "Tailwind"],
    gitHub: "https://github.com/GergesBadr/REST-Countries-API",
    demo: "https://countries-data-api.netlify.app/",
    details: (
      <div className="project-details">
        <p>
          Explore the world! in a user-friendly interface, you will discover all
          needed information about any country, easily!
        </p>
        <h2 className="heading-2">Features:</h2>
        <ul className="list-disc">
          <li>Up-to-date information about all the countries.</li>
          <li>Search for a specific country</li>
          <li>Click on a country and get more information about it</li>
          <li>Paginated countries</li>
        </ul>
      </div>
    ),
  },

  {
    id: 8,
    priority: 2,
    image: spaceTourism,
    title: "Space Tourism",
    description:
      "Want to discover the space? Well, sit back and relax, because we'll give you a truly experience!",
    tags: ["HTML", "Tailwind", "JS"],
    gitHub: "https://github.com/GergesBadr/Space-Tourism",
    demo: "https://gergesbadr.github.io/Space-Tourism/",
    details: (
      <div className="project-details">
        <p>Want to have a nice trip in space? You got the right place.</p>
        <p>
          A simple and presentational website for space traveling, representing
          all needed information about different planets and more, all with
          responsive and nice UI.
        </p>
      </div>
    ),
  },

  {
    id: 9,
    priority: 1,
    image: theWildOasis,
    title: "The Wild Oasis",
    featured: true,
    description:
      "A hotel management system website that helps hotel staff keep track of bookings, check guests in and out, and handle other important tasks smoothly",
    tags: [
      "React",
      "Tailwind",
      "Supabase",
      "React query",
      "React hook form",
      "Date-fns",
      "Recharts",
    ],
    gitHub: "https://github.com/GergesBadr/the-wild-oasis",
    demo: "https://hotel-of-the-wild-oasis.netlify.app",
    details: (
      <div className="project-details">
        <p>
          A hotel management system website to help employees have control over
          almost everything in the hotel.
        </p>
        <h2 className="heading-2">Features:</h2>
        <ul className="list-disc">
          <li>Authentication</li>
          <li>Dashboard</li>
          <li>Bookings</li>
          <li>Cabins</li>
          <li>Guests</li>
          <li>Settings</li>
        </ul>
        <p>
          I got the UI and other material for the website in{" "}
          <a
            href="https://www.udemy.com/course/the-ultimate-react-course/"
            target="_blank"
          >
            The Ultimate React Course
          </a>{" "}
          in Udemy, but I coded it myself, also, I have added more features and
          improvements to it, for more details about I have added, please refer
          to the GitHub repo below, just to mention a few:
        </p>
        <ul className="list-disc">
          <li> Responsive </li>
          <li> Accessibility </li>
          <li> Create a new guest </li>
          <li> Add a new booking </li>
          <li> Pagination on cabins </li>
          <li> .env file </li>
        </ul>
        <h2 className="heading-2">Learned lessons:</h2>
        <p>
          In this project, I had the opportunity to deal with BaaS (Backend as a
          Service) provider, which is{" "}
          <a href="https://supabase.com/" target="_blank">
            Supabase
          </a>
          . It allows me to handle backend logic like authentication and
          database operations, in a GUI (Graphical user interface) way.
        </p>
        <p>
          I also implemented advanced stuff in React, like compound-component
          pattern, reusable hooks and components, data manipulation like
          filtering, sorting and pagination.
        </p>
      </div>
    ),
  },

  {
    id: 10,
    priority: 2,
    image: todoApp,
    title: "Todo App",
    description:
      "A todo application that helps you manage your tasks efficiently",
    tags: ["React", "Tailwind"],
    gitHub: "https://github.com/GergesBadr/todo-app",
    demo: "https://scintillating-travesseiro-4953be.netlify.app/",
    details: (
      <div className="project-details">
        <p>
          A simple and responsive Todo application to help you manage your tasks
          efficiently.
        </p>
        <h2 className="heading-2">Features:</h2>
        <ul className="list-disc">
          <li>Add and delete tasks</li>
          <li>Filter tasks by status (All, Active, Completed)</li>
          <li>Clear completed tasks with one click</li>
          <li>Saved current tasks in localStorage</li>
          <li>Light and dark theme</li>
        </ul>
      </div>
    ),
  },
];

export default projectsData;
