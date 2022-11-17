
import AnchorLink from "react-anchor-link-smooth-scroll";
import WelcomePage from "./WelcomePage";


function App() {


  return (
    <>
    <div className="App">
        <h1 align="center">Navigation</h1>
        <h2 align="center">
          <AnchorLink href="#header">
            <button>Header</button>
          </AnchorLink>
          <AnchorLink href="#body">
            <button>Body</button>
          </AnchorLink>
          <AnchorLink href="#footer">
            <button>Footer</button>
          </AnchorLink>
        </h2>
        <WelcomePage/>
      </div>
    
     
    </>
  )
}

export default App
