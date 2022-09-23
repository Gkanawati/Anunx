import { useState } from 'react'
import { useRouter } from 'next/router'
import { Paper, InputBase, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const InputSearch = () => {
  const [search, setSearch] = useState('')

  const route = useRouter()

  const handleSubmitSearch = () => {
    route.push({
      pathname: `/search/${search}`,
    })
  }

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      handleSubmitSearch(e.target.value)
    }
  }

  return (
    <Paper sx={{
      paddingX: 2,
      marginY: 3,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <InputBase
        onChange={e => setSearch(e.target.value)}
        placeholder='Ex: Apple MacBook Pro'
        fullWidth
        onPress
        onKeyDown={e => keyPress(e)}
      />
      <IconButton onClick={handleSubmitSearch}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default InputSearch