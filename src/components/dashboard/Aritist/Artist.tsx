import {isPending, isSuccess, isError} from "mycoriza-runtime";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {useFindArtistByName} from "../../../api/albem/reducers/artist/useFindArtistByName";
import {Artist} from "../../../api/albem/models/Artist";
import {ApiContext} from "../MainUI";
import {TokenContext} from "../../../App";

interface ArtistTableProps {

}

// export function ArtistWithContext() {
//     return <ApiContext.Consumer>
//         <ArtistTable/>
//     </ApiContext.Consumer>
// }

export function ArtistTable() {
    let [status, find] = useFindArtistByName();

    let [artists, setArtists] = useState<Artist[]>()

    useEffect(() => {
        find({
            apiKey: "d732731be2f5f0ec4b10e5a3607d7090",
            artist: "cher"
        })
    }, [])

    useEffect(() => {
        if (isSuccess(status)) {
            setArtists(status.data.results.artistmatches.artist)
        }
    }, [status])


    if (isPending(status)) {
        return <p>Loading</p>
    }

    if (isError(status)) {
        return <p>Loading error</p>
    }

    return <>
        {
            isSuccess(status) && <TableContent artist={artists ?? []}/>
        }
        {
            isError(status) && <p>Loading error</p>
        }
    </>

}

interface TableContentProps {
    artist: Artist[]
}

export function TableContent({artist}: TableContentProps) {
    return <TableContainer>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        Listeners
                    </TableCell>
                    <TableCell>
                        URL
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    artist.map(value => {
                        return <TableRow>
                            <TableCell>
                                {value.name}
                            </TableCell>
                            <TableCell>
                                {value.listeners}
                            </TableCell>
                            <TableCell>
                                {value.url}
                            </TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    </TableContainer>
}
