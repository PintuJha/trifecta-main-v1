import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import Home from "./components/Home/Home";
import User from "./components/People/User";
import StaffRecord from "./components/People/StaffRecord";
import AccessReport from "./components/People/AccessReport";
import RoomCategory from "./components/RoomManagement/RoomCategory";
import Floor from "./components/RoomManagement/Floor";
import RoomNo from "./components/RoomManagement/RoomNo";
import ViewTariff from "./components/RoomManagement/ViewTariff";
import EditTariff from "./components/RoomManagement/EditTariff";
import NewReservation from "./components/Reservation/NewReservation";
import ViewReservation from "./components/Reservation/ViewReservation";
import CancelList from "./components/Reservation/CancelList";
import TravelAgentThirdParty from "./components/Reservation/TravelAgentThirdParty";
import StayView from "./components/FrontOffice/StayView";
import CheckIn from "./components/FrontOffice/CheckIn";
import CheckOut from "./components/FrontOffice/CheckOut";
import RoomShifting from "./components/FrontOffice/RoomShifting";
import EditBooking from "./components/FrontOffice/EditBooking";
import EarlyCheckOut from "./components/FrontOffice/EarlyCheckOut";
import EodSaleReport from "./components/FrontOffice/EodSaleReport";
import MealReport from "./components/FrontOffice/MealReport";
import OccupancyReport from "./components/FrontOffice/OccupancyReport";
import DirectBookingReport from "./components/FrontOffice/DirectBookingReport";
import Salary from "./components/Configuration/Salary";
import Rental from "./components/Configuration/Rental";
import CommissionList from "./components/Configuration/CommissionList";
import NewExpense from "./components/Configuration/NewExpense";
import NewPurchase from "./components/Configuration/NewPurchase";
import DaySummary from "./components/Configuration/DaySummary";
import SaleReport from "./components/Configuration/SaleReport";
import Statement from "./components/Configuration/Statement";
import GstInfo from "./components/Menu/GstInfo";
import Gst from "./components/Menu/Gst";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme,responsiveFontSizes  } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";


const drawerWidth = 220;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: "rotate(0deg)"
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: "rotate(180deg)"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing.unit,
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  grow: {
    flexGrow: 1
  }
});

class App extends React.Component {
  state = {
    open: false,
    anchorEl: null,
    theme: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };



  render() {
    const icon = !this.state.theme ? <Brightness3Icon />: <Brightness7Icon /> ;
    let appliedTheme = createMuiTheme(this.state.theme ? dark : light);
    appliedTheme = responsiveFontSizes(appliedTheme);

    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <ThemeProvider theme={appliedTheme}>
        <Paper>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={classes.appBar}
              fooJon={classNames(classes.appBar, {
                [classes.appBarShift]: this.state.open
              })}
            >
              <Toolbar disableGutters={true}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classes.menuButton}
                >
                  <MenuIcon
                    classes={{
                      root: this.state.open
                        ? classes.menuButtonIconOpen
                        : classes.menuButtonIconClosed
                    }}
                  />
                </IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.grow}
                  noWrap
                >
                  Hola! Trifecta
                </Typography>
                <div>
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="mode"
                    onClick={() => this.setState({theme:!this.state.theme})}
                  >
                    {icon}
                  </IconButton>

                  <IconButton
                    aria-owns={open ? "menu-appbar" : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircleTwoToneIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>Log Out</MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
            <Router basename='/'>
              <Drawer
                variant="permanent"
                className={classNames(classes.drawer, {
                  [classes.drawerOpen]: this.state.open,
                  [classes.drawerClose]: !this.state.open
                })}
                classes={{
                  paper: classNames({
                    [classes.drawerOpen]: this.state.open,
                    [classes.drawerClose]: !this.state.open
                  })
                }}
                open={this.state.open}
              >
                <div className={classes.toolbar} />
                <Navbar />
              </Drawer>
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route exact path="/"><Home /></Route>
                <Route path="/User"><User /></Route>
                <Route path="/StaffRecord"><StaffRecord /></Route>
                <Route path="/AccessReport"><AccessReport /></Route>
                <Route path="/RoomCategory"><RoomCategory /></Route>
                <Route path="/Floor"><Floor /></Route>
                <Route path="/RoomNo"><RoomNo /></Route>
                <Route path="/ViewTariff"><ViewTariff /></Route>
                <Route path="/EditTariff"><EditTariff /></Route>
                <Route path="/NewReservation"><NewReservation /></Route>
                <Route path="/ViewReservation"><ViewReservation /></Route>
                <Route path="/CancelList"><CancelList /></Route>
                <Route path="/TravelAgentThirdParty"><TravelAgentThirdParty /></Route>
                <Route path="/StayView"><StayView /></Route>
                <Route path="/CheckIn"><CheckIn /></Route>
                <Route path="/CheckOut"><CheckOut /></Route>
                <Route path="/RoomShifting"><RoomShifting /></Route>
                <Route path="/EditBooking"><EditBooking /></Route>
                <Route path="/EarlyCheckOut"><EarlyCheckOut /></Route>
                <Route path="/EodSaleReport"><EodSaleReport /></Route>
                <Route path="/MealReport"><MealReport /></Route>
                <Route path="/OccupancyReport"><OccupancyReport /></Route>
                <Route path="/DirectBookingReport"><DirectBookingReport /></Route>
                <Route path="/Salary"><Salary /></Route>
                <Route path="/Rental"><Rental /></Route>
                <Route path="/CommissionList"><CommissionList /></Route>
                <Route path="/NewExpense"><NewExpense /></Route>
                <Route path="/NewPurchase"><NewPurchase /></Route>
                <Route path="/DaySummary"><DaySummary /></Route>
                <Route path="/SaleReport"><SaleReport /></Route>
                <Route path="/Statement"><Statement /></Route>
                <Route path="/GstInfo"><GstInfo /></Route>
                <Route path="/Gst"><Gst /></Route>
              </main>
            </Router>
          </div>
          <Footer />
        </Paper>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);

export const light = {
  palette: {
    type: "light"
  }
};

export const dark = {
  palette: {
    type: "dark"
  }
};