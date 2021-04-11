import Image  from 'next/image'
import { FaExclamation } from 'react-icons/fa'

const Skills = ({skills = []}) => {
  return (
    <div className="flex flex-col w-full h-full bg-gray-100">
      <div className="w-full flex flex-col justify-center items-start px-20 py-4">
        <h2 className="text-5xl text-left text-teal-800">Professional skills</h2>
        <p className="text-left pr-60 text-teal-700">Many years as Full-Stack Web Developmer, I always keep curious and never stop try something new.</p>
        <p className="text-left pr-60 text-teal-700">Down here are the list of programming and technologies that I'm professional on and familiar with.</p>
        <i className="text-red-500 mt-2 flex items-center"><FaExclamation/> Please select on each section for sample projects.</i>
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
                          <Image style={{ objectFit: "contain", height: 20, maxHeight: 40 }} src={lang.image} layout="fill" objectFit="contain" />
                        </span>
                      }
                      {
                        <span className="mb-1 px-2 text-teal-800 text-3xl">{lang.icon && lang.icon}</span>
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
  )
}

export default Skills;