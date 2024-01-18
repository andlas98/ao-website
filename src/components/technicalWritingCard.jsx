import { Button, Box, Typography} from "@mui/material"

export default function TechnicalWritingCard(props){
    return(
        <Box className="w-[60vw] bg-maroon flex rounded-reg p-[1.5rem] mb-[2rem]">
            <Box className="w-[80%]">
                <Typography className="technicalWritingCardTitle font-bold mb-[1.5rem]">
                    Getting Started with Microsoft To Dos
                </Typography>
                <Typography className="technicalWritingCardPreview" variant="body2">
                This manual describes how to  I wrote for acclimating employees of Nor-Cal Financial Development Corporation. This manual describes how to  I wrote for acclimating employees of Nor-Cal Financial Development CorporationCorporationCorporationCorporation. 
                </Typography>
            </Box>
            <Box className="w-auto flex align-top mx-auto">
                <Button className="bg-deepRed h-fit align-center hover:bg-deepRed">
                    <Typography className="technicalWritingCardButton text-white" variant="button">
                        View
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}