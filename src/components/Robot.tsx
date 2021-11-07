import React, {useContext} from "react"
import styles from "./Robot.module.css"
import { AppContext, AppSetStateContext } from "../AppState"

interface RobotProps {
  id: number
  name: string
  email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(AppContext)
  const setState = useContext(AppSetStateContext)

  const addToCart = () => {
    if(setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: {
            items: [
              ...state.shoppingCart.items,
              {id, name}
            ]
          }
        }
      })
    }
  }

  return (
    // <AppContext.Consumer>
    //   {(value) => {
    //     return (
          <div className={styles.robotContainer}>
            <h1>{id}</h1>
            <p>{name}</p>
            <p>{email}</p>
            <p>作者：{value.username}</p>
            <button type="button" onClick={addToCart}>加入购物车</button>
          </div>
    //     )
    //   }}
    // </AppContext.Consumer>
  )
}

export default Robot
