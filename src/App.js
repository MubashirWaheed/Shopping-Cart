import appCss from './App.module.css';
import {Link} from "react-router-dom"

function App() {
  return (
    <div className={appCss.App}>
      <main>
        <div className={appCss.left}>
          <div className={appCss.content}>
            <p>Outfit of the day</p>
            <p>All your</p>
            <h1>Styles Are Here</h1>
            <p className={appCss.text}>Consectetur adipiscing elit. Cursus condimentum donec non dictum. Id et sed ac mauris,
               adipiscing tincidunt amet vel at. Quis lobortis id. consectetur adipiscing elit. </p>
            <Link to="shop" className={appCss.btn}>Buy Now
              <svg className={appCss.arrow} width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L9 8L2 14" stroke="#79BCCF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className={appCss.right}>
          <img  className={appCss.displayImage}src={require('./assets/jacket.png').default} alt="jacket" />
          <svg  className={appCss.backArrows}width="417" height="516" viewBox="0 0 417 516" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M279.5 365.5L387 258L279.5 150.5" stroke="white" strokeOpacity="0.25" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M147 365.5L254.5 258L147 150.5" stroke="white" strokeOpacity="0.25" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        </div>
      </main>
    </div>
  );
}

export default App;
