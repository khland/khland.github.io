const Loading = () => {
  return (<div className="flex justify-center items-center inset-0 bg-teal-800 bg-opacity-70 flex w-full h-full absolute">
    <div className="flex">
      <div className="flex justify-center items-center text-sm border border-teal-800 text-teal-800 w-48 h-48 rounded-full relative">
        <span className="absolute z-10">Loading</span>
        <div className="animate-radio z-1 absolute w-48 h-48 border-4 border-teal-900 rounded-full">
        </div>
      </div>
    </div>
  </div> );
}

export default Loading;