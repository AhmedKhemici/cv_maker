import Identity from './Components/Identity/Identity';
import Extras from './Components/Extras/Extras';
import Experiences from './Components/Experiences/Experiences';
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
          "icon":"phone"
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
      ]
    }
  };
  return (
    <div className='App container'>
      <div className='side__bar'>
        <Identity identity={cv_data.identity} />
        <Extras extras={cv_data.extras} />
      </div>
      <Experiences /> 
    </div>
  );
}

export default App;
