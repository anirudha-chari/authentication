import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Home() {
    const {logOut} = useAuth()
    return (
        <div>
            <h1>Home</h1>
            <Link to="/login">logout</Link>
        </div>
    )
}
