import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Foodlander: Food Delivery Platform',
        description: "Engineered a user-centered food delivery platform, focusing on an intuitive interface and seamless user experience to enhance engagement. Implemented secure login and integrated a payment system with Stripe, ensuring high transaction security and improving checkout efficiency. Leveraged technologies such as React JS, MongoDB, Express, Node JS, and Tailwind CSS to create a robust, scalable, and visually appealing platform.",
        tools: ['Express', 'MongoDB', 'Node JS', 'React', 'Stripe'],
        role: 'Fullstack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Tour Chat: AI Powered Tourism ChatBot',
        description: 'Designed and implemented a web-based chatbot application utilizing machine learning techniques with NLTK and seamless API integrations. Trained NLTK models on diverse datasets to improve conversational accuracy and responsiveness. Integrated the Gemini API to efficiently address complex travel-related queries, ensuring a more intuitive and effective user experience.',
        tools: ['NextJS', 'Tailwind CSS', 'MongoDB', 'Node JS', 'React','Python', 'Gemini API','NLTK'],
        role: 'Fullstack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Taskhub: Task Management Website',
        description: 'Developed a feature-rich web application with secure user-specific sign-up and login functionalities, including password encryption to ensure data security. Enhanced task management capabilities by enabling users to add, edit, delete, prioritize, and categorize tasks efficiently, with server-side storage for seamless access and organization.',
        tools: ['Express', 'MongoDB', 'Node JS', 'React', 'Tailwind CSS'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    // {
    //     id: 4,
    //     name: 'Heart Disease Predictor',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },