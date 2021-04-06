
import Head from 'next/head'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Typed from 'typed.js'
import { FaJs, FaReact, FaGithubSquare, FaGitSquare,
  FaLinkedin, FaTelegramPlane,
  FaArrowDown, FaArrowUp, FaHtml5, FaCss3, FaVuejs } from 'react-icons/fa'
import { SiPostgresql, SiHeroku, SiDigitalocean, SiAmazonaws } from 'react-icons/si'
import Image from 'next/Image'

const Home = () => {

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
      page: 'firstPage',
      title: 'Home',
      delay: 3500

    },
    {
      page: 'secondPage',
      title: 'Skills',
      delay: 3000
    },
    {
      page: 'thirdPage',
      title: 'BackEnd',
      delay: 2500
    },
    {
      page: 'fourthPage',
      title: 'DevsOp',
      delay: 2000
    },
    {
      page: 'fifthPage',
      title: 'FrontEnd',
      delay: 1500
    },
    {
      page: 'sixthPage',
      title: 'About',
      delay: 1000
    },
    {
      page: 'lastPage',
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
          badges: ['full responsive', 'media query', 'flex', 'grid']
        },
        {
          title: 'HTML5',
          icon: <FaHtml5/>,
          badges: ['Local Storage', 'Audio', 'Video', 'Semantic']
        },
        {
          title: 'Javascript',
          icon: <FaJs/>,
          badges: ['Arrow Function', 'Spread Operator', 'Object Assign']
        },
        {
          title: 'ReactJS & NextJS',
          icon: <FaReact />,
          badges: ['useEffect', 'useState', 'next/router', 'next/image', 'Axios']
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

  const anchors = ["firstPage", "secondPage", "thirdPage", "fourthPage", "lastPage"];

  return (
    <>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://itkoh.com" />
        <meta property="og:title" content="Samda Muy - Full Stack Web Developer" />
        <meta property="og:image" content="/skills_set2.png" />
        <meta property="og:description" content="I am a toiler software craftman with more than 4 years in this career as a Full-stack Web Developer." />

        <title>Samda Muy - Full Stack Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
      </Head>
      <div className="flex group ">
        <div className={`transition-all transform duration-1000 absolute bg-teal-900 z-10 rounded-md`}>

        </div>
        <div data-aos="fade-right" data-aos-duration="2000" className="group-hover:shadow-2xl flex justify-center items-center absolute top-10 -right-0 px-4 py-2 mr-4 bg-teal-900 z-10 rounded-md">
          <span style={{ letterSpacing: '10px' }} className="cursor-pointer text-lg font-medium tracking-widest text-gray-100">CONTACT</span>
        </div>
      </div>
      <ul id="navigation" className="space-y-2 pr-4 flex flex-col justify-end items-end absolute z-50 bottom-2/4 -right-0 ">
        {
          navs.map((nav, idx) => {
            return <li key={idx} data-aos='fade-right' data-aos-duration={nav.delay} data-menuanchor={nav.page} className="active cursor-pointer group flex flex-col items-end justify-center">
              <a href={`#${nav.page}`} className="group-hover:opacity-100 opacity-0 text-xs hover:text-gray-200 hover:no-underline text-teal-800 w-20 px-4">{nav.title}</a>
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
          afterLoad={(origin, destiny, direction) => { destiny.anchor == 'lastPage' ? setUp(true) : setUp(false) }}
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
                  <div className="flex flex-col w-full h-full bg-gray-200">
                    <div className="w-full flex flex-col justify-center items-start px-20 py-4">
                      <h2 className="text-5xl text-left text-teal-800">Professional skills</h2>
                        <p className="text-left pr-60 text-teal-700">Manyyears as Full-Stack Web Developmer, I always keep curious and never stop try something new.</p>
                        <p className="text-left pr-60 text-teal-700">Down here are the list of programming and technologies that I'm professional on and familiar with.</p>
                        <i className="text-teal-500 mt-2">Please sectino below for more details</i>
                    </div>
                    <div className="grid grid-cols-3 flex w-full justify-start item-start px-20 gap-x-5">
                        {
                          skills.map((sk, idx) => {
                            return <div key={idx} className="flex flex-col justify-start items-start">
                              <h1 className="mb-2 text-teal-800 text-2xl">{sk.title}</h1>
                              <div className={`flex flex-col w-full`}>
                                {
                                  sk.langs.map((lang, idx) => {
                                    return <div key={idx} className={`shadow-lg relative cursor-pointer border-b-2 border-teal-500 ${lang.badges[0] ? 'mb-10' : 'mb-4'} flex items-end justify-between w-full h-10 bg-white`}>
                                      {
                                        lang.image && <span className="flex justify-start items-start h-8 w-1/4 relative">
                                          <Image style={{ objectFit: "contain", height: 20, maxHeight: 40 }} src={lang.image} layout="fill" objectFit="contain"/>
                                        </span>
                                      }
                                      {
                                        <span className="mb-1 px-2 text-teal-500 text-3xl">{lang.icon && lang.icon}</span>
                                      }
                                      <span className="px-2 text-teal-500 text-xl">{lang.title}</span>
                                      <div className="grid grid-flow-col auto-cols-max w-full absolute -bottom-6 z-20 gap-x-1">
                                        {
                                          lang.badges && lang.badges.map((badge, idx) => {
                                            return <span key={idx} className="shadow-lg text-xs px-2 bg-teal-500 text-gray-100 rounded-full">{badge}</span>
                                          })
                                        }
                                      </div>
                                    </div>
                                  })
                                }
                              </div>
                            </div>
                          })
                        }
                    </div>
                  </div>
                </div>
                <div className="section">
                  <div className="w-full h-screen flex flex-col py-20 px-20">
                    <div className="flex w-full justify-between">
                      <div className="w-2/5 flex flex-col justify-start items-center h-screen">
                        <h1 className="text-center text-5xl">About me</h1>
                        <span>Picture</span>
                      </div>

                      <div className="flex flex-col w-3/5 justify-start items-start h-screen px-20 space-y-2">
                        <h2 className="text-2xl">G'Day Mate</h2>
                        <p className="text-md leading-loose">Hi this is Samda, I am a toiler software craft-man with more than 4 years in this career as a Full-stack Web Developer. Mostly I used to work a lot with Ruby on Rails it is kind of really handy for web develop I love it a lot.</p>
                        <p className="text-md leading-loose">But as a full-stack I need be flexible and to be able work on different environment as it required like switching tasks from Analyse System to Database Design to building Back End, Web API etc and to Make Front End Design look nice and easy for the clients feel comfortable with the system.</p>
                        <p className="text-md leading-loose">Over and above what normally system required in deployment and maintenance setup for the software it self so it's also a part that I need to handle as well if it is required.</p>
                        <p className="text-md leading-loose">So This is why I'm always exited and curious and eager to learn new things. And I'm really confortable with some software development methodology such as agile scrum methodology and I also like the development style of pair programming in agile as well.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section">
                  <div className="flex items-center justify-center w-full h-full">
                    <h1>DevsOp</h1>
                  </div>
                </div>
                <div className="section">
                  <div className="flex items-center justify-center w-full h-full">
                    <h1>Front End</h1>
                  </div>
                </div>
                <div className="section">
                  <div className="flex items-center justify-center w-full h-full">
                    <h1>Back End</h1>
                  </div>
                </div>
                <div className="section">
                  <div className="flex items-center justify-center w-full h-full">
                    <h1>Contact</h1>
                  </div>
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