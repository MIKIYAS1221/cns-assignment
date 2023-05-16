import React from 'react'
import FullWidthGrid from '../../component/FullWidthGrid'
import MenuAppBar from '../layout/Navbar'

const Home = (userDetails) => {
	const user = userDetails.user;
 
  return (
	<>
	<MenuAppBar user={user}/>
	<FullWidthGrid />
	</>
  )
}

export default Home
