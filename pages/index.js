import Head from 'next/head'

export default function Home() {
  return (
    <div className='font-poppins'>
      <Head>
        <title>Rebuilding Allbirds.com</title>
      </Head>
      <div className="px-4 py-1 bg-gray-200 text-white">
        <p className="text-xs font-semibold text-center">
          FREE SHIPPING & 60-DAY FREE RETURNS
        </p>
      </div>
      <header className="z-10 sticky top-0 px-5 py-3 flex items-center justify-between bg-white">
        <div className="absolute inset-0 shadow-lg opacity-50"></div>
          <div>Logo</div>
          <div>Cart</div>
          <div className="flex">
            <button>
              <svg 
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </button>
          </div>
          <div>Menu</div>
      </header>
      <main>
        <div>
        </div>
      </main>
    </div>
  )
}
