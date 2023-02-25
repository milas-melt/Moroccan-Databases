import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import SuccessAlert from "./SuccessAlert";
import CaptchaAlert from "./CaptchaAlert";

export default function NewsletterForm() {
    const [captchaIsDone, setCaptchaIsDone] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("Newsletter email sent!");
                    setShowAlert(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    // Localhost fake keys given by Google for training purposes only: (valid for recaptcha v2 only)
    // Site key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
    // Secret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe

    function onChange() {
        console.log("captcha done");
        setCaptchaIsDone(true);
    }
    return (
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-md">
            <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                    Email
                </label>
                <input
                    type="email"
                    name="user_email"
                    placeholder="Enter your email"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                />
                <button
                    type="submit"
                    className="flex-none rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:bg-gray-500"
                    disabled={!captchaIsDone}
                >
                    Notify me
                </button>
            </div>
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                onChange={onChange}
                className="flex my-6"
            />
            {showAlert && <SuccessAlert />}
            {!captchaIsDone && <CaptchaAlert />}
        </form>
    );
}
