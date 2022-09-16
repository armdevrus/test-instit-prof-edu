import React, { useState } from "react";
// import styled from 'styled-components'
import "../App/_vars.scss";
import "./Content.scss";

interface PropsType {
  title: string;
  specializedSubjects: any[];
}

export default function Content(props: PropsType) {
  const [firstList, setFirstList] = useState<boolean>(false);
  const [secondList, setSecondList] = useState<boolean>(false);

  const handleShowFirstList = () => {
    setFirstList(!firstList);
  };
  const handleShowSecondList = () => {
    setSecondList(!secondList);
  };


  return (
    <div className="s-content">
      <div className="s-content-blocks">
        <h3 className="s-content-header">{props.title}</h3>
        <div className="s-content-modules">
          <div className="s-module">
            <h5 className="s-module-count" onClick={handleShowFirstList}>
              1 модуль
            </h5>
            <ul
              className="s-module-list"
              style={{
                display: firstList ? "none" : "block",
              }}
            >
              {props.specializedSubjects.map((subject: any) => (
                <li>{subject.string}</li>
              ))}
            </ul>
          </div>
          <div className="s-module">
            <h5 className="s-module-count" onClick={handleShowSecondList}>
              2 модуль
            </h5>
            <ul
              className="s-module-list"
              style={{
                display: secondList ? "none" : "block",
              }}
            >
              {props.specializedSubjects.map((subject: any) => (
                <li>{subject.string}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
