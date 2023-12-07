// call canvas
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

// define colors
const teal = 'rgba(5, 172, 175, 0.2)';
const blue = 'rgba(41, 171, 226, 0.2)';
const green = 'rgba(146, 149, 57, 0.2)';
const orange = 'rgba(231, 146, 88, 0.2)';
const rose = 'rgba(149, 12, 136, 0.2)';
const purple = 'rgba(0, 19, 226, 0.2)';
const pink = 'rgba(255, 0, 255, 0.2)';

// function for loading rooms
function redirectToPage(pageURL) {
    window.location.href = pageURL;
}

// define rooms
const bedroom = {
    color: teal,
    coordinates: { x: 0, y: 2, width: 420, height: 524 },
    link: 'bedroom.html'
};

const livingroom = {
    color: blue,
    coordinates: { x: 291, y: 2, width: 384, height: 524 },
    link: 'livingroom.html'
};

const office = {
    color: green,
    coordinates: { x: 499, y: 2, width: 299, height: 317 },
    link: 'office.html'
};

const closet = {
    color: orange,
    coordinates: { x: 0, y: 526, width: 390, height: 247 },
    link: 'closet.html'
};

const yoga = {
    color: rose,
    coordinates: { x: 262, y: 515, width: 537, height: 198 },
    link: 'yoga.html'
};

const repair = {
    color: purple,
    coordinates: { x: 441, y: 351, width: 260, height: 413 },
    link: 'repair.html'
};

const vanity = {
    color: pink,
    coordinates: { x: 724, y: 321, width: 75, height: 194 },
    link: 'vanity.html'
};

// const vanity = [
//     ctx.fillStyle = pink,
//     ctx.fillRect(724, 321, 75, 194)
// ];

// function for drawing rooms
function drawRoom(room) {
    ctx.fillStyle = room.color;
    ctx.fillRect(room.coordinates.x, room.coordinates.y, room.coordinates.width, room.coordinates.height);
}

// function for room selection
function handleCanvasClick(event) {
    const x = event.clientX - c.getBoundingClientRect().left;
    const y = event.clientY - c.getBoundingClientRect().top;

    // check which room was clicked
    if (
        x >= bedroom.coordinates.x &&
        x <= bedroom.coordinates.x + bedroom.coordinates.width &&
        y >= bedroom.coordinates.y &&
        y <= bedroom.coordinates.y + bedroom.coordinates.height
    ) {
        redirectToPage(bedroom.link);
    } else if (
        x >= livingroom.coordinates.x &&
        x <= livingroom.coordinates.x + livingroom.coordinates.width &&
        y >= livingroom.coordinates.y &&
        y <= livingroom.coordinates.y + livingroom.coordinates.height
    ) {
        redirectToPage(livingroom.link);
    } else if (
        x >= office.coordinates.x &&
        x <= office.coordinates.x + office.coordinates.width &&
        y >= office.coordinates.y &&
        y <= office.coordinates.y + office.coordinates.height
    ) {
        redirectToPage(office.link);
    } else if (
        x >= closet.coordinates.x &&
        x <= closet.coordinates.x + closet.coordinates.width &&
        y >= closet.coordinates.y &&
        y <= closet.coordinates.y + closet.coordinates.height
    ) {
        redirectToPage(closet.link);
    } else if (
        x >= yoga.coordinates.x &&
        x <= yoga.coordinates.x + yoga.coordinates.width &&
        y >= yoga.coordinates.y &&
        y <= yoga.coordinates.y + yoga.coordinates.height
    ) {
        redirectToPage(yoga.link);
    } else if (
        x >= repair.coordinates.x &&
        x <= repair.coordinates.x + repair.coordinates.width &&
        y >= repair.coordinates.y &&
        y <= repair.coordinates.y + repair.coordinates.height
    ) {
        redirectToPage(repair.link);
    } else if (
        x >= vanity.coordinates.x &&
        x <= vanity.coordinates.x + vanity.coordinates.width &&
        y >= vanity.coordinates.y &&
        y <= vanity.coordinates.y + vanity.coordinates.height
    ) {
        redirectToPage(vanity.link);
    } else {
        // if none of the rooms were clicked, do nothing
    }
}

// draw all rooms
drawRoom(bedroom);
drawRoom(livingroom);
drawRoom(office);
drawRoom(closet);
drawRoom(yoga);
drawRoom(repair);
drawRoom(vanity);

// add click event listener to the canvas
c.addEventListener('click', handleCanvasClick);