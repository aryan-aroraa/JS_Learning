<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html events</title>
    <style>
        body {
            background-color: rgb(66, 66, 66);
            color: aliceblue;
        }
    </style>
</head>

<body>
    <ul id="images">
        <li><img width="200px" id="photoshop"
                src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt="photoshop"></li>
        <li><img width="200px" id="japan"
                src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""></li>
        <li><img width="200px" id="river"
                src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""></li>
        <li><img width="200px" id="owl"
                src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""></li>
        <li><img width="200px" id="prayer"
                src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                alt=""></li>
        <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
    </ul>
</body>
<script>
    // document.getElementById("owl").addEventListener("click", (e) =>{
    //     console.log(e);
    // }, false)
    // document.getElementById("owl").addEventListener("mouseover", (e) =>{
    //     console.log(e.clientX, e.clientY);
    // }, false)
    // document.getElementById("japan").addEventListener("mousedown", (e)=>{
    //     console.log(e.ctrlKey)
    // }, false)

    //event propogation
    // document.getElementById("images").addEventListener("click", ()=>{
    //     console.log("Clicked inside ul") //event bubbling
    // }, false)
    // document.getElementById("owl").addEventListener("click", (e)=>{
    //     console.log("owl clicked")
    //     e.stopPropagation() //stops bubbling
    // }, false)
    // document.getElementById("google").addEventListener("click", (e) => {
    //     console.log("google clicked")
    //     e.preventDefault();
    //     e.stopPropagation(); // stops the default action of an event
    // })

    //removing element by clicking it
    // let removeIt
    // document.querySelector("#images").addEventListener("click", (e) => {
    //     console.log(e.target.tagName);
    //     if (e.target.tagName === 'IMG') {
    //         console.log(e.target.id);
    //         removeIt = e.target.parentNode;
    //     }
    //     else {  
    //         console.log(e.target);
    //         removeIt = e.target;
    //     }
    //     removeIt.remove();
    //     // removeIt.parentNode.removeChild(removeIt);
    // })

    //setInterval
    // let a = setInterval(()=>{
    //     document.querySelector("#images").style.backgroundColor = getRandomColor();
    // }, 3000) // will return a random color to ul every 3 seconds
    // console.log(a);

    //setTimeout
    let b = setTimeout(()=>{
        document.querySelector("#images").style.backgroundColor = getRandomColor();
    }, 5000) // will return a random color to ul after 5vid seconds
    console.log(b);

    function getRandomColor() {
        let r, g, b;
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }
</script>

</html>