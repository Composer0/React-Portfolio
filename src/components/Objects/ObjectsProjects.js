const ProjectObjects = [
    {
        key: 1,
        image: require("../../assets/img/beatmachine.png"),
        title: "Beat Maker",
        alt: "Beat Maker",
        sLink: "https://www.orionpalmer.com/BeatmakerProject/index.html",
        gLink: "https://github.com/Composer0/Music-Maker",
        yLink: "https://www.youtube.com/watch?v=zG6wQomYu9E",
        tech: "HTML | CSS | JavaScript",
        info: "Uses selector menus and JavaScript to choose specific sounds to be played on each of the four tracks. Allows switching between two applications to play and customize music."
    },
    {
        key: 2,
        image: require("../../assets/img/Pokedex.png"),
        title: "Pokedex",
        alt: "Pokedex",
        sLink: "https://www.orionpalmer.com/Pokedex/index.html",
        gLink: "https://github.com/Composer0/Pokemon-Pokedex-API",
        yLink: "https://youtu.be/7d59W8mz0ZE",
        tech: "HTML | CSS | JavaScript | RESTful API",
        info: "This application features the RESTful API known as PokeAPI to gather Pokemon data by using async/await className methods upon clicking one of the regional search selectors."
    },
    {
        key: 3,
        image: require("../../assets/img/Keeper-App.png"),
        title: "Keeper App",
        alt: "Keeper App",
        sLink: "https://www.orionpalmer.com/Keeper-App/index.html",
        gLink: "https://github.com/Composer0/Keeper-App",
        yLink: "",
        tech: "React | JavaScript | CSS",
        info: "Uses states, props, and components to register input within the input and textarea fields. Upon clicking add, inputs are registered to a notes object and rendered onto a new note which also holds a delete feature."
    },
    {
        key: 4,
        image: require("../../assets/img/portfolio.png"),
        title: "Portfolio",
        alt: "Portfolio",
        sLink: "https://www.orionpalmer.com/Pokedex/index.html",
        gLink: "https://github.com/Composer0/Updated-CV",
        yLink: "",
        tech: "React | JavaScript | jQuery | Sass | CSS",
        info: "Features smooth scrolling with jQuery, JavaScript className additions. Features projects that primarily use HTML, CSS, and JavaScript."
    },
    {
        key: 5,
        image: require("../../assets/img/simon.png"),
        title: "Simon Says App",
        alt: "Simon Says App",
        sLink: "https://www.orionpalmer.com/Simon-Says-Game/index.html",
        gLink: "https://github.com/Composer0/",
        yLink: "https://www.youtube.com/watch?v=HHl1g3QWlxc&list=PLd7QYapjN1b7A4sN2MzQE3RznKao8DvQq&index=7",
        tech: "JavaScript | jQuery | CSS | HTML",
        info: "Simon Says Game that builds incremental sequenced events while providing user with visual and audio feedback."
    },
    {
        key: 6,
        image: require("../../assets/img/password-generator.png"),
        title: "Password Generator",
        alt: "Password Generator",
        sLink: "https://www.orionpalmer.com/PasswordGenerator/index.html",
        gLink: "https://github.com/Composer0/Password-Generator",
        yLink: "https://youtu.be/H9kpvnuPK4I",
        tech: "JavaScript | CSS | HTML",
        info: "Password Generator that features the toggleable use of lowercase, uppercase, numbers, and symbols to create a scalable password up to 20 characters long."
    },
    {
        key: 7,
        image: require("../../assets/img/movieapp.png"),
        title: "Movie Search",
        alt: "Movie Search",
        sLink: "https://www.orionpalmer.com/MovieApp/index.html",
        gLink: "https://github.com/Composer0/Movie-App",
        yLink: "https://www.youtube.com/watch?v=STa79bHfTTM",
        tech: "JavaScript | API | CSS | HTML",
        info: "Uses external api to generate a list of the current top movies along with their descriptions. Also includes a search feature."
    },
    {
        key: 8,
        image: require("../../assets/img/photography-website.png"),
        title: "Creative Website",
        alt: "Creative Website",
        sLink: "https://www.orionpalmer.com/CreativeWebsite/index.html",
        gLink: "https://github.com/Composer0/website-template",
        yLink: "https://www.youtube.com/watch?v=7e0-q0aB7wg",
        tech: "HTML | CSS | JavaScript | GSAP | Scroll Magic | Barba",
        info: "Multipage Responsive Website that features the uses library frameworks inside of JavaScript to create additional visual effects."
    },
    {
        key: 9,
        image: require("../../assets/img/randomstudentpicker.png"),
        title: "Whose Turn?",
        alt: "Whose Turn?",
        sLink: "https://www.orionpalmer.com/RandomChoicePicker/index.html",
        gLink: "https://github.com/Composer0/Random-Student-Picker",
        yLink: "https://www.youtube.com/watch?v=u--FTVnJp0I",
        tech: "HTML | CSS | JavaScript",
        info: "Uses an input form and generates names beneath it. Random student is selected using JavaScript."
    },
    {
        key: 10,
        image: require("../../assets/img/ToDoApp.png"),
        title: "To-Do List",
        alt: "To-Do List",
        sLink: "https://www.orionpalmer.com/ToDoApp/index.html",
        gLink: "https://github.com/Composer0/ToDoApp",
        yLink: "https://youtu.be/w39ehbLhX4o",
        tech: "React | JavaScript | CSS",
        info: "Designed with react components, hooks, props, useStates. Allows users to enter and delete list items. Methods of data entry include clicking the 'Add' button and pressing 'Enter'."
    },
    {
        key: 11,
        image: require("../../assets/img/ThemeClock.png"),
        title: "Theme Clock",
        alt: "Theme Clock",
        sLink: "https://www.orionpalmer.com/ThemeClock/index.html",
        gLink: "https://github.com/Composer0/Theme-Clock",
        yLink: "https://youtu.be/w39ehbLhX4o",
        tech: "JavaScript | CSS | HTML",
        info: "A clock that uses JavaScript to modify the presentation of the website with a toggleable dark mode. JavaScript uses the Date Constructor to retrieve data to be transformed via CSS to create a functioning ticking clock."
    },
    {
        key: 12,
        image: require("../../assets/img/Notes.png"),
        title: "Notes CRUD App",
        alt: "Notes CRUD App",
        sLink: "https://www.orionpalmer.com/NotesApp/index.html",
        gLink: "hhttps://github.com/Composer0/Notes-App",
        yLink: "https://youtu.be/QLWJuKpYbNU",
        tech: "JavaScript | CRUD | CSS | HTML",
        info: "CRUD application. Uses a markdown library. Works with local storage to ensure that only the user's browser will be able to see the contents of what is written unless the content is deleted via the app or browser."
    },
]

export default ProjectObjects;