function Span(){
    return (
        <div>
            <div id="span"></div>
            <button onClick={Home}>apple</button>
        </div>
    );
}

function Home(){
    let arr=["Ocean Pearl","Hammered","Top Ace Cafe","1957"];
    let i=0;
    let sapun = document.getElementById("span");
    for(i=0;i<4;i++){
        const node = document.createElement("h1");
        node.innerHTML = arr[i];
        sapun.append(node);
    }
}

export default Span;