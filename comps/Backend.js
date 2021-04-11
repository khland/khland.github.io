
const Backend = () => {
  return (
    <div className="flex flex-col w-full h-full py-10 px-20 space-y-4">
      <h1 className="text-2xl text-teal-800">Backend</h1>
      <div className="h-60 flex flex-col w-full">
        <div className="flex w-full">
          <div className="flex flex-col w-1/3 space-y-1">
            <div className="h-full w-full rounded-md border border-teal-800">
              <img className="rounded-md" src={"/sms-system.png"}
                layout="responsive"
                width={700}
                height={475} />
            </div>
            <div className="flex">
              <div className="grid grid-cols-4 h-auto gap-y-1 gap-x-1">
                <span className="flex items-center justify-center rounded-md flex px-1 bg-teal-800 text-xs text-white">Ruby On Rails</span>
                <span className="flex items-center justify-center rounded-md flex px-1 bg-teal-800 text-xs text-white">Serializer</span>
                <span className="flex items-center justify-center rounded-md flex px-1 bg-teal-800 text-xs text-white">JSON API</span>
                <span className="flex items-center justify-center rounded-md flex px-1 bg-teal-800 text-xs text-white">ReactJS</span>
                <span className="flex items-center justify-center rounded-md flex px-1 bg-teal-800 text-xs text-white">ReactJS</span>
              </div>
            </div>
          </div>
          <div className="flex w-1/2">
            <div className="flex flex-col col-span-2 bg-transparent rounded-md">
              <div className="flex flex-col shadow-lg bg-transparent rounded-md">
                <div className="flex grid-cols-6 mt-2">

                </div>
              </div>
            </div>
            <div className="">
                  Hello
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Backend;
