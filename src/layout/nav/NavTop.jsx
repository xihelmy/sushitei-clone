export default function NavTop() {
  return (
    <div className="w-full">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium justify-end">
        <li>
          <a
            href="#"
            className="block py-2 pr-4 pl-3 text-white"
            aria-current="page">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
}