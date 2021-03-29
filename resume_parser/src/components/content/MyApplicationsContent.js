import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein, val) {
  return { name, calories, fat, carbs, protein, val };
}

const rows = [
  createData(1,1111,"SDE-3","Google","04/04/2021", "Accepted" ),
  createData(1,1111,"SDE-3","Google","04/04/2021", "Accepted" ),
  createData(1,1111,"SDE-3","Google","04/04/2021", "Accepted" ),
  createData(1,1111,"SDE-3","Google","04/04/2021", "Accepted" ),
  createData(1,1111,"SDE-3","Google","04/04/2021", "Accepted" ),
  createData(1,1111,"SDE-3","Google","04/04/2021", "Accepted" ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function MyApplicationsContent() {
  const classes = useStyles();

  return (
    <div>
        <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          All Previous Applications
        </Typography>
        <br></br>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Serial No.</StyledTableCell>
              <StyledTableCell >Application ID</StyledTableCell>
              <StyledTableCell >Position</StyledTableCell>
              <StyledTableCell >Company</StyledTableCell>
              <StyledTableCell >Applied At</StyledTableCell>
              <StyledTableCell >Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell >{row.calories}</StyledTableCell>
                <StyledTableCell >{row.fat}</StyledTableCell>
                <StyledTableCell >{row.carbs}</StyledTableCell>
                <StyledTableCell >{row.protein}</StyledTableCell>
                <StyledTableCell >{row.val}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </CardContent>
      </Card>
    </div>
  );
}

export default MyApplicationsContent;
