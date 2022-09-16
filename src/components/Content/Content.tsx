import React from "react";
import './Content.scss'

interface PropsType<T> {
  title: string;
  specializedSubjects: T[]
}

export default function Content<T>(props: PropsType<T>) {
  return (
    <div className="s-content">
      <div className="s-content-blocks">
        <h3 className="s-content-header">{props.title}</h3>
        <div className="s-content-modules">
          <div className="s-module">
            <h5 className="s-module-count">1 модуль</h5>
            <ul className="s-module-list">
              {props.specializedSubjects.map((subject: any) => (
                <li>{subject.string}</li>
              ))}
            </ul>
          </div>
          <div className="s-module">
            <h5 className="s-module-count">2 модуль</h5>
            <ul className="s-module-list">
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
 