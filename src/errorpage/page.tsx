const ErrorPage = () => {
  return (
      <div className="app bg-gray-20 py-10 px-10">
          <div className="flex flex-col justify-center items-center gap-8">
          <p>Something went wrong!</p>
          <p> Check URL and try again or</p>
              <button type="button" className="hover:bg-transparent bg-blue-500 hover:text-blue-700 text-white py-2 px-4 border
           hover:border-blue-500 border-transparent rounded uppercase">
              <a 
      href="/">go to main page</a>
          </button>
          </div>
      </div>
  )
}

export default ErrorPage