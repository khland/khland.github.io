import Image from 'next/image'

const About = () => {
  return (
    <div className="w-full h-screen flex flex-col py-20 px-20">
      <div className="flex w-full justify-between">
        <div className="w-2/5 flex flex-col justify-start items-center h-screen">
          <h1 className="text-center text-5xl">About me</h1>
          <div className="group cursor-pointer flex w-full relative p-4 overflow-hidden rounded-md">
            <div className="flex items-end group-hover:translate-y-0 w-full h-full -translate-y-full absolute inset-0  transform transition-all duration-500  z-40 bg-teal-900 bg-opacity-30 rounded-md">
              <div className="flex flex-col relative items-start justify-start px-4 text-white bg-teal-900 bg-opacity-50 p-4 rounded-tr-md">
                <div className="group-hover:translate-x-0 transform transition-all duration-1000 -translate-x-full">
                  <span>Name:</span> <span>Samda Muy</span>
                </div>
                <div className="group-hover:translate-x-0 transform transition-all duration-1000 -translate-x-full">
                  <span>Age:</span> <span>29</span>
                </div>
                <div className="group-hover:translate-x-0 transform transition-all duration-1000 -translate-x-full">
                  <span>Nationality:</span> <span>Cambodian</span>
                </div>
                <div className="group-hover:translate-x-0 transform transition-all duration-1000 -translate-x-full">
                  <span>Agile developer and a team player</span>
                </div>
              </div>
            </div>
            <Image
              src={'/samda-face.png'} width={400} height={400}/>
          </div>
        </div>

        <div className="flex flex-col w-3/5 justify-start items-start h-screen px-20 space-y-2">
          <h2 className="text-2xl">G'Day Mate</h2>
          <p className="text-md leading-loose">Hi this is Samda, I am a toiler software craft-man with more than 4 years in this career as a Full-stack Web Developer. Mostly I used to work a lot with Ruby on Rails it is kind of really handy for web development I love it a lot.</p>
          <p className="text-md leading-loose">But as a full-stack I need be flexible and to be able work on different environment as it required like switching tasks from Analyse System to Database Design to building Back End, Web API etc and to Make Front End Design look nice and easy for the clients feel comfortable with the system.</p>
          <p className="text-md leading-loose">Over and above what normally system required in deployment and maintenance setup for the software it self so it's also a part that I need to handle as well if it is required.</p>
          <p className="text-md leading-loose">So This is why I'm always exited and curious and eager to learn new things. And I'm really confortable with some software development methodology such as agile scrum methodology and I also like the development style of pair programming in agile as well.</p>
        </div>
      </div>
    </div>
  )
}

export default About