import React, { useState, useEffect } from "react"
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

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    document.title = `点击次数为${count}`
  }, [count])

  // useEffect(async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users")
  //   const data = await res.json()
  //   setRobotGallery(data)
  // }, []) // 第二个参数[],相当于componetDidMount

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        setRobotGallery(data)
      } catch (e) {
        // @ts-ignore
        setError(e.message)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.title}>一个酷酷的标题</div>
      <div>
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          Click
        </button>
        <span>Count: {count}</span>
      </div>
      <ShoppingCart />
      {(!error || error !== "") && <span>{error}</span>}
      {!loading ? (
        <div className="list">
          {robotGallery.map((r) => (
            // @ts-ignore
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      ) : (
        <h2>loading...</h2>
      )}
    </div>
  )
}

export default App
