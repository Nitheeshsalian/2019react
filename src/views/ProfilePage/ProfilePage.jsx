import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import profile from "assets/img/IMG_20181201_193612_651.jpg";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.jsx";
import SectionTypography from "../Components/Sections/SectionTypography.jsx";
import work1 from "assets/img/Image-result-for-aws-logo-png.png";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Nitheesh Salian"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/IMG_20180119_203821_617.jpg")} >
          {/* <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <GridItem xs={12} sm={12} md={4}>
                    <img
                      alt="..."
                      src={work1}
                      className={navImageClasses}
                    />
                  </GridItem>
                </div>
              </GridItem>
            </GridContainer>
          </div> */}
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h1 className={classes.title}>NITHEESH SALIAN</h1>
                      <h3>Software Developer</h3>
                      {/* <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button> */}
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Experienced Software Developer. Currently working in Skiploop Labs Pvt Ltd. Skilled in React-Native, React Js, Angular Js, Node Js, MongoDb, Css and HTML. My role includes taking ownership of the products, developing and updating them. Focused on newest web technologies..{" "}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={10} className={classes.navWrapper}>
                  <CustomTabs
                    headerColor="info"
                    tabs={[
                      {
                        tabName: "Skills",
                        tabContent: (
                          <p className={classes.textCenter}>
                            <div>
                              <div style={{ display: "flex", flexDirection: "row" }}>React-Native</div>
                              <CustomLinearProgress
                                variant="determinate"
                                color="success"
                                value={70}
                              />
                            </div>

                            <div>
                              <div style={{ display: "flex", flexDirection: "row" }}>React JS</div>
                              <CustomLinearProgress
                                variant="determinate"
                                color="success"
                                value={80}
                              />
                            </div>

                            <div>
                              <div style={{ display: "flex", flexDirection: "row" }}>Angular JS</div>
                              <CustomLinearProgress
                                variant="determinate"
                                color="success"
                                value={85}
                              />
                            </div>

                            <div>
                              <div style={{ display: "flex", flexDirection: "row" }}>Node JS</div>
                              <CustomLinearProgress
                                variant="determinate"
                                color="success"
                                value={50}
                              />
                            </div>

                            <div>
                              <div style={{ display: "flex", flexDirection: "row" }}>Redux</div>
                              <CustomLinearProgress
                                variant="determinate"
                                color="success"
                                value={30}
                              />
                            </div>

                            <div>
                              <div style={{ display: "flex", flexDirection: "row" }}>Redux-Saga</div>
                              <CustomLinearProgress
                                variant="determinate"
                                color="success"
                                value={75}
                              />
                            </div>

                            <div>
                              <div style={{ display: "flex", flexDirection: "row" }}>Redux</div>
                              <CustomLinearProgress
                                variant="determinate"
                                color="success"
                                value={60}
                              />
                            </div>

                            <div>
                              <div style={{ display: "flex", flexDirection: "row" }}>Mongo DB</div>
                              <CustomLinearProgress
                                variant="determinate"
                                color="success"
                                value={35}
                              />
                            </div>

                            <div>
                              <div style={{ display: "flex", flexDirection: "row" }}>TypeScript</div>
                              <CustomLinearProgress
                                variant="determinate"
                                color="success"
                                value={49}
                              />
                            </div>

                            <div>
                              <div style={{ display: "flex", flexDirection: "row" }}>JavaScript</div>
                              <CustomLinearProgress
                                variant="determinate"
                                color="success"
                                value={65}
                              />
                            </div>

                            <div>
                              <div style={{ display: "flex", flexDirection: "row" }}>CSS</div>
                              <CustomLinearProgress
                                variant="determinate"
                                color="success"
                                value={70}
                              />
                            </div>
                          </p>
                        )
                      }
                    ]} />
                </GridItem>
              </GridContainer>
      

              <SectionTypography/>
              <div className={classes.section} >
                <div className={classes.container} style={{ paddingBottom: 40 }}>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                      <h2>Education</h2>
                      <h4>B.E. in Computer Science & Engineering </h4>
                      <h5>Vishveshwarya institute of technology Belgaum</h5>

                    </GridItem>
                  </GridContainer>
                </div>
              </div>
              <div className={classes.section} >
                <div className={classes.container} style={{ paddingBottom: 40 }}>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                      <h2>Contact</h2>
                      <h4>#26 Behind Pepper's Restaurant, Sri Ram temple road Ejipura Bengaluru - 560097</h4>
                      <h4>+91 8197803551             </h4>
                      <h4>nitheeshsalian@gmail.com</h4>
                    </GridItem>
                  </GridContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
