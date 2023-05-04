import 'bootstrap/dist/css/bootstrap.min.css';
import bk from '../assets/bkbanner.jpg';
import { useState,useEffect } from 'react';
import axios from "axios";

function Template(){
    const [item,setItem] = useState(0);
    useEffect(()=>{
        document.addEventListener('DOMContentLoaded',Menu());
    })
     return(
        <div>
            <a style={{fontSize:"20px",marginLeft:"30px",textDecoration:"none"}} href="http://localhost:3000/home">Back to home</a><br></br>
            <img src={bk} class='banner'></img>
            <span class="badge badge-primary">14</span>
            <div>
            <ul class="list-group">
                <h1 style={{marginLeft:"2%"}}>Menu</h1>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Veg Wopper
                    <span class="badge badge-pill bg-primary "><span class="badge badge-pill"  onClick={()=>{if(item>0){setItem(item-1)}else{setItem(0)}}}>-</span>{item}<span class="badge badge-pill" onClick={()=>{setItem(item+1)}}>+</span></span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Paneer Deluxe
                    <span class="badge badge-pill bg-primary "><span class="badge badge-pill"  onClick={()=>{if(item>0){setItem(item-1)}else{setItem(0)}}}>-</span>{item}<span class="badge badge-pill" onClick={()=>{setItem(item+1)}}>+</span></span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Cheesy Volcano
                    <span class="badge badge-pill bg-primary "><span class="badge badge-pill"  onClick={()=>{if(item>0){setItem(item-1)}else{setItem(0)}}}>-</span>{item}<span class="badge badge-pill" onClick={()=>{setItem(item+1)}}>+</span></span>
                </li>
            </ul>        
            </div>
        </div>
    );
}

function Menu(){
    let menu_list = document.querySelector('.list-group');
    let item_name = document.createElement('li');
    item_name.classList.add('list-group-item');
    item_name.innerHTML = "lava cake"
    menu_list.appendChild(item_name);
}

export default Template;