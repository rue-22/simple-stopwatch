if (e.target.classList.contains("fa-play")) {
        console.log("true");
        e.target.classList.remove("fa-play");
        e.target.clasList.add("fa-pause");
    } else {
        console.log("false");
        e.target.classList.remove("fa-pause");
        e.target.classList.add("fa-play");
    }