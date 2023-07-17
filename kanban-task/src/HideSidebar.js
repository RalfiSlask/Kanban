import logoHideSidebar from "./assets/icon-hide-sidebar.svg";

const HideSidebar = () => {
  return (
    <div className="flex items-center justify-between w-[127px] h-5">
        <img src={logoHideSidebar} alt="hide sidebar" className="h-4 w-[20px]"/>
        <p className="text-mediumGray">Hide Sidebar</p>
    </div>
  )
}

export default HideSidebar