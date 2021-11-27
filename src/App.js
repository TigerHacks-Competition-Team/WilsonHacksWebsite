import React, { Component } from "react";
import logo from "./logo.svg";
import header from "./assets/images/ttl01.png";
import social from "./assets/images/instagram_logo.png";
import scimatech from "./assets/images/SciMaTech_logo.png";
import "./assets/App.css";
import "./assets/Home.css";

export default class App extends Component {
  onload() {
    var elementClass = "current_page_item";
    document.getElementById("home").className = elementClass;

    //getData()
    // MLH Link: https://my.mlh.io/oauth/authorize?client_id=d5074f807557a6205caf0107c4c430f734c9e1ff5d190974b63c6b110ab1c1b4&redirect_uri=https://wilsonhacks.org/oauth/callback.html&response_type=token
  }

  async componentDidMount() {
    document.title = "WilsonHacks";
    window.addEventListener("resize", () => {
      this.setState({ w: window.innerWidth });
    });

    let data = await this.getData();
    this.setState({ data: data });
  }
  getData() {
    return new Promise(async (resolve, reject) => {
      let d = await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      d = d.json();
      resolve(d);
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      w: window.innerWidth,
      data: {},
    };
    this.getData = this.getData.bind(this);
  }

  render() {
    let width = 0.1 * this.state.w;
    let time = new Date();
    let releaseTime = new Date(
      "Sun Feb 07 2021 09:59:90 GMT-0500 (Eastern Standard Time)"
    ); //Wed Feb 07 2021 10:00:00 GMT-0500 (Eastern Standard Time)
    let openingTime = new Date(
      "Sat Dec 11 2021 11:00:90 GMT-0500 (Eastern Standard Time)"
    );
    console.log("render data: " + JSON.stringify(this.state.data));
    return (
      <div>
        <head>
          <meta charset="utf-8" />
          <meta
            name="description"
            content="A hackathon by Woodrow Wilson High School"
          />
          <meta name="keywords" content="WilsonHacks, Wilson, Hackathon" />
          <meta name="author" content="WilsonHacks" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <link rel="stylesheet" href="assets/css/main.css" />
          <link
            rel="shortcut icon"
            href="/assets/css/images/wilson_favicon.ico"
          />
        </head>

        <body class="homepage is-preload" onload="onload()">
          <div id="page-wrapper">
            <div id="header-wrapper">
              <div id="fixed">
                <header id="header">
                  <div class="inner">
                    {this.state.w > 499 && (
                      <h1>
                        <a href="index.html" class="logo-size">
                          Wilson Hacks
                        </a>
                      </h1>
                    )}
                    <nav id="nav">
                      <ul>
                      {time.getTime() < openingTime.getTime() && (
                          <li class="registration-link">
                            <a
                              href="https://wilsonhacks-hackathon-2021.devpost.com/"
                              target="__blank"
                            >
                              Register
                            </a>
                          </li>
                      )}
                        <li>
                          <a href="#w2021">February 2021 Winners</a>
                        </li>
                        {/*<li>
                          <a href="#details">Details</a>
                        </li>

                        
                        
                        <li>
                          <a href="#faq">FAQs</a>
                        </li>
                        <li id="s" class="">
                          <a href="#schedule">Schedule</a>
                        </li>*/}
                      </ul>
                    </nav>
                  </div>
                </header>
              </div>

              <div id="banner">
                {time.getTime() < openingTime.getTime() && (
                  <h2
                    style={{
                      backgroundColor: "red",
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: 40 + "px",
                    }}
                  >
                    Registration Now Open for WilsonHacks 4.0 (December 11-12, 2021)!
                  </h2>
                )}
                <img
                  class="banner-logo"
                  src={require("./assets/images/WilsonHacks.png")}
                  width={0.3 * this.state.w}
                  height={0.3 * this.state.w}
                />
                <h3
                  style={{
                    fontSize: 50 + "px",
                    color: "#34bbc9",
                    lineHeight: 60 + "px",
                  }}
                >
                  December 11-12, 2021
                </h3>
                <a
                    id="register-a"
                    href="https://wilsonhacks-hackathon-2021.devpost.com/"
                    target="__blank"
                  >
                    REGISTER NOW
                  </a>
              </div>
            </div>
            <div class="wrapper style3" id="w2021">
              <div class="inner">
                <div class="container box feature1">
                  <div id="faq">
                    <div class="row">
                      <div class="col-12">
                        <header class="first major">
                          <h2>February 2021 Winners</h2>
                        </header>
                      </div>
                      <div class="col-6 col-12-medium">
                        <section>
                          {this.state.data &&
                            this.state.data.winners &&
                            this.state.data.winners
                              .filter(
                                (item, index) =>
                                  index < this.state.data.winners.length / 2
                              )
                              .map((winner) => (
                                <div>
                                  <h3 style={{ fontSize: 22 }}>
                                    {winner.category}
                                  </h3>

                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    {winner.video && winner.video.length > 0 ? (
                                      <iframe
                                        style={{
                                          width: "50%",
                                          margin: 8,
                                        }}
                                        width="50%"
                                        height="auto"
                                        src={winner.video}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                                        allowFullScreen
                                      ></iframe>
                                    ) : (
                                      <img
                                        src={winner.image}
                                        style={{
                                          maxWidth: "50%",
                                          maxHeight: "300px",
                                          margin: 8,
                                        }}
                                      />
                                    )}
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        flexDirection: "column",
                                      }}
                                    >
                                      <div>
                                        <h4 style={{ fontSize: 17 }}>
                                          {winner.title}
                                        </h4>
                                        <p>{winner.description}</p>
                                        <a href={winner.link}>
                                          Devpost Project
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                        </section>
                      </div>
                      <div class="col-6 col-12-medium">
                        <section>
                          {this.state.data &&
                            this.state.data.winners &&
                            this.state.data.winners
                              .filter(
                                (item, index) =>
                                  index >= this.state.data.winners.length / 2
                              )
                              .map((winner) => (
                                <div>
                                  <h3 style={{ fontSize: 22 }}>
                                    {winner.category}
                                  </h3>

                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                    }}
                                  >
                                    {winner.video && winner.video.length > 0 ? (
                                      <iframe
                                        style={{
                                          maxWidth: "50%",
                                          margin: 8,
                                        }}
                                        src={winner.video}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                                        allowFullScreen
                                      />
                                    ) : (
                                      <img
                                        src={winner.image}
                                        style={{
                                          maxWidth: "50%",
                                          maxHeight: "300px",
                                          margin: 8,
                                        }}
                                      />
                                    )}
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        flexDirection: "column",
                                      }}
                                    >
                                      <div>
                                        <h4 style={{ fontSize: 17 }}>
                                          {winner.title}
                                        </h4>
                                        <p>{winner.description}</p>
                                        <a href={winner.link}>
                                          Devpost Project
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="wrapper style3">
              <div class="inner">
                <div class="container box feature1">
                  <div id="details">
                    <div class="row">
                      <div class="col-12">
                        <header class="first major">
                          <h2>Details</h2>
                        </header>
                      </div>
                      {/*<div class="col-6 col-12-medium">
                        <section>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1942706319887!2d-77.02386608386723!3d38.89667255459034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b78fd5cbefd5%3A0x43b5e5b429864457!2sTerrell%20Place!5e0!3m2!1sen!2sus!4v1576697802191!5m2!1sen!2sus"
                            width={100 + "%"}
                            height="450"
                            frameborder="0"
                            style={{ border: 0 }}
                            allowfullscreen=""
                          ></iframe>
                        </section>
</div>
                      <div class="col-12 col-12-medium">
                        <section>
                          <h3>
                            Location:<b> Online</b> <br></br>
                            Date:{" "}
                            <b>10am February 6, 2021 - 10pm February 7, 2021</b>
                            <br></br>
                            Contact:{" "}
                            <b>
                              <a
                                href="mailto: wilsonhscs@gmail.com"
                                class="email"
                              >
                                wilsonhscs@gmail.com
                              </a>
                            </b>
                            <br></br>
                          </h3>
                          <h3>
                            <b>
                              Wilson Hacks is a 36-hour hackathon for any high
                              school students! Our hackathon this year is being
                              held online. At the hackathon, you will improve
                              your coding skills at one of our many workshops
                              while completing your Hackathon theme project. At
                              the end of the competition, judges will judge
                              projects for different prize categories.
                            </b>
                          </h3>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="wrapper style3">
              <div class="inner">
                <div class="container box feature1">
                  <div id="faq">
                    <div class="row">
                      <div class="col-12">
                        <header class="first major">
                          <h2>FAQs</h2>
                        </header>
                      </div>
                      <div class="col-6 col-12-medium">
                        <section>
                          <h3>
                            What should I bring?<br></br>
                            <b>
                              We recommend you bring a water bottle, your
                              laptop, and a laptop charger.
                            </b>{" "}
                            <br></br>
                            <br></br>
                            How much will it cost?<br></br>
                            <b>It is free! Including prizes!</b>
                            <br></br>
                            <br></br>
                            Is it virtual?<br></br>
                            <b>
                              Yes, make sure you register on devpost and join
                              the Discord server.
                            </b>
                            <br></br>
                            <br></br>
                            Can I participate from other countries?<br></br>
                            <b>Yes, but you cannot win prizes.</b>
                            <br></br>
                            <br></br>
                            Can I participate if I am in college?<br></br>
                            <b>No, we wan't to keep fair for highschoolers.</b>
                          </h3>
                        </section>
                      </div>
                      <div class="col-6 col-12-medium">
                        <section>
                          <h3>
                            Will participants work in teams?<br></br>
                            <b>
                              Competitors can work in teams of up to 4 or you
                              can work individually.
                            </b>
                            <br></br>
                            <br></br>
                            Do I need a group?<br></br>
                            <b>No! We will give you time to find a team.</b>
                            <br></br>
                            <br></br>
                            Can I work on a pre-existing project?<br></br>
                            <b>
                              For this Hackathon, we ask that you work on a new
                              project.
                            </b>
                            <br></br>
                            <br></br>
                            Do I have to share my personal information?<br></br>
                            <b>
                              No, but it might give our planning team a lot of
                              trouble in the near future.
                            </b>
                          </h3>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="main-wrapper">
              <div id="container">
                <div class="wrapper style3">
                  <div class="inner">
                    <div class="container box feature1">
                      <div id="schedule">
                        <div class="row">
                          <div class="col-12">
                            <header class="first major">
                              <h2>Schedule</h2>
                            </header>
                          </div>
                          <div class="col-6 col-12-medium">
                            <section>
                              <header class="second major">
                                <h2>Workshop/General</h2>
                              </header>
                              <table>
                                <tr>
                                  <th class="S-header">
                                    <h3>Time</h3>
                                  </th>
                                  <th class="S-header">
                                    <h3>Event</h3>
                                  </th>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>10:00 am - 10:30 am 2/6</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Opening ceremony & submission opens</b>
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>10:30 am - 11:30 am 2/6</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>
                                        Participant mingling and team creation
                                      </b>
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>11:30 am - 12:15 pm 2/6</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Workshop 1 Cloud Computing</b>
                                    </h3>
                                    <a
                                      href="https://teams.microsoft.com/l/meetup-join/19:meeting_ZDEwMTU5OGUtOTI4OC00NjNmLTlkODgtMTcxYWQzZDhiYzg3@thread.v2/0?context=%7B%22Tid%22:%2272f988bf-86f1-41af-91ab-2d7cd011db47%22,%22Oid%22:%2261b9b6e4-bc70-4076-981f-abba9397652c%22%7D"
                                      class="teams-a"
                                      target="__blank"
                                    >
                                      Meeting Link
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>2:00 pm - 2:45 pm 2/6</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Workshop 2 Data Structures</b>
                                    </h3>
                                    <a
                                      href="https://bluejeans.com/616479298"
                                      class="teams-a"
                                      target="__blank"
                                    >
                                      Meeting Link
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>4:30 pm - 5:15 pm 2/6</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Workshop 3 Networks/Iot</b>
                                    </h3>
                                    <a
                                      href="https://teams.microsoft.com/l/meetup-join/19:meeting_MjMyMWZjYjItMTdmMS00MzI4LWFlMjUtMjA3MjcxM2EzMjY2@thread.v2/0?context=%7B%22Tid%22:%2272f988bf-86f1-41af-91ab-2d7cd011db47%22,%22Oid%22:%2261b9b6e4-bc70-4076-981f-abba9397652c%22%7D"
                                      class="teams-a"
                                      target="__blank"
                                    >
                                      Meeting Link
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>6:00 pm - 6:45 pm 2/6</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>
                                        Workshop 4 Microsoft TEAL and Python
                                      </b>
                                    </h3>
                                    <a
                                      href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_N2Q1MGU1MGQtMjBmYy00M2E4LWJjYjItM2VlZDYyMTQ0YWE4%40thread.v2/0?context=%7b%22Tid%22%3a%2299f9f8e5-2e36-4b8e-8bdc-d1ba51121a17%22%2c%22Oid%22%3a%2247eb0134-aa44-43f3-b6d3-78f44a35fc8f%22%7d"
                                      class="teams-a"
                                      target="__blank"
                                    >
                                      Meeting Link
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>10:00 am - 10:45 pm 2/7</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>
                                        Workshop 5 TPM for Commercial Software
                                        Engineering
                                      </b>
                                    </h3>
                                    <a
                                      href="https://teams.microsoft.com/l/meetup-join/19:meeting_NDM4ZTU5MGYtNWEzNS00NjE2LTk4NTMtYWM2ZWFjZDAyNTA3@thread.v2/0?context=%7B%22Tid%22:%2272f988bf-86f1-41af-91ab-2d7cd011db47%22,%22Oid%22:%2261b9b6e4-bc70-4076-981f-abba9397652c%22%7D"
                                      class="teams-a"
                                      target="__blank"
                                    >
                                      Meeting Link
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>11:30 am - 12:15 pm 2/7</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>
                                        Workshop 6 Making Money in the Federal
                                        Information Technology Market
                                      </b>
                                    </h3>
                                    <a
                                      href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDJiODUwNTEtNjQzNi00NDMzLTllOWQtYjgyM2E3YzNlOTI2%40thread.v2/0?context=%7b%22Tid%22%3a%22c8ebb8f5-6ec3-41bd-99b6-e4aafe702967%22%2c%22Oid%22%3a%22260b1ff7-8b32-4a72-86e3-ef22c5e147ee%22%7d"
                                      class="teams-a"
                                      target="__blank"
                                    >
                                      Meeting Link
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>10:00 pm 2/7</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Submission Closes</b>
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>10:00 pm - 10:15 pm 2/7</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Closing Statements</b>
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>Anytime</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>EchoAR</b>
                                    </h3>
                                  </td>
                                </tr>
                              </table>
                            </section>
                          </div>
                          <div class="col-6 col-12-medium">
                            <section>
                              <header class="second major">
                                <h2>Mentor Office Hours</h2>
                              </header>
                              <table>
                                <tr>
                                  <th class="S-header">
                                    <h3>Time</h3>
                                  </th>
                                  <th class="S-header">
                                    <h3>Event</h3>
                                  </th>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>12:00 pm - 2:00 pm 2/6</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Office Hours 1 - Corey Lee</b>
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>2:00 pm - 4:00 pm 2/6</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Office Hours 2 - Richard Stephenson</b>
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>4:00 pm - 6:00 pm 2/6</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Office Hours 3 - Jay Tappen</b>
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>11:00 am - 1:00 pm 2/7</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Office Hours 4 - Jason Johnson</b>
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>1:00 pm - 3:00 pm 2/7</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Office Hours 5 - Josh Krodel</b>
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>3:00 pm - 5:00 pm 2/7</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Office Hours 6 - Iasia Brown</b>
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>5:00 pm - 7:00 pm 2/7</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Office Hours 7 - Mark Stevens</b>
                                    </h3>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3>
                                      <b>7:00 pm - 9:00 pm 2/7</b>
                                    </h3>
                                  </td>
                                  <td>
                                    <h3>
                                      <b>Office Hours 8</b>
                                    </h3>
                                  </td>
                                </tr>
                              </table>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div class="wrapper style2">
              <div class="inner">
                <section class="container box feature2">
                  <div class="row">
                    <div class="col-6 col-12-medium">
                      <section>
                        <header class="major">
                          <a href="https://instagram.com/wilsoncompsci">
                            <img src={social} height={width} />
                          </a>
                          <br />
                          <h2>Follow Us on Social Media</h2>
                          <p>
                            <a href="https://instagram.com/wilsoncompsci">
                              @wilsoncompsci
                            </a>{" "}
                            on Instagram
                          </p>
                        </header>
                        <p>
                          Help us spread the word about notices and upcomming
                          events by following us on social media.
                        </p>
                        <footer>
                          <a
                            href="https://www.instagram.com/wilsoncompsci"
                            class="button medium icon solid fa-arrow-circle-right"
                          >
                            Follow
                          </a>
                        </footer>
                      </section>
                    </div>
                    <div class="col-6 col-12-medium">
                      <section>
                        <header class="major">
                          <a href="https://wilsonhs.org/apps/pages/?uREC_ID=127895&type=d">
                            <img src={scimatech} height={width} />
                          </a>
                          <br />
                          <h2>Wilson Computer Science</h2>
                          <p>
                            Learn more about the computer science programs at
                            Wilson.
                          </p>
                        </header>
                        <p>
                          Wilson has a very extensive SciMaTech academy that
                          helps support the Wilson Hackathon.
                        </p>
                        <footer>
                          <a
                            href="https://wilsonhs.org/apps/pages/?uREC_ID=127895&type=d"
                            class="button medium icon solid fa-arrow-circle-right"
                          >
                            Learn More
                          </a>
                        </footer>
                      </section>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <script src="assets/js/jquery.min.js"></script>
          <script src="assets/js/jquery.dropotron.min.js"></script>
          <script src="assets/js/browser.min.js"></script>
          <script src="assets/js/breakpoints.min.js"></script>
          <script src="assets/js/util.js"></script>
          <script src="assets/js/main.js"></script>
        </body>
      </div>
    );
  }
}
