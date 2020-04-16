import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Small from "components/Typography/Small.jsx";
import Danger from "components/Typography/Danger.jsx";
import Warning from "components/Typography/Warning.jsx";
import Success from "components/Typography/Success.jsx";
import Info from "components/Typography/Info.jsx";
import Primary from "components/Typography/Primary.jsx";
import Muted from "components/Typography/Muted.jsx";
import Quote from "components/Typography/Quote.jsx";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import image from "assets/img/faces/avatar.jpg";
class SectionTypography extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="typography">
            <div className={classes.title}>
              <h2>Work</h2>
            </div>
            <GridContainer>
            <div className={classes.typo}>
                <div className={classes.note}>TriveWealth</div>
                <ul>
                  <li>Wealth management system.</li>
                  <li>Developed app using React-Native for both IOS and Android.</li>
                  <li>Implemented Redux dataflow in Web and Mobile-APP.</li>
                  <li>API deep integrations with both platforms.</li>
                  <li>FireBase integration for notifications</li>
                  <li>AzureDevOps for (git) verison controlling and CD/CI pipelines.</li>
                  <li>Appcenter setup for app testing.</li>
                  <li>Integrated with Redux Saga for API handlers in Web and Mobile-APP.</li>
                  <li>Improved user experience through technical way such like reducing code base, reducing http requests, and compatibility with each platform. </li>
                  <li>Builded reusable and maintainable components base on React Native and React.</li>
                </ul>

              </div>
            <div className={classes.typo}>
                <div className={classes.note}>IonAssist</div>
                <ul>
                  <li>Developed to eliminate on-site failure, ION ASSIST ensures your team has unprecedented access to your technical and delivery support resources.</li>
                  <li>Developed app using React-Native for both IOS and Android.</li>
                  <li>Implemented Redux dataflow in Web and Mobile-APP.</li>
                  <li>API deep integrations with both platforms.</li>
                  <li>Used agora for one to one video calling.</li>
                  <li>FireBase integration for realtime chats and notifications</li>
                  <li>AzureDevOps for (git) verison controlling and CD/CI pipelines.</li>
                  <li>Appcenter setup for app testing.</li>
                  <li>Integrated with Redux Saga for API handlers in Web and Mobile-APP.</li>
                  <li>Improved user experience through technical way such like reducing code base, reducing http requests, and compatibility with each platform. </li>
                  <li>Builded reusable and maintainable components base on React Native and React.</li>
                  <li>Diagnosed and fixed bugs and performance bottlenecks for performance that feels native.</li>
                  <li>Implement the server side with Node.js, Express.js and MongoDB</li>
                  <li>Handling the back-end in the process of building the RESTful API</li>
                </ul>

              </div>
              <div className={classes.typo}>
                <div className={classes.note}>MobileOffize</div>
                <ul>
                  <li>Mobile-Office is an app used to manage, assign and review task within an organization</li>
                  <li>Developed Web in React JS.</li>
                  <li>Developed app using React-Native.</li>
                  <li>Implemented Redux dataflow in Web and Mobile-APP.</li>
                  <li>FireBase integration for realtime chats and notifications</li>
                  <li>AzureDevOps for (git) verison controlling and CD/CI pipelines.</li>
                  <li>Appcenter setup for app testing.</li>
                  <li>Integrated with Redux Saga for API handlers in Web and Mobile-APP.</li>
                  <li>Improved user experience through technical way such like reducing code base, reducing http requests, and compatibility with each platform. </li>
                  <li>Builded reusable and maintainable components base on React Native and React.</li>
                  <li>Diagnosed and fixed bugs and performance bottlenecks for performance that feels native.</li>
                  <li>Implement the server side with Node.js, Express.js and MongoDB</li>
                  <li>Handling the back-end in the process of building the RESTful API</li>
                </ul>

              </div>

              <div className={classes.typo}>
                <div className={classes.note}>Navigo</div>
                <ul>
                  <li>Navigo is a cloud based compliance management tool to help mid-market organizations track and manage their regulatory and compliance requirements in real time</li>
                  <li>Designed and developed web application in MEAN stack</li>
                  <li>Developed front-end in Angular JS, HTML, Bootstrap and CSS</li>
                  <li>Used Chart Js for various charts.</li>
                  <li>Developed Back-end in Node Js, Express Js and MongoDb.</li>
                  <li>Handling the back-end in the process of building the RESTful API.</li>
                  <li>Responsible for integration of front-end with back-end.</li>
                  <li>Design and implementation of low-latency, high-availability, and performant App.</li>
                </ul>
              </div>

              <div className={classes.typo}>
                <div className={classes.note}>Click2Race</div>
                <ul>
                  <li>Click2Race is one stop solution to register for all their happening races in India</li>
                  <li>Designed and developed web application in MEAN stack.</li>
                  <li>Back-end implemented with Node Js using Typescript.</li>
                  <li>Handling the back-end in the process of building the RESTful API.</li>
                  <li>Database handled using MongoDb.</li>
                  <li>Developed front-end in Angular 4. Bootstrap and Css.</li>
                  <li>Responsible for Payment Gateway Implementation.</li>
                </ul>
              </div>

              <div className={classes.typo}>
                <div className={classes.note}>Stohke</div>
                <ul>
                  <li>Stohke is a social platform that brings the world’s best brands, athletes and causes to your fingertips. Browse feeds that inspire you into action every day.</li>
                  <li>Redesigned website also developed based on customer review.</li>
                  <li>Developed Stohke social platform using angular JS and Bootstrap.</li>
                  <li>Major Architecture cleanup and refactor of the Angular 1.x App.</li>
                  <li>Responsible for the new features implemented in App.</li>
                  <li>Responsible for integration of front-end with back-end.</li>
                  <li>Responsible for performance and mobile responsiveness.</li>
                </ul>
              </div>

              <div className={classes.typo}>
                <div className={classes.note}>Vidyanext</div>
                <ul>
                  <li>Vidyanext combines in-person, one-to-one teaching with dynamic practice to reduce the amount of time, CBSE &amp; ICSE – Maths &amp; Science students, 4th – 10th grade, need to spend studying to achieve their target marks.</li>
                  <li>Developed front-end in Angular 1, HTML, Bootstrap and CSS.</li>
                  <li>Responsible for integration of front-end with back-end.</li>
                  <li>Design and implementation of low-latency, high-availability, and performant App.</li>
                </ul>
              </div>


            </GridContainer>
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(typographyStyle)(SectionTypography);
