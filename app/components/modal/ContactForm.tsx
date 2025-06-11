'use client'

import { useState, useReducer, useContext, useEffect } from "react";
import { ModalContext } from "@/app/context/ModalContext";
import { ThemeContext } from "@/app/context/ThemeContext";
import { IoIosClose } from "react-icons/io";
import { PiHandshakeLight } from "react-icons/pi";
import { contactFormAction } from "@/app/actions/formActions";

type formDataProps = {
    firstname: string;
    lastname: string;
    email: string;
    company: string;
    title: string;
    message: string;
};

const initValue: formDataProps = {
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    title: "",
    message: "",
};

function formReducer(formData: formDataProps, action: any) {
    switch (action.type) {
        case "FIRST_NAME":
            return { ...formData, firstname: action.payload.target.value };
        case "LAST_NAME":
            return { ...formData, lastname: action.payload.target.value };
        case "EMAIL":
            return { ...formData, email: action.payload.target.value };
        case "COMPANY":
            return { ...formData, company: action.payload.target.value };
        case "TITLE":
            return { ...formData, title: action.payload.target.value };
        case "MESSAGE":
            return { ...formData, message: action.payload.target.value };
        case "RESET_FORM":
            return initValue;
        default:
            return formData;
    }
}

export default function ContactForm() {
    const theme = useContext(ThemeContext);
    const { modalToggle, setModalToggle } = useContext(ModalContext);

    const [formData, dispatch] = useReducer(formReducer, initValue);
    const [errors, setErrors] = useState<Partial<Record<keyof formDataProps, string[]>>>({});
    const [success, setSuccess] = useState(false);
    const [generalError, setGeneralError] = useState<string | null>(null);
    const [isSending, setIsSending] = useState(false);

    // Handlers for input changes
    function handleChange(type: string) {
        return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            dispatch({ type, payload: e });
        };
    }

    function resetFormAndState() {
        dispatch({ type: "RESET_FORM" });
        setErrors({});
        setSuccess(false);
        setGeneralError(null);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setIsSending(true);
        setErrors({});
        setGeneralError(null);
        setSuccess(false);

        try {
            // Create FormData from formData state
            const formPayload = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formPayload.append(key, value);
            });

            const result = await contactFormAction(formPayload);

            if (result.success) {
                setSuccess(true);
                // Delay reset slightly to allow UI to update
                setTimeout(() => {
                    resetFormAndState();
                }, 3000); // You can increase to 300ms if needed
            } else {
                // Show field errors or general error
                if (result.errors) {
                    setErrors(result.errors);
                }
                if (result.error) {
                    setGeneralError(result.error);
                }
            }
        } catch (err) {
            setGeneralError("Something went wrong. Please try again.");
        } finally {
            setIsSending(false);
        }
    }

    return (
        <>
            <div className="flex justify-between items-center mx-6 my-5">
                <h3
                    className={`${
                        theme === "light" ? "text-main" : "text-golden"
                    } font-black text-3xl flex gap-3 items-center`}
                >
                    <PiHandshakeLight />
                    <div className="lg:hidden">Contact</div>
                    <div className="lg:block hidden">Let's work together</div>
                </h3>
                <button
                    onClick={() => setModalToggle(!modalToggle)}
                    className={`${theme === "light" ? "text-main" : "text-golden"} text-xl`}
                >
                    <IoIosClose size={40} />
                </button>
            </div>

            {/* Show general error */}
            {generalError && (
                <p className="text-red-500 font-semibold mb-4 text-center">{generalError}</p>
            )}

            {/* Success message */}


            <form onSubmit={handleSubmit} className="w-full flex justify-center flex-col items-center px-6">
                <div className={`py-6 inputitem flex flex-col gap-5 w-full`}>
                    <div className="flex flex-col items-start w-full">
                        <input
                            name="firstname"
                            type="text"
                            placeholder="First Name"
                            value={formData.firstname}
                            onChange={handleChange("FIRST_NAME")}
                            className={`${
                                theme === "light"
                                    ? "focus:border-main_hover focus:text-main border-main/10 placeholder:text-dark-primary/70 focus:placeholder:text-main"
                                    : "focus:border-golden_hover focus:text-golden border-golden/10  placeholder:text-light-primary/70 focus:placeholder:text-golden"
                            } bg-light-primary/10 w-full px-3 outline-0 h-12 border-b duration-300`}
                        />
                        {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname[0]}</p>}
                    </div>

                    <div className="flex flex-col items-start w-full">
                        <input
                            name="lastname"
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastname}
                            onChange={handleChange("LAST_NAME")}
                            className={`${
                                theme === "light"
                                    ? "focus:border-main_hover focus:text-main border-main/10 placeholder:text-dark-primary/70 focus:placeholder:text-main"
                                    : "focus:border-golden_hover focus:text-golden border-golden/10  placeholder:text-light-primary/70 focus:placeholder:text-golden"
                            } bg-light-primary/10 w-full px-3 outline-0 h-12 border-b duration-300`}
                        />
                        {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname[0]}</p>}
                    </div>

                    <div className="flex flex-col items-start w-full">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange("EMAIL")}
                            className={`${
                                theme === "light"
                                    ? "focus:border-main_hover focus:text-main border-main/10 placeholder:text-dark-primary/70 focus:placeholder:text-main"
                                    : "focus:border-golden_hover focus:text-golden border-golden/10  placeholder:text-light-primary/70 focus:placeholder:text-golden"
                            } bg-light-primary/10 w-full px-3 outline-0 h-12 border-b duration-300`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
                    </div>

                    <div className="company flex justify-between gap-3">
                        <div className="flex flex-col items-start w-full">
                            <label
                                htmlFor="company"
                                className={`${theme === "light" ? "text-main" : "text-golden"} font-semibold`}
                            >
                                Company
                            </label>
                            <input
                                name="company"
                                type="text"
                                placeholder="ABC Inc.,"
                                value={formData.company}
                                onChange={handleChange("COMPANY")}
                                className={`${
                                    theme === "light"
                                        ? "focus:border-main_hover focus:text-main border-main/10 placeholder:text-dark-primary/70 focus:placeholder:text-main"
                                        : "focus:border-golden_hover focus:text-golden border-golden/10  placeholder:text-light-primary/70 focus:placeholder:text-golden"
                                } bg-light-primary/10 w-full px-3 outline-0 h-12 border-b duration-300`}
                            />
                        </div>
                        <div className="flex flex-col items-start w-full">
                            <label
                                htmlFor="title"
                                className={`${theme === "light" ? "text-main" : "text-golden"} font-semibold`}
                            >
                                Title
                            </label>
                            <input
                                name="title"
                                type="text"
                                placeholder="Founder, CTO, Director etc.,"
                                value={formData.title}
                                onChange={handleChange("TITLE")}
                                className={`${
                                    theme === "light"
                                        ? "focus:border-main_hover focus:text-main border-main/10 placeholder:text-dark-primary/70 focus:placeholder:text-main"
                                        : "focus:border-golden_hover focus:text-golden border-golden/10  placeholder:text-light-primary/70 focus:placeholder:text-golden"
                                } bg-light-primary/10 w-full px-3 outline-0 h-12 border-b duration-300`}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-start w-full">
            <textarea
                name="message"
                placeholder="Send me a message!"
                value={formData.message}
                onChange={handleChange("MESSAGE")}
                className={`${
                    theme === "light"
                        ? "focus:border-main_hover focus:text-main border-main/10 placeholder:text-dark-primary/70 focus:placeholder:text-main"
                        : "focus:border-golden_hover focus:text-golden border-golden/10  placeholder:text-light-primary/70 focus:placeholder:text-golden"
                } bg-light-primary/10 w-full px-3 py-3 outline-0 h-28 border-b duration-300`}
            />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message[0]}</p>}
                    </div>
                </div>

                {success && (
                    <p className="text-green-600 font-semibold text-center w-full px-3 rounded-lg bg-green-500/30 py-4">
                        Message sent successfully!
                    </p>
                )}

                <button
                    type="submit"
                    disabled={isSending}
                    className={`${
                        theme === "light"
                            ? "bg-main hover:bg-main_hover text-light-primary"
                            : "bg-golden hover:bg-golden_hover text-dark-primary"
                    } duration-500 py-3 px-10 my-5 font-semibold rounded-md disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                    {isSending ? "Sending..." : "Send"}
                </button>
            </form>
        </>
    );
}
