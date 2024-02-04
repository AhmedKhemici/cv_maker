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
    },
    "extras":{
      "socialMedia":[
        {
          "media":"ahmed.khemici1@gmail.com",
          "url":"mailto:ahmed.khemici1@gmail.com",
          "icon":"mail"
        },
        {
          "media":"+213665824855",
          "icon":"phone-call"
        },
        {
          "media":"+213665824855",
          "url":"https://wa.me/+213665824855",
          "icon":"whatsapp"
        },
        {
          "media":"Algeria, Blida, Mouzaia",
          "url":"https://maps.app.goo.gl/hoZUaA8B31x6yqeN7",
          "icon":"pin"
        },
        {
          "media":"linkedin",
          "url":"https://linkedin.com/in/ahmed-khemici-4523aa156",
          "icon":"linkedin"
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
            "language":"Arabe",
            "mastering":"Langue maternelle"
        },
        {
            "language":"Français",
            "mastering":"Intermédiaire"
        },
        {
            "language":"Anglais",
            "mastering":"Courant"
        }
      ],
    },
      "profile":{
        "description":"Développeur Backend expérimenté de niveau intermédiaire et passionné de DevOps avec trois années de service dédié à une start-up dynamique. Maîtrise du langage Python et capacité à s'adapter à diverses technologies et langages, dont Node.js, React.js, AWS, Azure et Ansible. Habile à promouvoir l'innovation grâce à des pratiques DevOps réussies, y compris la mise en œuvre de mises à jour progressives qui ont considérablement amélioré la productivité. Un parcours éprouvé de contribution au processus de développement et d'intervention dans les responsabilités d'assurance qualité lorsque nécessaire. Joueur d'équipe collaboratif reconnu pour la résolution de problèmes et une volonté d'apprendre.",
        "experiences":[
            {
                "company_name":"Oppo .",
                "location":"Algérie, Chrega .",
                "job_title":"Testeur QA .",
                "date":"octobre 2019 - août 2020",
                "worked_on":[
                    "Tests manuels sur les téléphones Oppo récemment fabriqués",
                    "Création d'une application VBS sur Excel pour aider à renforcer les compétences de reporting de l'équipe",
                    "Travail sur QA automatique effectuant des appels d'API backend pour tester la fonctionnalité des routes, utilisant également Selenium et Appium pour simuler les saisies utilisateur sur le Web et les applications Android/iOS"
                ]
            },
            {
                "company_name":"Yobi .",
                "location":"San Jose, Californie .",
                "job_title":"Ingénieur Backend .",
                "date":"août 2020",
                "worked_on":[
                    "Travaillé avec une start-up en pleine croissance et une grande équipe aux cultures différentes",
                    "Travail sur le Backend avec Python Flask, démarré le projet à partir de zéro, implémenté des appels d'API vers des services tiers, tels que Facebook, Twitter, Twilio, et bien d'autres",
                    "Travail sur DevOps en utilisant Docker et GitLab CI/CD avec Ansible, hébergement du projet sur AWS et Azure",
                    "Travail sur QA automatique effectuant des appels d'API backend pour tester la fonctionnalité des routes, utilisant également Selenium et Appium pour simuler les saisies utilisateur sur le Web et les applications Android/iOS"
                ]
            }
        ]
      }
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
