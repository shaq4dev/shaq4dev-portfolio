'use server'


async function contactFormAction (formData: FormData){
    const rawFormData = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        company: formData.get('company'),
        title: formData.get('title'),
        message: formData.get('message'),
    }

    console.log(rawFormData)
}

export {contactFormAction}