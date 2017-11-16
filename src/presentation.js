import React from "react";
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Fill,
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import "normalize.css";
import "./styles.css"

import wavingHand from "./images/wave.png";
import pathAILogo from "./images/pathai.png";
import profilePic from "./images/leo-profile.png";
import mitLogo from "./images/mit.png"
import caracas from "./images/caracas.png"
import venezuelaMap from "./images/venezuela-map.png"
import venezuelaProtest from "./images/venezuela-protest.jpg"
import bitsight from "./images/bitsight.png"
import hubspot from "./images/hubspot.png"
import drift from "./images/drift.png"
import jsLogo from "./images/js.png"
import crying from "./images/crying.jpg"
import customer from "./images/customer.jpg"

const theme = createTheme(
  {
    primary: "#12BB93",
    secondary: "white",
    tertiary: "#1F2022",
    quaternary: "#CECECE",
  },
  {
    primary: "Proxima Nova",
    secondary: "Helvetica",
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
      >
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit lineHeight={1} textColor="tertiary">
            Hey everyone
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            I'm Leo <img alt="hand wave emoji" style={{width: "0.75em" }} src={wavingHand}/>
          </Text>
        </Slide>
        <Slide>
          <Heading size={3} fit>
            Here's what we'll chat about
          </Heading>
          <List className="big">
            <Appear><ListItem>A bit about me</ListItem></Appear>
            <Appear><ListItem>Why I think <img alt="pathAI logo" style={{height: "0.75em"}} src={pathAILogo}/> is awesome 🚀</ListItem></Appear>
            <Appear><ListItem>I'll tell you a story about JavaScript</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading>Who am I? <img className="profilepic" src={profilePic} /></Heading>
        </Slide>
        <Slide>
          <Heading size={3}>Venezuela</Heading>
          <img className="full" src={venezuelaMap} />
        </Slide>
        <Slide>
          <Heading size={3}>Caracas</Heading>
          <img className="full" src={caracas} />
        </Slide>
        <Slide>
          <img className="full" src={venezuelaProtest} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading
            style={{ marginBottom: "4rem" }}
            textColor="tertiary"
            size={1}>
            My journey so far
          </Heading>
          <Fill>
            <div className="row">
              <Appear><img className="mit logo" src={mitLogo} /></Appear>
              <Appear><img className="bitsight logo" src={bitsight} /></Appear>
            </div>
          </Fill>
          <Fill>
            <div className="row">
              <Appear><img className="hubspot logo" src={hubspot} /></Appear>
              <Appear><img className="drift logo" src={drift} /></Appear>
            </div>
          </Fill>
        </Slide>
        <Slide>
          <Heading fit>I want to continue learning</Heading>
        </Slide>
        <Slide>
          <Heading fit>I want to have a real impact</Heading>
        </Slide>
        <Slide>
          <Fill>
            <img className="path-ai logo large" src={pathAILogo} />
          </Fill>
        </Slide>
        <Slide>
          <Heading>Story time!</Heading>
        </Slide>
        <Slide>
          <img className="drift logo large" src={drift} />
        </Slide>
        <Slide>
          <Fill>
            <div className="row">
              <Heading>Fatigue</Heading>
              <img style={{ marginLeft: "2rem"}} className="logo large" src={jsLogo}/>
            </div>
          </Fill>
        </Slide>
        <Slide>
          <Heading>The Setup</Heading>
          <List>
            <Appear><ListItem>Server-Side Rendered React</ListItem></Appear>
            <Appear><ListItem>MartyJS (non-standard Flux)</ListItem></Appear>
            <Appear><ListItem>Home-grown component and CSS library</ListItem></Appear>
            <Appear><ListItem>+ Two other component libraries</ListItem></Appear>
            <Appear><ListItem>>1000 lines Webpack (build) config</ListItem></Appear>
            <Appear><ListItem>Random new libraries added every day</ListItem></Appear>
            <Appear><ListItem>0 tests</ListItem></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading>Result</Heading>
          <List>
            <Appear><ListItem>Extremely fragile app</ListItem></Appear>
            <Appear><ListItem>Heisenbugs were everywhere</ListItem></Appear>
            <Appear><ListItem>>40 min. production build</ListItem></Appear>
            <Appear><ListItem>>10 min. local dev build, rebuilds took > 1 min.</ListItem></Appear>
          </List>
        </Slide>
        <Slide>

        </Slide>
        <Slide>
          <Heading style={{ marginBottom: "2rem" }}>Why?!</Heading>
          <img src={crying} />
        </Slide>
      </Deck>
    );
  }
}
