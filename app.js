const warrants = document.querySelector('.warrants');
const orders = document.querySelector('.orders');
const checkmarks = document.querySelectorAll('.approve');
const cancelbuttons = document.querySelectorAll('.reject'); 
const warrantsearch = document.querySelector('#warrantsearch');
const ordersearch = document.querySelector('#ordersearch');

// WARRANTS DATA
const warrantsData = [
    {
        name: "John Oils",
        id: '155',
        status: 'pending ',
        imageUrl: 'images/character1.png'
    },
    {
        name: "James Bond",
        id: '156',
        status: ' rejected',
        imageUrl: 'images/character.svg'
    },
    {
        name: "Oliver Twist",
        id: '157',
        status: ' rejected',
        imageUrl: 'images/character2.png'
    },
    {
        name: "Idris Albak",
        id: '158',
        status: ' rejected',
        imageUrl: ''
    },
    {
        name: "Stoney Christon",
        id: '159',
        status: ' rejected',
        imageUrl: 'images/character1.png'
    },
    {
        name: "Daniel Greals",
        id: '160',
        status: 'pending ',
        imageUrl: 'images/character.svg'
    },
    {
        name: "Josh Kennedy",
        id: '161',
        status: 'pending ',
        imageUrl: 'images/character2.png'
    },
    {
        name: "Jerry Sheamus",
        id: '162',
        status: ' rejected',
        imageUrl: 'images/character.svg'
    },
    {
        name: "Apollo Creed",
        id: '163',
        status: 'pending ',
        imageUrl: 'images/character1.png'
    },
]
// ORDERS DATA
const ordersData = [
    {
        name: "John Oils",
        id: '154',
        status: 'pending ',
        imageUrl: ''
    },
]

const pushWarrant = (warrantData) => {
    warrantData.map((item) => {
        const {name, status, id, imageUrl} = item;
        var statusClass = 'blue'
        if (status !== "pending "){
            statusClass = 'red'
        }
        warrants.innerHTML += `
            <div class="warrant">
                <div class='imagecont'>
                    <img src="${imageUrl ? imageUrl : 'images/nophotoblack.png'}" alt="profile-image" class="warrant-image">
                </div>
                <div class="info-section">
                    <p class='suspectname'>${name}</p>
                    <div class="information"> SOME INFORMATION <p class="dot"></p> SOME INFORMATION <p class="dot"></p> id.${id} </div>
                    <section class="status-div">
                        <button class="${statusClass} funcBtns">${status === 'pending' ? 'pending approval' : 'approval rejected'}</button>
                        <div>
                            <button class="statusbtn approve"><img src="images/checkmark.svg" alt="checkmark"></button>
                            <button class="statusbtn reject"><img src="images/cancelicon.svg" alt="close"> </button>
                        </div>
                    </section>
                </div>
                <div class="days-left">IN 6 DAYS</div>
            </div>
        `
    })
}

const pushOrder = (ordersData) => {
    ordersData.map((item) => {
        const { name, id, imageUrl } = item;
        orders.innerHTML += `
        <div class="order">
            <div class='imagecont'><img src="${imageUrl ? imageUrl : 'images/nophotored.png'}" alt="profile-image" class="order-image"></div>
            <div class="info-section">
                <p class='suspectname'>${name}</p>
                <div class="information"> SOME INFORMATION <p class="dot"></p> SOME INFORMATION <p class="dot"></p> id.${id} </div>
                <button class="red funcBtns">WANTED</button>
            </div>
        </div>
    `
    })
}

pushWarrant(warrantsData);
pushOrder(ordersData);

warrantsearch.addEventListener('change', (e) => {
    console.log(e.target.value)
})

ordersearch.addEventListener('change', (e) => {
    console.log(e.target.value)
})


checkmarks.forEach((checkmark) => {
    checkmark.addEventListener('click', () => {

    })
})