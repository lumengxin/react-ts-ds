import React, {useContext} from "react"
import styles from "./Robot.module.css"
import { AppContext } from "../index"

interface RobotProps {
  id: number
  name: string
  email: string
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(AppContext)

  return (
    // <AppContext.Consumer>
    //   {(value) => {
    //     return (
          <div className={styles.robotContainer}>
            <h1>{id}</h1>
            <p>{name}</p>
            <p>{email}</p>
            <p>作者：{value.username}</p>
          </div>
    //     )
    //   }}
    // </AppContext.Consumer>
  )
}

export default Robot
