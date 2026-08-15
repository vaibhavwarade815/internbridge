import React from 'react'
import InternshipCard from '../../components/InternshipCard/InternshipCard'
import internships from '../../data/internships'
import './Internships.css'

export default function Internships() {
  return (
    <section className="page-internships">
      <h2>Internships</h2>
      <div className="list">
        {internships.map(i => (
          <InternshipCard key={i.id} internship={i} />
        ))}
      </div>
    </section>
  )
}
