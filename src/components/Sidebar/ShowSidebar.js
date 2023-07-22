import logoShowSidebar from "../../assets/icon-show-sidebar.svg";
import { useContext } from "react";
import Context from "../../context/Context";

const ShowSidebar = () => {
  const { openSidebarOnClick } = useContext(Context);

  return (
    <div className="flex items-center justify-center rounded-r-full bg-purpleColor w-14 h-12 absolute z-20 left-0 top-[1000px] cursor-pointer hover:bg-purpleHover" onClick={openSidebarOnClick}>
        <img src={logoShowSidebar} alt="show sidebar logo" />
    </div>
  )
}

export default ShowSidebar