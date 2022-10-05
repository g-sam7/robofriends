import React from 'react'
import SearchBox from './SearchBox';

const Header = ({ searchChange }) => {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-indigo-600">Coming this fall</h3>
          <div className="uppercase mt-1 font-bold tracking-tight text-gray-900 text-2xl">
            Robofriends
          </div>
          <p className="mx-auto mt-5 max-w-xl text-xl text-cyan-400">
            These violent delights have violent ends
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <SearchBox searchChange={searchChange} />
      </div>
    </div>
  )
}

export default Header;
