import { useRouteError } from "react-router-dom" 


const Error = () => {
    // Use this hook to show the error.
    // Note use it inside the functional conponent
    const err = useRouteError();
    console.log(err);
    return (
        <>
            Oops somthis Wrong..!! 
            {err.error.message}
            (This error comes from our Error component)
        </>
    )
}

export default Error
