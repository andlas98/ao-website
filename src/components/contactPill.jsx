import {Typography, Link} from "@mui/material";

export function ContactPill(props) {
    return (
        <Link className="contact-pill px-[1rem] py-[0.5rem] transition ease-in-out delay-50 text-[1rem] w-fit rounded-[2rem] bg-deepRed hover:bg-white text-white hover:!text-deepRed flex no-underline justify-center items-center" href={props.link} target="_blank" rel="noopener">
            <span className="mr-[0.5rem]">{props.logo}</span>
            <Typography variant="body2" className="text-[0.5rem] font-bold">{props.linkTo}</Typography>
        </Link> 
    );
}

export default ContactPill