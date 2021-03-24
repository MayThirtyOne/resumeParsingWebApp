import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import EditIcon from "@material-ui/icons/Edit";
import FindInPageIcon from '@material-ui/icons/FindInPage';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import FaceIcon from '@material-ui/icons/Face';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const prop_value = props.main_content;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Resume Parser And Ranker V 1.0
          </Typography>
          
          

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          
          <ListItem button key="Upload Resume">
            <ListItemIcon>
              <CloudUploadIcon />
            </ListItemIcon>
            <Link to = '/upload'><ListItemText primary="Upload Resume" /></Link>
          </ListItem>

          <ListItem button key="Edit Resume">
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <Link to = '/edit'><ListItemText primary="Edit Resume" /></Link>
          </ListItem>

          <ListItem button key="Search Jobs">
            <ListItemIcon>
              <FindInPageIcon />
            </ListItemIcon>
            <Link to = '/search'><ListItemText primary="Search Jobs" /></Link>
          </ListItem>

          <ListItem button key="My Applications">
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <Link to = '/myapplications'><ListItemText primary="My Applications" /></Link>
          </ListItem>

        </List>
        <Divider />
        <List>
        <ListItem button key="My Profile">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <Link to = '/profile'><ListItemText primary="My Profile" /></Link>
          </ListItem>

          <ListItem button key="Settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <Link to = '/settings'><ListItemText primary="Settings" /></Link>
          </ListItem>

          <ListItem button key="Logout">
            <ListItemIcon>
                <ExitToAppIcon/>
            </ListItemIcon>
            <Link to = '/logout'><ListItemText primary="Logout" /></Link>
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
            {prop_value}
        </div>
        
      </main>
    </div>
  );
}
