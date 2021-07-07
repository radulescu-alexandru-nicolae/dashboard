const alerta = document.querySelector('.alerta');
const trafic = document.querySelector('.trafic');
const traficHeader = trafic.querySelector('.traficHeader');
const butoaneTrafic = document.querySelector('.butoaneTrafic');
alerta.addEventListener('click', (e) => {
    alerta.style.marginLeft = "0";
    alerta.style.transform = "translateX(-100%)";

})
traficHeader.addEventListener('click', (e) => {

    if (e.target.tagName = "A") {
        e.target.style.background = " rgb(9, 232, 121)"
        e.target.style.color = "white";
        disableButtonae(e.target.innerHTML);
    }

})

function disableButtonae(element) {
    for (let i = 0; i < butoaneTrafic.children.length; i++) {
        if (butoaneTrafic.children[i].innerHTML !== element) {
            butoaneTrafic.children[i].style.background = "unset";
            butoaneTrafic.children[i].style.color = "black";
        }
    }
}



let trafficCanvas = document.getElementsByClassName("traffic-chart");

let trafficData = {

    labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31"
    ],

    datasets: [

        {
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: "rgba(116,119,191,.3)",
            borderWith: 1,
            fill: true

        },
    ],
};




let trafficOptions = {

    plugins: {
        aspectRatio: 2.5,

        animation: {
            duratiom: 0,
        },
        scales: {

            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }, ],
        },
        legend: {
            display: false,
        },

    }
};



let trafficChart = new Chart(
    trafficCanvas, {
        type: "line",
        data: trafficData,
        options: trafficOptions,
    }
);


traficHeader.addEventListener('click', (e) => {
    trafficChart.destroy();

    if (e.target.tagName = "A") {
        if (e.target.innerHTML === "Daily") {
            trafficData = {

                labels: [
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat"
                ],

                datasets: [

                    {
                        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
                        backgroundColor: "rgba(116,119,191,.3)",
                        borderWith: 1,
                        fill: true

                    },
                ],
            };

            trafficChart = new Chart(
                trafficCanvas, {
                    type: "line",
                    data: trafficData,
                    options: trafficOptions,
                }
            );
        } else if (e.target.innerHTML === "Hourly") {
            trafficData = {

                labels: [
                    "08-10",
                    "10:12",
                    "12:14",
                    "14:16",
                    "16:18",
                    "18:20",
                    "20:22",
                    "22:24",
                ],

                datasets: [

                    {
                        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850],
                        backgroundColor: "rgba(116,119,191,.3)",
                        borderWith: 1,
                        fill: true

                    },
                ],
            };
            trafficChart = new Chart(
                trafficCanvas, {
                    type: "line",
                    data: trafficData,
                    options: trafficOptions,
                }
            );
        } else if (e.target.innerHTML === "Monthly") {
            trafficData = {
                labels: [
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC",
                ],
                datasets: [

                    {
                        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 3200],
                        backgroundColor: "rgba(116,119,191,.3)",
                        borderWith: 1,
                        fill: true

                    },
                ],
            };
            trafficChart = new Chart(
                trafficCanvas, {
                    type: "line",
                    data: trafficData,
                    options: trafficOptions,
                }
            );
        } else if (e.target.innerHTML === "Weekly") {
            let trafficData = {

                labels: [
                    "16-22",
                    "23-29",
                    "30-5",
                    "6-12",
                    "13-19",
                    "20-26",
                    "27-3",
                    "4-10",
                    "11-17",
                    "18-24",
                    "25-31"
                ],

                datasets: [

                    {
                        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
                        backgroundColor: "rgba(116,119,191,.3)",
                        borderWith: 1,
                        fill: true

                    },
                ],
            };


            trafficChart = new Chart(
                trafficCanvas, {
                    type: "line",
                    data: trafficData,
                    options: trafficOptions,
                }
            );
        }

    }

})


let dailyTraffic = document.querySelector(".daily-chart");
let trafficDataDayliChart = {

    labels: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S",
    ],

    datasets: [

        {
            data: [50, 100, 150, 100, 250, 200, 100],
            backgroundColor: "rgb(75, 79, 191)",
            borderWith: 1,
            fill: true

        },
    ],
};




let trafficOptionsDaily = {

    plugins: {
        aspectRatio: 2.5,

        animation: {
            duratiom: 0,
        },
        scales: {

            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }, ],
        },
        legend: {
            display: false,
        },

    }
};
let trafficDaily = new Chart(
    dailyTraffic, {
        type: "bar",
        data: trafficDataDayliChart,
        options: trafficOptionsDaily,
    }
);

let mobile = document.querySelector('.mobile-chart');
let colors = ["rgb(75, 79, 191)", "rgb(1, 81, 112)", "rgb(27, 128, 74)"]




//mobile users

let mobileData = {

    labels: ["Desktop", "Tablet", "Phones", ],

    datasets: [

        {
            label: "# of Users",
            data: [2000, 550, 500],
            borderWith: 0,
            backgroundColor: colors,
        },
    ],
};




let mobileOptions = {

    plugins: {
        legend: {
            position: "right",
            labels: {
                boxWidth: 20,
                fontStyle: "bold",
            },
        },
    }
};



let mobileChart = new Chart(
    mobile, {
        type: "doughnut",
        data: mobileData,
        options: mobileOptions
    }
);


let selectOptionEmail = document.querySelector('.select');
let selectOptionProfile = document.querySelectorAll('.select')[1];
let settings = document.querySelector('.settings');
let buttonEmail = selectOptionEmail.querySelector('button');
let buttonProfile = selectOptionProfile.querySelector('button');
buttonProfile.addEventListener('click', (e) => {
    let afterElement = document.querySelectorAll('.select')[1].style;
    let off = selectOptionProfile.querySelector('.OFF');
    let on = selectOptionProfile.querySelector('.ON');
    if (on.style.display !== "none") {
        off.style.display = "unset";
        buttonProfile.style.background = "gray";
        on.style.display = "none";
        afterElement.setProperty('--translate', 'translateX(-110%)');
        buttonProfile.style.justifyContent = "flex-end";

    } else if (on.style.display === "none") {
        off.style.display = "none";
        buttonProfile.style.background = "rgb(75, 79, 191)";
        on.style.display = "unset";
        afterElement.setProperty('--translate', 'translateX(0)');
        buttonProfile.style.justifyContent = "flex-start";
    }
})
buttonEmail.addEventListener('click', (e) => {
    let afterElement = document.querySelector('.select').style;
    let off = selectOptionEmail.querySelector('.OFF');
    let on = selectOptionEmail.querySelector('.ON');
    if (on.style.display !== "none") {
        off.style.display = "unset";
        buttonEmail.style.background = "gray";
        on.style.display = "none";
        afterElement.setProperty('--translate', 'translateX(-110%)');
        buttonEmail.style.justifyContent = "flex-end";

    } else if (on.style.display === "none") {
        off.style.display = "none";
        buttonEmail.style.background = "rgb(75, 79, 191)";
        on.style.display = "unset";
        afterElement.setProperty('--translate', 'translateX(0)');
        buttonEmail.style.justifyContent = "flex-start";
    }


})

let firstUl = document.querySelector('ul');
console.log(firstUl);
let containerProfile = document.querySelector('.containerProfile');
let clopotel = document.querySelector('svg');
let li = firstUl.children;
console.log(li);
for (let i = 0; i < li.length; i++) {
    console.log(li[i]);
}
firstUl.addEventListener('click', (e) => {
    if (e.target.tagName = "LI") {
        if (e.target.className = "exit") {
            let aux = e.target.parentNode.parentNode;
            aux.style.transform = "translateY(-100%)";
            aux.style.zIndex = "-100";
            aux.style.opacity = "0";
        }
    }
})

clopotel.addEventListener('click', (e) => {
    if (firstUl.style.display === "none") {
        firstUl.style.display = "unset";
        firstUl.style.transform = "translateY(-2px)";
    } else {
        firstUl.style.display = "none";
    }
})