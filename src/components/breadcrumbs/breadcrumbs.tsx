import React from 'react'
import Breadcrumbs from 'nextjs-breadcrumbs'

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const Example = () => {
  return (
    <Breadcrumbs
      useDefaultStyle
      rootLabel="Home"
      transformLabel={(title) => {
        return capitalize(title)
      }}
      listStyle={{ margin: 0 }}
      //   containerStyle={{ fontSize: '18px', backgroundColor: 'background.paper' }}
      //   activeItemStyle={{ color: 'black', backgroundColor: 'background.paper' }}
      //   inactiveItemStyle={{ color: 'black', backgroundColor: 'background.paper' }}
    />
  )
}
export default Example
