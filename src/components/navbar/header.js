import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Popover,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  console.log(props)

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='sticky'>
      <div className="shadow-md flex flex-row items-center justify-between lg:px-10 px-5 pt-3 pb-3 top-0 sticky bg-white z-10 h-[60px]">
        <div className="flex items-center">
          <Toolbar sx={{ mr: { md: 2 }, display: { md: 'none' } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              className="text-[#000]"
              onClick={props.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <div className="lg:w-[130px] md:w-[100px] w-[85px]">
            <a href="#">
              <img
                className="object-center"
                src="/logo512.png"
                alt="logo"
                width="100"
                height="100"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Box sx={{ display: { xs: 'block', lg: 'block' } }}>
            <Button
              className="flex flex-row justify-center items-center lg:mx-2 lg:px-2 mx-2 px-2"
            // onClick={() => {
            //     router.push('/relationmanager/myprofile');
            // }}
            >
              {/* <div className="mr-2 lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]">
                                <img
                                    // loader={(src: any) => {
                                    //     return profile.profile ?? '/Ellipse 1.svg';
                                    // }}
                                    src={'/profiledefault.svg'}
                                    loading="eager"
                                    alt="profile"
                                    className="w-[100%] h-[100%] rounded-full"
                                    width="100"
                                    height="100"
                                />
                            </div> */}
              <div className="text-[#003D66] text-[14px] normal-case leading-[16px] font-bold">
                {'Admin'}
              </div>
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', lg: 'none' } }}>
            <Button
              className="flex flex-row justify-center items-center lg:mx-2 lg:px-2 mx-2 px-2"
              aria-describedby={id}
              onClick={handleClick}
            >
              <div className="mr-2 lg:w-[50px] lg:h-[50px] w-[30px] h-[30px]">
                <img
                  src="/logo512.png"
                  alt="profile"
                  className="w-[100%] h-[100%]"
                  width="100"
                  height="100"
                />
              </div>
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Typography sx={{ p: 1 }} className="bg-[#222222] text-[#fff]">
                {'hi user'}
              </Typography>
              <Divider />
              <Typography sx={{ p: 1, display: 'flex' }}>
                <span>
                  <img
                    className="w-5 h-5 mr-3"
                    src="/logout.svg"
                    alt="group4"
                    width="100"
                    height="100"
                  />
                </span>
                <span
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  Logout
                </span>
              </Typography>
            </Popover>
          </Box>
          <Box sx={{ display: { xs: 'block', lg: 'block' } }}>
            <a
              href="#"
              className="flex justify-center lg:mx-2 lg:px-2 mx-2 px-2"
            >
              <img
                onClick={logout}
                className="w-5 h-5"
                src="/logout.svg"
                alt="group4"
                width="100"
                height="100"
              />
            </a>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Header