import React from 'react'
import './InternshipCard.css'

export default function InternshipCard({ internship }) {
  return (
    <article className="internship-card">
      <h3 className="title">{internship.title}</h3>
      <p className="company">{internship.company} — {internship.location}</p>
      <p className="desc">{internship.description}</p>
    </article>
  )
}
