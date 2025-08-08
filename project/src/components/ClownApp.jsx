import { useState } from 'react'

function ClownApp() {
  const [message, setMessage] = useState('')

  const handleClownClick = () => {
    setMessage("Hi, I'm a clown")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <div className="text-center">
        <div 
          onClick={handleClownClick}
          className="cursor-pointer transform hover:scale-105 transition-transform duration-200 mb-8"
        >
          <div className="w-64 h-64 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="text-8xl">🤡</div>
          </div>
        </div>
        
        {message && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-md border-2 border-red-200 max-w-md mx-auto">
            <p className="text-xl text-red-600 font-bold">{message}</p>
          </div>
        )}
        
        <div className="mt-8 text-gray-600">
          <p className="text-lg">Click the clown!</p>
        </div>
      </div>
    </div>
  )
}

export default ClownApp