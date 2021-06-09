// グラフのタイプとか値とかを設定
let html = {
    type: "pie",
    data: {
        datasets: [{
            data: [60,40],
            backgroundColor: [
                "#FFF7C3",
                "#000"
            ]
        }],
    },
    options: {
        responsive: true
    }
};

// チャートの生成
window.addEventListener("load", function() {
    let ctx = document.getElementById("html").getContext("2d");
    myChart = new Chart(ctx, html);
}, false);

let js = {
    type: "pie",
    data: {
        datasets: [{
            data: [20,80],
            backgroundColor: [
                "#FFF7C3",
                "#000"
            ]
        }],
    },
    options: {
        responsive: true
    }
};

// チャートの生成
window.addEventListener("load", function() {
    let ctx = document.getElementById("js").getContext("2d");
    myChart = new Chart(ctx, js);
}, false);

let python = {
    type: "pie",
    data: {
        datasets: [{
            data: [30,70],
            backgroundColor: [
                "#FFF7C3",
                "#000"
            ]
        }],
    },
    options: {
        responsive: true
    }
};

// チャートの生成
window.addEventListener("load", function() {
    let ctx = document.getElementById("Python").getContext("2d");
    myChart = new Chart(ctx, python);
}, false);

let photoshop = {
    type: "pie",
    data: {
        datasets: [{
            data: [45,55],
            backgroundColor: [
                "#FFF7C3",
                "#000"
            ]
        }],
    },
    options: {
        responsive: true
    }
};

// チャートの生成
window.addEventListener("load", function() {
    let ctx = document.getElementById("ps").getContext("2d");
    myChart = new Chart(ctx, photoshop);
}, false);