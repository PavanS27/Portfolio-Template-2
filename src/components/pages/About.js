import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const Styles = styled.div`
  .about {
    width: 1850px;
    background-color: grey;
    height: 950px;
  }
  .header1 {
    text-align: center;
    margin-left: -50px;
  }
  .image1 {
    height: 400px;
    width: 600px;
    margin-left: -350px;
  }
  .image2 {
    height: 400px;
    width: 600px;
    margin-left: -180px;
  }
  .name1 {
    margin-left: -100px;
  }
  .name2 {
    margin-left: 80px;
  }
  .info1 {
    margin-left: -250px;
    width: 500px;
  }
  .info2 {
    margin-left: -100px;
    width: 500px;
  }
  .mail1 {
    margin-left: -250px;
  }
  .mail2 {
    margin-left: -100px;
  }
  .phone1 {
    margin-left: -250px;
  }
  .phone2 {
    margin-left: -100px;
  }
  .button1 {
    margin-left: -250px;
    padding: 14px 16px;
    background-color: lightgreen;
    width: 180px;
  }
  .button2 {
    margin-left: -100px;
    padding: 14px 16px;
    background-color: lightgreen;
    width: 180px;
  }
`;

export default function About() {
  return (
    <Styles>
      <div className="about">
        <h1 className="header1">About us</h1>
        <Grid container spacing={3} style={{ padding: 40, paddingLeft: 550 }}>
          <Grid item xs={6}>
            <img
              src="https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png"
              className="image1"
            />
            <h1 className="name1">Name</h1>
            <p className="info1">
              Some text about me. I love taking photos of PEOPLE. I am lorem
              ipsum consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <span className="mail1">mail: example@example.com</span>
            <h5 className="phone1">tel: 5353 35531</h5>
            <h3 className="button1">Download resume</h3>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png"
              className="image2"
            />
            <h1 className="name2">Name</h1>
            <p className="info2">
              Some text about me. I love taking photos of PEOPLE. I am lorem
              ipsum consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <span className="mail2">mail: example@example.com</span>
            <h5 className="phone2">tel: 5353 35531</h5>
            <h3 className="button2">Download resume</h3>
          </Grid>
        </Grid>
      </div>
    </Styles>
  );
}
