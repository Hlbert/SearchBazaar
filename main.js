window.onload = function() {

    // insert search engine button
    var html = '';
    engines.forEach(item => {
        html += '<div class="category">';
        item.entries.forEach(engine => {
            html += '<button class="engine">' + engine.name + '</button>';
        });
        html += '</div>';
    });
    document.getElementById('panel').innerHTML = html;

    // listen click event
    document.querySelectorAll(".engine").forEach(dom => {
        dom.addEventListener("click", function(e) {
            // toggle selected state
            var target = e.target;
            if (target.classList.contains('selected')) {
                target.classList.remove('selected');
            } else {
                target.classList.add('selected');
            }

        }, false);
    });

}

var search = function() {
    var keyword = document.getElementById("keyword").value;

    var selectedEngines = [];
    var selecteds = document.querySelectorAll(".engine.selected");
    selecteds.forEach(item => {
        selectedEngines.push(item.innerHTML);
    });

    if (!selectedEngines.length) {
        selectedEngines.push("百度");
    }

    searchWithEngines(keyword, selectedEngines);
}

// // listen button click
// document.getElementById("search").addEventListener("click", search, false);

// listen enter key down
document.onkeydown = function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        search();
    }
}