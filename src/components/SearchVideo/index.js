import React, { useContext, useState } from "react"
import { VideoDispatchContext } from "../../context"
import Select from "react-select/creatable"
import Alert from "../Alert"
import API from "../../services/api"

export default function SearchVideo() {
  const setVideos = useContext(VideoDispatchContext)

  const [tags, setTags] = useState([])
  const [level, setLevel] = useState("")
  const [error, setError] = useState("")

  const disableBtn = tags && tags.length === 0 && level === ""

  const retrieveVideos = async (e) => {
    e.preventDefault()
    setError("")
    let params = ""
    if (tags.length !== 0) {
      params += `&tags=${tags.map((tag) => tag.value).join()}`
    }
    if (level) {
      params += `&level=${level}`
    }
    try {
      const res = await API.get("videos", params)
      if (res.ok) {
        const data = await res.json()
        setVideos(data)
      }
    } catch (error) {
    //   console.log(error)
      setError("Error while fetching data .. please try again")
    }
  }
  return (
    <>
      <h2 className="text-center">Search videos</h2>
      <form>
        <div className="form-group">
          {" "}
          <Alert type="danger" message={error} />{" "}
        </div>
        <div className="form-group">
          <label>Level</label>
          <select
            className="form-control"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option></option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tags</label>
          <Select
            options={tags}
            isMulti
            placeholder={"Add a tags"}
            isClearable
            onChange={(opt) => setTags(opt)}
          />
        </div>
        <button
          disabled={disableBtn}
          onClick={(e) => retrieveVideos(e)}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  )
}
