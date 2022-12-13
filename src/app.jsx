// log in with this info, then add yourself as an admin in settings -> Admins 
const USERNAME = 'rickardo@csu.fullerton.edu'
const PASSWORD = 'password1.'

const pb = new PocketBase('http://127.0.0.1:8090')

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App() {
  return (
    <div className='App'>
      <h1 className="text-3xl font-bold underline bg-green-500">Hello, {authData.admin.email}</h1>

      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a
              className="mr-5 hover:text-gray-900"
              style={{ color: "rgb(0, 119, 255)" }}
              href="/"
            >
              Home
            </a>
            <a
              className="mr-5 hover:text-gray-900"
              style={{ color: "rgb(0, 119, 255)" }}
              href="about.html"
            >
              About
            </a>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <img
              src="https://www.onblastblog.com/wp-content/uploads/2017/08/blogger-logo.jpg"
              className="w-12 h-12 text-white p-2 rounded-full"
              alt="logo"
            />
            <span className="ml-3 text-xl" style={{ color: "rgb(0, 119, 255)" }}>
              Blog Engine
            </span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <a
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              href="login.html"
            >
              {" "}
              Log in
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </header>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Welcome to Blog Engine
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="leading-relaxed mb-6">
                  What is a CPU? It stands for a Core Processing Unit, it does all
                  the logical arthimetic and all the processing for onces computer.
                  The CPU is reponsible for all functions that involve logic. There
                  are many parts of a computer but CPU allows the computer to be
                  able to perform its dail functions and it gets all the needed
                  processes from RAM.
                </p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      cardo
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <p className="leading-relaxed mb-6">
                  Going off of the CPU blog from Pbavafa, RAM (random access memory)
                  is a computer's short-term memory, where the data that the
                  processor is currently using is stored. Your computer can access
                  RAM memory much faster than data on a hard disk, SSD, or other
                  long-term storage device, which is why RAM capacity is critical
                  for system performance.
                </p>
                <a className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      sbhagat101
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        className="text-gray-600 body-font"
        style={{ position: "relative", top: "auto" }}
      >
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div
            className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10"
            style={{ position: "relative", top: 150 }}
          >
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img
                src="https://www.onblastblog.com/wp-content/uploads/2017/08/blogger-logo.jpg"
                className="w-12 h-12 text-white p-2 rounded-full"
                alt="logo"
              />
              <span className="ml-3 text-xl">Blog Engine</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              The place to satisfy all your blogging needs
            </p>
          </div>
          <div
            className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first"
            style={{ position: "relative", top: 150, right: "auto" }}
          >
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                style={{ fontSize: 20 }}
              >
                Links
              </h2>
              <nav className="list-none mb-10">
                <ul>
                  <li>
                    <a style={{ color: "rgb(0, 119, 255)" }} href="./about.html">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800"
                      style={{ color: "rgb(0, 119, 255)" }}
                      href="https://tailblocks.cc/"
                    >
                      Tailblocks
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800"
                      style={{ color: "rgb(0, 119, 255)" }}
                      href="https://github.com/cardogg/CPSC-349-Project-4"
                    >
                      Main Github Repo
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100" style={{ position: "relative", top: 60 }}>
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2022 Blog Engine
            </p>
          </div>
        </div>
      </footer>


    </div>
  )
}
