import { Button, Box, Typography} from "@mui/material"

export default function TechnicalWritingCard(props){
    let { documentTitle, documentDescription, documentLink } = props;
    return(
        <Box className="w-[60vw] bg-maroon flex rounded-reg p-[1.5rem] mb-[2rem] m-auto max-md:flex-col">
            <Box className="w-[80%] max-md:w-full">
                <Typography className="technicalWritingCardTitle font-bold mb-[1.5rem]">
                    {documentTitle}
                </Typography>
                <Typography className="technicalWritingCardPreview" variant="body2">
                {documentDescription}
                </Typography>
            </Box>
            <Box className="w-auto flex align-top mx-auto max-md:mt-[1rem]">
                <Button className="bg-deepRed h-fit align-center hover:bg-deepRed max-md:px-[2rem]" href={documentLink}>
                    <Typography className="technicalWritingCardButton text-white" variant="button">
                        View
                    </Typography>
                </Button>
            </Box>
        </Box>
    )
}