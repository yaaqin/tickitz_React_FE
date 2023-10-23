import React from "react";

function sosmedIcon(props) {

  const {icon, name} = props
  return (
    <div className="d-flex gap-2 sosmedFooter align-item-center">
      <img src={icon} alt="sosmed icon" />
      <p className="pt-3">{name}</p>
    </div>
  );
}

export default sosmedIcon;
