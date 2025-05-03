import Login from './Login/Login'
import HomeRoute from './HomeRoute/HomeRoute'
import useToken from './Login/store/useToken'

export default function Layout() {
    const { token } = useToken()

    if (!token) {
        return <Login />
    }

    return <HomeRoute />
}
