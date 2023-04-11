import './App.css';
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

function Apple() {
  return(
    <div className="App" onLoad={()=>{Rec()}}>  
        <a href="https://www.mcdonalds.com/us/en-us.html" target="_blank">
          <img class="adds" id="mcd" src={mcd}></img>
        </a>
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

export default Apple;
