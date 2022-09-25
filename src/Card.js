import React from 'react'

const Card = ({ id, name, username, email }) => {
  return (
    <a key={id} href="#" className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={`https://robohash.org/${id}?200x200`}
          alt="robots"
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{username}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{name}</p>
      <p className="mt-1 text-lg font-medium text-gray-900">{email}</p>
    </a>
  )
}

export default Card;
