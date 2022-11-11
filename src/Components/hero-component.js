import 'animate.css';

export default function HeroComponent(){
    return (
        <section className="animate__animated animate__fadeInUp">
            <div className="hero-wrapper">
                <img src="images/illustration-intro.png" alt="" />
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collabotate with friends family, and co-workers.</p>
                <button>Get Started</button>
            </div>
        </section>
    )
}