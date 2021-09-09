import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import TablePagination from '@material-ui/core/TablePagination';
import Modal from "../modal/modal"
import VisitorTable from "../visitorTable/table"
import UpdateTenant from "../Forms/UpdateTenant"
import Warning from "../DeleteWarning/Warning"

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
      borderTop: "1px solid rgba(224, 224, 224, 1)"
    },
  },
  tableHead: {
    color:"#fff",
    backgroundColor:"red"
  }
});



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.fullname}
        </TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.phone}</TableCell>
        <TableCell align="right">{row.gender}</TableCell>
        <TableCell align="right">{row.NOK}</TableCell>
        <TableCell align="right">{row.occupation}</TableCell>
        <TableCell align="right">{row.House_No}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div style={{ display: "flex", marginTop: 25, width: 130, float: "right", justifyContent: "space-between" }}>
              <div style={{ width: 60, display: "flex", alignItems: "center", justifyContent: "center", height: 25, cursor: "pointer", borderRadius: 7, backgroundColor: "#00000025", color: "#36466F" }}>
                <p style={{ fontWeight: "bold" }}>
                  <Modal Component={UpdateTenant} title="Update Tenant" buttonTitle="Update" />
                </p>
              </div>
              <div style={{ width: 60, display: "flex", alignItems: "center", justifyContent: "center", height: 25, cursor: "pointer", borderRadius: 7, backgroundColor: "#00000025", color: "red" }}>
                <p style={{ fontWeight: "bold" }}>
                  <Modal Component={Warning} buttonTitle="Delete" />
                </p>
              </div>
            </div>

            <Box margin={1}>
              <div style={{ display: "flex" }}>
                <h2>
                  Visitors
                </h2>
                <div style={{ color: "blue", fontSize: 12, cursor: "pointer", marginTop: 14, marginLeft: 5 }}><Modal Component={VisitorTable} buttonTitle="View All" width="90%" /></div>
              </div>
              <Table size="small" aria-label="purchases" >
                <TableHead  >
                  <TableRow >
                    <TableCell className={classes.tableHead}>Name</TableCell>
                    <TableCell >Email</TableCell>
                    <TableCell align="right">Phone</TableCell>
                    <TableCell align="right">Gender</TableCell>
                    <TableCell align="right">House No</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Visit Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {row.visitors.map((visitor) => (
                    <TableRow key={visitor.email} >
                      <TableCell component="th" scope="row">
                        {visitor.fullname}
                      </TableCell>
                      <TableCell>{visitor.email}</TableCell>
                      <TableCell align="right">{visitor.phone_no}</TableCell>
                      <TableCell align="right">
                        {visitor.gender}
                      </TableCell>
                      <TableCell align="right">
                        {visitor.house_no}
                      </TableCell>
                      <TableCell align="right">
                        {visitor.status}
                      </TableCell>
                      <TableCell align="right">
                        {visitor.date}
                      </TableCell>
                     
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

    </React.Fragment>
  );
}

const rows = [
  {
    fullname:"John Doe",
    email:"johndoe@gmail.com",
    phone: "09023232323",
    gender: "Male",
    NOK: "Mr. Doe",
    occupation:"Software engineer", 
    House_No: "House 4 unit 3",
    visitors: [
      {
        fullname: "Emmanuel Doe",
        house_no: "House 4 unit 3",
        phone_no: "09045434323",
        email: "emmanel@gmail.com",
        gender: "Male",
        status: "active",
        date: "3-09-2021",
        security: "Musa,",
        Message: ""
      },
      {
        fullname: "Cynthia Doe",
        house_no: "House 4 unit 3",
        phone_no: "07045789065",
        email: "cynthia@gmail.com",
        gender: "Female",
        status: "checkedout",
        date: "3-09-2021",
        security: "Musa,",
        Message: "Let her go I am ok"
      }
    ]
  },
  {
    fullname:"Vincent Kai",
    email:"vincent@gmail.com",
    phone: "09023232323",
    gender: "Male",
    NOK: "Mr. Kai ogbogbogbogbo",
    occupation:"Software engineer", 
    House_No: "House 2 unit 5",
    visitors: [
      {
        fullname: "Micheal Doe",
        house_no: "House 2 unit 5",
        phone_no: "09045434323",
        email: "micheal@gmail.com",
        gender: "Male",
        status: "checkedOut",
        date: "3-09-2021",
        security: "Musa,",
        Message: "Let him go I am fine"
      },
      {
        fullname: "Jenny isreal",
        house_no: "House 2 unit 5",
        phone_no: "07045789065",
        email: "jenny@gmail.com",
        gender: "Female",
        status: "active",
        date: "3-09-2021",
        security: "Musa,",
        Message: ""
      }
    ]
  },
  {
    fullname:"Elon musk",
    email:"elon@gmail.com",
    phone: "09023232323",
    gender: "Male",
    NOK: "Mr. Musk",
    occupation:"Software engineer", 
    House_No: "House 1 unit 9",
    visitors: [
      {
        fullname: "Sunday Smith",
        house_no: "House 1 unit 9",
        phone_no: "09045434323",
        email: "sunday@gmail.com",
        gender: "Male",
        status: "Checkedout",
        date: "3-09-2021",
        security: "Musa,",
        Message: "His visit was harmless"
      },
      {
        fullname: "Miracle Effiong",
        house_no: "House 1 unit 9",
        phone_no: "07045789065",
        email: "miracle@gmail.com",
        gender: "Female",
        status: "active",
        date: "3-09-2021",
        security: "Musa,",
        Message: ""
      }
    ]
  },

]

export default function TenantTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">NOK</TableCell>
            <TableCell align="right">Occupation</TableCell>
            <TableCell align="right">House No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
            return (
              <Row key={row.name} row={row} />
            );
          })}

        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
