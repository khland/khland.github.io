
import Head from 'next/head'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Typed from 'typed.js'
import { FaJs, FaReact, FaGithubSquare, FaGitSquare,
  FaLinkedin, FaTelegramPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaArrowDown, FaArrowUp, FaHtml5, FaCss3, FaVuejs } from 'react-icons/fa'
import { SiPostgresql, SiHeroku, SiDigitalocean, SiAmazonaws } from 'react-icons/si'
import Backend from './Backend'
import Skills from './Skills'
import Contact from './Contact'
import About from './About'

const Home = () => {

  const [hideContact, setHideContact] = useState(false)

  const options = {
    strings: ['Front End', 'Back End', 'DevsOp'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    cursorChar: '|'
  };

  const navs = [
    {
      page: 'homePage',
      title: 'Home',
      delay: 3500

    },
    {
      page: 'skillPage',
      title: 'Skills',
      delay: 3000
    },
    {
      page: 'aboutPage',
      title: 'About',
      delay: 2500
    },
    {
      page: 'backendPage',
      title: 'BackEnd',
      delay: 2000
    },
    {
      page: 'frontendPage',
      title: 'FrontEnd',
      delay: 1500
    },
    {
      page: 'devsopPage',
      title: 'DevsOp',
      delay: 1000
    },
    {
      page: 'contactPage',
      title: 'Contact',
      delay: 500
    }
  ]

  const skills = [
    {
      title: 'Back End',
      langs: [
        {
          title: 'Ruby On Rails',
          image: '/rails.png',
          badges: ['Devise','Serilizer', 'Errbit', 'Hot-wire', 'Action Text']
        },
        {
          title: 'TDD & BDD',
          image: '/rspec.png',
          badges: ['Rubocop', 'Capybara', 'Shoulda Matcher', 'Factory Bot']
        },
        {
          title: 'Elixir & Phoenix',
          image: '/phoenix.png',
          badges: ['LiveView', 'Ecto', 'Plug', 'Pub Sub', 'ExUnit']
        },
        {
          title: 'Restful API',
          image: '/restfulapi.png',
          badges: ['JWT', 'JSON API', 'Swagger', 'Postman']
        },
        {
          title: 'PostgreSQL',
          icon: <SiPostgresql/>,
          badges: ['psql', 'pg_dump', 'pg_restore']
        }

      ]
    },
    {
      title: 'Front End',
      langs: [
        {
          title: 'CSS3',
          icon: <FaCss3/>,
          badges: ['Tailwind', 'Bootstrap', 'Material', 'grid', 'flex']
        },
        {
          title: 'HTML5',
          icon: <FaHtml5/>,
          badges: ['Local Storage', 'Audio', 'Video', 'Semantic']
        },
        {
          title: 'Javascript',
          icon: <FaJs/>,
          badges: ['ES6', 'Jest','Axios', 'Lodash', 'Moment']
        },
        {
          title: 'ReactJS & NextJS',
          icon: <FaReact />,
          badges: ['Redux', 'Context', 'useEffect', 'useState', 'next/router', 'next/image']
        }
        , {
          title: 'VueJS & NuxtJS',
          icon: <FaVuejs />,
          badges: ['Vuex', '$emit', 'Modular','NuxtLink', 'NuxtPages']
        }
      ]
    },
    {
      title: 'DevsOp',
      langs: [
        {
          title: 'Heroku',
          icon: <SiHeroku/>,
          badges: ['Dyno', 'heroku config:set', 'herouku run', 'heroku logs']
        },
        {
          title: 'Git',
          icon: <FaGitSquare/>,
          badges: ['reset head', 'merge', 'rebase', 'add', 'commit', 'push']
        },
        {
          title: 'Digital Ocean',
          icon: <SiDigitalocean />,
          badges: ['Spaces', 'Apps', 'Droplets', 'Databases']
        },
        {
          title: 'AWS',
          icon: <SiAmazonaws/>,
          badges: ['S3', 'RDS', 'EC2']
        },
        {
          title: 'Capistrano',
          image: '/capistrano.png',
          badges: ['puma', 'passenger', 'cap deploy', 'nginx', 'crontab']
        }
      ]
    }
  ]

  const [up, setUp] = useState(false)

  const anchors = ["homePage", "skillPage", "aboutPage", "backendPage", "frontendPage", "devsopPage", "contactPage"];

  return (
    <>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://itkoh.com" />
        <meta property="og:title" content="Samda Muy - Full Stack Web Developer" />
        <meta property="og:image" content="/skills_set2.png" />
        <meta property="og:description" content="I am a toiler software craftman with more than 4 years in this career as a Full-stack Web Developer." />

        <title>Samda Muy - Full Stack Web Developer</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      {!hideContact && <div className="flex group ">
        <div className={`transition-all transform duration-1000 absolute bg-teal-900 z-10 rounded-md`}>

        </div>
        <div data-aos="fade-right" data-aos-duration="2000" className="group-hover:shadow-2xl flex justify-center items-center absolute top-10 -right-0 px-4 py-2 mr-4 bg-teal-900 z-10 rounded-md">
          <span style={{ letterSpacing: '10px' }} className="cursor-pointer text-lg font-medium tracking-widest text-gray-100">CONTACT</span>
        </div>
      </div>}
      <ul id="navigation" className="space-y-2 pr-4 flex flex-col justify-end items-end absolute z-50 bottom-2/4 -right-0 ">
        {
          navs.map((nav, idx) => {
            return <li key={idx} data-aos='fade-right' data-aos-duration={nav.delay} data-menuanchor={nav.page} className="active cursor-pointer group flex flex-col items-end justify-center">
              <a href={`#${nav.page}`} className="group-hover:opacity-100 opacity-0 text-xs hover:text-gray-200 hover:no-underline text-teal-500 w-20 px-4">{nav.title}</a>
              <div className="group-hover:w-full h-1 bg-teal-800 w-6 z-20 transform transition-all duration-150"></div>
            </li>
          })
        }
      </ul>
      <div className="absolute flex flex-col right-5 bottom-5 z-50 justify-center items-center">
        <div className="flex flex-col animate-bounce w-4 h-4 text-teal-800 text-lg ">
          {
            up ? <FaArrowUp /> : <FaArrowDown />
          }
        </div>
        <p style={{ letterSpacing: '4px' }} className="text-xs uppercase">SCROLL</p>
      </div>
      <ReactFullpage
        afterRender={() => { new Typed('.skill_set', options); AOS.init({ duration: 1000, mirror: true })}}
	        menu={'#navigation'}
          anchors={anchors}
          navigationTooltips={anchors}
        afterLoad={(origin, destiny, direction) => { if (destiny.anchor == 'contactPage') { setUp(true); setHideContact(true) } else { setUp(false); setHideContact(false) } }}
          licenseKey={'YOUR_KEY_HERE'}
          scrollingSpeed={1000}

          render={({ state, fullpageApi }) => {
            return (
              <>
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div className="w-screen h-screen flex z-10"
                    style={{background: "url(/skills_set2.png) no-repeat center center", backgroundSize: 'cover'}}>
                      <div className="bg-gray-400 bg-opacity-30 w-full h-full inset-0 absolute">

                      <div className="flex flex-col w-3/4 h-full justify-between pt-20">
                        <div className="flex flex-col px-20 space-y-5 ">
                            <h1 data-aos="fade-down" data-aos-duration="1000" className="text-left text-6xl font-semibold text-teal-600">Hello, I'm Samda</h1>
                            <h3 data-aos="fade-down" data-aos-duration="500" className="text-left text-6xl font-semibold text-teal-600">A full-stack developer</h3>
                            <h3 data-aos="fade-down" data-aos-duration="500" className="text-left text-6xl font-semibold text-teal-600">who can do</h3>
                            <h3 data-aos="fade-down" data-aos-duration="500" className="text-left text-6xl font-semibold text-teal-600"><span className="skill_set underline text-white"></span></h3>
                        </div>
                        <div className="mb-20 flex pb-20 px-20 h-20 w-full-page z-20">
                            <div className="cursor-pointer uppercase justify-start flex flex-col justify-start">
                              <div data-aos="fade-down" data-aos-duration="2000" style={{ letterSpacing: '30px' }} className="hover:text-gray-100 text-xl text-gray-200">Connect</div>
                            <div className="space-x-20 flex text-3xl text-white p-2 bg-opacity-60 px-20 mb-20 rounded-md">
                                <span data-aos="fade-down" data-aos-duration="500" className="hover:text-teal-600 hover:shadow-2xl hover:scale-150 transform transition"><FaGithubSquare /></span>
                                <span data-aos="fade-down" data-aos-duration="1000" className="hover:text-teal-600 hover:shadow-2xl hover:scale-150 transform transition"><FaLinkedin /></span>
                                <span data-aos="fade-down" data-aos-duration="1500" className="hover:text-teal-600 hover:shadow-2xl hover:scale-150 transform transition"><FaTelegramPlane /></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <Skills skills={skills}/>
                </div>
                <div className="section">
                  <About />
                </div>
                <div className="section">
                  <Backend/>
                </div>
                <div className="section">
                  <div className="flex items-center justify-center w-full h-full">
                    <h1>Front End</h1>
                  </div>
                </div>
                <div className="section">
                  <div className="flex items-center justify-center w-full h-full">
                    <h1>Devs Op</h1>
                  </div>
                </div>
                <div className="section">
                  <Contact />
                </div>
              </ReactFullpage.Wrapper>
              </>
            );
          }}
        />
    </>
  );
}

export default Home;