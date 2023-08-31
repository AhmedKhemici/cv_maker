import Identity from './Components/Identity/Identity';
import Extras from './Components/Extras/Extras';
import Profile from './Components/Profile/Profile';
import './App.css';

function App() {
  const cv_data = {
    "identity":{
      "full_name":"Ahmed Khemici",
      "job_title":"Backend Developer",
      "social_media":[
        {
          "media":"gmail",
          "icon":"mail"
        },
        {
          "media":"phone",
          "icon":"phone-call"
        },
        {
          "media":"location",
          "icon":"pin"
        },
        {
          "media":"website",
          "icon":"web"
        },
        {
          "media":"linkedin",
          "icon":"linkedin"
        },
        {
          "media":"github",
          "icon":"github"
        },
      ]
    },
    "extras":{
      "educations":[
        {
          "degree":"Master",
          "domain":"Computer Science",
          "date":"September 2018- june 2019",
          "location":"Algeria, Blida"
        }
      ],
      "skills":[
        {
          "skill":"Javascript",
          "icon":"java-script"
        },
        {
          "skill":"HTML",
          "icon":"html"
        },
        {
          "skill":"CSS",
          "icon":"css-3"
        },
        {
          "skill":"React.js",
          "icon":"react-js"
        }, 
        {
          "skill":"Node.js",
          "icon":"node-js"
        },                 
      ],
    },
    "profile":{
      "description":"Experienced mid-level Backend Developer and DevOps enthusiast with three years of dedicated service at a dynamic startup. Proficient in Python and adaptable to various technologies and languages, including Node.js, React.js, AWS, Azure, and Ansible. Adept at driving innovation through successful DevOps practices, including implementing rolling updates that significantly boosted productivity. Proven track record of contributing to the development process and stepping in for Quality Assurance responsibilities when required. A collaborative team player known for problem-solving and a willingness to learn.",
      "experiences":[
        {
          "company_name":" Yobi .",
          "location":" San Jose, California .",
          "job_title":" Backend Engineer .",
          "date":" August 2020 ",
          "worked_on":[
            "Devops",
            "Backend",
            "QA"
          ]
        }
      ]
    },
  };
  return (
    <div className='App container'>
      <div className='side__bar'>
        <Identity identity={cv_data.identity} />
        <Extras extras={cv_data.extras} />
      </div>
      <Profile profile={cv_data.profile}/> 
    </div>
  );
}

export default App;
