import React from "react"
import styles from "./card.module.scss"

const Card = props => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>{props.title}</div>
      <img className={styles.image}  src={props.image}></img>
      <div className={styles.footer}>{props.footer}</div>
    </div>
  )
}

export default Card
