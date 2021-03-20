import React from 'react';
import MUIDataTable from "mui-datatables";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

export default class Floor extends React.Component{
    constructor(){
        super();
        this.state = {
            isPop : false,
        }
    }

    render(){
        const columns = ["Sr. No", "Name/Title", "Floor No.", "Action"];
        const data = [
            ["1", "BASEMENT", "5", "Edit/Delete"],
            ["2", "GROUND FLOOR", "12", "Edit/Delete"],
            ["3", "FIRST FLOOR", "3", "Edit/Delete"],
        ]

        const options = {
            filterType: "dropdown",
            responsive: "scroll"
        };
        return(
            <Typography>
                <Tooltip title="Add" aria-label="add">
                    <IconButton aria-label="Add">
                        <AddCircleOutlineTwoToneIcon onClick={() => this.setState({ isPop: true })} />
                    </IconButton>
                </Tooltip>
                <MUIDataTable
                    title={"Floor List"}
                    data={data}
                    columns={columns}
                    options={options}
                />

                <div>
                    <Dialog onClose={() => this.setState({ isPop: false })} aria-labelledby="add-category-title" open={this.state.isPop}>
                        <MuiDialogTitle disableTypography >
                            <Typography variant="h6">Add Floor</Typography>
                        </MuiDialogTitle>
                        <MuiDialogContent dividers>
                            <Typography gutterBottom>
                                <TextField id="outlined-basic" label="Name / Title" variant="outlined" />
                            </Typography>
                            <Typography gutterBottom>
                                <TextField id="outlined-basic" label="Floor Name" variant="outlined" />
                            </Typography>
                        </MuiDialogContent>
                        <MuiDialogActions>
                            <Button autoFocus onClick={() => this.setState({ isPop: false })} color="primary">
                                Save
                            </Button>
                            <Button onClick={() => this.setState({ isPop: false })} color="secondary">
                                Close
                            </Button>
                        </MuiDialogActions>
                    </Dialog>
                </div>
            </Typography>
        )
    }
}