
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const visitors = [
  {
    id:1,
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
    id:2,
    fullname: "Cynthia Doe",
    house_no: "House 4 unit 3",
    phone_no: "07045789065",
    email: "cynthia@gmail.com",
    gender: "Female",
    status: "checkedout",
    date: "3-09-2021",
    security: "Musa,",
    Message: "Let her go I am ok"
  },
  {
    id:3,
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
    id:4,
    fullname: "Jenny isreal",
    house_no: "House 2 unit 5",
    phone_no: "07045789065",
    email: "jenny@gmail.com",
    gender: "Female",
    status: "active",
    date: "3-09-2021",
    security: "Musa,",
    Message: ""
  },
  {
    id:5,
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
        id:6,
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

const columns = [
  { field: 'fullname', headerName: 'Name', width: 180 },
  {
    field: 'email',
    headerName: 'Email',
    width: 180,
  },
  {
    field: 'phone_no',
    headerName: 'Phone',
    width: 180,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 180,
  },
  {
    field: 'house_no',
    headerName: 'House Number',
    width: 180,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 180,
  },
  {
    field: 'date',
    headerName: 'Date Visited',
    width: 180,
    type:"date"
  },
  {
    field: 'security',
    headerName: 'Security In Charge',
    width: 180,
  },
  {
    field: 'Message',
    headerName: 'Message',
    width: 180,
  },

];

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 400,
  },
});

export default function FilterOperators() {
  const classes = useStyles();

  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 100,
  });

  console.log(data, "data")
  return (
    <Paper className={classes.root}>
      <DataGrid rows={visitors} columns={columns} />
    </Paper>
  );
}



