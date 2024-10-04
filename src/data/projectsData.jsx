/* eslint-disable react/no-unescaped-entities */
import caraECommerce from "../assets/projects/cara-e-commerce.webp";
import theWildOasis from "../assets/projects/the-wild-oasis.webp";
import msrofaty from "../assets/projects/msrofaty.webp";

import frontendMentor from "../assets/projects/frontend-mentor.webp";
import ageCalculatorApp from "../assets/projects/frontend-mentor/age-calculator-app.webp";
import productList from "../assets/projects/frontend-mentor/product-list.webp";
import multiStepForm from "../assets/projects/frontend-mentor/multi-step-form.webp";
import restCountriesApi from "../assets/projects/frontend-mentor/rest-countries-api.webp";
import todoApp from "../assets/projects/frontend-mentor/todo-app.webp";
import spaceTourism from "../assets/projects/frontend-mentor/space-tourism.webp";

const projectsData = [
  {
    id: 1,
    image: caraECommerce,
    title: "Cara E-Commerce",
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
    id: 2,
    image: theWildOasis,
    title: "The Wild Oasis",
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
    id: 3,
    image: msrofaty,
    title: "Msrofaty - Expense Tracker",
    description:
      "Arabic expense-tracking app with detailed reports, statistics, and information to help manage budget and achieve financial goals effortlessly",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer-motion",
      "Recharts",
      "React-hook-form",
      "Redux-toolkit",
    ],
    gitHub: "https://github.com/GergesBadr/Msrofaty",
    demo: "https://msrofaty.netlify.app/",
    details: (
      <div className="project-details">
        <p>
          Two things are going to affect your life regardless your opinion about
          them, health, and money. And I decided to help with the money part!
        </p>
        <p>
          With Msrofaty, you can monitor/track your incomes, expenses, and
          saving (as total or at a specific duration of time). Imagine how it
          help into understanding, controlling, and managing your financial
          life!
        </p>
        <h2 className="heading-2">Features:</h2>
        <ul className="list-decimal !space-y-4 [&_strong]:text-primary-dark [&_strong]:dark:text-gray-300">
          <li>
            <strong>Overview:</strong> {""}
            Display a clear summary of user's total income, expenses, and
            calculated net savings from all transactions.
          </li>
          <li>
            <strong>Recent transactions:</strong> {""}
            Display the most recent 7 transactions (both income and expenses) to
            provide users with a quick overview of their latest financial
            activity.
          </li>
          <li>
            <strong>Expense Distribution:</strong> {""}
            Visual representation of expenses distributed by category to help
            users understand where their money is going.
          </li>
          <li>
            <strong>Transaction Management:</strong> {""}
            <ul className="mt-2 list-disc">
              <li>
                <strong>Add:</strong> {""} Users can add new transactions with
                its type "income or expense", category, amount, description, and
                date.
              </li>
              <li>
                <strong>Delete:</strong> {""}
                Easily remove recent transactions when needed to keep financial
                records up to date
              </li>
            </ul>
          </li>
          <li>
            <strong>Category Management:</strong> {""}
            The website offers a range of standard categories like Food,
            Transportation, Bills, Entertainment, etc... and an additional
            "Others" category for uncategorized expenses.
          </li>
          <li>
            <strong>Time-Specific Statistics:</strong> {""}
            Users can select a duration of time to see detailed statistics for
            that period, including:
            <ul className="mt-2 list-disc">
              <li>Total amount spent per category</li>
              <li>Most expensive day</li>
              <li>Daily average expenses</li>
              <li>Income, expenses, and balance for the selected period</li>
            </ul>
          </li>
        </ul>
        <p>
          Msrofaty also has smooth animations and visually appealing UI
          interface, ensuring an enjoyable and engaging user experience.
        </p>
        <h2 className="heading-2">Lessons learned:</h2>
        <p>
          It was my first "real" experience with TypeScript! It helped me write
          type-safety code with static typing, enhanced code quality, improved
          my experience as a developer, and more!
        </p>
        <p className="border-t-2 border-t-gray-300 pt-4 dark:border-t-gray-600">
          Enjoy your life while not giving so much of your time, energy, and
          mental effort trying to handle your financial management, let Msrofaty
          do that for you now!
        </p>
      </div>
    ),
  },

  {
    id: 4,
    image: frontendMentor,
    title: "Frontend Mentor Solutions",
    description:
      "Most of my completed work on the amazing frontend mentor platform.",
    tags: ["React", "TailwindCSS", "HTML", "CSS", "JS", "Redux-toolkit"],
    details: (
      <div className="project-details">
        <p>
          On{" "}
          <a
            href="https://www.frontendmentor.io/faq"
            target="_blank"
            className=""
          >
            Frontend mentor FAQ's page
          </a>
          , They define their platform as: "We provide front-end challenges that
          include professional web designs. These allow you to practice building
          websites in a realistic workflow. Taking these challenges will help
          you improve your skills, gain experience creating websites, and build
          up an incredible project portfolio. We also have a large community of
          developers, so it's a great way to meet other devs! "
        </p>

        <p>Working on Frontend Mentor challenges allowed me to:</p>

        <ul className="list-decimal">
          <li>Improve my UI/UX design skills.</li>
          <li>Apply modern web development practices.</li>
          <li>Practice any new skill I learned.</li>
          <li>Work on real-world projects.</li>
          <li>Receive feedback from the community.</li>
        </ul>

        <p>
          I have <strong>+12</strong> completed solutions. With{" "}
          <strong>+50</strong> people who liked my work. And a total points
          earned of <strong>+310</strong>
        </p>

        <p>
          Below are my highlighted challenges I've completed on Frontend Mentor.
          Click on each to see the detailed solution and code.
        </p>

        <ul className="list-disc">
          <li>
            <a
              href="https://www.frontendmentor.io/solutions/product-list-with-functional-cart-aP8P5pdMfn"
              target="_blank"
            >
              Product list with cart
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/solutions/age-calculator-app-eF-l4cB6cp"
              target="_blank"
            >
              Age Calculator App
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/solutions/a-userfriendly-multistepform-iPjEvpERi8"
              target="_blank"
            >
              A user-friendly multi-step-form
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/solutions/rest-countries-api-mDyYpSBjws"
              target="_blank"
            >
              Rest Countries Api
            </a>
          </li>
          <li>
            <a
              href="https://www.frontendmentor.io/solutions/todo-app-with-reactjs-HxGA942i6z"
              target="_blank"
            >
              Todo App
            </a>
          </li>
        </ul>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,250px))] justify-center gap-4 [&_img]:rounded-3xl [&_img]:shadow-md">
          <img
            width="250"
            height="250"
            loading="lazy"
            src={productList}
            alt="ProductList solution screenshot"
          />

          <img
            width="250"
            height="250"
            loading="lazy"
            src={ageCalculatorApp}
            alt="Age calculator app solution screenshot"
          />

          <img
            width="250"
            height="250"
            loading="lazy"
            src={multiStepForm}
            alt="Multi step form solution screenshot"
          />

          <img
            width="250"
            height="250"
            loading="lazy"
            src={restCountriesApi}
            alt="Rest countries API solution screenshot"
          />

          <img
            width="250"
            height="250"
            loading="lazy"
            src={todoApp}
            alt="Todo app solution screenshot"
          />

          <img
            width="250"
            height="250"
            loading="lazy"
            src={spaceTourism}
            alt="Space tourism solution screenshot"
          />
        </div>

        <a
          href="https://www.frontendmentor.io/profile/GergesBadr/solutions"
          target="_blank"
          className="mx-auto block w-fit"
        >
          View All My Solutions on Frontend Mentor
        </a>
      </div>
    ),
  },
];

export default projectsData;
