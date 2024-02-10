import { Button, Box, Typography} from "@mui/material"

export default function TechnicalWritingCard(props){
    let { documentTitle, documentDescription, documentLink } = props;
    return(
        <Box className="w-[60vw] bg-maroon flex rounded-reg p-[1.5rem] mb-[2rem] m-auto">
            <Box className="w-[80%]">
                <Typography className="technicalWritingCardTitle font-bold mb-[1.5rem]">
                    {props.documentTitle}
                </Typography>
                <Typography className="technicalWritingCardPreview" variant="body2">
                {props.documentDescription}
                </Typography>
            </Box>
            <Box className="w-auto flex align-top mx-auto">
                <Button className="bg-deepRed h-fit align-center hover:bg-deepRed" href={props.documentLink}>
                    <Typography className="technicalWritingCardButton text-white" variant="button">
                        View
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}