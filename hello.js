function myfun()
{
    console.log("myfun");
    try{
        /*const res=await fetch("https://api.chucknorris.io/jokes/random");
        console.log(res.json());
        const ans=await res.json();
        console.log("he",ans.value);*/
         const res=fetch("https://api.chucknorris.io/jokes/random");
        res.then((value1)=>{
            return value1.json();
        }).then((value2)=>{
            console.log(value2);
            console.log(value2.value);
            const joke1=document.querySelector("#joke");
        joke1.innerHTML=value2.value;
        });
        
    }
    catch(error){

    }
}

document.addEventListener("click",()=>{
    console.log('hell');
    myfun();
    console.log("hl");
});