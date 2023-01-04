import './App.css';
import Logo from './components/Logo';
import NavigationBar from './components/NavigationBar';
import FuncButton from './components/FuncButton';
import FuncDiv from './components/FuncDiv';
import ClassButton from './components/ClassButton';
import ClassDiv from './components/ClassDiv';
import Button from './components/Button';
import Hero from './components/Hero';

// app.js yra pagrindinis komponentas
// vienas failas = vienas komponentas
// komponentai rasomi didziaja raide
// komponentai buna dvieju tipu: funkciniai ir klasinai
// funkciniai atrodo kaip funkcijos tik is didziosios raides. Regular arba Arrow funkcijos.
// return dalyje rasomas JSX - javascript + html
// kas virs returno visa logika
// class => className

function App() {
// const name = 'Tomas';

// const getRandomNumber = ()=>{
//   return Math.floor(Math.random() * 10);
// } 

const createSmallTextTab = (title)=>{
  return (
      <>
      <div className='textTab'>
      <h2>{title}</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
      </div>
      </>
  );
}
  return (
    <>
    <Logo/>
    <NavigationBar/>
    <FuncButton 
     title="Nespausk Prasau" 
     color='red'/>
    <FuncButton 
     title="Spausk Mane"/>
    <FuncDiv
     title='Kazkas' 
     subtitle='kazkur' 
     buttonText='Kas'
     color='blue'>
     </FuncDiv>
     <ClassButton 
     title='Hello'
     />
     <ClassDiv
     title='Class'
     subtitle='Class Div'
     buttonText='Do not Click'
     />
     <Button>Tomai Spausk</Button>
     <Hero
     title='Info Hero'
     subtitle='Info Subtitle'
     color='blue'
     />
      <div className="aboutTiles">
        {createSmallTextTab('About')}
        {createSmallTextTab('Company')}
        {createSmallTextTab('Services')}
      </div>
      <div className='contentContainer'>
        <article>
          <h1>Content</h1>
          <p className='articleText'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <h3>Sub Header</h3>
          <p className='articleText'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
        </article>
        <aside>
          <h2>Navigation</h2>
          <ul className='sideNav'>
            <li>Home</li>
            <li>Product</li>
            <li>Company</li>
            <li>Contact</li>
          </ul>
        </aside>
      </div>
      </>
  );
}

export default App;
