'use client'

import Store from "@/Store/Store"
import { Provider } from "react-redux"

const StoreProvider = ({children}:{children: React.ReactNode}) => {
  return (
          <Provider store={Store}>
          {children}
        </Provider>
  )
}

export default StoreProvider