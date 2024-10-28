import { Card, Typography, Link} from "@mui/material";

export function ContactPill(props) {
    return (
        <Card className="contact-pill px-[1rem] py-[0.5rem] rounded-[2rem] items-center mr-[1rem] bg-deepRed">
        <Link className="flex text-white no-underline text-[1rem] items-center" href={props.link} target="_blank" rel="noopener">
        {props.logo}<Typography variant="body2" className="text-[0.5rem] italic">{props.linkTo}</Typography>
        </Link> 
      </Card>
    );
}

export default ContactPill