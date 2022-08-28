import {isPending, isSuccess, isError} from "mycoriza-runtime";
import {
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow, Theme, useTheme
} from "@mui/material";
import {useEffect, useState} from "react";
import {useFindArtistByName} from "../../../api/albem/reducers/artist/useFindArtistByName";
import {Artist} from "../../../api/albem/models/Artist";
import styled from "@emotion/styled";

interface ArtistTableProps {

}

// export function ArtistWithContext() {
//     return <ApiContext.Consumer>
//         <ArtistTable/>
//     </ApiContext.Consumer>
// }

export function ArtistTable() {
    let [status, find, clear] = useFindArtistByName();

    let [artists, setArtists] = useState<Artist[]>()

    useEffect(() => {
        find({
            apiKey: "d732731be2f5f0ec4b10e5a3607d7090",
            artist: "cher"
        })
        return clear
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
                    <StyledTableCell>
                        Name
                    </StyledTableCell>
                    <StyledTableCell>
                        Listeners
                    </StyledTableCell>
                    <StyledTableCell>
                        URL
                    </StyledTableCell>
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
                                <a href={value.url}>{value.url}</a>
                            </TableCell>
                        </TableRow>
                    })
                }
            </TableBody>
        </Table>
    </TableContainer>
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "black",
        color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));