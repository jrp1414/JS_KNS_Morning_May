window.onload = function () {
    document.getElementById("btnClick").onclick = function () {
        /*var num = 10;
        console.log(typeof(num));
        num = "Some Name";
        console.log(typeof(num));
        var num2 = 13.23;
        console.log(typeof(num2));
        var name = "Some Name 2";
        console.log(typeof(name));
        var isAdult = true;
        console.log(typeof(isAdult));

        var someUndef;
        console.log(typeof(someUndef));

        var someObj = {
            name:"Ram",
            age:15,
            address: {
                addLine1:"C-502",
                addLine2:"Gurudatta Colony",
                addLine3:"Bhekrai Nagar"
            }
        };

        var someObj2 = {
            name:"Ram",
            age:15,
            address: {
                addLine1:"C-502",
                addLine2:"Gurudatta Colony",
                addLine3:"Bhekrai Nagar"
            }
        };

        console.log(typeof(someObj));
        console.log(someObj);

        var someObj2 = null;
        console.log(typeof(someObj2));

        var name2  = 'Gurudatta Colony';
        console.log(typeof(name2));
        var name3  = `Gurudatta Colony
        vnjfnvjnfjnjfv
        `;
        console.log(typeof(name3));
        */


        //Operators example

        let a = 10;
        let b = 10;

        // console.log("Greater Than Operator Example : "+ (a>b));
        // console.log("Less Than Operator Example : "+ (a<b));
        // console.log("Equals to Operator Example : "+ (a==b));
        // console.log("Equals to Operator Example : "+ (a===b));

        var someVar1 = 23;
        var someVar2 = "Test";
        // console.log("Equals to Operator Example (==) : "+ (someVar1==someVar2));
        // console.log("Equals to Operator Example (===) : "+ (someVar1===someVar2));
        // console.log("Greater Than Operator Example (>) : "+ (someVar1>someVar2));

        // if(parseInt(prompt("Enter Age"))>20){
        //     alert("You are overaged to eb a student");
        // }else{
        //     alert("Welcome to the class");
        // }
        var key = parseInt(prompt("Enter a number between 1 to 5"));
        switch (key) {
            case 1:
                console.log("Lucky 1");
                break;
            case 2:
                console.log("Fantasitc 2");
                break;
            case 3:
                console.log("Nice 3");
                break;
            case 4:
                console.log("Fabulous 4");
                break;
            case 5:
                console.log("Perfect 5");
                break;

            default:
                console.log("Sorry....");
                break;
        }

    }
}