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
const dashboardtabimage = document.querySelector('.dashboardtabimage')
const incidentstabimage = document.querySelector('.incidentstabimage')
const profilestabimage = document.querySelector('.profilestabimage')
const vehiclestabimage = document.querySelector('.vehiclestabimage')
const reportstabimage = document.querySelector('.reportstabimage')
const misctabimage = document.querySelector('.misctabimage')
// dashboard selectors
const warrantsearch = document.querySelector('#warrantsearch');
const ordersearch = document.querySelector('#ordersearch');
const warrants = document.querySelector('.warrants');
const orders = document.querySelector('.orders');

const clickLinks = [ 
    {
        name: 'dashboard',
        tab: dashboard, 
        content : dashboardcontent,
        tabimage: dashboardtabimage
    },
    {
        name: 'incidents',
        tab: incidents,
        content: incidentscontent,
        tabimage: incidentstabimage
    },
    {
        name: 'profiles',
        tab: profiles,
        content:profilescontent,
        tabimage: profilestabimage
    },
    {
        name: 'vehicles',
        tab: vehicles,
        content:vehiclescontent,
        tabimage: vehiclestabimage
    },
    {
        name: 'reports',
        tab: reports,
        content:reportscontent,
        tabimage:reportstabimage
    },
    {
        name: 'misc',
        tab: misc,
        content:misccontent,
        tabimage: misctabimage
    }
];

clickLinks.map((link) => {
    link.tab.addEventListener('click', () => {
        link.tab.classList.add('side-menu-active');
        link.content.classList.remove('hidden');
        link.content.classList.add('show');
        link.tabimage.src = `images/${link.name}tabactive.svg`
        let restLinks = clickLinks.filter((i) => i.tab !== link.tab)
        restLinks.map((i) => {
            i.content.classList.remove('show')
            i.content.classList.add('hidden')
            i.tab.classList.remove('side-menu-active')
            i.tabimage.src = `images/${i.name}tab.svg`
        });
        if( link.tab == vehicles ) {
            maincontainer.classList.add('main-container-reverse');
        } else {
            maincontainer.classList.remove('main-container-reverse');
        }
    })
})

// HEADER FUNCTIONALITY
const headercancel = document.querySelector('.headercancel');
const duty = document.querySelector('.duty');
const headercheck = document.querySelector('.headercheck');

headercancel.addEventListener('click', () => {
    duty.className = "offduty duty"
    duty.textContent = "OFF DUTY"
    headercancel.classList.add("hiddenicon")
    headercheck.classList.remove("hiddenicon")
})
headercheck.addEventListener('click', () => {
    duty.className = "onduty duty"
    duty.textContent = "ON DUTY"
    headercancel.classList.remove("hiddenicon")
    headercheck.classList.add("hiddenicon")
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
        var statusClass = ''
        var content = ""
        if (status === "rejected"){
            statusClass = 'red'
            content = "approval rejected"
        } else if ( status === "approved" ){
            statusClass ='green'
            content ="approved"
        } else {
            statusClass ='blue'
            content ='pending approval'
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
                        <button class="${statusClass} funcBtns">${content}</button>
                        <div>
                            <button class="statusbtn approve" onClick="approveWarrant(${id})"><img src="images/checkmark.svg" alt="checkmark"></button>
                            <button class="statusbtn reject" onClick="rejectWarrant(${id})"><img src="images/cancel-icon.svg" alt="close"> </button>
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
let currentwarrantsearchfilter = ""
const applyCurrentSearchFilter = () => {
    let data;
    if (currentwarrantsearchfilter === ""){
        data = warrantsData;
    } else {
        data = warrantsData.filter((item) => item.name.includes(currentwarrantsearchfilter));
    }
    pushWarrant(data);
};
const approveWarrant = (id) => {
    warrantsData = warrantsData.map((warrant) => {
        if ( warrant.id == id ){
            return { ...warrant, status : "approved" }
        } else return {...warrant}
    })
    applyCurrentSearchFilter();
}

const rejectWarrant = (id) => {
    warrantsData = warrantsData.map((warrant) => {
        if ( warrant.id == id ){
            return { ...warrant, status : "rejected" }
        } else return {...warrant}
    })
    applyCurrentSearchFilter();
}
pushWarrant(warrantsData);
pushOrder(ordersData);
// Search through warrants
warrantsearch.addEventListener('input', () => {
    currentwarrantsearchfilter = warrantsearch.value
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
const incidentsearch = document.querySelector('#incidentsearch');

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
            <div class="timebox pointer"> 
                <p> 
                <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path class="smalledit" d="M8.65 3.4625L6.525 1.3625L7.225 0.6625C7.41667 0.470833 7.65217 0.375 7.9315 0.375C8.21083 0.375 8.44617 0.470833 8.6375 0.6625L9.3375 1.3625C9.52917 1.55417 9.62917 1.7855 9.6375 2.0565C9.64583 2.3275 9.55417 2.55867 9.3625 2.75L8.65 3.4625ZM7.925 4.2L2.625 9.5H0.5V7.375L5.8 2.075L7.925 4.2Z" />
                </svg>
                </p> 
                <p> ${name} - ${time} </p> 
            </div>
        </section>
        `
    })
}
pushIncidents(incidentsData);
// SEARCH INCIDENTS
incidentsearch.addEventListener('input', () => {
    let searchvalue = incidentsearch.value
    if(!searchvalue) pushIncidents(incidentsData)
    let data = incidentsData.filter((incident) => incident.name.includes(searchvalue.toLowerCase()));
    pushIncidents(data)
})
// EVIDENCE
addevidence.addEventListener('click', () => {
    evidencemodal.classList.remove('hide')
})
cancelevidence.addEventListener('click', () => {
    evidencemodal.classList.add('hide')
})
saveevidence.addEventListener('click', () => {
// YET TO WORK ON IT
})
// PERSON
addperson.addEventListener('click', () => {
    console.log('working');
    personmodal.classList.remove('hide')
})
cancelperson.addEventListener('click', () => {
    personmodal.classList.add('hide')
})
findperson.addEventListener('click', () => {
    // YET TO WORK
})

// REPORTS FUNCTIONALITIES
const reportsmain = document.querySelector('.reports-main');
const reportsevidence = document.querySelector('#reportsevidence');
const cancelreportsevidence = document.querySelector('#cancelreportsevidence');
const savereportevidence = document.querySelector('#reportevidencesave');
const reportspersonmodal = document.querySelector('#reportspersonmodal');
const cancelreportsperson = document.querySelector('#cancelreportsperson')
const reportspersonfind = document.querySelector('#reportspersonfind')
const addreportevidence = document.querySelector('#addreportevidence')
const addreportperson = document.querySelector('#addreportperson');
const reportsearch = document.querySelector('#reportsearch');
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
            <div class="timebox pointer"> 
            <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path class="smalledit" d="M8.65 3.4625L6.525 1.3625L7.225 0.6625C7.41667 0.470833 7.65217 0.375 7.9315 0.375C8.21083 0.375 8.44617 0.470833 8.6375 0.6625L9.3375 1.3625C9.52917 1.55417 9.62917 1.7855 9.6375 2.0565C9.64583 2.3275 9.55417 2.55867 9.3625 2.75L8.65 3.4625ZM7.925 4.2L2.625 9.5H0.5V7.375L5.8 2.075L7.925 4.2Z" />
            </svg>
                <p> ${name} - ${time} </p> 
            </div>
        </section>
        `
    })
}
pushReports(reportsData);
// search reports
reportsearch.addEventListener('input', () => {
    let searchvalue = reportsearch.value
    if(!searchvalue) pushReports(reportsData)
    let data = reportsData.filter((report) => report.name.includes(searchvalue.toLowerCase()));
    pushReports(data)
})
addreportevidence.addEventListener('click', () => {
    reportsevidence.classList.remove('hide')
})
cancelreportsevidence.addEventListener('click', () => {
    reportsevidence.classList.add('hide')
})
savereportevidence.addEventListener('click', () => {
    // YET TO WORK
})
// PERSON
addreportperson.addEventListener('click', () => {
    reportspersonmodal.classList.remove('hide')
})
cancelreportsperson.addEventListener('click', () => {
    reportspersonmodal.classList.add('hide')
})
reportspersonfind.addEventListener('click', () => {
    // YET TO WORK
})

// MISC FUNCTIONALITY
const MINracersvalue = document.querySelector('#MINvalue');
const decreaseMINracers = document.querySelector('#decreaseMIN');
const increaseMINracers = document.querySelector('#increaseMIN');
const MAXracersvalue = document.querySelector('#MAXvalue');
const decreaseMAXracers = document.querySelector('#decreaseMAX');
const increaseMAXracers = document.querySelector('#increaseMAX');
const Lapsvalue = document.querySelector('#lapsvalue');
const decreaseLaps = document.querySelector('#decreaseLaps');
const increaseLaps = document.querySelector('#increaseLaps');

let minracersvalue = 45;
let maxracersvalue = 45;
let lapsvalue = 45;
MINracersvalue.textContent = minracersvalue;
MAXracersvalue.textContent = maxracersvalue;
Lapsvalue.textContent = lapsvalue;

decreaseMINracers.addEventListener('click', () => {
    if ( minracersvalue === 0 ) {
        MINracersvalue.textContent = minracersvalue;
    } else {
        minracersvalue -= 1
        MINracersvalue.textContent = minracersvalue;
    }
})
increaseMINracers.addEventListener('click', () => {
    if (minracersvalue === 100 ){
        MINracersvalue.textContent = minracersvalue;
    } else {
        minracersvalue += 1
        MINracersvalue.textContent = minracersvalue;
    }
})

decreaseMAXracers.addEventListener('click', () => {
    if ( maxracersvalue === 0 ) {
        MINracersvalue.textContent = maxracersvalue;
    } else {
        maxracersvalue -= 1
        MAXracersvalue.textContent = maxracersvalue;
    }
})
increaseMAXracers.addEventListener('click', () => {
    if (maxracersvalue === 100 ){
        MAXracersvalue.textContent = maxracersvalue;
    } else {
        maxracersvalue += 1
        MAXracersvalue.textContent = maxracersvalue;
    }
})

decreaseLaps.addEventListener('click', () => {
    if ( lapsvalue === 0 ) {
        Lapsvalue.textContent = lapsvalue;
    } else {
        lapsvalue -= 1
        Lapsvalue.textContent = lapsvalue;
    }
})
increaseLaps.addEventListener('click', () => {
    if (lapsvalue === 100 ){
        Lapsvalue.textContent = lapsvalue;
    } else {
        lapsvalue += 1
        Lapsvalue.textContent = lapsvalue;
    }
})

// 
const MINracersvaluetwo = document.querySelector('#MINvaluetwo');
const decreaseMINracerstwo = document.querySelector('#decreaseMINtwo');
const increaseMINracerstwo = document.querySelector('#increaseMINtwo');
const MAXracersvaluetwo = document.querySelector('#MAXvaluetwo');
const decreaseMAXracerstwo = document.querySelector('#decreaseMAXtwo');
const increaseMAXracerstwo = document.querySelector('#increaseMAXtwo');
const Lapsvaluetwo = document.querySelector('#lapsvaluetwo');
const decreaseLapstwo = document.querySelector('#decreaseLapstwo');
const increaseLapstwo = document.querySelector('#increaseLapstwo');

let minracersvaluetwo = 45;
let maxracersvaluetwo = 45;
let lapsvaluetwo = 45;
MINracersvaluetwo.textContent = minracersvaluetwo;
MAXracersvaluetwo.textContent = maxracersvaluetwo;
Lapsvaluetwo.textContent = lapsvaluetwo;
decreaseMINracerstwo.addEventListener('click', () => {
    if ( minracersvaluetwo === 0 ) {
        MINracersvaluetwo.textContent = minracersvaluetwo;
    } else {
        minracersvaluetwo -= 1
        MINracersvaluetwo.textContent = minracersvaluetwo;
    }
})
increaseMINracerstwo.addEventListener('click', () => {
    if (minracersvaluetwo === 100 ){
        MINracersvaluetwo.textContent = minracersvaluetwo;
    } else {
        minracersvaluetwo += 1
        MINracersvaluetwo.textContent = minracersvaluetwo;
    }
})

decreaseMAXracerstwo.addEventListener('click', () => {
    if ( maxracersvaluetwo === 0 ) {
        MINracersvaluetwo.textContent = maxracersvaluetwo;
    } else {
        maxracersvaluetwo -= 1
        MAXracersvaluetwo.textContent = maxracersvaluetwo;
    }
})
increaseMAXracerstwo.addEventListener('click', () => {
    if (maxracersvaluetwo === 100 ){
        MAXracersvaluetwo.textContent = maxracersvaluetwo;
    } else {
        maxracersvaluetwo += 1
        MAXracersvaluetwo.textContent = maxracersvaluetwo;
    }
})

decreaseLapstwo.addEventListener('click', () => {
    if ( lapsvaluetwo === 0 ) {
        Lapsvaluetwo.textContent = lapsvaluetwo;
    } else {
        lapsvaluetwo -= 1
        Lapsvaluetwo.textContent = lapsvaluetwo;
    }
})
increaseLapstwo.addEventListener('click', () => {
    if (lapsvaluetwo === 100 ){
        Lapsvaluetwo.textContent = lapsvaluetwo;
    } else {
        lapsvaluetwo += 1
        Lapsvaluetwo.textContent = lapsvaluetwo;
    }
})

const toggleOnOffone = document.getElementsByClassName("toggleOnOff")[1];
const toggleOnOfftwo = document.getElementsByClassName("toggleOnOff")[2];
const toggleOnOffthree = document.getElementsByClassName("toggleOnOff")[3];
const toggleOnOfffour = document.getElementsByClassName("toggleOnOff")[4];
const toggleOnOfffive = document.getElementsByClassName("toggleOnOff")[5];
const toggleOnOffzero = document.getElementsByClassName("toggleOnOff")[0];

toggleOnOffone.addEventListener('click', () => {
    let content = toggleOnOffone.textContent
    if (content === 'ON'){
        toggleOnOffone.textContent = "OFF";
        toggleOnOffone.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOffone.textContent = "ON";
        toggleOnOffone.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOfftwo.addEventListener('click', () => {
    let content = toggleOnOfftwo.textContent
    if (content === 'ON'){
        toggleOnOfftwo.textContent = "OFF";
        toggleOnOfftwo.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOfftwo.textContent = "ON";
        toggleOnOfftwo.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOffthree.addEventListener('click', () => {
    let content = toggleOnOffthree.textContent
    if (content === 'ON'){
        toggleOnOffthree.textContent = "OFF";
        toggleOnOffthree.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOffthree.textContent = "ON";
        toggleOnOffthree.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOfffour.addEventListener('click', () => {
    let content = toggleOnOfffour.textContent
    if (content === 'ON'){
        toggleOnOfffour.textContent = "OFF";
        toggleOnOfffour.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOfffour.textContent = "ON";
        toggleOnOfffour.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOfffive.addEventListener('click', () => {
    let content = toggleOnOfffive.textContent
    if (content === 'ON'){
        toggleOnOfffive.textContent = "OFF";
        toggleOnOfffive.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOfffive.textContent = "ON";
        toggleOnOfffive.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOffzero.addEventListener('click', () => {
    let content = toggleOnOffzero.textContent
    if (content === 'ON'){
        toggleOnOffzero.textContent = "OFF";
        toggleOnOffzero.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOffzero.textContent = "ON";
        toggleOnOffzero.className = "greenbutton pointer toggleOnOff"
    }
})