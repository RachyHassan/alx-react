import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import closeIcon from "./close-icon.png";

const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={{color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
        aria-label="Close"
        onClick={console.log("Close button has been clicked")}>
          <img src={closeIcon} alt="closeIcon" width="10px" />
        </button>
        <ul>
        <NotificationItem type="default" value="New course available" />
		  <NotificationItem type="urgent" value="New resume available" />
		  <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
        </ul>
    </div>
  )
}

export default Notifications;
