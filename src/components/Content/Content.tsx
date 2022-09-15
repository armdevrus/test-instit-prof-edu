import React from "react";
import './Content.scss'

export default function Content() {
  return (
    <div className="s-content">
      <div className="s-content-blocks">
        <h3 className="s-content-header">Антикризисное управление</h3>
        <div className="s-content-modules">
          <div className="s-module">
            <h5 className="s-module-count">1 модуль</h5>
            <ul className="s-module-list">
              <li>Маркетинговые стратегии</li>
              <li>Маркетинговые стратегии</li>
              <li>Маркетинговые стратегии</li>
            </ul>
          </div>
          <div className="s-module">
            <h5 className="s-module-count">2 модуль</h5>
            <ul className="s-module-list">
              <li>Маркетинговые стратегии</li>
              <li>Маркетинговые стратегии</li>
              <li>Маркетинговые стратегии</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="s-content-blocks">
        <h3 className="s-content-header">Управление малым бизнесом</h3>
        <div className="s-content-modules">
          <div className="s-module">
            <h5 className="s-module-count">3 модуль</h5>
            <ul className="s-module-list">
              <li>Маркетинговые стратегии</li>
              <li>Маркетинговые стратегии</li>
              <li>Маркетинговые стратегии</li>
            </ul>
          </div>
          <div className="s-module">
            <h5 className="s-module-count">4 модуль</h5>
            <ul className="s-module-list">
              <li>Маркетинговые стратегии</li>
              <li>Маркетинговые стратегии</li>
              <li>Маркетинговые стратегии</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
