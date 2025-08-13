import React from 'react'

const Shorten = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shorten URL</h1>
            <p className="text-gray-600">Create your custom short link</p>
          </div>
          
          {/* Form */}
          <form className="space-y-6">
            {/* Long URL Input */}
            <div>
              <label htmlFor="longUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Long URL
              </label>
              <input
                type="url"
                id="longUrl"
                name="longUrl"
                placeholder="https://example.com/very-long-url-path"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                required
              />
            </div>
            
            {/* Preferred Short URL Name */}
            <div>
              <label htmlFor="shortName" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Short Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 font-mono text-sm">
                  short.ly/
                </span>
                <input
                  type="text"
                  id="shortName"
                  name="shortName"
                  placeholder="my-link"
                  className="w-full pl-20 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
                  required
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Only letters, numbers, and hyphens allowed
              </p>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700  transform hover:scale-95 transition-all duration-200 shadow-lg hover:shadow-md"
            >
              Create Short URL
            </button>
          </form>
          
          {/* Result Preview */}
          <div className="mt-8 p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-500 mb-2">Your shortened URL will appear here</p>
            <div className="flex items-center justify-between bg-white p-3 rounded-lg border">
              <span className="text-blue-600 font-mono">short.ly/example</span>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shorten
