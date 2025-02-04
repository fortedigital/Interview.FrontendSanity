'use client'
import { useEffect, useState } from 'react'

interface Person {
  name: string
  surname: string
}

export default function Home() {
  const [persons, setPersons] = useState<Person[]>([])

  
  useEffect(() => {
    fetch('/api/sanity')
      .then((res) => res.json())
      .then((data) => setPersons(data))
  }, [])

  return (
    <div>
      <h1>Persons</h1>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} {person.surname}
          </li>
        ))}
      </ul>
    </div>
  )
}