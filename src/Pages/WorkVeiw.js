import React from 'react'
import { useParams } from 'react-router-dom'

export const WorkVeiw = () => {
  const {id} = useParams();
  return (
    <div>WorkVeiw{id}</div>
  )
}
