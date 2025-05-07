export default function Footer() {
  return (
    <footer className=" text-white ">
      {/* Top section */}
      <div className="flex flex-col items-center justify-center max-w-full mx-auto py-16 text-center ">
        <h3 className="font-bold text-2xl sm:text-4xl md:text-5xl">
          <span className="font-euphoria text-5xl sm:text-6xl md:text-7xl font-normal">
            C
          </span>
          HASE FOREVER <br /> OR FINALLY MOVE TOWARDS <br />
          <span className="text-primary"> Success</span>
        </h3>
      </div>

      {/* Bottom section */}
      <div className="bg-[#121212] p-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mt-16  text-sm sm:text-base gap-4 text-center  pb-4 mx-auto  ">
            <a href="">Terms of refund </a>
            <a href="">Terms and conditions</a>
            <a href="">Contact</a>
          </div>
          <p className="text-left  text-sm">
            © 2025 www.cashmachine.io - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
