const main = document.querySelector('#main');
const maincontainer = document.querySelector('.main-container');
const dashboardcontent = document.querySelector('.dashboardcontent');
const profilescontent = document.querySelector('.profilescontent');
const vehiclescontent = document.querySelector('.vehiclescontent');
const reportscontent = document.querySelector('.reportscontent');
const misccontent = document.querySelector('.misccontent');
const incidentscontent = document.querySelector('.incidentscontent');
const dashboard = document.querySelector('#dashboard');
const incidents = document.querySelector('#incidents');
const profiles = document.querySelector('#profiles');
const vehicles = document.querySelector('#vehicles');
const reports = document.querySelector('#reports');
const misc = document.querySelector('#misc');
// dashboard selectors
const warrantsearch = document.querySelector('#warrantsearch');
const ordersearch = document.querySelector('#ordersearch');
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
        if( link.tab == vehicles ) {
            maincontainer.classList.add('main-container-reverse');
        } else {
            maincontainer.classList.remove('main-container-reverse');
        }
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
        expires: '6',
        information: 'some information'
    },
    {
        name: "james bond",
        id: '156',
        status: 'rejected',
        imageUrl: 'images/character.svg',
        expires: '3',
        information: 'some information'
    },
    {
        name: "oliver twist",
        id: '157',
        status: 'rejected',
        imageUrl: 'images/character2.png',
        expires: '4',
        information: 'some information'
    },
    {
        name: "idris albak",
        id: '158',
        status: 'rejected',
        imageUrl: '',
        expires: '6',
        information: 'some information'
    },
    {
        name: "stoney christon",
        id: '159',
        status: 'rejected',
        imageUrl: 'images/character1.png',
        expires: '6',
        information: 'some information'
    },
    {
        name: "daniel greals",
        id: '160',
        status: 'pending',
        imageUrl: 'images/character.svg',
        expires: '5',
        information: 'some information'
    },
    {
        name: "josh kennedy",
        id: '161',
        status: 'pending',
        imageUrl: 'images/character2.png',
        expires: '6',
        information: 'some information'
    },
    {
        name: "jerry sheamus",
        id: '162',
        status: 'rejected',
        imageUrl: 'images/character.svg',
        expires: '7',
        information: 'some information'
    },
    {
        name: "apollo creed",
        id: '163',
        status: 'pending',
        imageUrl: 'images/character1.png',
        expires: '6',
        information: 'some information'
    },
]
// ORDERS DATA
let ordersData = [
    {
        name: "John Oils",
        id: '154',
        status: 'pending ',
        imageUrl: '',
        information: 'some information'
    },
]
// push / fetch warrants to html screen
const pushWarrant = (warrantData) => {
    warrants.innerHTML=''
    warrantData.map((item) => {
        const {name, status, id, imageUrl, expires, information} = item;
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
                    <div class="information"> ${information} <p class="dot"></p> ${information} <p class="dot"></p> id.${id} </div>
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
// renders orders to html
const pushOrder = (ordersData) => {
    orders.innerHTML = ''
    ordersData.map((item) => {
        const { name, id, imageUrl, information } = item;
        orders.innerHTML += `
        <div class="order">
            <div class='imagecont'><img src="${imageUrl ? imageUrl : 'images/nophotored.png'}" alt="profile-image" class="order-image"></div>
            <div class="info-section">
                <p class='suspectname'>${name}</p>
                <div class="information"> ${information} <p class="dot"></p> ${information} <p class="dot"></p> id.${id} </div>
                <button class="red funcBtns">WANTED</button>
            </div>
        </div>
    `
    })
}

pushWarrant(warrantsData);
pushOrder(ordersData);
// Search through warrants
warrantsearch.addEventListener('input', () => {
    let searchvalue = warrantsearch.value
    if(!searchvalue) pushWarrant(warrantsData)
    let data = warrantsData.filter((warrant) => warrant.name.includes(searchvalue.toLowerCase()));
    pushWarrant(data)
})
// Search through orders
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
// profiles selectors
const profilesContainer = document.querySelector('.profiles-main');
const profilesearch = document.querySelector('#profilesearch');
const allprofiles = document.querySelector(".profiles-filter-all");
const wantedprofiles = document.querySelector(".profiles-filter-wanted");
const cleanprofiles = document.querySelector(".profiles-filter-clean");
const profilefilters = [ allprofiles, wantedprofiles, cleanprofiles ];

let profilesData = [
    {
        name: "john oils",
        id: '155',
        status: 'clean',
        imageUrl: 'images/character1.png',
        information: 'some information'
    },
    {
        name: "james bond",
        id: '156',
        status: 'wanted',
        imageUrl: 'images/character.svg',
        information: 'some information'
    },
    {
        name: "oliver twist",
        id: '157',
        status: 'clean',
        imageUrl: 'images/character2.png',
        information: 'some information'
    },
    {
        name: "idris albak",
        id: '158',
        status: 'clean',
        imageUrl: '',
        information: 'some information'
    },
    {
        name: "stoney christon",
        id: '159',
        status: 'clean',
        imageUrl: 'images/character1.png',
        information: 'some information'
    },
    {
        name: "daniel greals",
        id: '160',
        status: 'wanted',
        imageUrl: '',
        information: 'some information'
    },
    {
        name: "josh kennedy",
        id: '161',
        status: 'clean',
        imageUrl: 'images/character2.png',
        information: 'some information'
    },
    {
        name: "jerry sheamus",
        id: '162',
        status: 'clean',
        imageUrl: 'images/character.svg',
        information: 'some information'
    },
    {
        name: "apollo creed",
        id: '163',
        status: 'clean',
        imageUrl: 'images/character1.png',
        information: 'some information'
    },
]
// fetch / render profiles to html
const pushProfiles = (data) => {
    profilesContainer.innerHTML = ''
    data.map((obj) => {
        const { name, id, status, imageUrl, information } = obj;
        
        profilesContainer.innerHTML += `
        <section class="${status === 'clean' ? 'warrant' : 'order'}">
            <div class='imagecont'><img src="${imageUrl ? imageUrl : status === 'clean' ? 'images/nophotoblack.png' : 'images/nophotored.png' }" alt="profile-image" class=""></div>
            <div class="info-section">
                <p class='suspectname'>${name}</p>
                <div class="information"> ${information} <p class="dot"></p> ${information} <p class="dot"></p> id.${id} </div>
                <button class="${status === 'clean' ? 'green' : 'red'} funcBtns">${status}</button>
            </div>
        </section>
        `
    })
}

let currentprofilefilter = 'all';

// Search through profiles
profilesearch.addEventListener('input', (e) => {
    let searchvalue = profilesearch.value
    let searchdata;
    if (currentprofilefilter === 'all'){
        searchdata = profilesData;
    } else if ( currentprofilefilter === 'wanted' ){
        searchdata = profilesData.filter((item) => item.status === 'wanted');
    } else if (currentprofilefilter === 'clean'){
        searchdata = profilesData.filter((item) => item.status === 'clean');
    } else {
        searchdata = profilesData.filter((item) => item.status.includes(currentprofilefilter))
    }
    searchdata = searchdata.filter((profile) => profile.name.includes(searchvalue.toLowerCase()));
    pushProfiles(searchdata);
})
// filters profile based on status( wanted, clean and all )

const applyCurrentProfileFilter = () => {
    let data;
    if (currentprofilefilter === 'all'){
        data = profilesData;
    } else if ( currentprofilefilter === 'wanted' ){
        data = profilesData.filter((item) => item.status === 'wanted');
    } else if (currentprofilefilter === 'clean'){
        data = profilesData.filter((item) => item.status === 'clean');
    }
    pushProfiles(data);
}

profilefilters.map((item) => {
    item.addEventListener('click', () => {
        profilesearch.value = ''
        item.classList.add(`active-${item.textContent}`)
        if( item == allprofiles ) {
            currentprofilefilter = 'all'
            applyCurrentProfileFilter()
            const restFilters = profilefilters.filter((filt) => filt !== item)
            restFilters.map((i) => i.classList.remove(`active-${i.textContent}`))
        } else {
            currentprofilefilter = item.textContent
            applyCurrentProfileFilter()
            const restFilters = profilefilters.filter((filt) => filt !== item)
            restFilters.map((i) => i.classList.remove(`active-${i.textContent}`))
        }
    })
})

pushProfiles(profilesData);

// VEHICLES FUNCTIONALITY
const vehiclesContainer = document.querySelector('.vehicles-main');
const vehiclesearch = document.querySelector('#vehiclesearch');
const allvehicles = document.querySelector(".vehicles-filter-all");
const wantedvehicles = document.querySelector(".vehicles-filter-wanted");
const cleanvehicles = document.querySelector(".vehicles-filter-clean");
const vehiclesfilters = [ allvehicles, wantedvehicles, cleanvehicles ];

let vehiclesData = [
    {
        name: "camry",
        id: '155',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information'
    },
    {
        name: "bugatti",
        id: '156',
        status: 'wanted',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information'
    },
    {
        name: "tesla",
        id: '157',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information'
    },
    {
        name: "sedan",
        id: '158',
        status: 'wanted',
        imageUrl: '',
        information: 'some information'
    },
    {
        name: "mercedes",
        id: '159',
        status: 'clean',
        imageUrl: '',
        information: 'some information'
    },
    {
        name: "mitsubishi",
        id: '160',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information'
    },
    {
        name: "chevrolet camaro",
        id: '161',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information'
    },
    {
        name: "volkswagen",
        id: '162',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information'
    },
    {
        name: "cadillac",
        id: '163',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information'
    },
]

// fetch / render profiles to html
const pushVehicles = (data) => {
    vehiclesContainer.innerHTML = ''
    data.map((obj) => {
        const { name, id, status, imageUrl, information } = obj;
        vehiclesContainer.innerHTML += `
        <section class="${status === 'clean' ? 'warrant' : 'order'}">
            <div class='imagecont'><img src="${imageUrl ? imageUrl : status === 'clean' ? 'images/nophotoblack.png' : 'images/nophotored.png' }" alt="profile-image" class=""></div>
            <div class="info-section">
                <p class='suspectname'>${name}</p>
                <div class="information"> ${information} <p class="dot"></p> ${information} <p class="dot"></p> id.${id} </div>
                <button class="${status === 'clean' ? 'green' : 'red'} funcBtns">${status}</button>
            </div>
        </section>
        `
    })
}
pushVehicles(vehiclesData);

let currentvehiclefilter = 'all';

// Search through profiles
vehiclesearch.addEventListener('input', (e) => {
    let searchvalue = vehiclesearch.value
    let searchdata;
    if (currentvehiclefilter === 'all'){
        searchdata = vehiclesData;
    } else if ( currentvehiclefilter === 'wanted' ){
        searchdata = vehiclesData.filter((item) => item.status === 'wanted');
    } else if (currentvehiclefilter === 'clean'){
        searchdata = vehiclesData.filter((item) => item.status === 'clean');
    } else {
        searchdata = vehiclesData.filter((item) => item.status.includes(currentvehiclefilter))
    }
    searchdata = searchdata.filter((profile) => profile.name.includes(searchvalue.toLowerCase()));
    pushVehicles(searchdata);
})
// filters profile based on status( wanted, clean and all )

const applyCurrentVehicleFilter = () => {
    let data;
    if (currentvehiclefilter === 'all'){
        data = vehiclesData;
    } else if ( currentvehiclefilter === 'wanted' ){
        data = vehiclesData.filter((item) => item.status === 'wanted');
    } else if (currentvehiclefilter === 'clean'){
        data = vehiclesData.filter((item) => item.status === 'clean');
    }
    pushVehicles(data);
}

vehiclesfilters.map((item) => {
    item.addEventListener('click', () => {
        vehiclesearch.value = ''
        item.classList.add(`active-${item.textContent}`)
        if( item == allprofiles ) {
            currentvehiclefilter = 'all'
            applyCurrentVehicleFilter()
            const restFilters = vehiclesfilters.filter((filt) => filt !== item)
            restFilters.map((i) => i.classList.remove(`active-${i.textContent}`))
        } else {
            currentvehiclefilter = item.textContent
            applyCurrentVehicleFilter()
            const restFilters = vehiclesfilters.filter((filt) => filt !== item)
            restFilters.map((i) => i.classList.remove(`active-${i.textContent}`))
        }
    })
})

// INCIDENTS FUNCTIONALITIES
const incidentsmain = document.querySelector('.incidents-main');
const evidencemodal = document.querySelector('#evidencemodal');
const cancelevidence = document.querySelector("#cancelevidence");
const saveevidence = document.querySelector("#evidencesave");
const addevidence = document.querySelector("#addevidence");
const evidenceImageUrl = document.querySelector("#evidence-ImageURL");
const evidenceDescription = document.querySelector("#evidence-description");
const personmodal = document.querySelector('#personmodal');
const addperson = document.querySelector('#addperson');
const cancelperson = document.querySelector('#cancelperson');
const findperson = document.querySelector('#personfind');
const personname = document.querySelector("#personname");

let incidentsData = [
    {
        id: '155',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes ago',
        name: 'alexa death',
    },
    {
        id: '156',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes ago',
        name: 'texda death',
    },
]

const pushIncidents = (data) => {
    incidentsmain.innerHTML = '';
    data.map((item) => {
        const { id, title, description, time, name } = item;
        incidentsmain.innerHTML += `
        <section  class="incident">
            <h4 class="incident-title">${title}</h4>
            <div class="information">${description} <p class="dot"></p> id: ${id}</div>
            <div class="timebox"> 
                <p> <img src="images/smalledit.svg" alt="edit"> </p> 
                <p> ${name} - ${time} </p> 
            </div>
        </section>
        `
    })
}
pushIncidents(incidentsData);
// EVIDENCE
addevidence.addEventListener('click', () => {
    evidencemodal.classList.remove('hidden')
})
cancelevidence.addEventListener('click', () => {
    evidencemodal.classList.add('hidden')
})
saveevidence.addEventListener('click', () => {
// YET TO WORK ON IT
})
// PERSON
addperson.addEventListener('click', () => {
    console.log('working');
    personmodal.classList.remove('hidden')
})
cancelperson.addEventListener('click', () => {
    personmodal.classList.add('hidden')
})
findperson.addEventListener('click', () => {
    // YET TO WORK
})

// REPORTS FUNCTIONALITIES
const reportsmain = document.querySelector('.reports-main');

let reportsData = [
    {
        id: '155',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes ago',
        name: 'alexa death',
    },
    {
        id: '156',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes ago',
        name: 'texda death',
    },
]

const pushReports = (data) => {
    reportsmain.innerHTML = '';
    data.map((item) => {
        const { id, title, description, time, name } = item;
        reportsmain.innerHTML += `
        <section  class="incident">
            <h4 class="incident-title">${title}</h4>
            <div class="information">${description} <p class="dot"></p> id: ${id}</div>
            <div class="timebox"> 
                <p> <img src="images/smalledit.svg" alt="edit"> </p> 
                <p> ${name} - ${time} </p> 
            </div>
        </section>
        `
    })
}

pushReports(reportsData);
