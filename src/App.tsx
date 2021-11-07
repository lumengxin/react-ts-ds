import React, { Component}  from "react";
import styles from './App.module.css'
import Robot from './components/Robot'
// 鼠标点击logo,可以看到已被定义过
import logo from './assets/images/logo.svg';
import ShoppingCart from './components/ShoppingCart'

interface Props {}
interface State {
  robotGallery: any[]; // 返回数据不受控制
}

export default class App extends Component<Props, State>{

  constructor(props) {
    super(props)
  }

  state = {
    robotGallery: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({robotGallery: data}))
  }

  render() {
    return (
    <div className={styles.app}>
      <div className={styles.title}>一个酷酷的标题</div>
      <ShoppingCart />
      <div className="list">
        {
          this.state.robotGallery.map(r => (
            // @ts-ignore
            <Robot id={r.id} name={r.name} email={r.email} />
          ))
        }
      </div>
      
    </div>
  )
  }
  
}