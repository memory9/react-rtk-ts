import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { myInformationSelector } from '../../utils/selectors'

const Home: FC = () => {
  const myInformation = useSelector(myInformationSelector)

  return <div>Home</div>
}

export default Home
