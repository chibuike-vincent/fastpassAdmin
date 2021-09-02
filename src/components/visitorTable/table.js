
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const columns = [
  { field: 'name', headerName: 'Name', width: 180 },
  {
    field: 'rating',
    headerName: 'Rating',
    type: 'number',
    width: 140,
  },
  {
    field: 'dateCreated',
    headerName: 'Created on',
    width: 180,
    type: 'date',
  },
  {
    field: 'isAdmin',
    headerName: 'Is admin?',
    width: 180,
    type: 'boolean',
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 180,
    type: 'button',
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

  return (
    <Paper className={classes.root}>
      <DataGrid rows={data.rows} columns={columns} />
    </Paper>
  );
}



