import React, { useContext } from "react"
import styles from "./Robot.module.css"
import { AppContext, AppSetStateContext } from "../AppState"
import { withAddToCart, useAddToCart } from "./AddToCard"

export interface RobotProps {
  id: number
  name: string
  email: string
  // addToCart: (id, name) => void
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(AppContext)

  const addToCart = useAddToCart()

  return (
    <div className={styles.robotContainer}>
      <h1>{id}</h1>
      <p>{name}</p>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button type="button" onClick={() => addToCart(id, name)}>
        加入购物车
      </button>
    </div>
  )
}

// export default withAddToCart(Robot)
export default Robot
