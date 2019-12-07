import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const Styles = styled.div`
  .contact {
    width: 1850px;
    height: 500px;
    background-color: lightgrey;
  }
  .head1 {
    text-align: center;
    margin-left: -50px;
  }
  .head2 {
    text-align: center;
  }
  span {
    margin-left: 505px;
  }
  .button1 {
    padding: 14px 20px;
    background-color: black;
    color: white;
    width: 700px;
    margin-left: 500px;
    text-align: center;
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 700,
      marginLeft: 500
    }
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <Styles>
      <div className="contact">
        <h1 className="head1">Contact Me</h1>
        <h2 className="head2">
          Do you want me to photograph you? Fill out the form and fill me in
          with the details : I love meeting new people!
        </h2>
        <span>Name</span>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
        <span>Email</span>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
        <span>Message</span>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
        <h3 className="button1">Send a Message</h3>
      </div>
    </Styles>
  );
}
