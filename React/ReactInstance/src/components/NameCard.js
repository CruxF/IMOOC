import React from 'react'

const NameCard = (props) => {
  const { name, number, isHuman, tags } = props
  return (
    <div className="alert alert-success">
      <h1 className="alert-heading">{name}</h1>
      <ul>
        <li>电话：{number}</li>
        <li>{isHuman?'人类':'外星人'}</li>
        <hr />
        <p>
          {tags.map((tag,index)=>(
            <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
          ))}
        </p>
      </ul>
    </div>
  )
}
export default NameCard