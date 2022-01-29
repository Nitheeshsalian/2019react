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
              <h2>Projects</h2>
            </div>
            <GridContainer>
              <div className={classes.typo}>
                <div className={classes.note}>
                  <a href="https://www.bestbuy.com/">OPTIC BestBuy</a>
                </div>
                <ul>
                  <li>
                    Building Large Product Fulfillment Process by providing
                    Visibility to Data and eliminating manual process.
                  </li>
                  <li>Participating in agile development methodology.</li>
                  <li>
                    Understanding client requirements and implementing best
                    possible solution.
                  </li>
                  <li>Devivering productin desired timeframe.</li>
                  <li>Involving in product design and architecture.</li>
                  <li>React js architecture for front end with test cases.</li>
                  <li>Spring boot in backend as microservices.</li>
                  <li>Subordinates training and code reviews.</li>
                  <li>Cassandra db management.</li>
                  <li>Automated build process.</li>
                </ul>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>
                  <a href="https://www.zetwerk.com/">Ziso ZETWERK</a>
                </div>
                <ul>
                  <li>
                    Actively participate in the implementation of complex Ziso
                    software, major enhancements to it.
                  </li>
                  <li>
                    Developing frontend with angular js with optimisation and
                    integrating with api
                  </li>
                  <li>
                    Writing microservices with Nodejs, Kafka, Mongoose for
                    better performance.
                  </li>
                  <li>
                    Writing REST api in Node Js and updating existing API with
                    better performance enhancements.
                  </li>
                  <li>
                    Perform application coding and programming. Conduct design
                    and code review.
                  </li>
                  <li>Testing software in controlled, real life situations.</li>
                  <li>
                    Work with team in planning, prioritising and executing
                    assigned task with deadline.
                  </li>
                  <li>
                    Follow and contribute to improvements in teams agile and
                    engineering practices.
                  </li>
                  <li>
                    Mentor junior developers on software development and
                    documentation best practices within the organisation.
                  </li>
                </ul>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>
                  <a href="http://ohshoot.io">Oh Shoot </a>
                </div>
                <ul>
                  <li>
                    Oh Shoot! is a two sided services marketplace made for
                    college campuses.
                  </li>
                  <li>
                    Developed app using React-Native for both IOS and Android.
                  </li>
                  <li>Implemented Redux dataflow in Web and Mobile-APP.</li>
                  <li>
                    Sendbird messaging and notification feature implementation.
                  </li>
                  <li>Stripe payments integrations</li>
                  <li>
                    Integrated with Redux Saga for API handlers in Web and
                    Mobile-APP.
                  </li>
                  <li>
                    Builded reusable and maintainable components base on React
                    Native and React.
                  </li>
                </ul>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>
                  {" "}
                  <a href="https://thrivewealth.in/">TriveWealth</a>
                </div>
                <ul>
                  <li>Wealth management system.</li>
                  <li>
                    Developed app using React-Native for both IOS and Android.
                  </li>
                  <li>Implemented Redux dataflow in Web and Mobile-APP.</li>
                  <li>API deep integrations with both platforms.</li>
                  <li>FireBase integration for notifications</li>
                  <li>
                    AzureDevOps for (git) verison controlling and CD/CI
                    pipelines.
                  </li>
                  <li>Appcenter setup for app testing.</li>
                  <li>
                    Integrated with Redux Saga for API handlers in Web and
                    Mobile-APP.
                  </li>
                  <li>
                    Improved user experience through technical way such like
                    reducing code base, reducing http requests, and
                    compatibility with each platform.{" "}
                  </li>
                  <li>
                    Builded reusable and maintainable components base on React
                    Native and React.
                  </li>
                </ul>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>
                  {" "}
                  <a href="http://ionassist.com/">IonAssist</a>
                </div>
                <ul>
                  <li>
                    Developed to eliminate on-site failure, ION ASSIST ensures
                    your team has unprecedented access to your technical and
                    delivery support resources.
                  </li>
                  <li>
                    Developed app using React-Native for both IOS and Android.
                  </li>
                  <li>Implemented Redux dataflow in Web and Mobile-APP.</li>
                  <li>API deep integrations with both platforms.</li>
                  <li>Used agora for one to one video calling.</li>
                  <li>
                    FireBase integration for realtime chats and notifications
                  </li>
                  <li>
                    AzureDevOps for (git) verison controlling and CD/CI
                    pipelines.
                  </li>
                  <li>Appcenter setup for app testing.</li>
                  <li>
                    Integrated with Redux Saga for API handlers in Web and
                    Mobile-APP.
                  </li>
                  <li>
                    Improved user experience through technical way such like
                    reducing code base, reducing http requests, and
                    compatibility with each platform.{" "}
                  </li>
                  <li>
                    Builded reusable and maintainable components base on React
                    Native and React.
                  </li>
                  <li>
                    Diagnosed and fixed bugs and performance bottlenecks for
                    performance that feels native.
                  </li>
                  <li>
                    Implement the server side with Node.js, Express.js and
                    MongoDB
                  </li>
                  <li>
                    Handling the back-end in the process of building the RESTful
                    API
                  </li>
                </ul>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>
                  {" "}
                  <a href="https://mobileoffize.com/">MobileOffize</a>
                </div>
                <ul>
                  <li>
                    Mobile-Office is an app used to manage, assign and review
                    task within an organization
                  </li>
                  <li>Developed Web in React JS.</li>
                  <li>Developed app using React-Native.</li>
                  <li>Implemented Redux dataflow in Web and Mobile-APP.</li>
                  <li>
                    FireBase integration for realtime chats and notifications
                  </li>
                  <li>
                    AzureDevOps for (git) verison controlling and CD/CI
                    pipelines.
                  </li>
                  <li>Appcenter setup for app testing.</li>
                  <li>
                    Integrated with Redux Saga for API handlers in Web and
                    Mobile-APP.
                  </li>
                  <li>
                    Improved user experience through technical way such like
                    reducing code base, reducing http requests, and
                    compatibility with each platform.{" "}
                  </li>
                  <li>
                    Builded reusable and maintainable components base on React
                    Native and React.
                  </li>
                  <li>
                    Diagnosed and fixed bugs and performance bottlenecks for
                    performance that feels native.
                  </li>
                  <li>
                    Implement the server side with Node.js, Express.js and
                    MongoDB
                  </li>
                  <li>
                    Handling the back-end in the process of building the RESTful
                    API
                  </li>
                </ul>
              </div>

              <div className={classes.typo}>
                <div className={classes.note}>
                  <a href="https://www.arithra.com/navigo/">Navigo</a>
                </div>
                <ul>
                  <li>
                    Navigo is a cloud based compliance management tool to help
                    mid-market organizations track and manage their regulatory
                    and compliance requirements in real time
                  </li>
                  <li>Designed and developed web application in MEAN stack</li>
                  <li>
                    Developed front-end in Angular JS, HTML, Bootstrap and CSS
                  </li>
                  <li>Used Chart Js for various charts.</li>
                  <li>
                    Developed Back-end in Node Js, Express Js and MongoDb.
                  </li>
                  <li>
                    Handling the back-end in the process of building the RESTful
                    API.
                  </li>
                  <li>
                    Responsible for integration of front-end with back-end.
                  </li>
                  <li>
                    Design and implementation of low-latency, high-availability,
                    and performant App.
                  </li>
                </ul>
              </div>

              <div className={classes.typo}>
                <div className={classes.note}>
                  <a href="https://click2race.com/#/home">Click2Race</a>
                </div>
                <ul>
                  <li>
                    Click2Race is one stop solution to register for all their
                    happening races in India
                  </li>
                  <li>Designed and developed web application in MEAN stack.</li>
                  <li>Back-end implemented with Node Js using Typescript.</li>
                  <li>
                    Handling the back-end in the process of building the RESTful
                    API.
                  </li>
                  <li>Database handled using MongoDb.</li>
                  <li>Developed front-end in Angular 4. Bootstrap and Css.</li>
                  <li>Responsible for Payment Gateway Implementation.</li>
                </ul>
              </div>

              <div className={classes.typo}>
                <div className={classes.note}>
                  <a href="http://stohke.com/">Stohke</a>
                </div>
                <ul>
                  <li>
                    Stohke is a social platform that brings the world’s best
                    brands, athletes and causes to your fingertips. Browse feeds
                    that inspire you into action every day.
                  </li>
                  <li>
                    Redesigned website also developed based on customer review.
                  </li>
                  <li>
                    Developed Stohke social platform using angular JS and
                    Bootstrap.
                  </li>
                  <li>
                    Major Architecture cleanup and refactor of the Angular 1.x
                    App.
                  </li>
                  <li>Responsible for the new features implemented in App.</li>
                  <li>
                    Responsible for integration of front-end with back-end.
                  </li>
                  <li>
                    Responsible for performance and mobile responsiveness.
                  </li>
                </ul>
              </div>

              <div className={classes.typo}>
                <div className={classes.note}>
                  <a href="https://www.vidyanextinstitute.com/">Vidyanext</a>
                </div>
                <ul>
                  <li>
                    Vidyanext combines in-person, one-to-one teaching with
                    dynamic practice to reduce the amount of time, CBSE &amp;
                    ICSE – Maths &amp; Science students, 4th – 10th grade, need
                    to spend studying to achieve their target marks.
                  </li>
                  <li>
                    Developed front-end in Angular 1, HTML, Bootstrap and CSS.
                  </li>
                  <li>
                    Responsible for integration of front-end with back-end.
                  </li>
                  <li>
                    Design and implementation of low-latency, high-availability,
                    and performant App.
                  </li>
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
