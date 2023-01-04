import "../App.css";

const NavigationBar = () => {
    return(
        <nav className="nav">
        <ul>
          <li><a href='home'>Home</a></li>
          <li><a href='product'>Product</a></li>
          <li><a href='company'>Company</a></li>
          <li><a href='contact'>Contact</a></li>
        </ul>
      </nav>
    )
}

export default NavigationBar