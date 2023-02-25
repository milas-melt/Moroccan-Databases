import React from "react";
import { Link } from "react-router-dom";

// used as follows : <ButtonMailto label="Write me an E-Mail" mailto="mailto:no-reply@example.com" />
export default function MailToButton({ mailto, label }) {
    return (
        <Link
            to="#"
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
}
