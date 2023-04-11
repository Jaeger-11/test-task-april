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
        id: 'id.155',
        status: 'pending approval'
    },
    {
        name: "James Bond",
        id: 'id.156',
        status: 'approval rejected'
    },
    {
        name: "Oliver Twist",
        id: 'id.157',
        status: 'approval rejected'
    },
    {
        name: "Idris Albak",
        id: 'id.158',
        status: 'approval rejected'
    },
    {
        name: "Stoney Christon",
        id: 'id.159',
        status: 'approval rejected'
    },
    {
        name: "Daniel Greals",
        id: 'id.160',
        status: 'pending approval'
    },
    {
        name: "Josh Kennedy",
        id: 'id.161',
        status: 'pending approval'
    },
    {
        name: "Jerry Sheamus",
        id: 'id.162',
        status: 'approval rejected'
    },
    {
        name: "Apollo Creed",
        id: 'id.163',
        status: 'pending approval'
    },
]
// ORDERS DATA
const ordersData = [
    {
        name: "John Oils",
        id: 'id.154',
        status: 'pending approval'
    },
]

const pushWarrant = (warrantData) => {
    warrantData.map((item) => {
        const {name, status, id} = item;
        var statusClass = 'blue'
        if (status !== "pending approval"){
            statusClass = 'red'
        }
        warrants.innerHTML += `
            <div class="warrant">
                <img src="/images/character.png" alt="profile-image" class="warrant-image">
                <div class="info-section">
                    <p>${name}</p>
                    <div class="information"> SOME INFORMATION <p class="dot"></p> SOME INFORMATION <p class="dot"></p> ${id} </div>
                    <section class="status-div">
                        <button class="${statusClass} funcBtns">${status}</button>
                        <img src="images/checkmark.png" alt="checkmark" class="pointer  mr approve">
                        <img src="images/cancel.png" alt="close" class="pointer reject">
                    </section>
                </div>
                <div class="days-left">IN 6 DAYS</div>
            </div>
        `
    })
}

const pushOrder = (ordersData) => {
    ordersData.map((item) => {
        const { name, id } = item;
        orders.innerHTML += `
        <div class="order">
            <img src="/images/character.png" alt="profile-image" class="order-image">
            <div class="info-section">
                <p>${name}</p>
                <div class="information"> SOME INFORMATION <p class="dot"></p> SOME INFORMATION <p class="dot"></p> ${id} </div>
                <button class="red funcBtns">WANTED</button>
            </div>
        </div>
    `
    })
}

pushWarrant(warrantsData);
pushOrder(ordersData);

warrantsearch.addEventListener('change', () => {

})

ordersearch.addEventListener('change', () => {

})


checkmarks.forEach((checkmark) => {
    checkmark.addEventListener('click', () => {

    })
})