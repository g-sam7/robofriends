import React from 'react'

const Card = ({ id, name, username, email }) => {
  return (
    <div id={id} className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div className="tc">
        <h1>{username}</h1>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
