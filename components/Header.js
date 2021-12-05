/* eslint-disable @next/next/no-html-link-for-pages */

export default function Header() {
  return (
    <>
      <div
        className="
        bg-blue
        absolute
        w-full
        h-7
        top-0
        text-center 
        text-white
        text-sm
        leading-6
        Grotesk
      "
      >
        Scelerisque egestas et euismod.
        <a href="/" className="underline pl-3">
          Take me there
        </a>
      </div>
      <div className="flex items-center justify-between mt-6 md:px-6 py-4 mb-16 sm:mb-20 -mx-4 px-4 sm:mx-0 sm:px-0 Grotesk">
        <div className="inline-block">
          <div className="inline-block pb-3 pl-6">
            <a href="/" className="text-white font-bold text-3xl">
              NINE4
            </a>
          </div>
          <div className="pl-14 pt-2 hidden xl:inline-block">
            <a href="/" className="text-xl mr-12 mt-5 text-white">
              Cras.
            </a>
            <a href="/" className="text-xl mr-12 text-white">
              Cras.
            </a>
            <a href="/" className="text-xl mr-12 text-white">
              Fringilla.
            </a>
            <a href="/" className="text-xl text-white">
              Enim.
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-right py-1 hidden xl:inline-block">
            <a
              className="
              inline-flex
              items-center
              px-12
              py-3
              mt-2
              text-lg
              tracking-tighter
              font-semibold
              text-white
            "
              href="/"
            >
              Log in
            </a>
            <a
              className="
              inline-flex
              items-center
              px-8
              py-3
              mt-2
              text-lg
              tracking-tighter
              bg-blue
              text-white
              font-semibold
            "
              href="/"
            >
              Request a demo
            </a>
          </div>
          <button className="pr-12">
            <svg
              className="mr-auto text-white xl:hidden inline-block"
              width="33"
              height="50"
              viewBox="0 0 23 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.892578 10.8691H22.1058"
                stroke="white"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M0.892578 18.8691H22.1058"
                stroke="white"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M22.1066 14.8688H0.893399"
                stroke="white"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
