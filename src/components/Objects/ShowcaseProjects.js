const ProjectObjects = [
    {
        key: 1,
        image: require("../../assets/img/creators-blog.webp"),
        title: "Creators' Blog",
        alt: "Creators' Blog",
        sLink: "https://creators-blog.netlify.app/",
        gLink: "https://github.com/Composer0/BlogFullstack",
        yLink: "https://www.youtube.com/watch?v=RB1Lh7rKlfg",
        tech: "React | Node.js | Express.js | MongoDB | Multer | bCrypt | Context API | Railway",
        info: "Blog application that allows users to register and login to a profile, filter through categories, upload pictures with multer package for blog posts and user profiles, and read, create, update, and delete blog posts and user profile. Data is stored inside of a Mongo database on Railway and features bcrypt security to create hash maps for passwords. The site uses React Context API and incorporates local storage to manage user information for the purpose of updating/deleting user information and providing permissions to create, edit, and delete posts."
    },
    {
        key: 2,
        image: require("../../assets/img/beatmachine.webp"),
        title: "Beat Maker",
        alt: "Beat Maker",
        sLink: "https://www.orionpalmer.com/projects/BeatmakerProject/index.html",
        gLink: "https://github.com/Composer0/Music-Maker",
        yLink: "https://www.youtube.com/watch?v=zG6wQomYu9E",
        tech: "HTML | CSS | JavaScript",
        info: "Uses selector menus and JavaScript to choose specific sounds to be played on each of the four tracks. Allows switching between two applications to play and customize music."
    },
]

export default ProjectObjects;