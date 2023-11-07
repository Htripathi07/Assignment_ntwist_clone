
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

import "./App.css";

const data = [
  {
    title:'Mine-To-Mill-To-Mine Optimization',
    description:"NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.",
    img:"https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg",
    row:true
  },
  {
    title:"Sustainability",
    description:"Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers. With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.",
    img:"https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg",
    row:false
  },
  {
    title:"Mineral Processing",
    description:"NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.",
    img:"https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg",
    row:true
  },{
    title:"Oil & Gas",
    description:"Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.",
    img:"https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png",
    row:false
  }
]
function App() {
 
  return (
    <div className="App">
      <div className="hero-section">
        <Navbar />
        <div id="hero-img">
          <img
            src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
            alt=""
          />
          <div className="hero-title">
            <p>Data-powered solution for industrial Excellence</p>
            <a href='/'>Read More</a>
          </div>
        </div>
      </div>
      <div>
        {
          data.map((ele,i)=>{
            return(<Card key={i} row={ele.row}  title={ele.title} description={ele.description} img={ele.img} />)
          })
        }
       
      </div>
      <Footer />
    </div>
  );
}

export default App;
