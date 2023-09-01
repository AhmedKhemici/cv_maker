import Identity from './Components/Identity/Identity';
import Extras from './Components/Extras/Extras';
import Profile from './Components/Profile/Profile';
import './App.css';

function App() {
  const cv_data = {
    "identity":{
      "profile_picture":"ahmedKhemici",
      "full_name":"Ahmed Khemici",
      "job_title":"Backend Developer",
      "social_media":[
        {
          "media":"ahmed.khemici1@gmail.com",
          "icon":"mail"
        },
        {
          "media":"+213665824855",
          "icon":"phone-call"
        },
        {
          "media":"+213665824855",
          "icon":"whatsapp"
        },
        {
          "media":"Algeria, Blida, Mouzaia",
          "url":"https://goo.gl/maps/Zsj44XJLqXNgD8PYA",
          "icon":"pin"
        },
        {
          "media":"linkedin",
          "url":"https://linkedin.com/in/ahmed-khemici-4523aa156",
          "icon":"linkedin"
        }
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
          "skill":"Python",
          "icon":"python"
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
      "languages":[ 
        {
          "language":"Arab",
          "mastering":"Native Speaker"
        },
        {
          "language":"France",
          "mastering":"Medium",
        },
        {
          "language":"English",
          "mastering":"Fluent"
        }
      ],
    },
    "profile":{
      "description":"Experienced mid-level Backend Developer and DevOps enthusiast with three years of dedicated service at a dynamic startup. Proficient in Python and adaptable to various technologies and languages, including Node.js, React.js, AWS, Azure, and Ansible. Adept at driving innovation through successful DevOps practices, including implementing rolling updates that significantly boosted productivity. Proven track record of contributing to the development process and stepping in for Quality Assurance responsibilities when required. A collaborative team player known for problem-solving and a willingness to learn.",
      "experiences":[
        {
          "company_name":" Free Lance .",
          "location":" Algeria .",
          "job_title":" Software Engineer .",
          "date":" july 2019 - October 2019 ",
          "worked_on":[
            "Created a Management application for restaurants using java swing",
            "Created a small advertising website for a client using pure php and html css",
            "Worked on a project using c++ that involved drawing 2D motifs using a laser"
          ]
        },
        {
          "company_name":" Oppo .",
          "location":" Algeria, Chrega .",
          "job_title":" QA Tester .",
          "date":" October 2019 - August 2020",
          "worked_on":[
            "Manual Testing On Recently Manufactured Oppo Phones",
            "Created a VBS app on excel to help boost the team's reporting skills",
            "Worked on Automatic QA doing backend api calls to test the routes functionality ,and also used selenium and appium to simulate user input on web and android/ios app"
          ]
        },
        {
          "company_name":" Yobi .",
          "location":" San Jose, California .",
          "job_title":" Backend Engineer .",
          "date":" August 2020",
          "worked_on":[
            "Worked With Fast Moving Startup and a huge team with different cultures",
            "Worked on Backend with python flask , started the project from scratch, implemented api call to third party services, facebook , twitter, twilio and the list goes on",
            "Worked on Devops using Docker and gitlab ci-cd with ansible , hosting the project on aws and azure ",
            "Worked on Automatic QA doing backend api calls to test the routes functionality ,and also used selenium and appium to simulate user input on web and android/ios app"
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
