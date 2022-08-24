import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const CharacterId = () => {

    const [character, setCharacter] = useState()
    const { id } = useParams()
    
        useEffect(() => {
        const URL=`https://rickandmortyapi.com/api/character/${id}`
          axios.get(URL)
          .then (res => setCharacter(res.data))
          .catch (err => console.log(err))
        }, [])
        console.log(character)

  return (
    <article>
        <img src={character?.image} alt="" />

    </article>
  )
}

export default CharacterId