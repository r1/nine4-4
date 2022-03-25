/* eslint-disable @next/next/no-html-link-for-pages */

export default function Footer() {
  return (
    <>
      <footer className="grotesk bg-[#f9fbfb]">
        <div className="max-w-8xl mx-auto px-5 py-24 text-black">
          <div className="order-first flex flex-wrap text-left">
            <div className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">Est.</h2>
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
            <div className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">Et.</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
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
            <div className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">Placerat.</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
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
            <div className="w-full px-4 md:w-2/4 lg:w-1/5">
              <h2 className="mb-3 text-lg tracking-widest">Messa.</h2>
              <nav className="mb-10 list-none space-y-2 py-3">
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
            <div className="w-full md:w-2/4 lg:w-1/5">
              <a href="/">
                <div className="relative border border-black transition hover:border-gray-500">
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
                        stroke="black"
                      />
                      <path
                        d="M0.669922 0.747559H6.66992V6.74756"
                        stroke="black"
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
          <div className="max-w-8xl mx-auto px-5 py-6">
            <h2 className="text-black">Diam egestas ultrices odio vitae.</h2>
            <div>
              <h2 className="my-4 text-sm">
                Lorem ipsum accumsan arcu, consectetur adipiscing elit. Dolor
                proin tempor sed fermentum sit{" "}
                <br className="hidden lg:inline-block" /> pretium pellentesque.
                Dictumst risus elementum dignissim risus, lobortis molestie.
              </h2>
            </div>
            <div className="absolute right-0 -mt-24 hidden text-black lg:inline-block">
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
            <div className="right-0 inline-block pt-12 pb-6 pr-20 text-sm text-black md:hidden">
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
