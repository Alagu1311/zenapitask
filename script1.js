
let arr=["alagu","pandi","sush"];
let res=[name1,name2,name3]=arr;
console.log(res);
let obj={
    name:"alagu",
    age:24,
    Dep:"mech",
}
console.log(obj);
let api=("https://anapioficeandfire.com/api/books")
function getdatas(){
    fetch(api)
    .then((res)=>res.json())
    .then((data)=>{
        data.forEach((element)=>{
            let object={
          name: element.name,
          authors:element.authors,
          country: element.country,
          mediaType: element.mediaType,
          url: element.url,
          numberOfPages:element.numberOfPages,
            };
        renderobj(object);
        
        });

    });
}
function renderobj(element){
    

    let newEle = document.createElement("div");
  newEle.innerHTML = `
    <div id="align">Name: ${element.name}</div>
    <div>Authors: ${element.authors}</div>
    <div>Country: ${element.country}</div>
    <div>Meadiatype: ${element.mediaType}</div>
    <div>Url:${element.url}</div>
    <div>NumberOfPages:${element.numberOfPages}</div>
  `;
  document.getElementById("inhtml").appendChild(newEle);
  newEle.style.textAlign="center";
  newEle.style.border="2px solid black";
  newEle.style.padding="10px";
  newEle.style.fontSize="bold";
  newEle.style.backgroundColor="lightgreen";
  

}

getdatas()