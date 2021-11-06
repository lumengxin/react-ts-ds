// 类组件：继承React.Component 泛型接收三个参数：P props, S state, SS 自定义数据 通过getSnapshotBeforeUpdate()在ui渲染前获取相应数据
import React from 'react';
import styles from './ShoppingCart.module.css'

interface Props {

}

interface State {
  isOpen: boolean;
}

export default class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  render() {
    const {isOpen} = this.state
    return (
      <div className={styles.cardContainer}>
        <button className={styles.btn} onClick={() => {this.setState({ isOpen: !isOpen})}}>购物车2</button>
        <div className={styles.cartDropDown} style={{display: isOpen ? 'block' : 'none'}}>
          <ul>
            <li>coffer1</li>
            <li>coffer2</li>
          </ul>
        </div>

      </div>
    )
  }

}