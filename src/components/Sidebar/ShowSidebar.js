import logoShowSidebar from "../../assets/icon-show-sidebar.svg";
import { useContext } from "react";
import ModalContext from "../../context/ModalContext";

const ShowSidebar = () => {
  const { openSidebarOnClick } = useContext(ModalContext);
  const { sidebarOpen } = useContext(ModalContext)

  return (
    <div 
      className={`${sidebarOpen ? "opacity-0" : "opacity-100"} ease-in-out duration-1000 flex items-center justify-center rounded-r-full bg-purpleColor w-14 h-12 absolute z-20 left-0 md:top-[980px] xl:top-[1000px] cursor-pointer hover:bg-purpleHover`} 
      onClick={openSidebarOnClick}>
        <img src={logoShowSidebar} alt="show sidebar logo" />
    </div>
  )
}

export default ShowSidebar