import Header from "../components/Header"

const Default = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Default