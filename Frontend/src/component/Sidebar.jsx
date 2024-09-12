import { Link } from "react-router-dom";
import "../App.css";

// all icons
import logoIcon from "../assets/logo.png";
import homeIcon from "../assets/home.png";
import listIcon from "../assets/list.png";
import boardIcon from "../assets/kanban-board.png";

export default function Sidebar() {

  // hare is the all link detail
  const links = [
    {
      icon: homeIcon,
      title: "Home",
      url: "/",
    },
    {
      icon: boardIcon,
      title: "Board",
      url: "/board",
    },
    {
      icon: listIcon,
      title: "List",
      url: "/list",
    },
  ];

  return (
    <div className="flex flex-col flex-wrap gap-1 h-full">
      {/* hare is logo saction */}
      <div className="flex justify-center items-center p-3 rounded-lg m-1 border-2">
        <span className=" w-1/3">
          <img src={logoIcon} alt="Logo" className="w-full" />
        </span>
        <h1>Todo App</h1>
      </div>

      {/* hare is buttons saction */}
      <div className="flex flex-col gap-1">
        {links?.map((link, ind) => {
          return (
            <Link
              to={link.url}
              key={ind}
              className="flex items-center w-[95%] m-auto shadow-[0px_0px_2px_1px_black] rounded-md  hover:w-[93%] hover:bg-gray-200"
            >
              <span className="w-1/5 p-2">
                <img src={link.icon} alt="home" className="w-[100%]" />
              </span>
              <h1>{link.title}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
