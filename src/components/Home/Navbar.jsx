import React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import Collapse from '@material-ui/core/Collapse'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import MeetingRoomTwoToneIcon from '@material-ui/icons/MeetingRoomTwoTone';
import EventSeatTwoToneIcon from '@material-ui/icons/EventSeatTwoTone';
import BusinessTwoToneIcon from '@material-ui/icons/BusinessTwoTone';
import PermDataSettingTwoToneIcon from '@material-ui/icons/PermDataSettingTwoTone';
import ReceiptTwoToneIcon from '@material-ui/icons/ReceiptTwoTone';

export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            isPeople: false,
            isRoom: false,
            isReserve: false,
            isOffice: false,
            isConfigure: false,
            isMenu: false
        }
    }

    render() {
        return (
            <>
                <List>
                    <Link to="/">
                        <ListItem button key="Home">
                            <ListItemIcon>
                                <HomeTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <ListItem button key="People" onClick={() => this.setState({ isPeople: !this.state.isPeople })}>
                        <ListItemIcon>
                            <PeopleOutlineTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="People" />
                    </ListItem>
                    <Collapse in={this.state.isPeople} timeout="auto" unmountOnExit>
                        <List>
                            <ListItem><Link to="/User"><ListItemText primary="User" /></Link></ListItem>
                            <ListItem><Link to="/StaffRecord"><ListItemText primary="Staff Record" /></Link></ListItem>
                            <ListItem><Link to="/AccessReport"><ListItemText primary="Access Report" /></Link></ListItem>
                        </List>
                    </Collapse>
                </List>
                <Divider />
                <List>
                    <ListItem button key="Room Management"  onClick={() => this.setState({ isRoom: !this.state.isRoom })}>
                        <ListItemIcon>
                            <MeetingRoomTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Room Management" />
                    </ListItem>
                    <Collapse in={this.state.isRoom} timeout="auto" unmountOnExit>
                        <List>
                            <ListItem><Link to="/RoomCategory"><ListItemText primary="Room Category" /></Link></ListItem>
                            <ListItem><Link to="/Floor"><ListItemText primary="Floor" /></Link></ListItem>
                            <ListItem><Link to="/RoomNo"><ListItemText primary="Room No." /></Link></ListItem>
                            <ListItem><Link to="/ViewTariff"><ListItemText primary="View Tariff" /></Link></ListItem>
                            <ListItem><Link to="/EditTariff"><ListItemText primary="Edit Tariff" /></Link></ListItem>
                        </List>
                    </Collapse>
                </List>
                <Divider />
                <List>
                    <ListItem button key="Reservation" onClick={() => this.setState({ isReserve: !this.state.isReserve })} >
                        <ListItemIcon>
                            <EventSeatTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reservation" />
                    </ListItem>
                    <Collapse in={this.state.isReserve} timeout="auto" unmountOnExit>
                        <List>
                            <ListItem><Link to="/NewReservation"><ListItemText primary="New Reservation" /></Link></ListItem>
                            <ListItem><Link to="/ViewReservation"><ListItemText primary="View Reservation Details" /></Link></ListItem>
                            <ListItem><Link to="/CancelList"><ListItemText primary="Cancel List" /></Link></ListItem>
                            <ListItem><Link to="/TravelAgentThirdParty"><ListItemText primary="Travel Agent / Third Party Side" /></Link></ListItem>
                        </List>
                    </Collapse>
                </List>
                <Divider />
                <List>
                    <ListItem button key="Front Office" onClick={() => this.setState({ isOffice: !this.state.isOffice })}>
                        <ListItemIcon>
                            <BusinessTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Front Office" />
                    </ListItem>
                    <Collapse in={this.state.isOffice} timeout="auto" unmountOnExit>
                        <List>
                            <ListItem><Link to="/StayView"><ListItemText primary="Stay View" /></Link></ListItem>
                            <ListItem><Link to="/CheckIn"><ListItemText primary="Check In" /></Link></ListItem>
                            <ListItem><Link to="/CheckOut"><ListItemText primary="Check Out" /></Link></ListItem>
                            <ListItem><Link to="/RoomShifting"><ListItemText primary="Room Shifting" /></Link></ListItem>
                            <ListItem><Link to="/EditBooking"><ListItemText primary="Booking Modification" /></Link></ListItem>
                            <ListItem><Link to="/EarlyCheckOut"><ListItemText primary="Early Check Out" /></Link></ListItem>
                            <ListItem><Link to="/EodSaleReport"><ListItemText primary="EOD Sale Report" /></Link></ListItem>
                            <ListItem><Link to="/MealReport"><ListItemText primary="Meal Report" /></Link></ListItem>
                            <ListItem><Link to="/OccupancyReport"><ListItemText primary="Occupancy Report" /></Link></ListItem>
                            <ListItem><Link to="/DirectBookingReport"><ListItemText primary="Direct Booking Report" /></Link></ListItem>
                        </List>
                    </Collapse>
                </List>
                <Divider />
                <List>
                    <ListItem button key="Configuration" onClick={() => this.setState({ isConfigure: !this.state.isConfigure })}>
                        <ListItemIcon>
                            <PermDataSettingTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Configuration" />
                    </ListItem>
                    <Collapse in={this.state.isConfigure} timeout="auto" unmountOnExit>
                        <List>
                            <ListItem><Link to="/Salary"><ListItemText primary="Salary" /></Link></ListItem>
                            <ListItem><Link to="/Rental"><ListItemText primary="Rental" /></Link></ListItem>
                            <ListItem><Link to="/CommissionList"><ListItemText primary="Commission List" /></Link></ListItem>
                            <ListItem><Link to="/NewExpense"><ListItemText primary="New Expense" /></Link></ListItem>
                            <ListItem><Link to="/NewPurchase"><ListItemText primary="New Purchase" /></Link></ListItem>
                            <ListItem><Link to="/DaySummary"><ListItemText primary="Day Summary" /></Link></ListItem>
                            <ListItem><Link to="/SaleReport"><ListItemText primary="Sale Report" /></Link></ListItem>
                            <ListItem><Link to="/Statement"><ListItemText primary="P & L Statement" /></Link></ListItem>
                        </List>
                    </Collapse>
                </List>
                <Divider />
                <List>
                    <ListItem button key="Menu" onClick={() => this.setState({ isMenu: !this.state.isMenu })}>
                        <ListItemIcon>
                            <ReceiptTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Menu" />
                    </ListItem>
                    <Collapse in={this.state.isMenu} timeout="auto" unmountOnExit>
                        <List>
                            <ListItem><Link to="/GstInfo"><ListItemText primary="GST Info" /></Link></ListItem>
                            <ListItem><Link to="/Gst"><ListItemText primary="GST" /></Link></ListItem>
                        </List>
                    </Collapse>
                </List>
            </>
        )
    }
}