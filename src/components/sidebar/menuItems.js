import styled from '@emotion/styled';
import React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))(({ theme }) => ({
  padding: '0rem 0.25rem 0rem 2rem',
  fontSize: '14px',
  fontWeight: 400,
  color: '#03396D',
  backgroundColor: 'rgba(255, 255, 255, .05)',
  borderBottom: '1px solid #C2CFDB',
  '& MuiAccordionSummary-content': {
    alignItems: 'center',
  },
  '& .Mui-expanded.MuiAccordionSummary-content .MuiTypography-root': {
    fontWeight: 700,
  },
}));

const SubAccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))(({ theme }) => ({
  padding: '0rem 0.25rem 0rem 3.5rem',
  fontSize: '14px',
  fontWeight: 400,
  color: '#03396D',
  backgroundColor: 'rgba(255, 255, 255, .05)',
  borderBottom: '1px solid #C2CFDB',
  '& MuiAccordionSummary-content': {
    alignItems: 'center',
  },
  '& .Mui-expanded.MuiAccordionSummary-content .MuiTypography-root': {
    fontWeight: 700,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  padding: '0',
}));

const MenuItems = (props) => {
  const { menu } = props;
  const [expanded, setExpanded] = React.useState('');
  const [subExpanded, setSubExpanded] = React.useState('');

  const handleChange =
    (panel) => (event, newExpanded) => {
      if (props.menu.name === 'Campaign') {
        // router.push('/campaign/list');
      }

      setExpanded(newExpanded ? panel : false);
    };

  const handleSubChange =
    (panel) => (event, newExpanded) => {
      setSubExpanded(newExpanded ? panel : false);
    };

  // useEffect(() => {
  //   if (router.pathname == '/investor/myDeals') {
  //     setExpanded('My Profile');
  //   } else if (router.pathname == '/admin/relationManager/newRM') {
  //     setExpanded('Relationship Manager');
  //   } else if (router.pathname == '/admin/salesExecutive/newSE') {
  //     setExpanded('Sales Executive');
  //   }
  // }, [])


  return (
    <div>
      <Accordion
        expanded={expanded === menu?.name}
        onChange={handleChange(menu?.name)}
      >
        <AccordionSummary
          aria-controls={`${menu?.name}-content`}
          id={`${menu?.name}-header`}
          style={{ backgroundColor: '#f2f5f7' }}
        >
          {!menu?.url ? (
            <Typography className="flex items-center">
              <span className="mr-5">{menu?.icon}</span>
              <span>{menu?.name}</span>
            </Typography>
          ) : (
            <NavLink href={menu?.url} color="inherit">
              <Typography className="flex items-center">
                <span className="mr-5">{menu?.icon}</span>
                <span>{menu?.name}</span>
              </Typography>
            </NavLink>
          )}
        </AccordionSummary>
        <AccordionDetails>
          {menu?.menudata &&
            menu.menudata?.map((mcontent, m) => (
              <MenuContent key={'menu' + m}>
                {/* {
                        menu.tittle && <SubMenu href={menu.url} underline="none">{menu.tittle}</SubMenu>
                    }
                    {
                        menu.options.map((menuLinks:any, l:number)=>
                            <MenuLinks href={menuLinks.url} key={"menuLinks"+l} underline="none">{menuLinks.text}</MenuLinks>
                        )
                    } */}
                {mcontent?.options && mcontent?.options.length !== 0 ? (
                  <>
                    <Accordion
                      expanded={subExpanded === mcontent.tittle}
                      onChange={handleSubChange(mcontent.tittle)}
                    >
                      <SubAccordionSummary
                        aria-controls={`${mcontent.tittle}-content`}
                        id={`${mcontent.tittle}-header`}
                      >
                        <Typography>{mcontent.tittle}</Typography>
                      </SubAccordionSummary>
                      <AccordionDetails>
                        {mcontent.options &&
                          mcontent.options.map((menuLinks, l) => (
                            <MenuLinks
                              key={'menuLinks' + l}
                              // className={
                              //   menuLinks.url == router.pathname ? 'active' : ''
                              // }
                              onClick={() => {
                                if (props.handleActive)
                                  props.handleActive(menuLinks.text);
                              }}
                              href={menuLinks.url}
                            >
                              <Typography className="flex items-center">
                                <span className="mr-5">{menuLinks.icon}</span>
                                <span>{menuLinks.text}</span>
                              </Typography>
                            </MenuLinks>
                          ))}
                      </AccordionDetails>
                    </Accordion>
                  </>
                ) : (
                  mcontent.tittle && (
                    <MenuLinks
                      href={mcontent.url}
                      // className={
                      //   router.pathname == mcontent.url ? 'active' : ''
                      // }
                      onClick={() => {
                        if (props.handleActive)
                          props.handleActive(mcontent.tittle);
                      }}
                    >
                      <Typography className="flex items-center">
                        <span className="mr-5">{mcontent.icon}</span>
                        <span>{mcontent.tittle}</span>
                      </Typography>
                    </MenuLinks>
                  )
                )}
              </MenuContent>
            ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default MenuItems;

const MenuContent = styled.div`
  font-weight: 500;
  display: flex;
  flex-direction: column;
`;

const MenuLinks = styled(NavLink)`
  display: block;
  font-size; 500;
  background: #F2F5F7;
  color: #03396D!important;
  font-size: 14px;
  padding: 1rem 0.25rem 1rem 4rem;
  border-bottom: 1.35px solid #C2CFDB;
  &.active {
    background: #C2CFDB;
  }
`;
