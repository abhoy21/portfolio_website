export const Header = () => (
  <header
    className='fixed top-0 left-0 w-full h-60 bg-cover bg-center z-50'
    style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}
  >
    <div className='absolute inset-0 bg-gradient-to-b from-[#121212] to-transparent opacity-90'></div>
    <div className='relative z-10 flex flex-col items-start justify-end h-full p-8'>
      <h1 className='text-5xl font-extrabold text-white tracking-wider drop-shadow-md'>
        Abhoy Sarkar
      </h1>
      <p className='mt-2 text-lg text-gray-300 leading-snug'>
        A developer&apos;s journey through code and design.
      </p>
    </div>
  </header>
);
