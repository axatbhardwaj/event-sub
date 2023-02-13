require("dotenv").config();

const switcher = (number) => {

    let Provider;
    number = parseInt(number);
    let choice = number % (10);
   // console.log(choice);

    switch (choice)
    {
        case 0:
            Provider = process.env.node5;
             break;
        case 1:
            Provider = process.env.node1;
             break;
        case 2:
            Provider = process.env.node2;
             break;
        case 3:
            Provider = process.env.node3;
             break;
        case 4:
            Provider = process.env.node4;
             break;
        case 5:
            Provider = process.env.node5;
            break;
        case 6:
            Provider = process.env.node1;
            break;
        case 7:
            Provider = process.env.node2;
            break;
        case 8:
            Provider = process.env.node3;
            break;
        case 9:
            Provider = process.env.node4;
             break;
    }
    console.log(Provider);
    return Provider;
}

function looper(){

    for (var i = 0; i <= 100; i++)
    {
        i = i.toString();
        switcher(i);
        }
}

looper();