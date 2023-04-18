import './App.css';
import bk from './assets/bk.png';
import dmino from './assets/dmino.png';
import phut from './assets/phut.png';
import nineteen from './assets/1947.jpg';
import bucks from './assets/bucks.png';
import bq from './assets/bq.jpg';
import life from './assets/life.jpg';
import sheesha from './assets/sheesha.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
const food_img = [bk,dmino,phut,nineteen,bucks,bq,life,sheesha]
const name = ["Burger King","Domino's","Pizzahut","1947","Starbucks","Barbeque Nation","Lifetree","Dr.Sheesha"]

function Feed() {
  useEffect(()=>{
    document.addEventListener('DOMContentLoaded',Rec());
  })
  return(
    <div id="feed" style={{display:"inline"}}></div>
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
      anch.href = "http://localhost:3000/order";
      anch.target = "_blank";
      const node = document.createElement("img");
      node.src = food_img[j];
      node.style.height = "15%";
      node.style.width = "10%";
      node.style.marginLeft = "2%";
      node.style.border = "3px solid black";
      node.style.borderRadius = "10px";
      node.style.position = "relative";
      head.style.position = "relative";
      if(j<4){
        node.style.top = "15%";
        head.style.top = "35%";
        j++;
      }else if(j==4){
        x=0;
        node.style.top = "25%";
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

export default Feed;
