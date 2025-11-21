import React from 'react'
import './single.css'
import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlePost/SinglePost'

const Single = () => {
  return (
    <div className='single'>
          {/* post */}
          <SinglePost/>
          
          {/* sidebar */}
          <SideBar/>
    </div>
  )
}

export default Single
