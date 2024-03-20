import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Navoday",
    lastName: "Kaushal",
    initials: "NyK", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack WebDeveloper",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by Tea'
        },
        {
            emoji: '🌍',
            text: 'based in Jaunpur, Uttar Pradesh, India'
        },
        {
            emoji: "👨‍🎓",
            text: "Pursuing B.Tech in ECE"
        },
        {
            emoji: "📧",
            text: "navodayskaushal01@gmail.com"
        }
        
        
    ],
    socials: [
        {
            link: "https://facebook.com//navodaykaushal01",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com//navodaykaushal",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Yash262003",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/navoday-yash-kaushal-06a968291/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/navodayskaushal",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Navoday Yash Kaushal.  I am pursuing my B.Tech Degree in ECE. I enjoy long walks on the road, and I believe one day there will be zombie apocalypse. ",
    skills:
        {
            proficientWith: [ 'Html', 'Css', 'Figma', 'Bootstrap', 'Javascript', 'React', 'C++', 'Python', 'SQL', 'Data Structures & Algorithms', 'OOPs', 'DBMS'],
            exposedTo: ['Git', 'Github', 'MySQL', 'Microsoft Office']
        } 
        
    ,
    hobbies: [
        {
            label: 'Listening Songs',
            emoji: '🎶'
        },
        {
            label: 'Cricket',
            emoji: '🏏'
        },
        {
            label: 'Movies & Webseries',
            emoji: '🎥'
        },
        {
            label: 'Travelling',
            emoji: '🧳'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Azmovies",
            live: "https://yash262003.github.io/azmovies/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/Yash262003/azmovies", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Netflix-Clone",
            live: "https://yash262003.github.io/Netflix-Clone/",
            source: "https://github.com/Yash262003/Netflix-Clone",
            image: mock2
        },
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        
    ]
}