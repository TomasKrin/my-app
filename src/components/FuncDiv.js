import FuncButton from "./FuncButton"

const FuncDiv = (props) => {
return (
    <div>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        <FuncButton title={props.buttonText}{... props}/>
        {/* //dar galima paduot vietoj {...}, paduot tiesiog color=props.color */}
    </div>
)
}

export default FuncDiv