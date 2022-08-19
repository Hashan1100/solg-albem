import {PropsWithChildren, useState} from "react";
import {useSearchParams} from "react-router-dom";

export function Login({children}: PropsWithChildren<{}>) {
    const [params, setSearchParams] = useSearchParams();
    const [token, setToken] = useState<string | null>(params.get("token"));

    if (!token) {
        window.location.replace("http://www.last.fm/api/auth/?api_key=d732731be2f5f0ec4b10e5a3607d7090&cb=http://localhost:3000")
    } else {
        localStorage.setItem("TOKEN", token)
        return <>
            {children}
        </>
    }

    return null
}