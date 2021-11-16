import React from 'react'
import styles from "./NextPlayerDisplay.module.css"

import circle from "../../icons/circle.svg"
import cross from "../../icons/cross.svg"
import triangle from "../../icons/triangle.svg"
import square from "../../icons/square.svg"

function NextPlayerDisplay(props) {
    function selectImage(icon) {
        switch (icon) {
            case "circle":
                return circle;
            case "cross":
                return cross;
            case "triangle":
                return triangle;
            case "square":
                return square;
            default:
                return "";
        }
    }
    return (
        <div className={styles.container}>
            <img src={selectImage(props.icon)} alt="" srcset="" className={styles.icon}/>
            <h2 className={styles.nextLabel}>is Next</h2>
        </div>
    )
}

export default NextPlayerDisplay