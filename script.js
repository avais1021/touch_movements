
let tree = document.getElementsByClassName('tree');
console.log(tree);
let treeArray = Array.from(tree);
console.log(treeArray);

//tree movements 
let treeStartPoint = -45;
let treeRange = 120;


// mouse X position 
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth ;
let currentXposition = 0;
let fracXValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

// mouse Y position 
let mouseYEndPoint = window.innerHeight ;
let currentYposition = 0;
let fracYValue = 0;

const mouseMove = (event) => {
    console.log(event)
    // console.log('client-X', event.clientX, 'client-Y', event.clientY)

    // currentXposition = event.clientX - mouseXStartPoint;
    currentXposition = event.changedTouches[0].clientX
    - mouseXStartPoint;
    fracXValue = currentXposition / mouseXRange;
    // console.log('fracX',fracXValue)

    // currentYposition = event.clientY;
    currentYposition = event.changedTouches[0].clientY;
    fracYValue = currentYposition / mouseYEndPoint;
    console.log('fracY',fracYValue)

    ///tree code
    let treeXCurrPosition = treeStartPoint + (fracXValue * treeRange);
    let treeYCurrPosition = treeStartPoint + (fracYValue * treeRange);

    treeArray.forEach((currTree)=>{
        currTree.style.transform = `translate(${treeXCurrPosition}px , ${treeYCurrPosition}px)`
    })
}

    const windowResize = (event) => {
        mouseXEndPoint = window.innerHeight;
        mouseXRange = mouseXEndPoint - mouseXStartPoint;

        mouseYEndPoint = window.innerHeight;
    }

window.addEventListener('resize' , windowResize)
window.addEventListener('touchmove', mouseMove)