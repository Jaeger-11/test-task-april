const main = document.querySelector('#main')
const warrantsearch = document.querySelector('#warrantsearch');
const ordersearch = document.querySelector('#ordersearch');
const dashboard = document.querySelector('#dashboard');
const incidents = document.querySelector('#incidents');
const profiles = document.querySelector('#profiles');
const vehicles = document.querySelector('#vehicles');
const reports = document.querySelector('#reports');
const misc = document.querySelector('#misc');
// dashboard selectors
const warrants = document.querySelector('.warrants');
const orders = document.querySelector('.orders');
const checkmarks = document.querySelectorAll('.approve');
const cancelbuttons = document.querySelectorAll('.reject'); 

const clickLinks = [ dashboard, incidents, profiles, vehicles, reports, misc ];
// DASHBOARD FUNCTIONALITY
// WARRANTS DATA
let warrantsData = [
    {
        name: "john oils",
        id: '155',
        status: 'pending',
        imageUrl: 'images/character1.png'
    },
    {
        name: "james bond",
        id: '156',
        status: 'rejected',
        imageUrl: 'images/character.svg'
    },
    {
        name: "oliver twist",
        id: '157',
        status: 'rejected',
        imageUrl: 'images/character2.png'
    },
    {
        name: "idris albak",
        id: '158',
        status: 'rejected',
        imageUrl: ''
    },
    {
        name: "stoney christon",
        id: '159',
        status: 'rejected',
        imageUrl: 'images/character1.png'
    },
    {
        name: "daniel greals",
        id: '160',
        status: 'pending',
        imageUrl: 'images/character.svg'
    },
    {
        name: "josh kennedy",
        id: '161',
        status: 'pending',
        imageUrl: 'images/character2.png'
    },
    {
        name: "jerry sheamus",
        id: '162',
        status: 'rejected',
        imageUrl: 'images/character.svg'
    },
    {
        name: "apollo creed",
        id: '163',
        status: 'pending',
        imageUrl: 'images/character1.png'
    },
]
// ORDERS DATA
let ordersData = [
    {
        name: "John Oils",
        id: '154',
        status: 'pending ',
        imageUrl: ''
    },
]

const pushDashboardContents = () => {
    main.innerHTML = `
    <section class="dashboardcontent">
        <section class="warrants-container">
            <div class="header">
                <section class="header-text">
                    <img src="images/warrants.svg" alt="warrants icon">
                    <div > 
                        <p class="bold">WARRANTS <br> <span class="small">WARRANTS</span></p>     
                    </div>
                </section>
    
                <section class="search-input">
                    <img src="/images/search-icon.png" alt="search">
                    <input type="text" name="search" id="warrantsearch" placeholder="Search">
                </section>
            </div>

            <section class="warrants">
                <!-- FUNCTION IN JS HANDLES CONTENT -->
            </section>

        </section>

        <section class="order-container">
            <div class="header">
                <section class="header-text">
                    <img src="images/orderaccount.svg" alt="order icon">
                    <div > 
                        <p class="bold">ORDERS <br> <span class="small">ORDERS</span></p>     
                    </div>
                </section>
    
                <section class="search-input">
                    <img src="/images/search-icon.png" alt="search">
                    <input type="text" name="search" id="ordersearch" placeholder="Search">
                </section>
            </div>

            <section class="orders">
                <!-- FUNCTION IN JS HANDLES CONTENT -->
            </section>
        </section>
    </section>
    `
    // pushOrder(orders)
    // pushWarrant(warrants)
}

const pushWarrant = (warrantData) => {
    warrants.innerHTML=''
    warrantData.map((item) => {
        const {name, status, id, imageUrl} = item;
        var statusClass = 'blue'
        if (status !== "pending"){
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
                            <button class="statusbtn reject"><img src="images/cancel-icon.svg" alt="close"> </button>
                        </div>
                    </section>
                </div>
                <div class="days-left">IN 6 DAYS</div>
            </div>
        `
    })
}

const pushOrder = (ordersData) => {
    orders.innerHTML = ''
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

// pushDashboardContents(ordersData, warrantsData);
pushWarrant(warrantsData);
pushOrder(ordersData);

warrantsearch.addEventListener('input', () => {
    let searchvalue = warrantsearch.value
    if(!searchvalue) pushWarrant(warrantsData)
    let data = warrantsData.filter((warrant) => warrant.name.includes(searchvalue.toLowerCase()));
    pushWarrant(data)
})

ordersearch.addEventListener('input', (e) => {
    let searchvalue = ordersearch.value
    if(!searchvalue) pushOrder(ordersData)
    let data = ordersData.filter((order) => order.name.includes(searchvalue.toLowerCase()));
    pushOrder(data)
})

checkmarks.forEach((checkmark) => {
    checkmark.addEventListener('click', () => {

    })
})