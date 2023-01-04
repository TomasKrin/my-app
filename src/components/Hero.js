import "../App.css";

const Hero = ({title, subtitle, color}) => {
return (
    <div className="hero" style={{backgroundColor:color}}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </div>
)
}

export default Hero;