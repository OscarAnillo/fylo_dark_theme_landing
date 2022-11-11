import 'animate.css';

export default function NavComponent(){
    return (
        <nav className="animate__animated animate__fadeInDown">
            <section className="nav-section">
                <div>
                    <img src="images/logo.svg" alt="" />
                </div>
                <div>
                    <ul>
                        <li>Features</li>
                        <li>Team</li>
                        <li>Sign In</li>
                    </ul>
                </div>
            </section>
        </nav>
    )
}