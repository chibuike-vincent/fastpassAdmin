import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button } from '@material-ui/core';
import { AdminCreatTenant } from "../../businessLogic";
import { ShowMessage, type } from "../Toaster";
import { Link, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
      display: "flex",
      marginLeft: "5%"
    },
  },
}));

export default function AddTenant({handleClose}) {
  const classes = useStyles();
    const [processing, setProcessing] = React.useState(false)
    const [values, setValues] = React.useState({
      firstName: "",
      lastName: "",
      email:"",
      NOK: "",
      phone:"",
      gender: '',
      occupation: "",
      houseNumber: ''
      });


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      setProcessing(true)
      const res = await AdminCreatTenant({
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone,
        email: values.email,
        gender: values.gender,
        nextOfKin: values.NOK,
        occupation: values.occupation,
        houseNumber: values.houseNumber
      });
      if (res.data.message) {
        setProcessing(false)
        //dispatch( saveAccessToken({payload: res.token}))
        ShowMessage(type.DONE, res.data.message);
        handleClose()
      }else{
        setProcessing(false)
        ShowMessage(type.ERROR, res.data);
      }
    } catch (err) {
      setProcessing(false)
      console.log(err)
    }
  }

  const gender = [
    {
        value:"",
        label:"Select"
    },
    {
        value:"Male",
        label:"Male"
    },
    {
      value:"Female",
      label:"Female"
  },
  ]

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        value={values.firstName}
        onChange={handleChange('firstName')}
        label="First Name"
        variant="outlined"
        className={classes.input}
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        value={values.lastName}
        onChange={handleChange('lastName')}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={values.email}
        onChange={handleChange('email')}
      />
      <TextField
        id="outlined-basic"
        label="Phone"
        variant="outlined"
        value={values.phone}
        onChange={handleChange('phone')}
      />
      <FormControl variant="outlined" className={classes.formControl} className={classes.emailInput}>
        <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
        <Select
          native
          label="Gender"
          value={values.gender}
          onChange={handleChange('gender')}
          inputProps={{
            name: 'type',
            id: 'outlined-age-native-simple',
          }}

        >
          {
            gender.map(val => {
              return (
                <option aria-label={val.label} value={val.value} />
              )
            })
          }

        </Select>
      </FormControl>
      <TextField
        id="outlined-basic"
        label="Next Of Kin"
        variant="outlined"
        value={values.NOK}
        onChange={handleChange('NOK')}
      />
      <TextField
        id="outlined-basic"
        label="Occupation"
        variant="outlined"
        value={values.occupation}
        onChange={handleChange('occupation')}
      />
      <TextField
        id="outlined-basic"
        label="House Number"
        variant="outlined"
        value={values.houseNumber}
        onChange={handleChange('houseNumber')}
      />
      <Button onClick={() => handleSubmit()}>{processing ? (
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={40}
          width={40}
        />
      ) : "Save"}</Button>
    </form>
  );
}
