import SideBar from "../components/sidebar/sidebar";
import Header from "../components/navbar/header";
import { useState } from "react";

const AdminDashboardLayout = (props) => {

  const { children } = props;
  const drawerWidth = 280;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <div className="flex flex-row">
        <SideBar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          drawerWidth={drawerWidth}
        />
        <div
          style={{
            overflowY: 'auto',
            height: 'calc(100vh - 153px)',
          }}
          className={` my-[1rem] mx-[2rem] p-[1rem] pr-[2rem] w-full`}
        >
          {children}
        </div>
      </div>
    </>

  )
}

export default AdminDashboardLayout