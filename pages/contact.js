import dynamic from 'next/dynamic'
import Loading from '../comps/Loading'

const Contact = () => {
  return (
    <>
    <div className="py-10 px-20 flex flex-col w-full h-full absolute items-center">
      <div className="z-1 flex absolute inset-0 w-full h-full justify-center items-center">
        <h1 className="text-6xl text-gray-900">Contacts</h1>
      </div>
      <div className="z-10 justify-center flex flex-col absolute inset-0 bg-opacity-50 bg-teal-800 items-center">
        <label className="group relative">
          <div className="group-focus ">Topic</div>
          <input className="px-4 pt-4 pb-2 outline-none bg-teal-300 border-b-2 border-teal-600 text-2xl" type="text" />
        </label>
          <button className="mt-10 border-b-2 w-60">SUBMIT</button>
      </div>
    </div>
    </>
   );
}

export default Contact;