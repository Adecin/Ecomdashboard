import styled from '@emotion/styled';
// import { Link } from '@mui/material';
import React from 'react';
// import { Router } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Drawer } from '@mui/material';
import { menuOption as menuGroup } from '../../data/sidebarData';
import MenuItems from './menuItems';

export default function SideBar(props) {

  // const navigate = useNavigate();

  const [active, setActive] = React.useState('');

  const handleActive = (value) => {
    localStorage.setItem('MenuActive', value);
    setActive(value);
  };
  // const handleNavigation = () => {
  //   localStorage.removeItem('token');
  //   navigate('/');
  // };


  const drawer = (
    <div
      style={{
        overflowY: 'auto',
        height: 'calc(100vh - 120px)',
      }}>
      {menuGroup &&
        menuGroup.map((menu, m) =>
          menu.menudata && menu.menudata.length !== 0 ? (
            <>
              <MenuItems
                menu={menu}
                handleActive={handleActive}
                active={active}
              />
            </>
          ) : (
            <>
              <MenuLinks
                // className={router.pathname == menu.url ? 'active' : ''}
                href={menu.url}
                onClick={() => {
                  handleActive(menu.name);
                }}
              >
                <div className="flex items-center">
                  <span className="mr-5">{menu.icon}</span>
                  <span>{menu.name}</span>
                </div>
              </MenuLinks>
            </>
          )
        )}
    </div>
  )


  return (
    <div className="bg-white" style={{ boxShadow: "4px 0px 4px rgba(0, 0, 0, 0.25)" }}>
      <Drawer
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: props.drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        className="sticky top-[80px] h-full"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: props.drawerWidth,
            position: 'static',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </div>
  );
}

const MenuLinks = styled(NavLink)`
  background: #FFFFFF;
  border-bottom: 1.35px solid #C2CFDB;
`;

// const NotMenuLinks = styled.div`
//   background: #FFFFFF;
//   padding: 1rem 0.25rem 1rem 4rem;
//   border-bottom: 1.35px solid #C2CFDB;
// `;

// const SideBarContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 14rem;
//   background: white;
//   color: #03396d;
//   margin: 3rem 0;
// `;
