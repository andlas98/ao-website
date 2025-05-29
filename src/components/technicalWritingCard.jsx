import { Button, Box, Typography, Link} from "@mui/material"

export default function TechnicalWritingCard(props){
    let { documentTitle, documentDescription, documentLink } = props;
    return(
        <Box className="w-[60vw] bg-maroon flex rounded-reg p-[1.5rem] mb-[2rem] m-auto max-md:flex-col max-md:w-full duration-200 transition-transform hover:scale-[1.02]">
            <Box className="w-[80%] max-md:w-full">
                <Typography className="technicalWritingCardTitle font-bold mb-[1.5rem]">
                    {documentTitle}
                </Typography>
                <Typography className="technicalWritingCardPreview" variant="body2">
                {documentDescription}
                </Typography>
            </Box>
            <Box className="w-auto flex align-top mx-auto max-md:mt-[1rem]">
                <Link className="bg-deepRed h-fit align-center hover:bg-deepRed rounded-reg max-md:px-[2rem] no-underline" href={documentLink} target="_blank" rel="noopener">
                    <Typography className="technicalWritingCardButton p-[0.5rem] block text-white" variant="button">
                        View
                    </Typography>
                </Link>
            </Box>
        </Box>
    )
}