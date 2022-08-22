import {createContext, PropsWithChildren} from "react";
import {Route, Routes} from "react-router";
import {ArtistTable} from "./Aritist/Artist";
import { BrowserRouter } from 'react-router-dom';

interface MainUIProps {

}

export const ApiContext = createContext("");

export function MainUI({}: MainUIProps) {
    return <Body>
        <ApiContext.Provider value={"d732731be2f5f0ec4b10e5a3607d7090"}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ArtistTable/>}/>
            </Routes>
        </BrowserRouter>
        </ApiContext.Provider>
    </Body>
}

export function Body({children}: PropsWithChildren<{}>) {
    return <>
        {children}
    </>
}