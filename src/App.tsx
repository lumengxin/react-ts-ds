import React  from "react";
import styles from './App.module.css'
import Robot from './components/Robot'
// 鼠标点击logo,可以看到已被定义过
import logo from './assets/images/logo.svg';

export default function App () {
  return (
    <div className={styles.app}>
      <div className={styles.title}>一个酷酷的标题</div>
      <Robot id={12} name="xin" email="xin@gmail.com" />
    </div>
  )
}