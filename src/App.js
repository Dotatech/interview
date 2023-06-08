import "./App.css";

import { HiOutlineMailOpen } from "react-icons/hi";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowLeft,
  AiFillCopy,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlinePause,
  AiOutlinePrinter,
  AiOutlineDown,
  AiFillStar,
  AiOutlineBold,
} from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {
  BsBoxArrowRight,
  BsThreeDotsVertical,
  BsFillBookmarkFill,
  BsPencilSquare,
} from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiChevronUpDown } from "react-icons/hi2";
import { HiLocationMarker } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { SiWire } from "react-icons/si";
import { MdDeleteOutline } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";

import Badge from "react-bootstrap/Badge";
import { Button } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const [error, seterror] = useState("");

  function handleSubmit() {
    if (state === "") {
      seterror("pls write someting");
    } else {
      alert("submitted");
    }
  }

  return (
    <div className="app-container">
      <div className="app-subContainer">
        <div className="app-header">
          <div className="header-lefticons">
            <div>
              <AiOutlineArrowLeft />
            </div>
            <div className="header-icons">
              <HiOutlineMailOpen />
            </div>
            <div className="header-icons">
              <AiOutlineInfoCircle />
            </div>
            <div className="header-icons">
              <MdDelete />
            </div>
            <div className="header-icons">
              <AiFillCopy />
            </div>
            <div className="header-icons">
              <BsBoxArrowRight />
            </div>
          </div>
          <div className="header-iconsright">
            <p>1-50 of 235</p>
            <div className="header-icons">
              <AiOutlineLeft />
            </div>
            <div className="header-icons">
              <AiOutlineRight />
            </div>
            <div className="header-icons">
              <BiDotsHorizontalRounded />
            </div>
          </div>
        </div>
        <div className="parent-container1">
          <div className="container1">
            <div className="container-pause">
              <div className="badg">
                <h3>Trip reminder. Thank you for flying with us! </h3>
                <Badge bg="info" style={{ marginLeft: "5px" }}>
                  index
                </Badge>
                <Badge bg="danger" style={{ marginLeft: "5px" }}>
                  important
                </Badge>
              </div>
              <div className="container1-icons">
                <div className="header-icons">
                  <AiOutlinePause />
                </div>
                <div className="header-icons">
                  <AiOutlinePrinter />
                </div>
              </div>
            </div>
            <div className="container1-profile">
              <div className="container1-profileleft">
                <img
                  src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                  width={50}
                  height={50}
                  style={{ borderRadius: "5px" }}
                  alt="shivank"
                />
                <div className="container1-name">
                  <h6 style={{ fontSize: "15px", fontWeight: "900" }}>
                    shivank tygai
                  </h6>
                  <p>
                    to me <AiOutlineDown />
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginLeft: "10px",
                  }}
                >
                  <div className="greendot"></div>
                  <p style={{ marginLeft: "10px" }}>1 day ago</p>
                </div>
              </div>
              <div className="container1-profileright">
                <div className="subcontainer1-profileright">
                  <p>22 sept 2022,6:43am</p>
                  <div className="header-icons">
                    <AiFillStar />
                  </div>
                  <div className="header-icons">
                    <BsFillBookmarkFill />
                  </div>
                  <div className="header-icons">
                    <BsPencilSquare />
                  </div>
                  <div className="header-icons">
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </div>
            </div>
            <div className="container1-text">
              <p>hi bob,</p>
              <p>
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <p>Best Regards</p>
              <p>json Mullar</p>
            </div>
          </div>
        </div>
        <div className="parent-container2">
          <div className="container2">
            <div className="constainer2-profile">
              <img
                src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                width={70}
                height={70}
                style={{ borderRadius: "5px" }}
                alt="shivank"
              />
              <div style={{ marginLeft: "10px" }}>
                <h6 style={{ fontSize: "15px", fontWeight: "900" }}>
                  shivank tygai
                </h6>
                <p style={{ marginLeft: "3px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. since the 1500s, when an unknown ...{" "}
                </p>
              </div>
            </div>
            <div className="container1-profileright">
              <div className="subcontainer1-profileright">
                <p>22 sept 2022,6:43 am</p>
                <div className="header-icons">
                  <AiFillStar />
                </div>
                <div className="header-icons">
                  <BsFillBookmarkFill />
                </div>
                <div className="header-icons">
                  <BsPencilSquare />
                </div>
                <div className="header-icons">
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parent-container2">
          <div className="container2" style={{ borderBottom: "none" }}>
            <div className="constainer2-profile">
              <img
                src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                width={70}
                height={70}
                style={{ borderRadius: "5px" }}
                alt="shivank"
              />
              <div style={{ marginLeft: "10px" }}>
                <h6 style={{ fontSize: "15px", fontWeight: "900" }}>
                  shivank tygai
                </h6>
                <p style={{ marginLeft: "3px" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. since the 1500s, when an unknown ...{" "}
                </p>
              </div>
            </div>
            <div className="container1-profileright">
              <div className="subcontainer1-profileright">
                <p>22 sept 2022,6:43am</p>
                <div className="header-icons">
                  <AiFillStar />
                </div>
                <div className="header-icons">
                  <BsFillBookmarkFill />
                </div>
                <div className="header-icons">
                  <BsPencilSquare />
                </div>
                <div className="header-icons">
                  <BsThreeDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parent-container3">
          <div className="container3">
            <div className="container3-to">
              <div className="subcontainer3-to">
                <h6 style={{ fontSize: "15px", fontWeight: "900" }}>To:</h6>
                <div className="cont-p-to">
                  <div className="container3-profile">
                    <div className="cont">
                      <img
                        src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                        width={30}
                        height={30}
                        style={{ borderRadius: "20px" }}
                        alt="shivank"
                      />
                      <p>
                        <h6
                          style={{
                            fontSize: "15px",
                            fontWeight: "700",
                            marginTop: "20px",
                          }}
                        >
                          shivank tygai
                        </h6>
                      </p>{" "}
                      <RxCross1 />
                    </div>
                  </div>
                  <div className="container3-profile">
                    <div className="cont">
                      <img
                        src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                        width={30}
                        height={30}
                        style={{ borderRadius: "20px" }}
                        alt="shivank"
                      />
                      <p>
                        <h6
                          style={{
                            fontSize: "15px",
                            fontWeight: "700",
                            marginTop: "20px",
                          }}
                        >
                          shivank tygai
                        </h6>
                      </p>{" "}
                      <RxCross1 />
                    </div>
                  </div>
                  <div className="container3-profile">
                    <div className="cont">
                      <img
                        src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                        width={30}
                        height={30}
                        style={{ borderRadius: "20px" }}
                        alt="shivank"
                      />
                      <p>
                        <h6
                          style={{
                            fontSize: "15px",
                            fontWeight: "700",
                            marginTop: "20px",
                          }}
                        >
                          shivank tygai
                        </h6>
                      </p>{" "}
                      <RxCross1 />
                    </div>
                  </div>
                </div>
                <div style={{ marginLeft: "750px" }}>
                  <p style={{ display: "flex" }}>Cc Bcc</p>
                </div>
              </div>
            </div>
            <div className="container3-subject">
              {" "}
              <h6
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "grey",
                  marginLeft: "20px",
                }}
              >
                Subject:
              </h6>
            </div>
            <div className="container3-subject">
              {" "}
              <h6
                style={{
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "grey",
                  marginLeft: "20px",
                }}
              >
                Normal
              </h6>
              <div
                className="header-icons"
                style={{ backgroundColor: "white" }}
              >
                <HiChevronUpDown />
              </div>
              <div
                className="header-icons"
                style={{ backgroundColor: "white" }}
              >
                <AiOutlineBold />
              </div>
              <div
                className="header-icons"
                style={{ backgroundColor: "white" }}
              >
                <AiOutlineBold />
              </div>
              <div
                className="header-icons"
                style={{ backgroundColor: "white" }}
              >
                <AiOutlineBold />
              </div>
              <div
                className="header-icons"
                style={{ backgroundColor: "white" }}
              >
                <AiOutlineBold />
              </div>
              <div
                className="header-icons"
                style={{ backgroundColor: "white" }}
              >
                <AiOutlineBold />
              </div>
            </div>
            <div className="constainer3-input">
              <input
                placeholder="type your text here"
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div style={{ color: "red" }}>{error}</div>
            <div className="container3-send">
              <div className="container3-sendleft">
                <Button variant="primary" onClick={handleSubmit}>
                  {" "}
                  Send
                </Button>
                <div
                  className="header-icons"
                  style={{ backgroundColor: "white" }}
                >
                  <SiWire />
                </div>
                <div
                  className="header-icons"
                  style={{ backgroundColor: "white" }}
                >
                  <HiLocationMarker />
                </div>
              </div>
              <div className="container3-sendright">
                <div
                  className="header-icons"
                  style={{ backgroundColor: "white" }}
                >
                  <TbBulbFilled />
                </div>
                <div
                  className="header-icons"
                  style={{ backgroundColor: "white" }}
                >
                  <MdDeleteOutline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
