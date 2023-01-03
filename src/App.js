import './App.css';

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
   <><><div className='logo'>
      <img src='https://digiltable.com/wp-content/uploads/edd/2021/08/Web-designs-logos-creative-2021.png' alt='Logo'
      />
    </div>
    </>
    <div className="nav">
        <ul>
          <li><a href='home'>Home</a></li>
          <li><a href='product'>Product</a></li>
          <li><a href='company'>Company</a></li>
          <li><a href='contact'>Contact</a></li>
        </ul>
      </div>
      <div className="headerImage">
          <p className='imageText'>Header Image</p>
      </div>
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
