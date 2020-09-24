import React from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { myInformationSelector } from '../../utils/selectors'

const Home = ({ history }: RouteComponentProps<any>) => {
  const myInformation = useSelector(myInformationSelector)
  console.log(myInformation)
  console.log(history)

  return (
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {(Object.keys(myInformation) as Array<keyof typeof myInformation>).map((key, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={i}>
            <th>{key}</th>
            <th>{myInformation[key]}</th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Home
