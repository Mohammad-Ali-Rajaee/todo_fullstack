import { Link } from "react-router-dom";
import "../../style.css";
import "./Header.css";

const Header = () => {
  return (
    <header className="p-header bg-red-400 flex items-center py-3">
      <div className="p-header__container flex justify-between w-5/6 mx-auto">
        <div className="p-logo text-3xl">TODO</div>
        <div className="button-todo flex items-center">
          <Link to={"/new"}>
            <button className="w-full h-full p-2 border rounded-md">
              Create new todo
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
