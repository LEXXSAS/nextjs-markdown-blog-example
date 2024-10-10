'use client'
import React from 'react'
import { useState } from "react"
import { SearchBar } from './SearchBar'
import PostCard from './PostCard'

export const SearchView = (props) => {
  const [searchValue, setSearchValue] = useState('')
  const {postMetadata} = props

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="postsContainer">
          {postMetadata.filter(val => {
            return val.title.toLowerCase().includes(searchValue)
          }).map((post, postIndex) => {
            return (
              <PostCard key={postIndex} post={post} />
            )
          })}
        </div>
    </>
  )
}
