import { Box, TextField, Button, Typography } from "@mui/material";

export default function ContactForm(props){
    return(
        <Box className="contactFormBox">
            <TextField className="contactFormNameField" label="Name" variant="filled" />
            <TextField className="contactFormEmailField" label="Email" variant="filled" />
            <TextField className="contactFormMessageField" label="Message" variant="filled" multiline={true} minRows={9}/>
            <Button variant='contained' >
              <Typography variant='button'>Send Message</Typography>
            </Button>
        </Box>
    )
}