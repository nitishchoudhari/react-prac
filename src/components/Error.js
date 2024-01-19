import { useRouteError } from "react-router-dom";

export const Error = () => {
    const err =  useRouteError();
    const { status, statusText } = err;
    return (
        <div>
            <h1>{status} {statusText}</h1>
        </div>
    )
};