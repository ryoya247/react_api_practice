import React from 'react'
import { Link } from 'react-router-dom'

export default function BreadCrumb(itemName) {
  const breadCrumbs = [
    <li>
      <Link to='/'>
       TOP
     </Link>
    </li>
  ]

  if (itemName !== undefined) {
    breadCrumbs.push((
      <li>
        <Link to={`/items/$(itemName)`}>
         {itemName}
        </Link>
      </li>
    ))
  }

  return (
    <div>
      <ul>
        {breadCrumbs}
      </ul>
    </div>
  )
}
