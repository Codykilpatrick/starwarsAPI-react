import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';


const Starship = () => {
  const location = useLocation()
  console.log(location.state);

  return (
    <>
    <div>{location.state.name}</div>
    <div>{location.state.model}</div>
    <div>
      <Link to="/">RETURN</Link>
    </div>
    </>
  )
}

export default Starship