import {isPending, isSuccess} from "mycoriza-runtime";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {isError} from "mycoriza-runtime/dist/engine";
import {useEffect} from "react";
import {useFindArtistByName} from "../../../api/albem/reducers/artist/useFindArtistByName";
import {Artist} from "../../../api/albem/models/Artist";

interface ArtistTableProps {

}

export function ArtistTable({}: ArtistTableProps) {
    let [status, find, clear] = useFindArtistByName();

    useEffect(() => {
        find({
            artist: "believe"
        })
        return clear
    }, [])

    useEffect(() => {

    }, [status])

    if (isSuccess(status)) {
        return <TableContent artist={status.data.results.artistmatches.artist}/>
    }

    if (isPending(status)) {
        return <p>Loading</p>
    }

    if (isError(status)) {
        return <p>Loading error</p>
    }

    return null

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
