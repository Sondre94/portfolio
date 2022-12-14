import "../styles/carousel.css";
import { StyledProjectCardButton } from "../styles/styles";
import { useState } from "react";
import { TEXT } from "./textconsts";

export default function Carousel() {
  const [selected, setSelected] = useState("1");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <>
      <div className="card-container">
        <input
          type="radio"
          name="slider"
          id="item-1"
          value="1"
          checked={selected === "1"}
          onChange={handleChange}
        />
        <input
          type="radio"
          name="slider"
          id="item-2"
          value="2"
          checked={selected === "2"}
          onChange={handleChange}
        />
        <input
          type="radio"
          name="slider"
          id="item-3"
          value="3"
          checked={selected === "3"}
          onChange={handleChange}
        />
        <div className="cards">
          <label className="card" for="item-1" id="card-1">
            <div className="card-img">
              <img
                src={require("../images/Travelpage.png")}
                className="project-img"
                alt=""
              />
              <div className="project-textarea">
                <h3 className="project-title">
                  {TEXT.PROJECTS_SECTION.TRAVELPAGE.PROJECT_HEADLINE}
                </h3>
                <p className="project-text">
                  {TEXT.PROJECTS_SECTION.TRAVELPAGE.PROJECT_TEXT}
                </p>
                <StyledProjectCardButton>
                  <a
                    href="https://sondre94.github.io/Travel-Page/"
                    target="_blank"
                  >
                    {TEXT.BUTTON_TEXT.SE_PROSJEKT}
                  </a>
                </StyledProjectCardButton>
              </div>
            </div>
          </label>
          <label className="card" for="item-2" id="card-2">
            <div className="card-img">
              <img
                src={require("../images/todolist.png")}
                className="project-img"
                alt=""
              />
              <div className="project-textarea">
                <h3 className="project-title">
                  {TEXT.PROJECTS_SECTION.TODO_LIST.PROJECT_HEADLINE}
                </h3>
                <p className="project-text">
                  {TEXT.PROJECTS_SECTION.TODO_LIST.PROJECT_TEXT}
                </p>
                <StyledProjectCardButton>
                  <a
                    href="https://sondre94.github.io/To-Do-list/"
                    target="_blank"
                  >
                    {TEXT.BUTTON_TEXT.SE_PROSJEKT}
                  </a>
                </StyledProjectCardButton>
              </div>
            </div>
          </label>
          <label className="card" for="item-3" id="card-3">
            <div className="card-img">
              <img
                src={require("../images/catfacts.png")}
                className="project-img"
                alt=""
              />
              <div className="project-textarea">
                <h3 className="project-title">
                  {TEXT.PROJECTS_SECTION.CATFACTS.PROJECT_HEADLINE}
                </h3>
                <p className="project-text">
                  {TEXT.PROJECTS_SECTION.CATFACTS.PROJECT_TEXT}
                </p>
                <StyledProjectCardButton>
                  <a
                    href="https://sondre94.github.io/API-call-innlevering/"
                    target="_blank"
                  >
                    {TEXT.BUTTON_TEXT.SE_PROSJEKT}
                  </a>
                </StyledProjectCardButton>
              </div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
