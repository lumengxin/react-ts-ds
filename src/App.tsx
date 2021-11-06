import React  from "react";
import styles from './App.module.css'
import Robot from './components/Robot'

export default function App () {
  return (
    <div className={styles.app}>
      <div className={styles.title}>App</div>
      <Robot id={12} name="xin" email="xin@gmail.com" />
    </div>
  )
}