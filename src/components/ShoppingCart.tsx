// 类组件：继承React.Component 泛型接收三个参数：P props, S state, SS 自定义数据 通过getSnapshotBeforeUpdate()在ui渲染前获取相应数据
import React from "react"
import styles from "./ShoppingCart.module.css"
import { FiShoppingCart } from "react-icons/fi"
import { AppContext } from "../AppState"

interface Props {}

interface State {
  isOpen: boolean
}

export default class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  // 鼠标移到onClick，检查类型
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(
      "🚀 ~ file: ShoppingCart.tsx ~ line 26 ~ ShoppingCart ~ handleClick ~ this",
      this
    ) // 普通函数：undefined
    console.log("e.target", e.target) // 事件发生元素, target是一个笼统的对象
    console.log("e.currentTarget", e.currentTarget) // 事件处理绑定元素
    // 只接受span点击
    if ((e.target as HTMLElement).nodeName === "SPAN") {
      this.setState({ isOpen: !this.state.isOpen })
    }
  }

  render() {
    const { isOpen } = this.state
    return (
      <AppContext.Consumer>
        {(value) => {
          return (
            <div className={styles.cardContainer}>
              <button className={styles.btn} onClick={this.handleClick}>
                <FiShoppingCart />
                <span>购物车{value.shoppingCart.items.length}</span>
              </button>
              <div
                className={styles.cartDropDown}
                style={{ display: isOpen ? "block" : "none" }}
              >
                <ul>
                  {value.shoppingCart.items.map((i) => (
                    <li>{i.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
