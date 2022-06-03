import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Bath & Body Works clone',
        projectDesc: 'It is a clone of an American retail store chain which sells soaps, lotions, fragrances, and candles.',
        tags: ['HTML', 'CSS', 'Javascript','react',"redux","Thunk","Routing"],
        code: 'https://github.com/hlv-kakashi/bathandbodyworks-clone',
        demo: 'https://singular-kleicha-5eef4a.netlify.app/',
        image: 'https://media3.giphy.com/media/fvqVax5PXIPm4i45Zw/giphy.gif?cid=ecf05e47jiv5zlorewb4dwihsu3iw4ojx2l1ip7g9rqpshvx&rid=giphy.gif&ct=g'
    },
    {
        id: 2,
        projectName: 'Health-Kart Clone',
        projectDesc: 'An online Portal for Dietary Supplements and health devices',
        tags: ['HTML', 'CSS', 'Javascript'],
        code: 'https://github.com/hlv-kakashi/HEALTHKART',
        demo: 'https://health-kart.netlify.app/',
        image: "https://media1.giphy.com/media/K61ByIKDUSs9P2KdGY/giphy.gif?cid=ecf05e47ca6nhcye64rw77e4fxl005liyyjqj4kvxcq6ermf&rid=giphy.gif&ct=g"
    },
    {
        id: 3,
        projectName: 'Big-Basket Clone',
        projectDesc: 'An online Portal for buying grocery in India.',
        tags: ['HTML', 'CSS', 'Javascript'],
        code: 'https://github.com/Snehil133/BigBasketProject    ',
        demo: 'https://roaring-biscuit-218e07.netlify.app/"',
        image: 'https://media0.giphy.com/media/xTiTnizXXPe0x9uJjO/giphy.gif?cid=ecf05e47088c4fvdy6jkckz5g5yqe8xgnsht39zlcl21j2k1&rid=giphy.gif&ct=g'
    },
    {
        id: 4,
        projectName: 'recipe app',
        projectDesc: 'An online app for checking Recipe of any food',
        tags: ['Html','Css','Js',"api"],
        demo: 'https://competent-meitner-8c6b23.netlify.app/',
        image: 'data:image/jpeg;base64,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'
    },
    {
        id: 5,
        projectName: 'Weather',
        projectDesc: 'A Simple Weather application where you can search for city to know there whather',
        tags: ['HTML','CSS','JS',"api"],
        demo: 'https://xenodochial-lovelace-5f6cd8.netlify.app/',
        image: 'data:image/jpeg;base64,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'
    },
    {
        id: 6,
        projectName: 'YouTube clone',
        projectDesc: 'You can see the video same as youtube',
        tags: ['Html','Css','Js'],
        code: '',
        demo: 'https://happy-banach-da2535.netlify.app/',
        image: 'https://c.tenor.com/tYIUpIiF-LIAAAAC/youtube-logo.gif'
    },
    {
        id: 7,
        projectName: "Movie app",
        projectDesc: "An online app for checking movie details by searching names of the movie ",
        tags: ["HTML","CSS","javascript"],
        code: "",
        demo: "https://sharp-lichterman-b6d6bf.netlify.app/",
        image: " https://media1.giphy.com/media/VxbP9tLeKzazm/giphy.gif?cid=ecf05e47nsbx3qwp09whntxibqk55d9vz2b6z6klhxagm1lu&rid=giphy.gif&ct=g"
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/