import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsToken } from '../redux/selectors'

const PublicGuards = ({ children }) => {
	const isAuth = useSelector(selectIsToken)

	return !isAuth ? children : <Navigate to={'/contacts'} />
}

export default PublicGuards
