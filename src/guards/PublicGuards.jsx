import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectIsToken } from '../redux/selectors'

const PublicGuards = ({ children }) => {
	const isAuth = useSelector(selectIsToken)
	const location = useLocation()

	return !isAuth ? children : <Navigate to={location.state ?? '/'} />
}

export default PublicGuards
