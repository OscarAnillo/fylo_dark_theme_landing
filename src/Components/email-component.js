import { useState } from 'react';

export default function EmailComponent(){
    const[emailInput, setEmailInput] = useState("");

    const changeHandler = (e) => {
        setEmailInput(e.target.value)
    }

    return (
        <section className="email-section">
            <div>
                <h2>Get early access today</h2>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                <form>
                    <input type="text" placehoder="email@example.com" value={emailInput} onChange={changeHandler} />
                    <button>Get Started For Free</button>
                </form>
            </div>
        </section>
    )
}