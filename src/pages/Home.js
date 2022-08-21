import photo from "./photo.png";

export default function Home() {
    return (
        <div className="homepage">
            <div>
                <h1>I'm Dion Teo.</h1>
                <span>
                    A current software developer. Considers myself as a 'forever student', embraces self-learning and eager to build on my technical expertise.
                </span>
            </div>

            <div>
                <img src={photo} alt=""></img>
            </div>
        </div>
    )
}