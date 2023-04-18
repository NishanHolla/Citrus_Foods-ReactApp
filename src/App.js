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
      <div id="feed"></div>
        <a href="https://www.mcdonalds.com/us/en-us.html" target="_blank">
          <img class="adds" id="mcd" src={mcd}></img>
        </a>
    </div>
  );
} 

let x=0;
let y=0;
let j=0;



function Rec(){
    const feed = document.querySelector("#feed");
    while(j<8){         
      const anch = document.createElement('a');
      const head = document.createElement('h4');
      head.innerHTML = name[j]; 
      anch.href = "https://www.burgerking.in/";
      anch.target = "_blank";
      const node = document.createElement("img");
      node.src = food_img[j];
      node.style.height = "20%";
      node.style.width = "10%";
      node.style.marginLeft = "4%";
      head.style.marginLeft = "3%";
      //node.style.border = "3px solid black";
      node.style.borderRadius = "10px";
      node.style.position = "absolute";
      head.style.position = "absolute";
      if(j<4){
        node.style.top = "15%";
        head.style.top = "35%";
        j++;
      }else if(j==4){
        x=0;
        node.style.top = "45%";
        head.style.top = "65%";
        j++;
      }else{
        node.style.top = "45%";
        head.style.top = "65%";
        j++;
      }
      node.style.left = `${x}%`;
      head.style.left = `${x+2}%`;    
      anch.append(node);
      anch.append(head);
      feed.append(anch);
      x+=17;
      //y+=20;
    }
}

export default Apple;
