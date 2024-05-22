import React, { useState } from "react";
import "./Nexcent.css";

const Nexcent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <div className="maincontainer"> 
      
            
        <div className="Hero">
          <div className="lefthero">
            <h1 style={{ color: "rgb(87, 87, 87)", fontSize: "60px" }}>
              Lessons and insights
              <br />
              <span style={{ color: "green" }}>from 8 years</span>
            </h1>
            <p style={{ color: "rgb(87, 87, 87)", fontSize: "16px" }}>
              Where to grow your business as a photographer: site or social
              media?
            </p>

            <button className="registerbtnstyle">Register</button>
          </div>
          <div className="righthero">
            <img className="heropic" src="../../../images/Illustration.png" />
          </div>
        </div>
        <div className="clientscontainer">
          <div className="clientshp">
            <h1>Our Clients</h1>
            <p>We have been working with some Fortune 500+ clients</p>
          </div>
          <br />
          <br />
          <br />
          <div className="clientslogo">
            <img src="../../../images/Logo (1).png" />
            <img src="../../../images/Logo (2).png" />
            <img src="../../../images/Logo (3).png" />
            <img src="../../../images/Logo (4).png" />
            <img src="../../../images/Logo (5).png" />
            <img src="../../../images/Logo (6).png" />
            <img src="../../../images/Logo (7).png" />
          </div>
        </div>
        <br />
        <div className="comm">
          <div>
            <h1 style={{ color: "green" }}>
              Manage your entire community in a single system
            </h1>
            <p>Who is Nextcent suitable for?</p>
          </div>
        </div>
        <br />
        <br />
        <div className="threeecont">
          <div className="cone">
            <img src="../../../icons/Icon.png" />
            <div>
              <h1 style={{ width: "270px", color: "green" }}>
                Membership Organisations
              </h1>
              <p style={{ width: "270px" }}>
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="cone">
            <img src="../../../icons/Icon (1).png" />
            <h1 style={{ width: "270px", color: "green" }}>
              National Associations
            </h1>
            <p style={{ width: "270px" }}>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="cone">
            <img src="../../../icons/Icon (2).png" />
            <h1 style={{ width: "170px", color: "green" }}>Clubs And Groups</h1>
            <p style={{ width: "270px" }}>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
        <div className="Hero">
          <div className="righthero">
            <img className="heropic" src="../../../images/rafiki.png" />
          </div>
          <div className="lefthero">
            <h1
              style={{
                color: "rgb(87, 87, 87)",
                fontSize: "35px",
                width: "600px",
              }}
            >
              The unseen of spending three years at Pixelgrade
            </h1>
            <p
              style={{
                color: "rgb(87, 87, 87)",
                fontSize: "12px",
                width: "600px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>

            <button className="registerbtnstyle">Learn More</button>
          </div>
        </div>
        <div className="headbtn">
          <h1
            style={{
              color: "rgb(87, 87, 87)",
              fontSize: "75px",
              width: "850px",
            }}
          >
            Pellentesque suscipit fringilla libero eu.
          </h1>
          <button className="navbtnstyle">Get a Demo</button>
        </div>
        <div className="Hero3">
          <div className="righthero">
            <img className="heropic" src="../../../images/pana.png" />
          </div>
          <div className="lefthero">
            <h1
              style={{
                color: "rgb(87, 87, 87)",
                fontSize: "35px",
                width: "550px",
              }}
            >
              How to design your site footer like we did
            </h1>
            <p
              style={{
                color: "rgb(87, 87, 87)",
                fontSize: "12px",
                width: "600px",
              }}
            >
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>

            <button className="registerbtnstyle">Learn More</button>
          </div>
        </div>
        <div className="mainfooter">
          <div className="footercont">
            <div className="styleee">
              <div id="heading1" className="heading">
                FAQ
              </div>
              <img
                id="style1"
                className="stline"
                src="../../../images/Logo (4).png"
              />
            </div>
            <div className="pppmain">
              <div className="ppp">
                <img src="../../../images/Logo (3).png" />
                <p className="paraline">
                  Can your provide us with a brief introduction to super vet ?
                </p>
              </div>
              <div className="ppp">
                <img src="../../../images/Logo (7).png" />
                <p className="paraline">What is the gameplay like briefly ?</p>
              </div>
              <div className="ppp">
                <img src="../../../images/Logo (7).png" />
                <p className="paraline">
                  Where can i learn more about the game ?
                </p>
              </div>
              <div className="ppp">
                <img src="../../../images/Logo (7).png" />
                <p className="paraline">
                  What are the different ways players can earn while they play ?
                </p>
              </div>
              <div className="ppp">
                <img src="../../../images/Logo (7).png" />
                <p className="paraline">
                  If I’m an influencer/content creator/partner, who should i
                  contact?
                </p>
              </div>
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src="../../../images/Logo (6).png"
              />
            </div>

            <div className="innerft">
              <div>
                <img
                  style={{ marginTop: "22%" }}
                  src="../../../images/logo.png"
                />
              </div>
              <div className="lastsec">
                <h2>LEARN MORE</h2>
                <br />
                <p>Home</p>
                <p>Gameplay</p>
                <p>Roadmap</p>
                <p>Superverse</p>
              </div>
              <div className="lastsec">
                <h2>MARKET PLACE</h2>
                <br />
                <p>Charcters</p>
                <p>In-Game Assets</p>
                <p>Buy/Sell</p>
                <p>NFT Staking</p>
              </div>
              <div className="lastsec">
                <h2>QUICK LINKS</h2>
                <br />
                <p>Whitepaper</p>
                <p>Pitch Deck</p>
                <p>Maeketplace</p>
                <p>Smart contract</p>
              </div>
              <div>
                <h1 style={{ fontFamily: " Rajdhani" }}>SUBSCRIBE US</h1>
                <br />
                <br />
                <input
                  className="input-field"
                  type="text"
                  id="userInput"
                  name="userInput"
                  value={inputValue}
                  onChange={handleChange}
                />
                <button id="scbtn" className="searchbtn">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
};
export default Nexcent;
