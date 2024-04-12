import { Link, useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    return (<div>
        <h1>404 Not found</h1>
        <p>You are looking for something which is not present</p>
        <p>{err.data}</p>
        <Link to="/"> Go to homepage </Link>
    </div>)
}

export default Error;