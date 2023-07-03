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
        content: dashboardcontent,
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
        content: profilescontent,
        tabimage: profilestabimage
    },
    {
        name: 'vehicles',
        tab: vehicles,
        content: vehiclescontent,
        tabimage: vehiclestabimage
    },
    {
        name: 'reports',
        tab: reports,
        content: reportscontent,
        tabimage: reportstabimage
    },
    {
        name: 'misc',
        tab: misc,
        content: misccontent,
        tabimage: misctabimage
    }
];
// THIS FUNCTION CONTROLS WHAT CONTENT IS DISPLAYED FROM DASHBOARD TO MISC
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
        if (link.tab == vehicles) {
            maincontainer.classList.add('main-container-reverse');
        } else if (link.tab == incidents) {
            document.querySelector('.newincidentscreen').classList.add('hidden');
            document.querySelector('.addcriminalscreen').classList.add('hidden');
            document.querySelector('.incidents-main').classList.add('incidents-grid');
            document.querySelector('.incidentadd').classList.remove('hidden');
            maincontainer.classList.remove('main-container-reverse');
        }
        else {
            maincontainer.classList.remove('main-container-reverse');
        }
    })
})

// HEADER FUNCTIONALITY
const headercancel = document.querySelector('.headercancel');
const duty = document.querySelector('.duty');
const headercheck = document.querySelector('.headercheck');
const headersetting = document.querySelector('.headersetting');

// ENABLES LINKING TO THE MISC SCREEN FROM THE HEADER 
headersetting.addEventListener('click', () => {
    clickLinks.map((link) => {
        if (link.name === 'misc') {
            maincontainer.classList.remove('main-container-reverse');
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
        }
    })
})
// TOGGLES DUTY TO ON AND OFF IN HEADER
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
        id: 155,
        status: 'pending',
        imageUrl: 'images/character1.png',
        expires: '6',
        information: 'some information'
    },
    {
        name: "james bond",
        id: 156,
        status: 'rejected',
        imageUrl: 'images/character.svg',
        expires: '3',
        information: 'some information'
    },
    {
        name: "oliver twist",
        id: 157,
        status: 'rejected',
        imageUrl: 'images/character2.png',
        expires: '4',
        information: 'some information'
    },
    {
        name: "idris albak",
        id: 158,
        status: 'rejected',
        imageUrl: '',
        expires: '6',
        information: 'some information'
    },
    {
        name: "stoney christon",
        id: 159,
        status: 'rejected',
        imageUrl: 'images/character1.png',
        expires: '6',
        information: 'some information'
    },
    {
        name: "daniel greals",
        id: 160,
        status: 'pending',
        imageUrl: 'images/character.svg',
        expires: '5',
        information: 'some information'
    },
    {
        name: "josh kennedy",
        id: 161,
        status: 'pending',
        imageUrl: 'images/character2.png',
        expires: '6',
        information: 'some information'
    },
    {
        name: "jerry sheamus",
        id: 162,
        status: 'rejected',
        imageUrl: 'images/character.svg',
        expires: '7',
        information: 'some information'
    },
    {
        name: "apollo creed",
        id: 163,
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
// FETCHES & PUSHES WARRANT DATA TO SCREEN
const pushWarrant = (warrantData) => {
    warrants.innerHTML = ''
    warrantData.map((item) => {
        const { name, status, id, imageUrl, expires, information } = item;
        var statusClass = ''
        var content = ""
        if (status === "rejected") {
            statusClass = 'red'
            content = "approval rejected"
        } else if (status === "approved") {
            statusClass = 'green'
            content = "approved"
        } else {
            statusClass = 'blue'
            content = 'pending approval'
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
// FETCHES & PUSHES ORDER DATA TO SCREEN
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
// ENABLES WARRANTS SEARCH FUNCTIONALITY
let currentwarrantsearchfilter = ""
const applyCurrentSearchFilter = () => {
    let data;
    if (currentwarrantsearchfilter === "") {
        data = warrantsData;
    } else {
        data = warrantsData.filter((item) => item.name.includes(currentwarrantsearchfilter));
    }
    pushWarrant(data);
};
// CHANGES STATUS OF WARRANT TO APPROVED
const approveWarrant = (id) => {
    warrantsData = warrantsData.map((warrant) => {
        if (warrant.id == id) {
            return { ...warrant, status: "approved" }
        } else return { ...warrant }
    })
    applyCurrentSearchFilter();
}
// CHANGES STATUS OF WARRANT TO REJECTED
const rejectWarrant = (id) => {
    console.log(id)
    warrantsData = warrantsData.filter((warrant) => warrant.id !== id)
    // console.log(warrantsData)
    applyCurrentSearchFilter();
}
pushWarrant(warrantsData);
pushOrder(ordersData);
// SEARCH THROUGH WARRANTS
warrantsearch.addEventListener('input', () => {
    currentwarrantsearchfilter = warrantsearch.value.toLowerCase()
    let searchvalue = warrantsearch.value
    if (!searchvalue) pushWarrant(warrantsData)
    let data = warrantsData.filter((warrant) => warrant.name.toLowerCase().includes(searchvalue.toLowerCase()));
    applyCurrentSearchFilter(data)
})
// SEARCH THROUGH ORDERS
ordersearch.addEventListener('input', (e) => {
    let searchvalue = ordersearch.value
    if (!searchvalue) pushOrder(ordersData)
    let data = ordersData.filter((order) => order.name.toLowerCase().includes(searchvalue.toLowerCase()));
    pushOrder(data)
})

// PROFILES
// PROFILES SELECTORS
const profilesContainer = document.querySelector('.profiles-main');
const profilesearch = document.querySelector('#profilesearch');
const allprofiles = document.querySelector(".profiles-filter-all");
const wantedprofiles = document.querySelector(".profiles-filter-wanted");
const cleanprofiles = document.querySelector(".profiles-filter-clean");
const profilefilters = [allprofiles, wantedprofiles, cleanprofiles];
// PROFILES DATA
let profilesData = [
    {
        name: "joHn",
        surname: "oils",
        id: 155,
        status: 'clean',
        imageUrl: 'images/character1.png',
        information: 'some information',
        warrants: [
            {
                active: true,
                incidentid: 46571261
            },
            {
                active: false,
                incidentid: 23465711,
                closed: "02/05/2022"
            },
            {
                active: true,
                incidentid: 46571261
            },
            {
                active: false,
                incidentid: 23465711,
                closed: "02/05/2022"
            },
            {
                active: true,
                incidentid: 46571261
            },
            {
                active: false,
                incidentid: 23465711,
                closed: "02/05/2022"
            },
        ],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
        ],
        lastmodified: "2 minutes"
    },
    {
        name: "james",
        surname: "bonds",
        id: 156,
        status: 'wanted',
        imageUrl: 'images/character.svg',
        information: 'some information',
        warrants: [
            {
                active: true,
                incidentid: 23571261
            },
            {
                active: false,
                incidentid: 23465261,
                closed: "02/05/2022"
            },
        ],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
        ],
        lastmodified: "12 minutes"
    },
    {
        name: "oliver",
        surname: "twist",
        id: 157,
        status: 'clean',
        imageUrl: 'images/character2.png',
        information: 'some information',
        warrants: [],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [],
        lastmodified: "12 minutes"
    },
    {
        name: "idris",
        surname: "albak",
        id: 158,
        status: 'clean',
        imageUrl: '',
        information: 'some information',
        warrants: [],
        criminalhistory: [
            
        ],
        vehicles: [],
        lastmodified: "12 minutes"
    },
    {
        name: "stoney",
        surname: "christon",
        id: 159,
        status: 'clean',
        imageUrl: 'images/character1.png',
        information: 'some information',
        warrants: [
            {
                active: true,
                incidentid: 23465712
            },
            {
                active: false,
                incidentid: 23465761,
                closed: "02/05/2022"
            },
        ],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [],
        lastmodified: "12 minutes"
    },
    {
        name: "daniel",
        surname: "greals",
        id: 160,
        status: 'wanted',
        imageUrl: '',
        information: 'some information',
        warrants: [],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
            {
                vehiclename: "BMW X5 2018",
                vehicleid: "jsd56uidf"
            },
        ],
        lastmodified: "12 minutes"
    },
    {
        name: "josh",
        surname: "kennedy",
        id: 161,
        status: 'clean',
        imageUrl: 'images/character2.png',
        information: 'some information',
        warrants: [],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [],
        lastmodified: "12 minutes"
    },
    {
        name: "jerry",
        surname: "sheamus",
        id: 162,
        status: 'clean',
        imageUrl: 'images/character.svg',
        information: 'some information',
        warrants: [],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [],
        lastmodified: "12 minutes"
    },
    {
        name: "apollo",
        surname: "creed",
        id: 163,
        status: 'clean',
        imageUrl: 'images/character1.png',
        information: 'some information',
        warrants: [],
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        vehicles: [],
        lastmodified: "12 minutes"
    },
]
// FETCH AND RENDERS DATA TO SCREEN
const pushProfiles = (data) => {
    profilesContainer.innerHTML = ''
    data.map((obj) => {
        const { name, id, status, imageUrl, information, surname } = obj;
        profilesContainer.innerHTML += `
        <section class="${status === 'clean' ? 'warrant' : 'order'}" onclick="selectProfile(${id})">
            <div class='imagecont'><img src="${imageUrl ? imageUrl : status === 'clean' ? 'images/nophotoblack.png' : 'images/nophotored.png'}" alt="profile-image" class=""></div>
            <div class="info-section">
                <p class='suspectname'>${name} ${surname}</p>
                <div class="information"> ${information} <p class="dot"></p> ${information} <p class="dot"></p> id.${id} </div>
                <button class="${status === 'clean' ? 'green' : 'red'} funcBtns">${status}</button>
            </div>
        </section>
        `
    })
}

// SELECT PROFILE
const selectProfile = (profileId) => {
    document.querySelector('.allprofilescontent').classList.add("hidden");
    document.querySelector('.profilecontent').classList.remove('hidden');
    document.querySelector('.criminalhistory').innerHTML = "";
    document.querySelector('.profilevehicles').innerHTML = "";
    document.querySelector('.profilewarrants').innerHTML = "";
    let profile = profilesData.filter((prof) => prof.id == profileId);
    const { id, name, criminalhistory, warrants, vehicles, information, lastmodified, surname, imageUrl, status } = profile[0]
    document.querySelector('.profilename').innerHTML = name + ' ' + surname;
    document.querySelector('.profileinfo').innerHTML = information;
    document.querySelector('.profilefirstname').innerHTML = name;
    document.querySelector('.profilesurname').innerHTML = surname;
    document.getElementById('profileimageurl').src = imageUrl ? imageUrl : status === 'clean' ? 'images/nophotoblack.png' : 'images/nophotored.png'
    document.querySelector('.totalwarrants').innerHTML = warrants.length + " WARRANTS";
    document.querySelector('.totalprofilevehicles').innerHTML = vehicles.length ? vehicles.length + ' records' : 'No data'
    document.querySelector('.totalprofilewarrants').innerHTML = warrants.length ? warrants.length + ' records' : 'No data'
    document.querySelector('.totalprofilecrimehistory').innerHTML = criminalhistory.length ? criminalhistory.length + ' records' : 'No data'
    let activewarrant = warrants.filter((warr) => warr.active == true);
    document.querySelector('.totalprofilewarrantsactive').innerHTML = activewarrant.length + ' records'
    warrants.length ? 
    document.querySelector('.totalprofilewarrantsactive').classList.remove('hidden') 
    : document.querySelector('.totalprofilewarrantsactive').classList.add('hidden')
    criminalhistory.length > 0 ?
    criminalhistory.map((history) => {
        document.querySelector('.criminalhistory').innerHTML += `
            <div class="fontsmall flexsmall"> Incident #${history.incidentid} <span class="fontsmall ${history.incidentstatus+'style'}">${history.incidentstatus}</span> </div>
        `
    })
    :
        document.querySelector('.criminalhistory').innerHTML = `
        <section class="novehiclerecord">
            <img src="images/nocriminalhistorybg.png" alt="no vehicle"/>
            <p class="grey fontsmall center">This person haven’t
            any criminal records</p>
        </section>
        `
    
    vehicles.length > 0 ?
        vehicles.map((veh) => {
            document.querySelector('.profilevehicles').innerHTML += `
                <div class="fontsmall flexsmall"> ${veh.vehiclename} <span class="fontsmall greybox">${veh.vehicleid}</span> </div>
            `
        })
        :
        document.querySelector('.profilevehicles').innerHTML = `
            <section class="novehiclerecord">
                <img src="images/noprofilevehiclebg.png" alt="no vehicle"/>
                <p class="grey fontsmall center">This person haven’t any vehicles in his own</p>
            </section>
        `
    warrants.length > 0 ? 
        warrants.map(( warr) => {
            document.querySelector('.profilewarrants').innerHTML += warr.active ? `
            <div class="fontsmall flexsmall active">Incident #${warr.incidentid} <span class="fontsmall suspectstyle">Active</span> </div>
            ` : 
            `<div class="fontsmall flexsmall">Incident #${warr.incidentid} <span class="fontsmall greybox">Closed ${warr.closed}</span> </div>`
        }) 
        :
        document.querySelector('.profilewarrants').innerHTML = `
        <section class="novehiclerecord">
            <img src="images/noprofilewarrantsbg.png" alt="no vehicle"/>
            <p class="grey fontsmall center">This person haven’t any active warrants</p>
        </section>
        `
    document.querySelector('.profile-last-modified').innerHTML = `
        <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path class="smalledit" d="M8.65 3.4625L6.525 1.3625L7.225 0.6625C7.41667 0.470833 7.65217 0.375 7.9315 0.375C8.21083 0.375 8.44617 0.470833 8.6375 0.6625L9.3375 1.3625C9.52917 1.55417 9.62917 1.7855 9.6375 2.0565C9.64583 2.3275 9.55417 2.55867 9.3625 2.75L8.65 3.4625ZM7.925 4.2L2.625 9.5H0.5V7.375L5.8 2.075L7.925 4.2Z" />
        </svg>
        ${lastmodified} ago
    `
}

const viewAllProfiles = () => {
    document.querySelector('.allprofilescontent').classList.remove("hidden");
    document.querySelector('.profilecontent').classList.add('hidden');
}

// ENABLES PROFILE SEARCH FUNCTIONALITY
let currentprofilefilter = 'all';

// SEARCH THROUGH PROFILES
profilesearch.addEventListener('input', (e) => {
    let searchvalue = profilesearch.value
    let searchdata;
    if (currentprofilefilter === 'all') {
        searchdata = profilesData;
    } else if (currentprofilefilter === 'wanted') {
        searchdata = profilesData.filter((item) => item.status === 'wanted');
    } else if (currentprofilefilter === 'clean') {
        searchdata = profilesData.filter((item) => item.status === 'clean');
    } else {
        searchdata = profilesData.filter((item) => item.status.includes(currentprofilefilter))
    }
    searchdata = searchdata.filter((profile) => profile.name.toLowerCase().includes(searchvalue.toLowerCase()));
    pushProfiles(searchdata);
})
// FILTERS PROFILE BASED ON STATUS (WANTED, CLEAN AND ALL)
const applyCurrentProfileFilter = () => {
    let data;
    if (currentprofilefilter === 'all') {
        data = profilesData;
    } else if (currentprofilefilter === 'wanted') {
        data = profilesData.filter((item) => item.status === 'wanted');
    } else if (currentprofilefilter === 'clean') {
        data = profilesData.filter((item) => item.status === 'clean');
    }
    pushProfiles(data);
}
profilefilters.map((item) => {
    item.addEventListener('click', () => {
        profilesearch.value = ''
        item.classList.add(`active-${item.textContent}`)
        if (item == allprofiles) {
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
const vehiclesfilters = [allvehicles, wantedvehicles, cleanvehicles];
// VEHICLES DATA
let vehiclesData = [
    {
        name: "camry",
        id: '155',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information',
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        warrants: [
            {
                active: true,
                incidentid: 23571261
            },
            {
                active: false,
                incidentid: 23465261,
                closed: "02/05/2022"
            },
        ],
        lastmodified: "12 minutes",
        owner: {
            name: "apollo creed",
            id: 155,
            info: "some information",
            imageUrl: "images/character1.png"
        },
        color: "blue",
        purchasedate: "12/04/19",
        mileage: "14,874 m"
    },
    {
        name: "bugatti",
        id: '156',
        status: 'wanted',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information',
        criminalhistory: [],
        warrants: [
            {
                active: true,
                incidentid: 23571261
            },
            {
                active: false,
                incidentid: 23465261,
                closed: "02/05/2022"
            },
        ],
        lastmodified: "12 minutes",
        owner: {
            name: "john oils",
            id: 155,
            info: "some information",
            imageUrl: "images/character1.png"
        },
        color: "",
        purchasedate: "",
        mileage: "14,874 m"
    },
    {
        name: "tesla",
        id: '157',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information',
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        warrants: [],
        lastmodified: "12 minutes",
        owner: {
            name: "killerman joe",
            id: 155,
            info: "some information",
            imageUrl: "images/character2.png"
        },
        color: "",
        purchasedate: "",
        mileage: "14,874 m"
    },
    {
        name: "sedan",
        id: '158',
        status: 'wanted',
        imageUrl: '',
        information: 'some information',
        criminalhistory: [],
        warrants: [
            {
                active: true,
                incidentid: 23571261
            },
            {
                active: false,
                incidentid: 23465261,
                closed: "02/05/2022"
            },
        ],
        lastmodified: "12 minutes",
        owner: {
            name: "asper ovie",
            id: 155,
            info: "some information",
            imageUrl: ""
        },
        color: "",
        purchasedate: "",
        mileage: "14,874 m"
    },
    {
        name: "mercedes",
        id: '159',
        status: 'clean',
        imageUrl: '',
        information: 'some information',
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        warrants: [],
        lastmodified: "12 minutes",
        owner: {
            name: "ten hagg",
            id: 155,
            info: "some information",
            imageUrl: "images/character2.png"
        },
        color: "",
        purchasedate: "",
        mileage: "14,874 m"
    },
    {
        name: "mitsubishi",
        id: '160',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information',
        criminalhistory: [
            {
                incidentid: 110,
                incidentstatus: "suspect"
            },
            {
                incidentid: 142,
                incidentstatus: "victim"
            },
            {
                incidentid: 124,
                incidentstatus: "eyewitness"
            },
        ],
        warrants: [],
        lastmodified: "12 minutes",
        owner: {
            name: "idris elba",
            id: 155,
            info: "some information",
            imageUrl: ""
        },
        color: "",
        purchasedate: "",
        mileage: "14,874 m"
    },
    {
        name: "chevrolet camaro",
        id: '161',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information',
        criminalhistory: [],
        warrants: [],
        lastmodified: "12 minutes",
        owner: {
            name: "terry adams",
            id: 155,
            info: "some information",
            imageUrl: "images/character1.png"
        },
        color: "",
        purchasedate: "",
        mileage: "14,874 m"
    },
    {
        name: "volkswagen",
        id: '162',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information',
        criminalhistory: [],
        warrants: [
            {
                active: true,
                incidentid: 23571261
            },
            {
                active: false,
                incidentid: 23465261,
                closed: "02/05/2022"
            },
        ],
        lastmodified: "12 minutes",
        owner: {
            name: "yvonne eghosa",
            id: 155,
            info: "some information",
            imageUrl: "images/character1.png"
        },
        color: "Purple",
        purchasedate: "24/05/07",
        mileage: "14,874 m"
    },
    {
        name: "cadillac",
        id: '163',
        status: 'clean',
        imageUrl: 'images/vehicleimage.png',
        information: 'some information',
        criminalhistory: [],
        warrants: [],
        lastmodified: "12 minutes",
        owner: {
            name: "trinity bond",
            id: 155,
            info: "some information",
            imageUrl: ""
        },
        color: "Red",
        purchasedate: "12/04/12",
        mileage: "14,874 m"
    },
]
// FETCH / RENDERS VEHICLES DATA TO SCREEN
const pushVehicles = (data) => {
    vehiclesContainer.innerHTML = ''
    data.map((obj) => {
        const { name, id, status, imageUrl, information } = obj;
        vehiclesContainer.innerHTML += `
        <section class="${status === 'clean' ? 'warrant' : 'order'}" onclick="viewVehicle(${id})">
            <div class='imagecont'><img src="${imageUrl ? imageUrl : status === 'clean' ? 'images/nophotoblack.png' : 'images/nophotored.png'}" alt="profile-image"></div>
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
const viewVehicle = (vehicleId) => {
    document.querySelector('.allvehiclescontent').classList.add("hidden");
    document.querySelector('.vehiclecontent').classList.remove('hidden');
    document.querySelector('.vehiclecriminalhistory').innerHTML = ""
    let vehicle = vehiclesData.filter((veh) => veh.id == vehicleId);
    const { id, status, name, criminalhistory, warrants, information, lastmodified, imageUrl, owner, purchasedate, color, mileage} = vehicle[0]
    document.querySelector('.vehiclename').innerHTML = name;
    document.querySelector('.vehname').innerHTML = name;
    document.querySelector('.vehicleinfo').innerHTML = information;
    document.querySelector('.totalfirstwarrants').innerHTML = warrants.length + " WARRANTS";
    document.querySelector('.totalvehiclecriminalhistory').innerHTML = criminalhistory.length ? criminalhistory.length + " records" : "No data"
    document.querySelector('.totalvehiclewarrants').innerHTML = warrants.length ? warrants.length + " records" : "No data"
    let activewarrant = warrants.filter((warr) => warr.active == true);
    document.querySelector('.totalvehiclewarrantsactive').innerHTML = activewarrant.length + ' records'
    warrants.length ? 
    document.querySelector('.totalvehiclewarrantsactive').classList.remove('hidden') 
    : document.querySelector('.totalvehiclewarrantsactive').classList.add('hidden')
    document.getElementById('vehicleimageurl').src = imageUrl ? imageUrl : status === 'clean' ? 'images/nophotoblack.png' : 'images/nophotored.png'
    document.querySelector('.vehicle-last-modified').innerHTML = lastmodified + " ago";
    document.querySelector('.vehicleowner').innerHTML = `
    <div class="warrant">
        <div class='imagecont'>
            <img src="${owner.imageUrl ? owner.imageUrl : 'images/nophotoblack.png'}" alt="profile-image" class="warrant-image">
        </div>
        <div class="info-section">
            <p class='suspectname fontmedium'>${owner.name} <span class="fontsmaller grey">ID: ${owner.id}</span></p> 
            <div class="information bold pt"> ${owner.info} <p class="dot"></p> ${owner.info} </div>
            <section class="status-div">
                <button class=" funcBtns">OWNER</button>
            </section>
        </div>
    </div>
    <div class="fontmedium vehicleaddinfo"> <span class=" grey">Purchase date</span> <span class="vl"></span> <span>${purchasedate}</span></div>
    <div class="fontmedium vehicleaddinfo"> <span class=" grey">Mileage</span> <span class="vl"></span> <span>${mileage}</span></div>
    <div class="fontmedium vehicleaddinfo"> <span class=" grey">Color</span> <span class="vl"></span> <span class="capitalize">${color}</span></div>
    `
    criminalhistory.length > 0 ?
    criminalhistory.map((history) => {
        document.querySelector('.vehiclecriminalhistory').innerHTML += `
            <div class="fontsmall flexsmall"> Incident #${history.incidentid} <span class="fontsmall ${history.incidentstatus+'style'}">${history.incidentstatus}</span> </div>
        `
    })
    :
        document.querySelector('.vehiclecriminalhistory').innerHTML = `
        <section class="novehiclerecord">
            <img src="images/nocriminalhistorybg.png" alt="no vehicle"/>
            <p class="grey fontsmall center">This vehicle haven’t been in
            any criminal records</p>
        </section>
        `
    warrants.length > 0 ? 
    warrants.map(( warr) => {
        document.querySelector('.vehiclewarrants').innerHTML += warr.active ? `
        <div class="fontsmall flexsmall active">Incident #${warr.incidentid} <span class="fontsmall suspectstyle">Active</span> </div>
        ` : 
        `<div class="fontsmall flexsmall">Incident #${warr.incidentid} <span class="fontsmall greybox">Closed ${warr.closed}</span> </div>`
    }) 
    :
    document.querySelector('.vehiclewarrants').innerHTML = `
    <section class="novehiclerecord">
        <img src="images/noprofilewarrantsbg.png" alt="no vehicle"/>
        <p class="grey fontsmall center">This vehicle haven’t any active warrants</p>
    </section>
    `
}
const viewAllVehicles = () => {
    document.querySelector('.allvehiclescontent').classList.remove("hidden");
    document.querySelector('.vehiclecontent').classList.add('hidden');
}

let currentvehiclefilter = 'all';
// SEARCH THROUGH VEHICLES
vehiclesearch.addEventListener('input', (e) => {
    let searchvalue = vehiclesearch.value
    let searchdata;
    if (currentvehiclefilter === 'all') {
        searchdata = vehiclesData;
    } else if (currentvehiclefilter === 'wanted') {
        searchdata = vehiclesData.filter((item) => item.status === 'wanted');
    } else if (currentvehiclefilter === 'clean') {
        searchdata = vehiclesData.filter((item) => item.status === 'clean');
    } else {
        searchdata = vehiclesData.filter((item) => item.status.includes(currentvehiclefilter))
    }
    searchdata = searchdata.filter((profile) => profile.name.toLowerCase().includes(searchvalue.toLowerCase()));
    pushVehicles(searchdata);
})
// FILTERS VEHICLES BASED ON STATUS (WANTED, CLEAN AND ALL)
const applyCurrentVehicleFilter = () => {
    let data;
    if (currentvehiclefilter === 'all') {
        data = vehiclesData;
    } else if (currentvehiclefilter === 'wanted') {
        data = vehiclesData.filter((item) => item.status === 'wanted');
    } else if (currentvehiclefilter === 'clean') {
        data = vehiclesData.filter((item) => item.status === 'clean');
    }
    pushVehicles(data);
}

vehiclesfilters.map((item) => {
    item.addEventListener('click', () => {
        vehiclesearch.value = ''
        item.classList.add(`active-${item.textContent}`)
        if (item == allprofiles) {
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
const incidentsview = document.querySelector('.incidentscont');
const singleincident = document.querySelector('.singleincident');

// INCIDENTS DATA
let incidentsData = [
    {
        id: '155',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        suspect: {
            name: "john oils",
            imageUrl: "images/character1.png",
            description: "Lorem ipsum dolor sit amet consectetur. Nec vivamus blandit a morbi potenti nulla nam accumsan id."
        },
        maininformation: {
            title: "Suspect Is An Ex-convict",
            information: "Apparently has been charged with murder, terrorism and grevious financial crimes"
        },
        victim: {
            name: "",
            imageUrl: "",
            description: ""
        },
        eyewitness: {
            name: "",
            imageUrl: "",
            description: ""
        },
        evidences: [
            {
                evidencename: 'cucumber',
                count: 5,
                id: 1
            },
            {
                evidencename: 'gun',
                count: 1,
                id: 2 
            }
        ],
        vehicles: [
            {
                id: 1,
                vehiclename: "Audi R8",
                vehicleid: "PC236127FFI"
            },
            {
                id: 2,
                vehiclename: "Audi R8",
                vehicleid: "PC23612678I"
            },
        ],
        officers: {
            leadingOfficers: [
                {
                    id: 1,
                    officername: "adams ressler",
                    officerid : "567",
                    incidentcreator: true
                },
            ],
            otherOfficers: [
                {
                    id: 1,
                    officername: "adams ressler",
                    officerid : "545",
                },
                {
                    id: 2,
                    officername: "adams ressler",
                    officerid : "548",
                },
            ]
        },
        citizens: [
            {
                id: 1,
                citizenname: "John Doe",
                citizenid: 156,
                status: "victim"
            },
            {
                id: 2,
                citizenname: "Jane Doe",
                citizenid: 157,
                status: "eyewitness"
            },
            {
                id: 3,
                citizenname: "Achmaad",
                citizenid: 267,
                status: "suspect"
            }
        ]
    },
    {
        id: '156',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        suspect: {
            name: "john oils",
            imageUrl: "images/character1.png",
            description: "Lorem ipsum dolor sit amet consectetur. Nec vivamus blandit a morbi potenti nulla nam accumsan id."
        },
        maininformation: {
            title: "statement",
            information: "Long talk"
        },
        victim: {
            name: "Tiana June",
            imageUrl: "images/character2.png",
            description: "that dude killed me"
        },
        eyewitness: {
            name: "",
            imageUrl: "",
            description: ""
        },
        evidences: [
            {
                evidencename: 'cucumber',
                count: 5,
                id: 1
            },
            {
                evidencename: 'gun',
                count: 1,
                id: 2 
            }
        ],
        vehicles: [
            {
                id: 1,
                vehiclename: "Audi R8",
                vehicleid: "PC236127FFI"
            },
            {
                id: 2,
                vehiclename: "Audi R8",
                vehicleid: "PC23612678I"
            },
        ],
        officers: [],
        citizens: []
    },
    {
        id: '157',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        suspect: {
            name: "",
            imageUrl: "images/character1.png",
            description: ""
        },
        maininformation: {
            title: "",
            information: ""
        },
        victim: {
            name: "Tiana June",
            imageUrl: "images/character2.png",
            description: "that dude killed me"
        },
        eyewitness: {
            name: "",
            imageUrl: "",
            description: ""
        },
        evidences: [
            {
                evidencename: 'cucumber',
                count: 5,
                id: 1
            },
            {
                evidencename: 'gun',
                count: 1,
                id: 2 
            }
        ],
        vehicles: [
            {
                id: 1,
                vehiclename: "Audi R8",
                vehicleid: "PC236127FFI"
            },
            {
                id: 2,
                vehiclename: "Audi R8",
                vehicleid: "PC23612678I"
            },
        ],
        officers: [],
        citizens: []
    },
    {
        id: '158',
        title: 'Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        suspect: {
            name: "",
            imageUrl: "images/character1.png",
            description: ""
        },
        maininformation: {
            title: "",
            information: ""
        },
        victim: {
            name: "Tiana June",
            imageUrl: "images/character2.png",
            description: "that dude killed me"
        },
        eyewitness: {
            name: "John Looker",
            imageUrl: "images/character.png",
            description: "lorem ipsum in jusbt time"
        },
        evidences: [
            {
                evidencename: 'cucumber',
                count: 5,
                id: 1
            },
            {
                evidencename: 'gun',
                count: 1,
                id: 2 
            }
        ],
        vehicles: [
            {
                id: 1,
                vehiclename: "Audi R8",
                vehicleid: "PC236127FFI"
            },
            {
                id: 2,
                vehiclename: "Audi R8",
                vehicleid: "PC23612678I"
            },
        ],
        officers: [],
        citizens: []
    },
    {
        id: '159',
        title: 'Theft',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '160',
        title: 'Assault',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        suspect: {
            name: "john oils",
            imageUrl: "images/character1.png",
            description: "Lorem ipsum dolor sit amet consectetur. Nec vivamus blandit a morbi potenti nulla nam accumsan id."
        },
        maininformation: {
            title: "Suspect Is An Ex-convict",
            information: "Apparently has been charged with murder, terrorism and grevious financial crimes"
        },
        victim: {
            name: "",
            imageUrl: "",
            description: ""
        },
        eyewitness: {
            name: "",
            imageUrl: "",
            description: ""
        },
        evidences: [
           
        ],
        vehicles: [
            {
                id: 1,
                vehiclename: "Audi R8",
                vehicleid: "PC236127FFI"
            },
            {
                id: 2,
                vehiclename: "Audi R8",
                vehicleid: "PC23612678I"
            },
        ],
        officers: {
            leadingOfficers: [
                {
                    id: 1,
                    officername: "adams ressler",
                    officerid : "567",
                    incidentcreator: true
                },
            ],
            otherOfficers: [
                
            ]
        },
        citizens: [
            {
                id: 1,
                citizenname: "John Doe",
                citizenid: 156,
                status: "victim"
            },
        ]
    },
    {
        id: '161',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '162',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '163',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '164',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '165',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '166',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '167',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '168',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '169',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '170',
        title: 'Attempted Murder',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '171',
        title: 'Murder',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '172',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '173',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '13 minutes',
        name: 'alexa death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
    {
        id: '174',
        title: '10-90 | Robbery',
        description: 'some information',
        time: '15 minutes',
        name: 'texda death',
        officers: [],
        citizens: [],
        vehicles: [],
        evidences: []
    },
]
// FETCH / RENDERS INCIDENTS DATA TO SCREEN
const pushIncidents = (data) => {
    incidentsmain.innerHTML = '';
    data.map((item) => {
        const { id, title, description, time, name } = item;
        incidentsmain.innerHTML += `
        <section class="incident">
            <h4 class="incident-title">${title}</h4>
            <div class="information">${description} <p class="dot"></p> id: ${id}</div>
            <div class="timebox pointer" onclick="viewIncident(${id})"> 
                <p> 
                <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path class="smalledit" d="M8.65 3.4625L6.525 1.3625L7.225 0.6625C7.41667 0.470833 7.65217 0.375 7.9315 0.375C8.21083 0.375 8.44617 0.470833 8.6375 0.6625L9.3375 1.3625C9.52917 1.55417 9.62917 1.7855 9.6375 2.0565C9.64583 2.3275 9.55417 2.55867 9.3625 2.75L8.65 3.4625ZM7.925 4.2L2.625 9.5H0.5V7.375L5.8 2.075L7.925 4.2Z" />
                </svg>
                </p> 
                <p> ${name} - ${time} ago</p> 
            </div>
        </section>
        `
    })
}
pushIncidents(incidentsData);
// SEARCH INCIDENTS
incidentsearch.addEventListener('input', () => {
    let searchvalue = incidentsearch.value
    if (!searchvalue) pushIncidents(incidentsData)
    let data = incidentsData.filter((incident) => incident.title.toLowerCase().includes(searchvalue.toLowerCase()));
    pushIncidents(data)
})
// NAVIGATE TO INCIDENTS ADD SCREEN
const incidentsAdd = () => {
    document.querySelector('.newincidentscreen').classList.remove('hidden');
    document.querySelector('.addcriminalscreen').classList.remove('hidden');
    document.querySelector('.incidents-main').classList.remove('incidents-grid');
    document.querySelector('.incidentadd').classList.add('hidden');
}
// ADD EVIDENCE FUNCTIONALITY
const evidenceIncidentSub = () => {
    document.querySelector('.incidentevidence').classList.toggle('hidevehicle')
    document.querySelector('.addincidentevidence').classList.toggle('addiconactive') 
}
addevidence.addEventListener('click', () => {
    evidencemodal.classList.remove('hide')
})
cancelevidence.addEventListener('click', () => {
    evidencemodal.classList.add('hide')
})
saveevidence.addEventListener('click', () => {
    // YET TO WORK ON IT
    evidencemodal.classList.add('hide')
})

// ADD PERSON FUNCTIONALITY
const personIncidentSub = () => {
    document.querySelector('.incidentpersons').classList.toggle('hidevehicle')
    document.querySelector('.addincidentperson').classList.toggle('addiconactive') 
}
addperson.addEventListener('click', () => {
    personmodal.classList.remove('hide')
})
cancelperson.addEventListener('click', () => {
    personmodal.classList.add('hide')
})
findperson.addEventListener('click', () => {
    // YET TO WORK
    personmodal.classList.add('hide')
})

// ADD VEHICLE TO INCIDENT
const addIncidentVehicle = () => {
    document.querySelector('.incidentvehicles').classList.toggle('hidevehicle')
    document.querySelector('#addincidentvehicle').classList.toggle('addiconactive')
}
const addVehicle = () => {
    document.querySelector('#vehiclemodal').classList.remove('hide')
}
const cancelVehicle = () => {
    document.querySelector('#vehiclemodal').classList.add('hide')
}
const vehicleButtonAdd = () => {
    if(document.querySelector('#selectedvehicle').value){
        document.getElementById('addedincidentvehicles').innerHTML += `
        <div class="subpickedcontent">
            <img src="images/vehicle.svg" alt="vehicle icon">
            <p> ${document.querySelector('#selectedvehicle').value} </p>
        </div>
        `
        document.querySelector('#vehiclemodal').classList.add('hide')
        document.querySelector('#selectedvehicle').value = ''
        document.getElementById('selectedvehicle').classList.remove('uppercase')
    }
}

// ADD OFFICER TO INCIDENT
const officerIncidentSub = () => {
    document.querySelector('.incidentofficers').classList.toggle('hidevehicle')
    document.querySelector('.addincidentofficer').classList.toggle('addiconactive') 
}
const addOfficer = () => {
    document.querySelector('#officermodal').classList.remove('hide')
}
const cancelOfficer = () => {
    document.querySelector('#officermodal').classList.add('hide')
}
const officerAdd = () => {
    document.querySelector('#officermodal').classList.add('hide')
}

// ADD CRIMINAL SCUM TO NEW INCIDENT
const criminalIncidentSub = () => {
    document.querySelector('.incidentcriminals').classList.toggle('hidevehicle')
    document.querySelector('.addincidentcriminal').classList.toggle('addiconactive') 
}
const addCriminal = () => {
    document.querySelector('#criminalmodal').classList.remove('hide')
}
const cancelCriminal = () => {
    document.querySelector('#criminalmodal').classList.add('hide')
}
const criminalAdd = () => {
    document.querySelector('#criminalmodal').classList.add('hide')
}

// VIEW SINGLE INCIDENT SWITCH
const incidentEvidences = document.querySelector('.evidences');
const incidentVehicles = document.querySelector('.vehicles');
const incidentOfficers = document.querySelector('.officers');
const incidentCitizens = document.querySelector('.citizens');

const secondDetail = [ incidentCitizens,incidentEvidences, incidentVehicles, incidentOfficers ];
let currentIncident;
const viewIncident = (incidentId) => {
    currentIncident = incidentId
    document.querySelector('.suspectbox').innerHTML = ''
    document.querySelector('.victimbox').innerHTML = ''
    document.querySelector('.eyewitnessbox').innerHTML = ''
    singleincident.classList.add('show');
    singleincident.classList.remove('hidden');
    incidentsview.classList.add('hidden');
    let incident = incidentsData.filter((incd) => incd.id == incidentId);
    const { id, description, time, vehicles, victim, evidences, eyewitness, citizens, suspect, officers, maininformation } = incident[0]
    document.querySelector('.incidentId').textContent = id;
    document.querySelector('.incidentInfo').textContent = description;
    document.querySelector('.last-modified').innerHTML = `
        <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path class="smalledit" d="M8.65 3.4625L6.525 1.3625L7.225 0.6625C7.41667 0.470833 7.65217 0.375 7.9315 0.375C8.21083 0.375 8.44617 0.470833 8.6375 0.6625L9.3375 1.3625C9.52917 1.55417 9.62917 1.7855 9.6375 2.0565C9.64583 2.3275 9.55417 2.55867 9.3625 2.75L8.65 3.4625ZM7.925 4.2L2.625 9.5H0.5V7.375L5.8 2.075L7.925 4.2Z" />
        </svg>
        ${time} ago
    `
    document.querySelector('.evidences-records').textContent = evidences.length;
    document.querySelector('.vehicles-records').textContent = vehicles.length;
    document.querySelector('.officers-records').textContent = officers.leadingOfficers.length + officers.otherOfficers.length;
    document.querySelector('.citizens-records').textContent = citizens.length;

    secondDetail.map((detail) => {
        detail.addEventListener('click', () => {
            detail.classList.add('detailactive');
            let restDetails = secondDetail.filter((item) => item !== detail);
            restDetails.map((item) => item.classList.remove('detailactive'));
            document.querySelector('.main-info').classList.add('hidden');
            document.querySelector('.detail-records').classList.remove('hidden');
            document.querySelector('.backtomaininfo').classList.remove('elementhidden');
            document.querySelector('.details').innerHTML = ''
            if ( detail == incidentEvidences ){
                document.querySelector('.main-title').textContent = `Involved Evidences List`;
                document.querySelector('.detail-records').innerHTML = `
                    <div class="details"></div>
                    <div class="flexsmall grey pointer addnew" onclick="addEvidenceToIncident()">
                        <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        Add new
                    </div>
                `
                evidences.map((evid) => {
                    const { evidencename, count, id } = evid;
                    document.querySelector('.details').innerHTML += `
                        <section class='detail ${'evidence'+id}'>
                            <div class='flexsmall'>
                                ${evidencename}
                                <p> ${count}x </p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none">
                                    <path d="M15.4863 7.73699L12.2307 4.51507L13.3031 3.4411C13.5968 3.14703 13.9576 3 14.3855 3C14.8135 3 15.174 3.14703 15.4671 3.4411L16.5396 4.51507C16.8332 4.80913 16.9864 5.16405 16.9992 5.57984C17.012 5.99562 16.8715 6.35028 16.5779 6.64384L15.4863 7.73699ZM14.3755 8.86849L6.25563 17H3V13.7397L11.1199 5.60822L14.3755 8.86849Z" fill="white" fill-opacity="0.65"/>
                                </svg>
                                <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteEvidenceFromIncident(${id})">
                                    <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                                </svg>
                            </div>
                        </section>
                    `
                })
            } else if( detail == incidentVehicles ){
                document.querySelector('.main-title').textContent = `Involved Vehicles List`;
                document.querySelector('.detail-records').innerHTML = `
                    <div class="details"></div>
                    <div class="flexsmall grey pointer addnew" onclick="addVehicleToIncident()">
                        <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        Add new
                    </div>
                `
                vehicles.map((vehic) => {
                    const { vehiclename, vehicleid, id } = vehic;
                    document.querySelector('.details').innerHTML += `
                        <section class='detail ${'vehicle'+id}'>
                            <div class='flexsmall'>
                                ${vehiclename}
                                <p> ${vehicleid} </p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none">
                                    <path d="M15.4863 7.73699L12.2307 4.51507L13.3031 3.4411C13.5968 3.14703 13.9576 3 14.3855 3C14.8135 3 15.174 3.14703 15.4671 3.4411L16.5396 4.51507C16.8332 4.80913 16.9864 5.16405 16.9992 5.57984C17.012 5.99562 16.8715 6.35028 16.5779 6.64384L15.4863 7.73699ZM14.3755 8.86849L6.25563 17H3V13.7397L11.1199 5.60822L14.3755 8.86849Z" fill="white" fill-opacity="0.65"/>
                                </svg>
                                <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteVehicleFromIncident(${id})">
                                    <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                                </svg>
                            </div>
                        </section>
                    `
                })
            } else if ( detail == incidentCitizens ){
                document.querySelector('.main-title').textContent = `Involved Citizens List`;
                document.querySelector('.detail-records').innerHTML = `
                    <div class="details"></div>
                    <div class="flexsmall grey pointer addnew" onclick="addCitizenToIncident()">
                        <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                        </svg>
                        Add new
                    </div>
                `
                citizens.map((citizen) => {
                    const { citizenname, citizenid, id, status } = citizen;
                    document.querySelector('.details').innerHTML += `
                        <section class='detail ${'citizen'+id}'>
                            <div class='flexsmall'>
                                ${citizenname}
                                <span> (ID:${citizenid}) </span>
                                <span class='${status}style allstyle'> ${status} </span>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none">
                                    <path d="M15.4863 7.73699L12.2307 4.51507L13.3031 3.4411C13.5968 3.14703 13.9576 3 14.3855 3C14.8135 3 15.174 3.14703 15.4671 3.4411L16.5396 4.51507C16.8332 4.80913 16.9864 5.16405 16.9992 5.57984C17.012 5.99562 16.8715 6.35028 16.5779 6.64384L15.4863 7.73699ZM14.3755 8.86849L6.25563 17H3V13.7397L11.1199 5.60822L14.3755 8.86849Z" fill="white" fill-opacity="0.65"/>
                                </svg>
                                <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteCitizenFromIncident(${id})">
                                    <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                                </svg>
                            </div>
                        </section>
                    `
                })
            } else if ( detail == incidentOfficers ){
                document.querySelector('.main-title').textContent = `Involved Officers List`;
                document.querySelector('.detail-records').innerHTML = `
                    <div class="details flexfull">
                        <section class="flexdivs">
                            <div class="flexheading">
                                <p>Leading Officers</p>
                                <div class="flexheading-div"></div>
                            </div>
                            <div class="leadingofficersdetails"></div>
                            <div class="flexsmall grey pointer addnew" onclick="addLeadingOfficerToIncident()">
                                <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                                </svg>
                                Add new
                            </div>
                        </section>
                        <section class="flexdivs">
                            <div class="flexheading" >
                                <p>Officers</p>
                                <div class="flexheading-div"></div>
                            </div>
                            <div class="officersdetails"></div>
                            <div class="flexsmall grey pointer addnew" onclick="addOfficerToIncident()">
                                <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                                </svg>
                                Add new
                            </div>
                        </section>
                    </div>
                `
                officers.leadingOfficers.map((officer) => {
                    const { officername, officerid, id } = officer;
                    document.querySelector('.leadingofficersdetails').innerHTML += `
                        <section class='detail ${'leadingofficer'+id}'>
                            <div class='flexsmall'>
                                ${officername}
                                <span> (ID:${officerid}) </span>
                                ${ officer.incidentcreator && `<div class="incidentcreator">Incident Creator</div>` }
                            </div>
                            <div>
                                <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteLeadingOfficerFromIncident(${id})">
                                    <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                                </svg>
                            </div>
                        </section>
                    `
                })
                officers.otherOfficers.map((officer) => {
                    const { officername, officerid, id } = officer;
                    document.querySelector('.officersdetails').innerHTML += `
                        <section class='detail ${'officer'+id}'>
                            <div class='flexsmall'>
                                ${officername}
                                <span> (ID:${officerid}) </span>
                            </div>
                            <div>
                                <svg width="20" height="20" class="pointer" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onclick="deleteOfficerFromIncident(${id})">
                                    <path d="M15.8334 3.33333H12.9167L12.0834 2.5H7.91675L7.08341 3.33333H4.16675V5H15.8334M5.00008 15.8333C5.00008 16.2754 5.17568 16.6993 5.48824 17.0118C5.8008 17.3244 6.22472 17.5 6.66675 17.5H13.3334C13.7754 17.5 14.1994 17.3244 14.5119 17.0118C14.8245 16.6993 15.0001 16.2754 15.0001 15.8333V5.83333H5.00008V15.8333Z" fill="#F13333" fill-opacity="0.65"/>
                                </svg>
                            </div>
                        </section>
                    `
                })
            }
        })
    })

    // SUSPECT DATA PUSH   
    document.querySelector('.suspectbox').innerHTML = `
    ${suspect.name ? 
        `<div class='imagecont'>
            <img src=${suspect.imageUrl ? suspect.imageUrl : 'images/nophotoblack.png'} alt="suspect-image" class="warrant-image"></img>  
        </div>` :
        `<div class='addsuspect'  onclick="addSuspect()">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
            </svg>
        </div>`
    }
        <div class=""> 
            <p class='suspectname'>${suspect.name ? suspect.name : 'empty'}</p>
            <div class="information"> ${suspect.description ? suspect.description : 'You can add person from list by click on plus near'}</div>
            <section class="status-div">
                <button class="suspectbtn funcBtns">suspect</button>
            </section>
        </div>
    `
    // VICTIM DATA PUSH
    document.querySelector('.victimbox').innerHTML = `
    ${victim.name ? 
        `<div class='imagecont'>
            <img src=${victim.imageUrl ? victim.imageUrl : 'images/nophotoblack.png'} alt="victim-image" class="warrant-image"></img>  
        </div>` :
        `<div class='addvictim' onclick="addVictim()">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
            </svg>
        </div>`
    }
        <div class="">
            <p class='suspectname'>${victim.name ? victim.name : 'empty'}</p>
            <div class="information"> ${victim.description ? victim.description : 'You can add person from list by click on plus near'} </div>
            <section class="status-div">
                <button class="victimbtn funcBtns">victim</button>
            </section>
        </div>
    `
    // EYEWITNESS DATA PUSH
    document.querySelector('.eyewitnessbox').innerHTML = `
        ${eyewitness.name ? 
            `<div class='imagecont'>
                <img src=${eyewitness.imageUrl ? eyewitness.imageUrl : 'images/nophotoblack.png'} alt="suspect-image" class="warrant-image"></img>  
            </div>` :
            `<div class='addeyewitness' onclick="addWitness()">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2188 6.25C24.8404 6.25 25.4365 6.49693 25.876 6.93647C26.3156 7.37601 26.5625 7.97215 26.5625 8.59375V21.875H39.8438C40.4654 21.875 41.0615 22.1219 41.501 22.5615C41.9406 23.001 42.1875 23.5971 42.1875 24.2188C42.1875 24.8404 41.9406 25.4365 41.501 25.876C41.0615 26.3156 40.4654 26.5625 39.8438 26.5625H26.5625V39.8438C26.5625 40.4654 26.3156 41.0615 25.876 41.501C25.4365 41.9406 24.8404 42.1875 24.2188 42.1875C23.5971 42.1875 23.001 41.9406 22.5615 41.501C22.1219 41.0615 21.875 40.4654 21.875 39.8438V26.5625H8.59375C7.97215 26.5625 7.37601 26.3156 6.93647 25.876C6.49693 25.4365 6.25 24.8404 6.25 24.2188C6.25 23.5971 6.49693 23.001 6.93647 22.5615C7.37601 22.1219 7.97215 21.875 8.59375 21.875H21.875V8.59375C21.875 7.97215 22.1219 7.37601 22.5615 6.93647C23.001 6.49693 23.5971 6.25 24.2188 6.25Z" fill="white" fill-opacity="0.65"/>
                </svg>
            </div>`
        }
        
        <div class="">
            <p class='suspectname'>${eyewitness.name ? eyewitness.name : 'empty'}</p>
            <div class="information"> ${eyewitness.description ? eyewitness.description : 'You can add person from list by click on plus near'}  </div>
            <section class="status-div">
                <button class="eyewitnessbtn funcBtns">eyewitness</button>
            </section>
        </div>
    `

    document.querySelector('.main-info-title').textContent = maininformation.title;
    document.querySelector('.main-info-text').textContent = maininformation.information;
}

const backToMainInfo = () => {
    document.querySelector('.main-info').classList.remove('hidden');
    document.querySelector('.detail-records').classList.add('hidden');
    document.querySelector('.backtomaininfo').classList.add('elementhidden');
    document.querySelector('.main-title').textContent = 'Main Information';
    secondDetail.map((detail) => {
        detail.classList.remove('detailactive')
    })
}

// DELETE INCIDENT FUNCTIONS
const deleteIncident = () => {
    incidentsData = incidentsData.filter((incident) => incident.id != currentIncident)
    pushIncidents(incidentsData);
    singleincident.classList.remove('show');
    singleincident.classList.add('hidden');
    incidentsview.classList.remove('hidden');
    document.querySelector('#incidentdeletemodal').classList.add('hide')
}
const cancelIncidentDelete = () => {
    document.querySelector('#incidentdeletemodal').classList.add('hide')
}
const openIncidentDelete = () => {
    document.querySelector('#incidentdeletemodal').classList.remove('hide')
}

// ADD VICTIM TO INCIDENT
const addVictim = () => {
    document.querySelector('#victimmodal').classList.remove('hide')
}
const cancelVictim = () => {
    document.querySelector('#victimmodal').classList.add('hide')
}
const victimButtonAdd = () => {
    document.querySelector('#victimmodal').classList.add('hide')
}

// ADD EYEWITNESS TO INCIDENT
const addWitness = () => {
    document.querySelector('#witnessmodal').classList.remove('hide')
}
const cancelWitness = () => {
    document.querySelector('#witnessmodal').classList.add('hide')
}
const witnessButtonAdd = () => {
    document.querySelector('#witnessmodal').classList.add('hide')
}

// ADD SUSPECT TO INCIDENT
const addSuspect = () => {
    document.querySelector('#suspectmodal').classList.remove('hide')
}
const cancelSuspect = () => {
    document.querySelector('#suspectmodal').classList.add('hide')
}
const suspectButtonAdd = () => {
    document.querySelector('#suspectmodal').classList.add('hide')
}

// EVIDENCE ADD/DELETE/EDIT 
const addEvidenceToIncident = () => {
    document.querySelector('.evidencemodal').classList.remove('hide')
}
const cancelAddEvidenceModal = () => {
    document.querySelector('.evidencemodal').classList.add('hide')
}
const deleteEvidenceFromIncident = (id) => {
    document.querySelector(`.evidence${id}`).classList.add('hidden')
    incidentsData = incidentsData.map((incd) => {
        if (incd.id == currentIncident){
            let newincd = incd.evidences.filter((evid) => evid.id  !== id)
            return {...incd, evidences:newincd}
        } else{
            return {...incd}
        }
    })
    pushIncidents(incidentsData)
    viewIncident(currentIncident)
}
// VEHICLE ADD/DELETE/EDIT 
const addVehicleToIncident = () => {
    document.querySelector('.vehiclemodal').classList.remove('hide')
}
const cancelAddVehicleModal = () => {
    document.querySelector('.vehiclemodal').classList.add('hide')
}
const deleteVehicleFromIncident = (id) => {
    document.querySelector(`.vehicle${id}`).classList.add('hidden')
    incidentsData = incidentsData.map((incd) => {
        if (incd.id == currentIncident){
            let newincd = incd.vehicles.filter((veh) => veh.id != id)
            return {...incd, vehicles:newincd}
        } else{
            return {...incd}
        }
    })
    pushIncidents(incidentsData)
    viewIncident(currentIncident)
}
// OFFICER ADD/DELETE/EDIT 
const addOfficerToIncident = () => {
    document.querySelector('.officermodal').classList.remove('hide')
}
const addLeadingOfficerToIncident = () => {
    document.querySelector('.officermodal').classList.remove('hide')
}
const cancelAddOfficerModal = () => {
    document.querySelector('.officermodal').classList.add('hide')
}
const deleteLeadingOfficerFromIncident = (id) => {
    document.querySelector(`.leadingofficer${id}`).classList.add('hidden');
    incidentsData = incidentsData.map((incd) => {
        if (incd.id == currentIncident) {
            let incdofficer = incd.officers
            let newincd = incd.officers.leadingOfficers.filter((i) => i.id != id);
            return {...incd, officers:{...incdofficer, leadingOfficers: newincd}}
        } else{
            return {...incd}
        }
    })
    console.log(incidentsData)
    pushIncidents(incidentsData)
    viewIncident(currentIncident)
}
const deleteOfficerFromIncident = (id) => {
    document.querySelector(`.officer${id}`).classList.add('hidden');
    incidentsData = incidentsData.map((incd) => {
        if (incd.id == currentIncident){
            let incdofficer = incd.officers
            let newincd = incd.officers.otherOfficers.filter((veh) => veh.id != id)
            return {...incd, officers: {...incdofficer, otherOfficers: newincd} }
        } else{
            return {...incd}
        }
    })
    pushIncidents(incidentsData)
    viewIncident(currentIncident)
}
// CITIZEN ADD/DELETE/EDIT 
const addCitizenToIncident = () => {
    document.querySelector('.citizenmodal').classList.remove('hide')
}
const cancelAddCitizenModal = () => {
    document.querySelector('.citizenmodal').classList.add('hide')
}
const deleteCitizenFromIncident = (id) => {
    document.querySelector(`.citizen${id}`).classList.add('hidden')
    incidentsData = incidentsData.map((incd) => {
        if (incd.id == currentIncident){
            let newincd = incd.citizens.filter((veh) => veh.id != id)
            return {...incd, citizens:newincd}
        } else{
            return {...incd}
        }
    })
    pushIncidents(incidentsData)
    viewIncident(currentIncident)
}

const viewAllIncidents = () => {
    singleincident.classList.remove('show');
    singleincident.classList.add('hidden');
    incidentsview.classList.remove('hidden');
    document.querySelector('.evidences-records').textContent = "";
    document.querySelector('.vehicles-records').textContent ="";
    document.querySelector('.officers-records').textContent = "";
    document.querySelector('.citizens-records').textContent ="";
}

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
// REPORTS DATA
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
// FETCH / RENDERS DATA TO HTML
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
// SEARCH REPORTS
reportsearch.addEventListener('input', () => {
    let searchvalue = reportsearch.value
    if (!searchvalue) pushReports(reportsData)
    let data = reportsData.filter((report) => report.title.toLowerCase().includes(searchvalue.toLowerCase()));
    pushReports(data)
})
// REPORTS ADD EVIDENCE FUNCTIONALITIES
const evidenceReportSub = () => {
    document.querySelector('.evidencereport').classList.toggle('hidevehicle')
    document.querySelector('#evidencereporticon').classList.toggle('addiconactive')
}
addreportevidence.addEventListener('click', () => {
    reportsevidence.classList.remove('hide')
})
cancelreportsevidence.addEventListener('click', () => {
    reportsevidence.classList.add('hide')
})
savereportevidence.addEventListener('click', () => {
    // YET TO WORK
})
// REPORTS ADD PERSON FUNCTIONALITY
const personReportSub = () => {
    document.querySelector('.personreport').classList.toggle('hidevehicle')
    document.querySelector('#personreporticon').classList.toggle('addiconactive')
}
addreportperson.addEventListener('click', () => {
    reportspersonmodal.classList.remove('hide')
})
cancelreportsperson.addEventListener('click', () => {
    reportspersonmodal.classList.add('hide')
})
reportspersonfind.addEventListener('click', () => {
    // YET TO WORK
})
// ADD OFFICER TO REPORT
const officerReportSub = () => {
    document.querySelector('.officerreport').classList.toggle('hidevehicle')
    document.querySelector('#officerreporticon').classList.toggle('addiconactive')
}
const addOfficerReport = () => {
    document.querySelector('#reportofficermodal').classList.remove('hide')
}
const cancelOfficerReport = () => {
    document.querySelector('#reportofficermodal').classList.add('hide')
}
const officerReportAdd = () => {
    document.querySelector('#reportofficermodal').classList.add('hide')
}
// ADD VEHICLES TO REPORT
const addReportVehicles = () => {
    document.querySelector('.reportvehicles').classList.toggle('hidevehicle')
    document.querySelector('#addreportvehicle').classList.toggle('addiconactive')
}
const addReportVehicle = () => {
    document.querySelector('#reportvehiclemodal').classList.remove('hide')
}
const cancelVehicleReport = () => {
    document.querySelector('#reportvehiclemodal').classList.add('hide')
}
const vehicleReportAdd = () => {
    // YET TO WORK
    document.querySelector('#reportvehiclemodal').classList.add('hide')
}

// DROPDOWN FOR ALL EVIDENCE, PERSON, CITIZENS, OFFICERS AND VEHICLES MODAL
const evidenceTypes = [ "Photo", "blood", "video", "bullet", "other" ]
const reportTypes = [ "investigative report", "civilian report", "victim report", "BOLO"]
let allVehicles = [
    {
        name: "AUDI R8",
        vehicleid: "LA123FH39",
        id: 1
    },
    {
        name: "BMW X5",
        vehicleid: "CA238FK22",
        id: 2
    },
    {
        name: "NOT BMW",
        vehicleid: "KZ248OK28",
        id: 3
    },
    {
        name: "NOT AUDI",
        vehicleid: "BY939KJ12",
        id: 4
    },
    {
        name: "Cardillac",
        vehicleid: "VC56HI7Y9",
        id: 5
    },
    {
        name: "bugatti",
        vehicleid: "lsfr89h7e",
        id: 6
    },
]

let allPeople = [
    {
        name: "Ahmed Bukar",
        id: '155',
        officer: true,
        wanted: false
    },
    {
        name: "young sheldon",
        id: '156',
        officer: false,
        wanted: false
    },
    {
        name: "Lose yourself",
        id: '157',
        officer: true,
        wanted: false
    },
    {
        name: "Wu Nohs",
        id: '158',
        officer: false,
        wanted: false
    },
    {
        name: "John oils",
        id: '159',
        officer: true,
        wanted: false
    },
    {
        name: "Anita",
        id: '160',
        officer: true,
        wanted: false
    },
    {
        name: "Didier Drogba",
        id: '161',
        officer: false,
        wanted: true
    },
    {
        name: "Anita",
        id: '162',
        officer: false,
        wanted: false
    },
    {
        name: "Eren Jaeger",
        id: '163',
        officer: false,
        wanted: true
    },
    {
        name: "Kirito",
        id: '164',
        officer: false,
        wanted: true
    },
]

let allOfficers =  allPeople.filter((i) => i.officer === true)
let allCitizens = allPeople.filter((i) => i.officer !== true)
const allWanted = allPeople.filter((i) => i.wanted === true)
// DROPDOWN FUNCTION FOR NEW INCIDENT ADD VEHICLES
const pushEvidenceDropData = (data, element, inputelement) => {
    document.querySelector(element).innerHTML = ""
    if ( element === '.vehicledropdowncontent' || element === '.reportvehicledropdowncontent' ){
        data.map((veh) => {
            const { name, id, vehicleid } = veh;
            document.querySelector(element).innerHTML += `
                <section class="grey pointer uppercase fontmedium smallbold" onclick="selectVehicleValue(${id})">${vehicleid} - ${name}</section>
            `
        })
    } else if ( element === '.officerdropdowncontent' || element ===  '.reportofficerdropdowncontent' ){
        data.map((off) => {
            const {name, id} = off;
            document.querySelector(element).innerHTML += `
                <section class="grey pointer capitalize fontmedium smallbold">${name} (ID:${id})</section>
            `
        })
    } else if ( element === '.persondropdowncontent' || element === '.reportpersondropdowncontent' || element === '.criminaldropdowncontent'){
        data.map((cit) => {
            const {name, id, wanted} = cit;
            document.querySelector(element).innerHTML += `
                <section class="grey pointer capitalize fontmedium smallbold"> 
                    <p>${name} (ID:${id})</p>  
                    <div class="${wanted ? 'civilwanted' : 'civil'} mediumbold fontsmaller flexsmall"> <span></span> CIVIL ${wanted ? '(WANTED)' : ''}</div> 
                </section>
            `
        })
    } else if ( element === '.evidencedropdowncontent' || element === '.reportevidencedropdowncontent'){
        data.map((type) => {
            document.querySelector(element).innerHTML += `
            <section class="grey pointer capitalize fontmedium smallbold">${type}</section>
            `
        })
    } else if ( element === '.reportdropdowncontent'){
        data.map((type) => {
            document.querySelector(element).innerHTML += `
            <section class="grey pointer capitalize fontmedium smallbold">${type}</section>
            `
        })
    }
}
const selectVehicleValue = (id) => {
    let veh = allVehicles.filter((v) => v.id === id)
    document.getElementById('selectedvehicle').value = `${veh[0].vehicleid} | ${veh[0].name}`
    document.getElementById('selectedvehicle').classList.add('uppercase')
    document.querySelector('.vehiclesearchpop').classList.add('elementhidden')
    document.querySelector('.vehicledropdowncontent').classList.add('hidden')
    document.querySelector('.dropdownicon').classList.remove('rotate')
}
// SEARCH VEHICLE DROPDOWN LIST
document.querySelector('#selectedvehicle').addEventListener('input', (event) => {
    document.querySelector('.vehiclesearchpop').classList.remove('elementhidden')
    document.querySelector('.vehicledropdowncontent').classList.remove('hidden')
    document.querySelector('.dropdownicon').classList.add('rotate')
    let val = event.target.value
    let data = allVehicles.filter((veh) => veh.name.toLowerCase().includes(val.toLowerCase()) || veh.id.toLowerCase().includes(val.toLowerCase()))
    pushEvidenceDropData(data, '.vehicledropdowncontent', 'selectedvehicle')
})

const toggleVehicleDropDown = () => {
    document.querySelector('.vehiclesearchpop').classList.toggle('elementhidden')
    document.querySelector('.vehicledropdowncontent').innerHTML = ""
    document.querySelector('#selectedvehicle').value = ""
    document.querySelector('#selectedvehicle').classList.remove('uppercase')
    if (document.getElementsByName('Vehicle')[0].placeholder === "Enter name for search"){
        document.getElementsByName('Vehicle')[0].placeholder = "Choose profile";
    } else {
        document.getElementsByName('Vehicle')[0].placeholder = "Enter name for search";
    }
    document.querySelector('.vehicledropdowncontent').classList.toggle('hidden')
    document.querySelector('.dropdownicon').classList.toggle('rotate')
    pushEvidenceDropData(allVehicles, '.vehicledropdowncontent', 'selectedvehicle');
}

// DROP DOWN FUNCTION FOR NEW INCIDENT ADD OFFICER
const toggleOfficerDropDown = () => {
    document.querySelector('.officersearchpop').classList.toggle('elementhidden')
    document.querySelector('.officerdropdowncontent').innerHTML = ""
    document.querySelector('#Officername').value = ""
    if (document.getElementsByName('Officer')[0].placeholder === "Enter name for search"){
        document.getElementsByName('Officer')[0].placeholder = "Choose profile";
    } else {
        document.getElementsByName('Officer')[0].placeholder = "Enter name for search";
    }
    document.querySelector('.officerdropdowncontent').classList.toggle('hidden')
    document.querySelector('.officerdropdownicon').classList.toggle('rotate')
    pushEvidenceDropData(allOfficers, '.officerdropdowncontent');
}
// SEARCH NEW INCIDENT OFFICER DROPDOWN LIST
document.querySelector('#Officername').addEventListener('input', (event) => {
    document.querySelector('.officersearchpop').classList.remove('elementhidden')
    document.querySelector('.officerdropdowncontent').classList.remove('hidden')
    document.querySelector('.officerdropdownicon').classList.add('rotate')
    let val = event.target.value
    let data = allOfficers.filter((off) => off.name.toLowerCase().includes(val.toLowerCase()) || off.id.toLowerCase().includes(val.toLowerCase()))
    pushEvidenceDropData(data, '.officerdropdowncontent')
})

// DROP DOWN FUNCTION FOR NEW INCIDENT ADD PERSON
const togglePersonDropDown = () => {
    document.querySelector('.personsearchpop').classList.toggle('elementhidden')
    document.querySelector('.persondropdowncontent').innerHTML = ""
    document.querySelector('#Personname').value = ""
    if (document.getElementsByName('Personname')[0].placeholder === "Enter name for search"){
        document.getElementsByName('Personname')[0].placeholder = "Choose profile";
    } else {
        document.getElementsByName('Personname')[0].placeholder = "Enter name for search";
    }
    document.querySelector('.persondropdowncontent').classList.toggle('hidden')
    document.querySelector('.persondropdownicon').classList.toggle('rotate')
    pushEvidenceDropData(allCitizens, '.persondropdowncontent');
}
// SEARCH NEW INCIDENT PERSON DROPDOWN LIST
document.querySelector('#Personname').addEventListener('input', (event) => {
    document.querySelector('.personsearchpop').classList.remove('elementhidden')
    document.querySelector('.persondropdowncontent').classList.remove('hidden')
    document.querySelector('.persondropdownicon').classList.add('rotate')
    let val = event.target.value
    let data = allCitizens.filter((cit) => cit.name.toLowerCase().includes(val.toLowerCase()) || cit.id.toLowerCase().includes(val.toLowerCase()))
    pushEvidenceDropData(data, '.persondropdowncontent')
})
// DROP DOWN FUNCTION FOR NEW INCIDENT ADD CRIMINAL SCUM
const toggleCriminalDropDown = () => {
    document.querySelector('.criminalsearchpop').classList.toggle('elementhidden')
    document.querySelector('.criminaldropdowncontent').innerHTML = ""
    document.querySelector('#criminalname').value = ""
    if (document.getElementsByName('criminalname')[0].placeholder === "Enter name for search"){
        document.getElementsByName('criminalname')[0].placeholder = "Choose profile";
    } else {
        document.getElementsByName('criminalname')[0].placeholder = "Enter name for search";
    }
    document.querySelector('.criminaldropdowncontent').classList.toggle('hidden')
    document.querySelector('.criminaldropdownicon').classList.toggle('rotate')
    pushEvidenceDropData(allWanted, '.criminaldropdowncontent');
}
// SEARCH NEW INCIDENT ADD CRIMINAL SSCUMDROPDOWN LIST
document.querySelector('#criminalname').addEventListener('input', (event) => {
    document.querySelector('.criminalsearchpop').classList.remove('elementhidden')
    document.querySelector('.criminaldropdowncontent').classList.remove('hidden')
    document.querySelector('.criminaldropdownicon').classList.add('rotate')
    let val = event.target.value
    let data = allWanted.filter((cit) => cit.name.toLowerCase().includes(val.toLowerCase()) || cit.id.toLowerCase().includes(val.toLowerCase()))
    pushEvidenceDropData(data, '.criminaldropdowncontent')
})
// DROP DOWN FUNCTION FOR NEW INCIDENT ADD CRIMINAL SCUM
const toggleEvidenceDropDown = () => {
    document.querySelector('.evidencedropdowncontent').innerHTML = ""
    document.querySelector('.evidencedropdowncontent').classList.toggle('hidden')
    document.querySelector('.evidencedropdownicon').classList.toggle('rotate')
    pushEvidenceDropData(evidenceTypes, '.evidencedropdowncontent');
}
// SEARCH NEW INCIDENT ADD CRIMINAL SCUM DROPDOWN LIST
document.querySelector('#evidencename').addEventListener('input', (event) => {
    document.querySelector('.evidencedropdowncontent').classList.remove('hidden')
    document.querySelector('.evidencedropdownicon').classList.add('rotate')
    let val = event.target.value
    let data = evidenceTypes.filter((type) => type.toLowerCase().includes(val.toLowerCase()) )
    pushEvidenceDropData(data, '.evidencedropdowncontent')
})

// REPORTS MODAL DROPDOWNS
// DROP DOWN FUNCTION FOR REPORT TYPE
const toggleReportDropDown = () => {
    document.querySelector('.reportdropdowncontent').innerHTML = ""
    document.querySelector('.reportdropdowncontent').classList.toggle('hidden')
    document.querySelector('.reportdropdownicon').classList.toggle('rotate')
    pushEvidenceDropData(reportTypes, '.reportdropdowncontent');
}
// SEARCH REPORT TYPE
document.querySelector('#reportname').addEventListener('input', (event) => {
    document.querySelector('.reportdropdowncontent').classList.remove('hidden')
    document.querySelector('.reportdropdownicon').classList.add('rotate')
    let val = event.target.value
    let data = reportTypes.filter((type) => type.toLowerCase().includes(val.toLowerCase()) )
    pushEvidenceDropData(data, '.reportdropdowncontent')
})
// DROP DOWN FUNCTION FOR REPORT ADD CRIMINAL SCUM
const toggleReportEvidenceDropDown = () => {
    document.querySelector('.reportevidencedropdowncontent').innerHTML = ""
    document.querySelector('.reportevidencedropdowncontent').classList.toggle('hidden')
    document.querySelector('.reportevidencedropdownicon').classList.toggle('rotate')
    pushEvidenceDropData(evidenceTypes, '.reportevidencedropdowncontent');
}
// SEARCH REPORT ADD CRIMINAL SCUM DROPDOWN LIST
document.querySelector('#reportevidencename').addEventListener('input', (event) => {
    document.querySelector('.reportevidencedropdowncontent').classList.remove('hidden')
    document.querySelector('.reportevidencedropdownicon').classList.add('rotate')
    let val = event.target.value
    let data = evidenceTypes.filter((type) => type.toLowerCase().includes(val.toLowerCase()) )
    pushEvidenceDropData(data, '.reportevidencedropdowncontent')
})
// DROP DOWN FUNCTION FOR ADD REPORT PERSON
const toggleReportPersonDropDown = () => {
    document.querySelector('.reportpersonsearchpop').classList.toggle('elementhidden')
    document.querySelector('.reportpersondropdowncontent').innerHTML = ""
    document.querySelector('#reportpersonname').value = ""
    if (document.getElementsByName('reportpersonname')[0].placeholder === "Enter name for search"){
        document.getElementsByName('reportpersonname')[0].placeholder = "Choose profile";
    } else {
        document.getElementsByName('reportpersonname')[0].placeholder = "Enter name for search";
    }
    document.querySelector('.reportpersondropdowncontent').classList.toggle('hidden')
    document.querySelector('.reportpersondropdownicon').classList.toggle('rotate')
    pushEvidenceDropData(allCitizens, '.reportpersondropdowncontent');
}
// SEARCH NEW REPORT PERSON DROPDOWN LIST
document.querySelector('#reportpersonname').addEventListener('input', (event) => {
    document.querySelector('.reportpersonsearchpop').classList.remove('elementhidden')
    document.querySelector('.reportpersondropdowncontent').classList.remove('hidden')
    document.querySelector('.reportpersondropdownicon').classList.add('rotate')
    let val = event.target.value
    let data = allCitizens.filter((cit) => cit.name.toLowerCase().includes(val.toLowerCase()) || cit.id.toLowerCase().includes(val.toLowerCase()))
    pushEvidenceDropData(data, '.reportpersondropdowncontent')
})
// DROP DOWN FUNCTION FOR ADD REPORT OFFICER
const toggleReportOfficerDropDown = () => {
    document.querySelector('.reportofficersearchpop').classList.toggle('elementhidden')
    document.querySelector('.reportofficerdropdowncontent').innerHTML = ""
    document.querySelector('#reportofficername').value = ""
    if (document.getElementsByName('reportofficername')[0].placeholder === "Enter name for search"){
        document.getElementsByName('reportofficername')[0].placeholder = "Choose profile";
    } else {
        document.getElementsByName('reportofficername')[0].placeholder = "Enter name for search";
    }
    document.querySelector('.reportofficerdropdowncontent').classList.toggle('hidden')
    document.querySelector('.reportofficerdropdownicon').classList.toggle('rotate')
    pushEvidenceDropData(allCitizens, '.reportofficerdropdowncontent');
}
// SEARCH NEW REPORT OFFICER DROPDOWN LIST
document.querySelector('#reportofficername').addEventListener('input', (event) => {
    document.querySelector('.reportofficersearchpop').classList.remove('elementhidden')
    document.querySelector('.reportofficerdropdowncontent').classList.remove('hidden')
    document.querySelector('.reportofficerdropdownicon').classList.add('rotate')
    let val = event.target.value
    let data = allCitizens.filter((cit) => cit.name.toLowerCase().includes(val.toLowerCase()) || cit.id.toLowerCase().includes(val.toLowerCase()))
    pushEvidenceDropData(data, '.reportofficerdropdowncontent')
})
// DROP DOWN FUNCTION FOR ADD REPORT VEHICLE
const toggleReportVehicleDropDown = () => {
    document.querySelector('.reportvehiclesearchpop').classList.toggle('elementhidden')
    document.querySelector('.reportvehicledropdowncontent').innerHTML = ""
    document.querySelector('#reportvehiclename').value = ""
    if (document.getElementsByName('reportvehiclename')[0].placeholder === "Enter name for search"){
        document.getElementsByName('reportvehiclename')[0].placeholder = "Choose profile";
    } else {
        document.getElementsByName('reportvehiclename')[0].placeholder = "Enter name for search";
    }
    document.querySelector('.reportvehicledropdowncontent').classList.toggle('hidden')
    document.querySelector('.reportvehicledropdownicon').classList.toggle('rotate')
    pushEvidenceDropData(allVehicles, '.reportvehicledropdowncontent');
}
// SEARCH NEW REPORT VEHICLE DROPDOWN LIST
document.querySelector('#reportvehiclename').addEventListener('input', (event) => {
    document.querySelector('.reportvehiclesearchpop').classList.remove('elementhidden')
    document.querySelector('.reportvehicledropdowncontent').classList.remove('hidden')
    document.querySelector('.reportvehicledropdownicon').classList.add('rotate')
    let val = event.target.value
    let data = allVehicles.filter((cit) => cit.name.toLowerCase().includes(val.toLowerCase()) || cit.id.toLowerCase().includes(val.toLowerCase()))
    pushEvidenceDropData(data, '.reportvehicledropdowncontent')
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
    if (minracersvalue === 0) {
        MINracersvalue.textContent = minracersvalue;
    } else {
        minracersvalue -= 1
        MINracersvalue.textContent = minracersvalue;
    }
})
increaseMINracers.addEventListener('click', () => {
    if (minracersvalue === 100) {
        MINracersvalue.textContent = minracersvalue;
    } else {
        minracersvalue += 1
        MINracersvalue.textContent = minracersvalue;
    }
})

decreaseMAXracers.addEventListener('click', () => {
    if (maxracersvalue === 0) {
        MINracersvalue.textContent = maxracersvalue;
    } else {
        maxracersvalue -= 1
        MAXracersvalue.textContent = maxracersvalue;
    }
})
increaseMAXracers.addEventListener('click', () => {
    if (maxracersvalue === 100) {
        MAXracersvalue.textContent = maxracersvalue;
    } else {
        maxracersvalue += 1
        MAXracersvalue.textContent = maxracersvalue;
    }
})

decreaseLaps.addEventListener('click', () => {
    if (lapsvalue === 0) {
        Lapsvalue.textContent = lapsvalue;
    } else {
        lapsvalue -= 1
        Lapsvalue.textContent = lapsvalue;
    }
})
increaseLaps.addEventListener('click', () => {
    if (lapsvalue === 100) {
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
    if (minracersvaluetwo === 0) {
        MINracersvaluetwo.textContent = minracersvaluetwo;
    } else {
        minracersvaluetwo -= 1
        MINracersvaluetwo.textContent = minracersvaluetwo;
    }
})
increaseMINracerstwo.addEventListener('click', () => {
    if (minracersvaluetwo === 100) {
        MINracersvaluetwo.textContent = minracersvaluetwo;
    } else {
        minracersvaluetwo += 1
        MINracersvaluetwo.textContent = minracersvaluetwo;
    }
})

decreaseMAXracerstwo.addEventListener('click', () => {
    if (maxracersvaluetwo === 0) {
        MINracersvaluetwo.textContent = maxracersvaluetwo;
    } else {
        maxracersvaluetwo -= 1
        MAXracersvaluetwo.textContent = maxracersvaluetwo;
    }
})
increaseMAXracerstwo.addEventListener('click', () => {
    if (maxracersvaluetwo === 100) {
        MAXracersvaluetwo.textContent = maxracersvaluetwo;
    } else {
        maxracersvaluetwo += 1
        MAXracersvaluetwo.textContent = maxracersvaluetwo;
    }
})

decreaseLapstwo.addEventListener('click', () => {
    if (lapsvaluetwo === 0) {
        Lapsvaluetwo.textContent = lapsvaluetwo;
    } else {
        lapsvaluetwo -= 1
        Lapsvaluetwo.textContent = lapsvaluetwo;
    }
})
increaseLapstwo.addEventListener('click', () => {
    if (lapsvaluetwo === 100) {
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
    if (content === 'ON') {
        toggleOnOffone.textContent = "OFF";
        toggleOnOffone.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOffone.textContent = "ON";
        toggleOnOffone.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOfftwo.addEventListener('click', () => {
    let content = toggleOnOfftwo.textContent
    if (content === 'ON') {
        toggleOnOfftwo.textContent = "OFF";
        toggleOnOfftwo.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOfftwo.textContent = "ON";
        toggleOnOfftwo.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOffthree.addEventListener('click', () => {
    let content = toggleOnOffthree.textContent
    if (content === 'ON') {
        toggleOnOffthree.textContent = "OFF";
        toggleOnOffthree.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOffthree.textContent = "ON";
        toggleOnOffthree.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOfffour.addEventListener('click', () => {
    let content = toggleOnOfffour.textContent
    if (content === 'ON') {
        toggleOnOfffour.textContent = "OFF";
        toggleOnOfffour.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOfffour.textContent = "ON";
        toggleOnOfffour.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOfffive.addEventListener('click', () => {
    let content = toggleOnOfffive.textContent
    if (content === 'ON') {
        toggleOnOfffive.textContent = "OFF";
        toggleOnOfffive.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOfffive.textContent = "ON";
        toggleOnOfffive.className = "greenbutton pointer toggleOnOff"
    }
})
toggleOnOffzero.addEventListener('click', () => {
    let content = toggleOnOffzero.textContent
    if (content === 'ON') {
        toggleOnOffzero.textContent = "OFF";
        toggleOnOffzero.className = "redbutton pointer toggleOnOff"
    } else {
        toggleOnOffzero.textContent = "ON";
        toggleOnOffzero.className = "greenbutton pointer toggleOnOff"
    }
})