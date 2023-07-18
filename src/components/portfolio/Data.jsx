import GOST_Blog from "../../assets/projectImages/GOST_Blog.png"
import Evogym from "../../assets/projectImages/Evogym.png"
import Fiver from "../../assets/projectImages/Fiver.png"
import QuantumGym from "../../assets/projectImages/QuantumGym.png"
import AndFlix from "../../assets/projectImages/andFLIX.png"
import ChatApp from "../../assets/projectImages/ChatApp.png"

export const projectsData = [
    {
        id: 1,
        image: QuantumGym,
        title: "Quantum Gym",
        category: "MERN",
        link: 'https://quantum-gym.netlify.app',
        clientLink: "https://github.com/Selva-Ganesh-M/F_TS_Quantum_Gym",
        serverLink: "https://github.com/Selva-Ganesh-M/B_TS_Quantum_Gym"
    },
    {
        id: 2,
        image: ChatApp,
        title: "Chat App",
        category: "static",
        link: 'https://chat-app-client-tau.vercel.app/app',
        clientLink: "https://github.com/Selva-Ganesh-M/Chat_App_Client",
    },
    {
        id: 3,
        image: GOST_Blog,
        title: "GOST Blog",
        category: "MERN",
        link: 'https://gostblog.netlify.app/',
        clientLink: "https://github.com/Selva-Ganesh-M/Blog_Client",
        serverLink: "https://github.com/Selva-Ganesh-M/Blog_Server"
    },
    {
        id: 4,
        image: Evogym,
        title: "Evo Gym",
        category: "static",
        link: "https://evogymts.netlify.app/",
        clientLink: "https://github.com/Selva-Ganesh-M/Re_TS_Fr_Tw_Gym_App"
    },
    {
        id: 5,
        image: Fiver,
        title: "Fiverr",
        category: "static",
        link: "https://fiverapp.netlify.app/",
        clientLink: "https://github.com/Selva-Ganesh-M/fiverr_client"
    },
    {
        id: 6,
        image: AndFlix,
        title: "&FLIX",
        category: "dev",
        link: "https://movie-detailsapp.netlify.app/",
        clientLink: "https://github.com/Selva-Ganesh-M/movie_details_app"
    },
];

export const projectsNav = [
    {
        name: "all"
    },
    {
        name: "MERN"
    },
    {
        name: "static"
    },
    {
        name: "dev"
    },
]