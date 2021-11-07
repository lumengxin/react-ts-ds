import React, { Component } from "react"
import styles from "./App.module.css"
import Robot from "./components/Robot"
// 鼠标点击logo,可以看到已被定义过
import logo from "./assets/images/logo.svg"
import ShoppingCart from "./components/ShoppingCart"

interface Props {}
interface State {
  robotGallery: any[] // 返回数据不受控制
  count: number
}

export default class App extends Component<Props, State> {
  // *生命周期1: 初始化
  // 初始化组件 state
  constructor(props) {
    super(props)
    this.state = {
      robotGallery: [],
      count: 0,
    }
  }

  
  // *组件创建好dom元素以后，挂载进页面时调用
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ robotGallery: data }))
  }

  // *生命周期2： 更新
  // componentWillReceiveProps // 在组件接收到一个新的props（更新后）时被调用。废弃
  // static getDdrivingStateFromProps(nextProps, prevState)
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.some !== this.state.some // 重新渲染ui开销大，判断需要返回true时执行
  // }
  componentDidUpdate(){}

  // *生命周期3： 销毁
  componentWillUnmount() {}

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.title}>一个酷酷的标题</div>
        <div>
          <button
            onClick={() => {
              // 函数形式，接收上一次
              this.setState((preState, preProps) => {
                return {count: preState.count + 1}
              }, () => {
                console.log(this.state.count)
              })
              this.setState((preState, preProps) => {
                return {count: preState.count + 1}
              }, () => {
                console.log(this.state.count)
              })
              // this.setState({ count: this.state.count + 1 }, () => {
              //   console.log(this.state.count)
              // })
              // // 声明周期没有发生变化，依然使用的是上一次state
              // this.setState({ count: this.state.count + 1 }, () => {
              //   console.log(this.state.count)
              // })
              // // console.log(this.state.count) // state异步更新
            }}
          >
            Click
          </button>
          <span>Count: {this.state.count}</span>
        </div>
        <ShoppingCart />
        <div className="list">
          {this.state.robotGallery.map((r) => (
            // @ts-ignore
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      </div>
    )
  }
}
