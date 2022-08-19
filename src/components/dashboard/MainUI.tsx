import {PropsWithChildren} from "react";
import {Route} from "react-router";
import {ArtistTable} from "./Aritist/Artist";

interface MainUIProps {

}

export function MainUI({}: MainUIProps) {
    return <Body>
        <Route path="/" element={() => (<ArtistTable/>)}/>
    </Body>
}

export function Body({children}: PropsWithChildren<{}>) {
    return <>
        {children}
    </>
}