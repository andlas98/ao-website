import { Button, Card, Typography, Link} from "@mui/material";

export function ContactPill(props) {
    return (
        // <Button className="">
        <Link className="contact-pill px-[1rem] py-[0.5rem] text-[1rem] w-[10rem] rounded-[2rem] bg-deepRed hover:bg-white text-white hover:!text-deepRed flex no-underline justify-center items-center" href={props.link} target="_blank" rel="noopener">
        {props.logo}<Typography variant="body2" className="text-[0.5rem] italic">{props.linkTo}</Typography>
        </Link> 
    //   </Button>
    );
}

export default ContactPill