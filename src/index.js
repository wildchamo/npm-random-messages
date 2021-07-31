const messages = [
    "Juan",
    "Jose Luis",
    "Brayan",
    "Catalina",
    "Laura",
    "Santiago"
];

const randomMsg= ()=>{
    const message=messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {randomMsg}
