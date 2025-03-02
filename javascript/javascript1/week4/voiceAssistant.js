/* Note: 
--------------
following approach gives confusion 
let cmdList=command.split(' ') 
for multiple cases, if i go with indexes 
cmdList[3] for + ,cmdList[4] for todo, cmdList[3] for name? 
e.g given cases below 
what is 3 + 3 
Add fishing to my todo
What is my name?'

*/
console.log("===== Assignment (Voice Assistant App ) =====")
let info = [];

// main getReply 
let getReply = (command) => {
    let reply = "";
    let cmd_list = command.split(" ");
    let nameIndex = cmd_list.length - 1;
    let name = cmd_list[nameIndex];

    // callback to check name exist in array of objects
    let found = info.find((info) => info.name === name);

    if (found) {
        reply = `You are again: ${name}`;
    } 
    else 
    {
        // name?: unknow if empty object otherwise last object
        if (command.includes("name?"))
        {
            if (info.length === 0) {
                reply = `I don't know your name.`;
            } else {
                let lastObjectName = info[info.length - 1].name;
                reply = `Your name is: ${lastObjectName}`;
            }

        }
        // add todo 
        else if (command.startsWith("Add"))
        {
            if (info.length === 0) {
                reply = `No object exist - (could not add)`;
            } else {
                let lastObject = info[info.length - 1];
                let task_list = command.split(" "); 
                // adding todo (last object)
                lastObject.todo.push(task_list[1]);
                reply = `Added "${task_list[1]}" to your todo`;
            }

        } 
        // remove todo
        else if (command.startsWith("Remove"))
        {
            if (info.length === 0) {
                reply = `No object exist - (could not remove)`;
            } else {
                let lastObject = info[info.length - 1];

                if (lastObject.todo.length === 0) {
                    reply = `Your todo list is empty`;
                } else {
                    // removing todo (last object)
                    let removedTask = lastObject.todo.shift(); 
                    reply = `Removed "${removedTask}" from your todo`;
                }
            }

        } 
        // remove todo
        else if (command.endsWith("todo?"))
            {
                if (info.length === 0) {
                    reply = `No object exist`;
                } else {
                    let lastObject = info[info.length - 1];
    
                    if (lastObject.todo.length === 0) {
                        reply = `Your todo list is empty`;
                    } else {
                        // returning counts of todo (last object)
                        let todoCount = lastObject.todo.length; 
                        let todoList=[]
                        for (let i=0; i<lastObject.todo.length; i++){
                                // pushing todo
                                todoList.push(lastObject.todo[i])
                        }
                        // formating (count and todo - (toString method -> list to string))
                        reply = `you have ${todoCount} todos - ${todoList.toString()}`;
                        
                    }
                }
    
            }
        else if (command.endsWith("today?"))
            {
                if (info.length === 0) {
                    reply = `No object exist`;
                } else {
                    let lastObject = info[info.length - 1];
                    date=lastObject.date
                    let year = date.getFullYear();  
                    let day = date.getDate();       
                    let monthName = date.toLocaleString('da-DK', { month: 'short' });
                    reply= `Date: ${day} of ${monthName} ${year}`
                }
            }
        else if (command.includes(" + "))
            {
                if (info.length === 0) {
                    reply = `No object exist`;
                } else {
                    // call plus from last object
                    let command_list=command.split(" ")
                    let num1=command_list[2]
                    let num2=command_list[4]
                    let lastObject = info[info.length - 1];
                    let sum=lastObject.additionFunc(parseInt(num1), parseInt(num2))
                    reply= `Sum: ${sum}`
                }
                
            }
        else if (command.includes(" * "))
            {   
                if (info.length === 0) {
                    reply = `No object exist`;
                } else {
                    // call multiplication from last object
                    let command_list=command.split(" ")
                    let num1=command_list[2]
                    let num2=command_list[4]
                    let lastObject = info[info.length - 1];
                    let multiplication=lastObject.multiplicationFunc(parseInt(num1), parseInt(num2))
                    reply= `multiplication: ${multiplication}`
                }
               
            }
        else 
        {
            let infObject = {
                name: name,
                todo: [],
                date: new Date(),
                additionFunc: (a,b)=>{return a+b},
                multiplicationFunc:(a,b)=>{return a*b},
            };
            info.push(infObject);
            reply = `Nice to meet you, ${name}`;
        }
    }

    return reply;
};
let questionsCaseOne=(duration)=>{
    console.log(`-----[Timer set for ${duration} second]-----`);
    console.log(getReply("Hello my name is Benjamin"));
    console.log(getReply("Hello my name is Benjamin"));
    console.log(getReply("Hello my name is Ali"));
    console.log(getReply("Hello my name is Ali"));
    console.log(getReply("What is my name?"));
    console.log(getReply("Add fishing to my todo"));
    console.log(getReply("Add eating to my todo"));
    console.log(getReply("Add singing in the shower to my todo"));
    console.log(getReply("Remove fishing from my todo"));
    console.log(getReply("What is on my todo?"));
    console.log(getReply("What day is it today?"))
    console.log(getReply("what is 3 + 3"))
    console.log(getReply("what is 4 * 12"))

    // extra test (correct)
    console.log(getReply("Hello my name is Waseem"));
    console.log(getReply("what is 3 + 15"))
}
let questionsCaseTwo=(duration)=>{
    console.log(`-----[Timer set for ${duration} second]-----`);
    console.log(getReply("What is my name?"));
    console.log(getReply("what is 3 + 3"))
    console.log(getReply("what is 4 * 12"))
}
function setTimer(duration) {
    
    questionsCaseOne(duration)


    console.log("-----[Array of Objects]-----")
    console.log("Info Array of Objects=",info);

    
    // callback
    let intervalId =setInterval(() => {
        // a state where i will reset info array of objects
        console.log(`-----[Time Out after ${duration} second]-----`);
        // remove last object
        info.pop()
        console.log("Updated info Array of Objects=",info)
        
        if(info.length===0){
            console.log("No user object exist in array of objects - info")    
            }
        else{
             // after interval reply ready for -> Ali  then after -> Benjamin then after nothing close
            questionsCaseTwo(duration)
            }
    }, duration * 1000); // seconds to milliseconds

    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Closing App - Voice Assistent");
    }, 10000);
}
// set time for 3 second
setTimer(3);



