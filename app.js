let display = document.getElementById("display")
let btns = document.querySelectorAll("button")
for(let item of btns)
{
    item.addEventListener("click",(e) => {
       if(e.target.innerText =="c")
       {
           display.value = ""
       }   
       else if(e.target.innerText == "=")
       {
         try{
             let ans = eval(display.value)
            display.value = ans            
            } 
            catch (error) {
            display.value = "invalid input"
        }
        }
        else 
        {
            display.value += e.target.innerText
        }
         
       
    })

}