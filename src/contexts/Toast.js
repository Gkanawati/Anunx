import { createContext, useContext, useState, } from "react";
import Toast from "../components/Toast";

const ToastContext = createContext({})

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    open: false,
    text: '',
    severity: 'info'
  })

  return (
    <ToastContext.Provider value={{ setToast }}>
      <Toast
        open={toast.open}
        severity={toast.severity}
        text={toast.text}
        onClose={() => setToast({
          ...toast,
          open: false,
        })}
      />
      {children}
    </ToastContext.Provider>
  )
}

const useToast = () => useContext(ToastContext)

export default useToast