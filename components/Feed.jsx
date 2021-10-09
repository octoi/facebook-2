import React from 'react'
import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

export default function Feed({ posts }) {
  return (
    <div className='flex flex-grow h-screen pb-4 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide mb-200'>
      <div className='mx-auto max-w-sm md:max-w-md lg:max-w-xl xl:max-w-xl'>
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  )
}
