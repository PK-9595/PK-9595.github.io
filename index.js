let ans=prompt("What is your name?", "name")
let reply = document.createElement("p");
if (ans == "miumiu" | ans == "miu miu")
    {
        reply.innerHTML="HELLO MIUMIU I MISS U VERY MUCH <3"
    }
else{
    reply.innerHTML="Actually I don't care"
    }
document.getElementById("check_for_miumiu").appendChild(reply);