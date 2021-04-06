const Loading = () => {
  return (<div className="flex justify-center items-center inset-0 bg-gray-900 bg-opacity-70 flex w-full h-full absolute">
    <div className="flex">
      <div className="flex justify-center items-center text-sm border border-gray-900 text-gray-900 w-48 h-48 rounded-full relative">
        <span className="absolute z-10">Loading</span>
        <div className="animate-radio z-1 absolute w-48 h-48 border-4 border-white rounded-full">
        </div>
      </div>
    </div>
  </div> );
}

export default Loading;