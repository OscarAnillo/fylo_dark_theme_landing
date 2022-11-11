import { useEffect, useState } from 'react';

export default function EmailComponent(){
    const[emailInput, setEmailInput] = useState({ email: ""});
    const[formError, setFormError] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setEmailInput({...emailInput, [name]:value});
    }

    const validate = (value) => {
        const error = {};

        if (!value.email){
            error.email = "An email is required"
        } else if (!emailRegex.test(value.email)){
            error.email = "Please enter a valid email address"
        }  
        return error;
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(emailRegex.test(emailInput.email)){
            alert(`Signed up with email: ${emailInput.email}`);
            setEmailInput({ email: ''})
        }
        setFormError(validate(emailInput))
        setIsSubmitted(true);
    }
    
    useEffect(() => {
        if(Object.keys(emailInput).length === 0 && isSubmitted){
            console.log("email")
        }
    }, [emailInput, isSubmitted])

    return (
        <section className="email-section">
            <div>
                <h2>Get early access today</h2>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <form onSubmit={submitHandler}>
                    <input type="text" name="email" placeholder="email@example.com" value={emailInput.email} onChange={changeHandler} />
                    <button>Get Started For Free</button>
                </form>
                {
                    formError.email && <p className='error'>{formError.email}</p>
                }
            </div>
        </section>
    )
}