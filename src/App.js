import './App.css';
import lime from './assets/fresh-lemon.png';
import axios from 'axios';
import bk from './assets/bk.png';
import mcd from './Adverts/mcd.jpg';
import dmino from './assets/dmino.png';
import phut from './assets/phut.png';
import nineteen from './assets/1947.jpg';
import bucks from './assets/bucks.png';
import bq from './assets/bq.jpg';
import life from './assets/life.jpg';
import sheesha from './assets/sheesha.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const food_img = [bk,dmino,phut,nineteen,bucks,bq,life,sheesha]
const name = ["Burger King","Domino's","Pizzahut","1947","Starbucks","Barbeque Nation","Lifetree","Dr.Sheesha"]

function App() {
  function handleQuery(event){
      if(event.keyCode === 13){
        let query = document.querySelector("#srch").value;
        console.log(query);
        axios
         .post("http://127.0.0.1:3001/srch",{
          srch:query
         })
         .then((res)=>{console.log(res)})
         .catch(error => console.log(error));
      }
  }
  return(
    <div className="App" onLoad={()=>{Rec()}}>  
    <div class="container">
    <div class="row">
      <div class="col">
        <nav class="navbar navbar-expand-xl  navbar-light bg-danger pl-5 pt-3">
          <ul type="none" class="navbar-nav mr-auto"> 
            <li class="nav-item">
              <a class="navbar-brand" href="#">
                <div class="container">
                  <div class="row">
                    <div class="col-sm">
                      <img src={lime} alt="picture of a lemon" className='logo'></img>
                    </div>
                    <div class="col-sm">
                      <h2 className='branding'>citrus</h2> 
                    </div>
                  </div>
                </div>
              </a>      
            </li>
            <li class="nav-item">
              <input onKeyDown={(event)=>{handleQuery(event)}} id="srch" type="text" className="search-bar" placeholder='search' maxLength={15}></input>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col">
        <a href="https://www.mcdonalds.com/us/en-us.html" target="_blank">
          <img class="adds" id="mcd" src={mcd}></img>
        </a>
      </div>  
    </div>
    </div>
    </div>  
  );
} 

let x=0;
let j=0;

function Rec(){
    const feed = document.querySelector(".App");
    while(j<8){
      const anch = document.createElement('a');
      const head = document.createElement('h1');
      head.innerHTML = name[j]; 
      anch.href = "https://www.burgerking.in/";
      anch.target = "_blank";
      const node = document.createElement("img");
      node.setAttribute("class","feedbox");
      node.src = food_img[j];
      node.style.height = "20%";
      node.style.width = "15%";
      node.style.marginLeft = "2%";
      node.style.border = "3px solid black";
      node.style.borderRadius = "10px";
      node.style.position = "absolute";
      if(j<4){
        node.style.top = "10%";
        j++;
      }else if(j==4){
        x=0;
        node.style.top = "40%";
        j++;
      }else{
        node.style.top = "40%";
        j++;
      }
      node.style.left = `${x}%`;
      anch.append(node);
      anch.append(head);
      feed.append(anch);
      x+=20;
    }
}

export default App;
