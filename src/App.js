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
const food_img = [bk,dmino,phut,nineteen,bucks,bq,life,sheesha]
const name = ["Burger King","Domino's","Pizzahut","1947","Starbucks","Barbeque Nation","Lifetree","Dr.Sheesha"]

function Feed() {
  useEffect(()=>{
    document.addEventListener('DOMContentLoaded',Rec());
  })
  return(
    <div className="flexbox"></div>
  );
} 

function Rec(){
    let j=0;
    const feed = document.querySelector(".flexbox");
    while(j<8){         
      const anch = document.createElement('div');
      const head = document.createElement('h6');
      head.innerHTML = name[j]; 
      const node = document.createElement("img");
      anch.classList.add("flexbox-item");
      node.classList.add("flexbox-img");
      node.src = food_img[j];
      node.style.border = "3px solid black";
      node.style.borderRadius = "10px";
      anch.append(node);
      anch.append(head);
      feed.append(anch);
      j++;
    }
}

export default Feed;
