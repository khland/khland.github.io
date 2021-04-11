import {
  FaGithubSquare, FaLinkedin, FaTelegramPlane,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTimes
  } from 'react-icons/fa'

import emailjs from 'emailjs-com'
import apiKeys from '../pages/api/emailjs.js'
import { useState, useEffect } from 'react'

const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const templateParams = {
      from_name: user.email,
      to_name: user.name,
      subject: user.subject,
      message: user.message
    };
    emailjs.send('service_kuagb1v', apiKeys.TEMPLATE_ID, templateParams, apiKeys.USER_ID)
      .then(result => {
      },
      error => {
        alert('An error occured, Plese try again', error.text)
      })
    setToast(true)
    setUser({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <div className="flex items-start justify-start w-full h-full py-20 pl-20 pr-40 space-x-10">
        <div className="flex flex-col w-3/5 space-y-10">
          <h1 className="text-teal-700 text-3xl">Get in touch</h1>
          <form>
          <div className="flex flex-col w-full space-y-10">
            <div className="flex w-full space-x-5">
              <div className="w-1/2">
                <input onChange={(e) => setUser({ ...user, name: e.target.value })}
                  value={user.name} name="user_name" placeholder={'Name...'}
                  className="default-text" type="text" />
              </div>
              <div className="w-1/2">
                <input onChange={(e) => setUser({ ...user, email: e.target.value })}
                  value={user.email} name="user_email" placeholder={'Email...'}
                  className="default-text" type="text" />
              </div>
            </div>
            <div className="flex w-full space-x-5">
              <div className="w-full">
                <input
                  onChange={(e) => setUser({ ...user, subject: e.target.value })}
                  value={user.subject} name="user_subject" placeholder={'Subject...'}
                  className="default-text" type="text" />
              </div>
            </div>
            <div className="flex w-full space-x-5">
              <div className="w-full">
                <textarea
                  onChange={(e) => setUser({ ...user, message: e.target.value })}
                  value={user.message} name="user_message"
                  rows={5} placeholder={'Message...'} className="default-text">
                </textarea>
              </div>
            </div>
            <div className="flex justify-end w-full space-x-5">
              <div className="flex w-full justify-end">
                  <button type="submit" onClick={handleSubmit} className="bg-teal-800 px-5 py-2 text-gray-100 rounded-sm">Send Message</button>
              </div>
            </div>
          </div>
          </form>
        </div>
        <div className="flex flex-col w-2/5 bg-teal-700 h-full pr-10 pb-10 rounded-md py-10">
          <h1 className="text-center mb-10 text-gray-100">Contact info</h1>
          <div className="flex flex-col px-10 space-y-10">
            <div className="flex justify-start items-center text-xl space-x-3 text-gray-100">
              <span><FaPhoneAlt /></span>
              <a className="hover:no-underline" href="tel:+85516777631">
                <span className="cursor-pointer focus:text-teal-300 hover:text-teal-300 transform transition text-white">
                  +85516777631
                                </span>
              </a>
            </div>
            <div className="flex justify-start items-center text-xl space-x-3 text-gray-100">
              <span><FaEnvelope /></span>
              <a className="hover:no-underline" href="mailto:muy.samda13@gmail.com">
                <span className="cursor-pointer focus:text-teal-300 hover:text-teal-300 transform transition text-white">
                  muy.samda13@gmail.com
                                </span>
              </a>
            </div>
            <div className="flex justify-start items-start text-xl space-x-3 text-gray-100">
              <span><FaMapMarkerAlt /></span>
              <a className="hover:no-underline" href="https://goo.gl/maps/vN3tM6hJA8hVjmRn8" target="_blank">
                <span className="cursor-pointer focus:text-teal-300 hover:text-teal-300 transform transition text-white">
                  Koh Rong Sanloem, Sihanoukville, Cambodia.
                </span>
              </a>
            </div>
          </div>
          <div className="space-x-20 flex text-3xl text-white px-20 mb-20 mt-10">
            <a href="https://github.com/Samda" target="_blank">
              <span className="cursor-pointer hover:text-teal-300 transform transition"><FaGithubSquare /></span>
            </a>
            <a href="https://www.linkedin.com/in/muy-samda-a92a2159/" target="_blank">
              <span className="cursor-pointer hover:text-teal-300 transform transition"><FaLinkedin /></span>
            </a>
            <a href="tel:+85516777631" target="_blank">
              <span className="cursor-pointer hover:text-teal-300 transform transition"><FaTelegramPlane /></span>
            </a>
          </div>
        </div>
      </div>
    </>
   );
}

export default Contact;