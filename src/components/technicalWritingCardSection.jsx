"use client";
import TechnicalWritingCard from "./technicalWritingCard";
import { Box } from "@mui/material";
import { fetchTechnicalWriting } from "../utils/fetchTechnicalWriting";
import { useEffect, useState } from "react";

export default function TechnicalWritingSection() {
    const [technicalWritings, setTechnicalWritings] = useState([]);

    useEffect(() => {
        let isMounted = true;

        async function getTechnicalWritings() {
            try {
                const data = await fetchTechnicalWriting();
                console.log("Fetched technical writings:", data);
                if (isMounted) {
                    setTechnicalWritings(Array.isArray(data) ? data : []);
                }
            } catch (error) {
                console.error("Failed to fetch technical writings:", error);
                if (isMounted) {
                    setTechnicalWritings([]);
                }
            }
        }

        getTechnicalWritings();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <Box>
            {technicalWritings.map((writing) => (
                <TechnicalWritingCard
                    key={writing._id}
                    documentTitle={writing.document_title}
                    documentLink={writing.document_link}
                    documentDescription={writing.document_description}
                />
            ))}
        </Box>
    );
}