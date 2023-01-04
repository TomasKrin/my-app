const FuncButton = (props) => {
    //{title: 'Spausk Mane' ... color:'red'}
    const {color, title} = props;
    //arba props.color, props.title
return(
    <button style={{backgroundColor:color}}>{title}</button>
)
}

export default FuncButton