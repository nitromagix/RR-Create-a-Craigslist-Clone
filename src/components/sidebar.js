import React from "react";
import Help from './help'

function Sidebar(props) {
  return (
    <div className={props.className}>
      <h1>Sidebar</h1>
      <Help className="help" />
    </div>
  );
}

export default Sidebar;
