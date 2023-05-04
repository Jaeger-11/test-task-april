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
const dashboardcontent = document.querySelector('.dashboardcontent');
const profilescontent = document.querySelector('.profilescontent');
const vehiclescontent = document.querySelector('.vehiclescontent');
const reportscontent = document.querySelector('.reportscontent');
const misccontent = document.querySelector('.misccontent');
const incidentscontent = document.querySelector('.incidentscontent');
const warrants = document.querySelector('.warrants');
const orders = document.querySelector('.orders');
const checkmarks = document.querySelectorAll('.approve');
const cancelbuttons = document.querySelectorAll('.reject'); 

const clickLinks = [ 
    {
        tab: dashboard, 
        content : dashboardcontent,
    },
    {
        tab: incidents,
        content: incidentscontent,
    },
    {
        tab: profiles,
        content:profilescontent,
    },
    {
        tab: vehicles,
        content:vehiclescontent,
    },
    {
        tab: reports,
        content:reportscontent,
    },
    {
        tab: misc,
        content:misccontent,
    }
];

clickLinks.map((link) => {
    link.tab.addEventListener('click', () => {
        link.content.classList.remove('hidden')
        link.content.classList.add('show')
        let restLinks = clickLinks.filter((i) => i.tab !== link.tab)
        restLinks.map((i) => {
            i.content.classList.remove('show')
            i.content.classList.add('hidden')
        });
    })
})

// DASHBOARD FUNCTIONALITY
// WARRANTS DATA
let warrantsData = [
    {
        name: "john oils",
        id: '155',
        status: 'pending',
        imageUrl: 'images/character1.png',
        expires: '6'
    },
    {
        name: "james bond",
        id: '156',
        status: 'rejected',
        imageUrl: 'images/character.svg',
        expires: '3'
    },
    {
        name: "oliver twist",
        id: '157',
        status: 'rejected',
        imageUrl: 'images/character2.png',
        expires: '4'
    },
    {
        name: "idris albak",
        id: '158',
        status: 'rejected',
        imageUrl: '',
        expires: '6'
    },
    {
        name: "stoney christon",
        id: '159',
        status: 'rejected',
        imageUrl: 'images/character1.png',
        expires: '6'
    },
    {
        name: "daniel greals",
        id: '160',
        status: 'pending',
        imageUrl: 'images/character.svg',
        expires: '5'
    },
    {
        name: "josh kennedy",
        id: '161',
        status: 'pending',
        imageUrl: 'images/character2.png',
        expires: '6'
    },
    {
        name: "jerry sheamus",
        id: '162',
        status: 'rejected',
        imageUrl: 'images/character.svg',
        expires: '7'
    },
    {
        name: "apollo creed",
        id: '163',
        status: 'pending',
        imageUrl: 'images/character1.png',
        expires: '6'
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

const pushWarrant = (warrantData) => {
    warrants.innerHTML=''
    warrantData.map((item) => {
        const {name, status, id, imageUrl, expires} = item;
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
                <div class="days-left">IN ${expires} DAYS</div>
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

// PROFILES

let profilesData = [
    {
        name: "john oils",
        id: '155',
        status: 'clean',
        imageUrl: 'images/character1.png',
    },
    {
        name: "james bond",
        id: '156',
        status: 'wanted',
        imageUrl: 'images/character.svg',
    },
    {
        name: "oliver twist",
        id: '157',
        status: 'clean',
        imageUrl: 'images/character2.png',
    },
    {
        name: "idris albak",
        id: '158',
        status: 'clean',
        imageUrl: '',
    },
    {
        name: "stoney christon",
        id: '159',
        status: 'clean',
        imageUrl: 'images/character1.png',
    },
    {
        name: "daniel greals",
        id: '160',
        status: 'clean',
        imageUrl: 'images/character.svg',
    },
    {
        name: "josh kennedy",
        id: '161',
        status: 'clean',
        imageUrl: 'images/character2.png',
    },
    {
        name: "jerry sheamus",
        id: '162',
        status: 'clean',
        imageUrl: 'images/character.svg',
    },
    {
        name: "apollo creed",
        id: '163',
        status: 'clean',
        imageUrl: 'images/character1.png',
    },
]

const pushProfiles = () => {
    
}