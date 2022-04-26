export default function Footer() {
  return (
    <footer className="bg-[#e1e0e0] text-black border-t-4 border-[#00703c] py-10">
      <div className="container mx-auto px-60 flex">
        <img src="logo.jpg" alt="" width={78} className="mr-14"/>
        <div className="mr-20">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About Us</li>
            <li>Menu</li>
          </ul>
        </div>
        <div className="flex flex-col text-left">
          <span>Facebook</span>
          <span>Twitter</span>
        </div>
      </div>
      <p className="mt-4">Copyright © 2022 Sushi Tei Indonesia. All rights reserved. Disclaimer. Privacy Policy</p>
    </footer>
  )
}