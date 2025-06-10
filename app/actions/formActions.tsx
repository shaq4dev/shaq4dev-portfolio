'use server'

import { z } from 'zod'
import nodemailer from 'nodemailer'

const Contact = z.object({
    firstname: z.string().min(2, "First name too short!"),
    lastname: z.string().min(2, "Last name too short!"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    title: z.string().optional(),
    message: z.string().min(5, "Message too short!"),
})

export async function contactFormAction(formData: FormData) {
    const rawFormData = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        company: formData.get('company'),
        title: formData.get('title'),
        message: formData.get('message'),
    }

    const result = Contact.safeParse(rawFormData)

    if (!result.success) {
        // Manual formatting of the error messages
        const errors = result.error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message,
        }))

        return {
            success: false,
            errors,
        }
    }

    const data = result.data

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    })

    try {
        await transporter.sendMail({
            from: `"${data.firstname} ${data.lastname}" <${data.email}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL,
            subject: `Contact Form: ${data.title || "New Message"}`,
            text: data.message,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${data.firstname} ${data.lastname}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
                <p><strong>Title:</strong> ${data.title || 'N/A'}</p>
                <p><strong>Message:</strong></p>
                <p>${data.message}</p>
            `
        })

        return { success: true }
    } catch (error) {
        console.error('Email sending failed:', error)
        return {
            success: false,
            error: 'Failed to send email',
        }
    }
}
