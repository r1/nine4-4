/* eslint-disable @next/next/no-html-link-for-pages */

export default function Footer() {
  return (
    <>
      <footer className="text-gray-600 Grotesk">
        <div className="max-w-8xl px-5 py-24 mx-auto text-white">
          <div className="lg:w-3/6 md:w-1/2 mb-32 md:pr-16 lg:pr-6 pr-0">
            <h2 className="max-w-2xl md:text-5xl text-white leading-tight font-bold">
              Tristique tempus tincidunt.
            </h2>
            <p className="max-w-2xl text-xl mt-6 text-gray-300">
              Lorem ipsum accumsan arcu, consectetur adipiscing elit.
            </p>
            <input
              type="text"
              className="mt-10 h-12 px-6 pr-24 placeholder-gray-500 text-gray-800 font-semibold"
              placeholder="Enter your email address"
            />
            <button className="bg-blue h-12 px-5 mb-24">Get a demo</button>
          </div>
          <div className="flex flex-wrap text-left order-first">
            <div className="lg:w-1/5 md:w-2/4 w-full px-4">
              <h2 className="tracking-widest text-lg mb-3">Est.</h2>
              <nav className="list-none space-y-2 py-3">
                <li>
                  <a href="/">Vitae nec.</a>
                </li>
                <li>
                  <a href="/">Purus</a>
                </li>
                <li>
                  <a href="/">Nibh.</a>
                </li>
                <li>
                  <a href="/">Proin semper justo.</a>
                </li>
                <li>
                  <a href="/">Blandit.</a>
                </li>
                <li>
                  <a href="/">Malesuada.</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-2/4 w-full px-4">
              <h2 className="tracking-widest text-lg mb-3">Et.</h2>
              <nav className="list-none space-y-2 mb-10 py-3">
                <li>
                  <a href="/">Ninc elementum.</a>
                </li>
                <li>
                  <a href="/">Sit ac interdum</a>
                </li>
                <li>
                  <a href="/">Ac ut cras.</a>
                </li>
                <li>
                  <a href="/">Sed ipsum lobortis.</a>
                </li>
                <li>
                  <a href="/">Nulla maecenas nunc.</a>
                </li>
                <li>
                  <a href="/">Purus</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-2/4 w-full px-4">
              <h2 className="tracking-widest text-lg mb-3">Placerat.</h2>
              <nav className="list-none space-y-2 mb-10 py-3">
                <li>
                  <a href="/">Et cursus fringilla.</a>
                </li>
                <li>
                  <a href="/">In velit sagittis.</a>
                </li>
                <li>
                  <a href="/">Mattis.</a>
                </li>
                <li>
                  <a href="/">Est.</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-2/4 w-full px-4">
              <h2 className="tracking-widest text-lg mb-3">Messa.</h2>
              <nav className="list-none space-y-2 mb-10 py-3">
                <li>
                  <a href="/">Id.</a>
                </li>
                <li>
                  <a href="/">Aliquam.</a>
                </li>
                <li>
                  <a href="/">Interdum.</a>
                </li>
                <li>
                  <a href="/">Risus.</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-2/4 w-full">
              <a href="/">
                <div className="relative border border-gray-700 hover:border-gray-300 transition">
                  <div className="absolute top-0 right-0 pt-2 pr-2">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66992 0.747559L0.669922 6.74756"
                        stroke="white"
                      />
                      <path
                        d="M0.669922 0.747559H6.66992V6.74756"
                        stroke="white"
                      />
                    </svg>
                  </div>
                  <div className="p-6">
                    Lorem ipsum accumsan arcu, consectetur adipiscing elit.
                    Consequat arcu.
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="px-2">
          <div className="mx-auto max-w-8xl px-5 py-6">
            <h2 className="text-white">Diam egestas ultrices odio vitae.</h2>
            <div>
              <h2 className="text-sm my-4">
                Lorem ipsum accumsan arcu, consectetur adipiscing elit. Dolor
                proin tempor sed fermentum sit{" "}
                <br className="hidden lg:inline-block" /> pretium pellentesque.
                Dictumst risus elementum dignissim risus, lobortis molestie.
              </h2>
            </div>
            <div className="-mt-24 absolute right-0 text-white hidden lg:inline-block">
              <a href="/" className="mr-16">
                Terms & Conditions
              </a>
              <a href="/" className="mr-16">
                Privacy Policy
              </a>
              <a href="/" className="mr-16">
                Cookie Policy
              </a>
            </div>
            <div className="inline-block pt-12 pb-6 pr-20 absolute right-0 text-sm text-white md:hidden">
              <a href="/" className="mr-16">
                Terms & Conditions
              </a>
              <a href="/" className="mr-16">
                Privacy Policy
              </a>
              <a href="/" className="mr-16">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
