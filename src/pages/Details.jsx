import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getAllItems, getById } from "../api/apiServise"
import config from "../config"

const Details = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const [team, setTeam] = useState({})
  const [members, setMembers] = useState([])

  const getTeams = async () => {
    const arrayTeam = await getById(`${config.url}/teams`, id)
    const _team = arrayTeam[0]
    setTeam(_team)
  }
  const getMembers = async () => {
    const data = await getAllItems(`${config.url}/members`)
    const filteredMembers = data.filter((el) => {
      return el.team.id === Number(id)
    })
    setMembers(filteredMembers)
  }
  useEffect(() => {
    getTeams()
    getMembers()
  }, [])
  return (
    <article className="article-container">
      <h1>{team.name}</h1>
      <p className="article-description">{team.description}</p>
      <h2>Members:</h2>
      <ul>
        {members.map((el) => (
          <li key={el.id}>
            {el.first_name} {el.last_name}
          </li>
        ))}
      </ul>
      <div className="article__btn-container">
        <button onClick={() => navigate("/")} className="article-btn">
          <i className="fa-solid fa-arrow-left-long"></i> Go back
        </button>
      </div>
    </article>
  )
}

export default Details
