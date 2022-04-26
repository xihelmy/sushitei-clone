import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const activeClass = "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
  const inactiveClass = "text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
  
  return (
    <div>
      <Link
        className={ match ? activeClass : inactiveClass }
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default function NavBottom() {
  return (
    <div className="w-full">
      <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium">
        <li>
          <NavLink to="/"
            aria-current="page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu">
            Menu
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
