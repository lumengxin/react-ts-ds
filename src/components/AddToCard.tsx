import React, { useContext } from "react"
import { AppSetStateContext } from "../AppState"
import { RobotProps } from "./Robot"

// HOC,高阶组件，函数接收一个组件返回组件。一般width开头
export const withAddToCart = (
  ChlidComponent: React.ComponentType<RobotProps>
) => {
  // return class extends React.Component {}

  return (props) => {
    const setState = useContext(AppSetStateContext)

    const addToCart = (id, name) => {
      if (setState) {
        setState((state) => {
          return {
            ...state,
            shoppingCart: {
              items: [...state.shoppingCart.items, { id, name }],
            },
          }
        })
      }
    }

    return <ChlidComponent {...props} addToCart={addToCart}></ChlidComponent>
  }
}

export const useAddToCart = () => {
  const setState = useContext(AppSetStateContext)

  const addToCart = (id, name) => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, { id, name }],
          },
        }
      })
    }
  }

  return addToCart
}
