'use client';

export default function Contact() {
    return (
        console.log("Is this in the server or client?"),

        <div>
            <h1>Contact Us</h1>
            <p>If you have any questions, reach out here.</p>
            <button onClick={() => alert("Hello!")}>
                click me!
            </button>
        </div>
    )
}