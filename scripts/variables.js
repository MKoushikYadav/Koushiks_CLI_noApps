

// Object Stores Command Outputs
let commandOutputs = {
    about: "A Student that spends a lot of his time on his computer.<br> Tech and Anime Enthusiast.",
    projects:"Persona Board: A web application that performs psychometric analysis of a person based on a quiz and social media posts.<br><i>Flask | CloudTable </i><br><br>\
    Project Charity: A Website made to help people find a charity of their preferred criteria in India. <br><i>Mysql | HTML CSS JS | Flask</i><br><br>\
    ResumeProbester: A Streamlit-based web application that analyses uploaded resumes in the format of pdf and extracts information. <br><i>Streamlit | Python | NLP</i><br><br>\
    Feel free to check out my <a href='www.github.com/MKoushikYadav' target='_blank'>Github</a> for more projects/mini-projects.br>",
    experience: "Areteans Technologies(Oct 2023- Nov 2023) - Developer Intern<br>\
    REJOLT EDTECH PVT LTD (May 2022-May 2023) - Student Fellow<br>\
    AIESEC in Hyderabad (Aug 2022 - July 2023) - Marketing Team Leader",
    education: "Vardhaman College of Engineering Hyderabad 2020-24<br>\
    &emsp; &emsp;&emsp; -B.Tech, Computer Science and Engineering<br><br>\
    The Hyderabad Public School, Begumpet Hyderabad 2018-20<br>\
    &emsp; &emsp;&emsp; -PCMB in ISC Board",
    skills: "Python | Deep Learning | AWS | SQL <br>ReactJS | HTML5 | CSS | JS <br> DevOPs | FLASK",
    contact: "<a id='email' href='mailto:koushik.15022@gmail.com' target='_blank'>E-mail</a> | <a id='linkedin' href='https://www.linkedin.com/in/koushikyadav/' target='_blank'>LinkedIn</a>",
    certifications:"<a href = 'https://www.kaggle.com/learn/certification/sonicsplasher/intermediate-machine-learning' target='_blank'>Kaggle Intermediate Machine Learning</a><br>\
    <a href = 'https://www.kaggle.com/learn/certification/sonicsplasher/intro-to-machine-learning' target='_blank'>Kaggle Introduction to Machine Learning</a><br>\
    <a href = 'https://verify.mygreatlearning.com/verify/ADVUQZAG' target='_blank'>GreatLearning Introduction to DevOps</a><br>\
    <a href = 'https://drive.google.com/file/d/10EgJ8DX9jLkFrJ9oF3aaleNVuJX41obu/view?usp=sharing' target='_blank'>Wipro Talentnext Java Full Stack</a><br>",
};

// Array Stores Random Facts
let facts = [
    "The average person spends 6 months of their lifetime waiting on a red light to turn green.",
    "The average person walks the equivalent of three times around the world in a lifetime.",
    "The average person spends 2 weeks of their lifetime kissing.",
    "The average person spends 4 years of their life eating.",
    "The average person spends 1 year searching through desk clutter for misplaced objects.",
    "The average person spends 2 weeks waiting for a traffic light to change.",
    "The average person spends 5 years waiting in lines.",
    "The average person spends 1 year deciding what to wear.",
];


//Help Dialog Text
const helpDialog ="\
<b>Welcome to Koushik's CLI</b><br>\
<b>clear</b>- &nbspclear the terminal [Same as 'cls','clearscreen']<br>\
<b>about</b> -&nbsp&nbsp Display details about myself<br>\
<b>projects</b> -&nbsp&nbspDisplay list of projects<br>\
<b>skills</b> -&nbsp&nbspDisplay list of skills<br>\
<b>education</b> -&nbsp&nbspDisplay Education details<br>\
<b>experience</b> -&nbsp&nbspDisplay Experience details<br>\
<b>contact</b> -&nbsp&nbspDisplay Contact details<br>\
For more help on a command, type 'command name' help. (Future Release)<br>\
";

// Set Entered Commands into an array and fetch them for key up/down functionality.
let previousCommandLineEvent = "";

// Command History
let userCommandHistory = [];

// Consecutive Similar Event Counter
let consecutiveSimilarEventCounter = -1;