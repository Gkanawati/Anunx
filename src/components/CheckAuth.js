import { useEffect } from "react"
import { useSession } from "next-auth/client"
import { useRouter } from "next/router"
import { CircularProgress, Container } from "@mui/material"

const CheckAuth = ({ Component, pageProps }) => {

  const [session, loading] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (loading) {
      return
    }

    if (!session) {
      router.push('/auth/signin')
    }
  }, [session, loading])

  if (session) {
    return <Component {...pageProps} />
  }

  return (
    <Container sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress sx={{
        marginX: 'auto',
        maxWidth: '40px'
      }} />
    </Container>
  )
}

export default CheckAuth