

function AddGuests() {
  return (
    <div>
       <div className="sm:absolute sm:left-1/2 sm:transform sm:-translate-x-12">
        <div className="undefined my-8 sm:ml-1/2">
            <h1 className="font-extrabold text-gray-800">Adult</h1>
            <span className="text-gray-400">Age 13 or above</span>
            <div className="mt-2">
                <button className="mr-2 relative px-1 rounded-md text-gray-800 border border-gray-400 hover:text-gray-600 focus:border-blue-300 focus:outline-none"> 
                －
                </button>
                <span>0</span>
                <button className="ml-2 relative px-1 rounded-md text-gray-800 border border-gray-400 hover:text-gray-600 focus:border-blue-300 focus:outline-none">
                    ＋
                </button>
            </div>
        </div>
        <div className="undefined my-8 sm:ml-1/2">
            <h1 className="font-extrabold text-gray-800">Children</h1>
            <span className="text-gray-400">Age 2-12</span>
            <div className="mt-2">
                <button className="mr-2 relative px-1 rounded-md text-gray-800 border border-gray-400 hover:text-gray-600 focus:border-blue-300 focus:outline-none">
                     －
                     </button>
                     <span>0</span>
                     <button className="ml-2 relative px-1 rounded-md text-gray-800 border border-gray-400 hover:text-gray-600 focus:border-blue-300 focus:outline-none">
                        ＋
                    </button>
            </div>
            </div>
            </div>
        
    </div>
  )
}

export default AddGuests