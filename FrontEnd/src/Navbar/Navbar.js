import React, { Component, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import image from "./images/portofolio.jpg";
import logoutimg from "./images/logout.png";
function Navbarr(props) {
  return (
    <div className={styles.fakeBody}>
      <div className={styles.sidebarHeader}>
        <img className={styles.userImage} src={image} />
        <p className={styles.userName}>Ioannis Christodoulakos </p>
        <div className = {styles.logoutcontainer}>
        <button className={styles.btn} onClick={props.logout}>
          {" "}
          <img src={logoutimg} className={styles.logout} />{" "}
        </button>
        </div>
      </div>

      <div className={styles.sidebarMenu}>
        <div className={styles.sidebarButContainer}>
        
          
        <div className={styles.linkContainer}>
        <p className={styles.pi}>
          {" "}
          <a className={styles.link} href="444">
            {" "}
            Main
          </a>{" "}
        </p>
      </div>

          <div className={styles.linkContainer}>
            <p className={styles.pi}>
              {" "}
              <a className={styles.link} href="444">
                {" "}
                Calendar
              </a>{" "}
            </p>
          </div>

          <div className={styles.linkContainer}>
            <p className={styles.pi}>
              {" "}
              <a className={styles.link} href="444">
                {" "}
                Marks
              </a>{" "}
            </p>
          </div>

          <div className={styles.linkContainer}>
            <p className={styles.pi}>
              {" "}
              <a className={styles.link} href="444">
                {" "}
                Drive
              </a>{" "}
            </p>
          </div>

          <div className={styles.linkContainer}>
            <p className={styles.pi}>
              {" "}
              <a className={styles.link} href="444">
                {" "}
                To-Do-List
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbarr;
