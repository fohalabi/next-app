import ButtonComponent from './button';

export default async function Contact() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    console.log(posts)
    return (        
        <div>
            <h1>Contact Us</h1>
            <p>If you have any questions, reach out here.</p>

            <ButtonComponent />
        </div>
    )
}