'use strict';

// JSON data
var data = [

    {
    "id":1,
    "firstName":"Dobromir",
    "lastName":"Sprytny",
    "dateOfBirth":"1.7.1990 11:35",
    "function":"kamerdyner",
    "experience":4
    },

    {
    "id":4,
    "firstName":"Helga",
    "lastName":"Uczynna",
    "dateOfBirth":"4.02.1976 14:37",
    "function":"pokojówka",
    "experience":12
    },

    {
    "id":2,
    "firstName":"Marianna",
    "lastName":"Prostota",
    "dateOfBirth":"28.10.1976 2:15",
    "function":"pokojówka",
    "experience":12
    },

    {
    "id":3,
    "firstName":"Walerian",
    "lastName":"Szybki",
    "dateOfBirth":"03.01.1986 23:10",
    "function":"kamerdyner",
    "experience":10
    },

    {
    "id":5,
    "firstName":"Krzysztof",
    "lastName":"Klucznik",
    "dateOfBirth":"03.01.1986 23:10",
    "function":"lokaj",
    "experience":3
    },

    {
    "id":6,
    "firstName":"Konstancja",
    "lastName":"Urodziwa",
    "dateOfBirth":"29.02.1936 13:33",
    "function":"kucharka",
    "experience":8
    },

    {
    "id":7,
    "firstName":"Kornelia",
    "lastName":"Wstydliwa",
    "dateOfBirth":"19.02.1973 23:55",
    "function":"pokojówka",
    "experience":8
    },

    {
    "id":8,
    "firstName":"Władysława",
    "lastName":"Dobrotliwa",
    "dateOfBirth":"29.12.1977 18:25",
    "function":"pokojówka",
    "experience":8
    },

    {
    "id":9,
    "firstName":"Mirosław",
    "lastName":"Podstępny",
    "dateOfBirth":"09.12.1972 17:35",
    "function":"kamerdyner",
    "experience":8
    },

    {
    "id":10,
    "firstName":"Walerian",
    "lastName":"Drażliwy",
    "dateOfBirth":"29.03.1980 15:36",
    "function":"lokaj",
    "experience":8
    },

    {
    "id":11,
    "firstName":"Katarzyna",
    "lastName":"Krasna",
    "dateOfBirth":"05.05.1983 01:15",
    "function":"pokojówka",
    "experience":8
    },

    {

    "id":12,
    "firstName":"Urszula",
    "lastName":"Markotna",
    "dateOfBirth":"06.04.1981 12:35",
    "function":"pokojówka",
    "experience":8

    }

];

alert("Witaj, Pani!\n\nZgodnie z Twym życzeniem, z uwagi na nieustanny rozrost Twojego dworu, nasi specjaliści przygotowali dla Ciebie skromną aplikację pozwalającą w sprawny sposób przeglądać dane Twojej służby. Celem aplikacji jest wyświetlanie, sortowanie (nagłówki w tabeli, o Pani!) oraz filtrowanie danych na podstawie wyników wyszukiwania. Nasi specjaliści IT okazali się zmyślni w doborze bibliotek i na wypadek gdybyś używała przeglądarki internetowej równie wiekowej* co Twa posiadłość, aplikacja powinna mimo to działać!\n\n*Pamiętaj wszakże, o Pani, by to zmienić.");

// Global variables
var $btnSearch = $("#js-search-btn"),
    $btnSearchByDateOfBirth = $("#js-button-search-date"),
    $table = $("#js-table"),
    $tblBody = $("#js-table-body"),
    $tblHeaders = $(".table-headers"),
    $btnShowData = $("#js-showData"),
    $btnShowNext = $(".btn-show-next"),
    $btnShowNext1 = $("#js-show-next-1"),
    $btnShowNext2 = $("#js-show-next-2"),
    $btnShowNext3 = $("#js-show-next-3"),
    $btnShowNexResults1 = $("#js-show-next-results-1"),
    $btnShowNexResults2 = $("#js-show-next-results-2");

// Functions
function drawFirstTable() {
    var $tblTr = $("#js-table tr");
    var $tblHeaders = $(".table-headers-container");
    $tblTr.not($tblHeaders).remove();
    for(var i=0; i<5; i++) {
        var $td0 = "<td>" + data[i]["id"] + "</td>";
        var $td1 = "<td>" + data[i]["firstName"] + "</td>";
        var $td2 = "<td>" + data[i]["lastName"] + "</td>";
        var $td3 = "<td>" + data[i]["dateOfBirth"] + "</td>";
        var $td4 = "<td>" + data[i]["function"] + "</td>";
        var $td5 = "<td>" + data[i]["experience"] + "</td>";
        $table.append("<tr>" + $td0 + $td1 + $td2 + $td3 + $td4 + $td5 + "</tr");
    }
    showInitialButtons();
    deleteHeaderClasses();
}

function search(){
    switch ($("#js-search-select").val()) {
        case "first-name":
            filterByFirstName();
            break;
        case "last-name":
            filterByLastName();
            break;
        case "function":
            filterByFunction();
            break;
        case "experience":
            filterByExperience();
            break;
        default:
            break;
        }
};

function deleteHeaderClasses() {
    $(".table-headers").removeClass("ascending");
    $(".table-headers").removeClass("descending");
}

$("input:text").on("click", function(){
    $("input[type=text]").val("");
});

function drawSecondTable() {
    var $tblTr = $("#js-table tr");
    var $tblHeaders = $(".table-headers-container");
    $tblTr.not($tblHeaders).remove();
    for(var i=5; i<10; i++) {
        var td0 = "<td>" + data[i]["id"] + "</td>";
        var td1 = "<td>" + data[i]["firstName"] + "</td>";
        var td2 = "<td>" + data[i]["lastName"] + "</td>";
        var td3 = "<td>" + data[i]["dateOfBirth"] + "</td>";
        var td4 = "<td>" + data[i]["function"] + "</td>";
        var td5 = "<td>" + data[i]["experience"] + "</td>";
        $tblBody.append("<tr>" + td0 + td1 + td2 + td3 + td4 + td5 + "</tr");
     }
     deleteHeaderClasses();
}

function showInitialButtons() {
    $btnShowNext.addClass("active");
    $btnShowNexResults1.removeClass("active").addClass("inactive");
    $btnShowNexResults2.removeClass("active").addClass("inactive");
}

function deleteButtons() {
    if($btnShowNext1.hasClass("active") || 
        ($btnShowNext2.hasClass("active")) || 
        ($btnShowNext3.hasClass("active"))) {
            $($btnShowNext1.removeClass("active").addClass("inactive"));
            $($btnShowNext2.removeClass("active").addClass("inactive"));
            $($btnShowNext3.removeClass("active").addClass("inactive"));
    }
    if($btnShowNexResults1.hasClass("active") ||
        $btnShowNexResults2.hasClass("active")) {
        $btnShowNexResults1.removeClass("active").addClass("inactive");
        $btnShowNexResults2.removeClass("active").addClass("inactive");
    }
}

function drawThirdTable() {
    var $tblTr = $("#js-table tr");
    var $tblHeaders = $(".table-headers-container");
    $tblTr.not($tblHeaders).remove();
    for(var i=10; i<data.length; i++) {
        var td0 = "<td>" + data[i]["id"] + "</td>";
        var td1 = "<td>" + data[i]["firstName"] + "</td>";
        var td2 = "<td>" + data[i]["lastName"] + "</td>";
        var td3 = "<td>" + data[i]["dateOfBirth"] + "</td>";
        var td4 = "<td>" + data[i]["function"] + "</td>";
        var td5 = "<td>" + data[i]["experience"] + "</td>";
        $tblBody.append("<tr>" + td0 + td1 + td2 + td3 + td4 + td5 + "</tr");
    }
    deleteHeaderClasses();
}

function toggleButtons() {
    if($btnShowNexResults1.hasClass("inactive") || $btnShowNexResults2.hasClass("inactive")) {
        $btnShowNexResults1.removeClass("inacctive").addClass("active");
        $btnShowNexResults2.removeClass("inactive").addClass("active");
    } else {
        return false;
    }
}


function filterByFirstName() {
    var $tblTr = $("#js-table tr");
    var $tblHeadersContainer = $(".table-headers-container");
    $tblTr.not($tblHeadersContainer).remove();
    var getInput = $("#js-search").val();
    jQuery.grep(data, function(obj) {
        if(obj.firstName === getInput) {
            var foundId = "<td>" + obj.id + "</td>";
            var foundFirstName = "<td>" + obj.firstName + "</td>";
            var foundLastName = "<td>" + obj.lastName + "</td>";
            var foundDateOfBirth = "<td>" + obj.dateOfBirth + "</td>";
            var foundFunction = "<td>" + obj.function + "</td>" ;
            var foundExperience = "<td>" + obj.experience + "</td>";
            $tblBody.append("<tr>" + foundId + foundFirstName + foundLastName + foundDateOfBirth + foundFunction + foundExperience + "</tr>");
        }
    });
    deleteButtons();
    deleteHeaderClasses();
};

function filterByLastName() {
    var $tblTr = $("#js-table tr");
    var $tblHeadersContainer = $(".table-headers-container");
    $tblTr.not($tblHeadersContainer).remove();
    var getInput = $("#js-search").val();
    jQuery.grep(data, function(obj) {
        if(obj.lastName === getInput) {
            var foundId = "<td>" + obj.id + "</td>";
            var foundFirstName = "<td>" + obj.firstName + "</td>";
            var foundLastName = "<td>" + obj.lastName + "</td>";
            var foundDateOfBirth = "<td>" + obj.dateOfBirth + "</td>";
            var foundFunction = "<td>" + obj.function + "</td>" ;
            var foundExperience = "<td>" + obj.experience + "</td>";
            $tblBody.append("<tr>" + foundId + foundFirstName + foundLastName + foundDateOfBirth + foundFunction + foundExperience + "</tr>");
            $btnShowNext.removeClass("active").addClass("inactive");
        }
    });
    deleteButtons();
    deleteHeaderClasses();
}

function filterById() {
    var $tblTr = $("#js-table tr");
    var $tblHeadersContainer = $(".table-headers-container");
    $tblTr.not($tblHeadersContainer).remove();
    var getInput = $("#js-search").val();
    jQuery.grep(data, function(obj) {
        if(obj.id == getInput) {
            var foundId = "<td>" + obj.id + "</td>";
            var foundFirstName = "<td>" + obj.firstName + "</td>";
            var foundLastName = "<td>" + obj.lastName + "</td>";
            var foundDateOfBirth = "<td>" + obj.dateOfBirth + "</td>";
            var foundFunction = "<td>" + obj.function + "</td>" ;
            var foundExperience = "<td>" + obj.experience + "</td>";
            $tblBody.append("<tr>" + foundId + foundFirstName + foundLastName + foundDateOfBirth + foundFunction + foundExperience + "</tr>");
            $btnShowNext.removeClass("active").addClass("inactive");
        }
    });
    deleteButtons();
    deleteHeaderClasses();
}

function checkRowsLength() {
    var $rows = $table.find("tr").not(".table-headers-container");
    if ($rows.length >= 6) {
        $rows.slice(0, 5).addClass("visible-results");
        $rows.slice(5).addClass("hidden-results");
        toggleButtons();
    } else { 
        deleteButtons();
    }
}

function filterByFunction() {
    var $tblTr = $("#js-table tr");
    var $tblHeadersContainer = $(".table-headers-container");
    $tblTr.not($tblHeadersContainer).remove();
    var getInput = $("#js-search").val();
        jQuery.grep(data, function(obj) {
            if(obj.function === getInput) {
                var foundId = "<td>" + obj.id + "</td>";
                var foundFirstName = "<td>" + obj.firstName + "</td>";
                var foundLastName = "<td>" + obj.lastName + "</td>";
                var foundDateOfBirth = "<td>" + obj.dateOfBirth + "</td>";
                var foundFunction = "<td>" + obj.function + "</td>" ;
                var foundExperience = "<td>" + obj.experience + "</td>";
                $tblBody.append("<tr>" + foundId + foundFirstName + foundLastName + foundDateOfBirth + foundFunction + foundExperience + "</tr>");
                var $rows = $("#js-table").find("tr").not(".table-headers");
            }
        });
    deleteButtons();
    checkRowsLength();
    deleteHeaderClasses();
};

function filterByExperience() {
    var $tblTr = $("#js-table tr");
    var $tblHeadersContainer = $(".table-headers-container");
    $tblTr.not($tblHeadersContainer).remove();
    var getInput = $("#js-search").val();
    jQuery.grep(data, function(obj) {
        if(obj.experience == getInput) {
            var foundId = "<td>" + obj.id + "</td>";
            var foundFirstName = "<td>" + obj.firstName + "</td>";
            var foundLastName = "<td>" + obj.lastName + "</td>";
            var foundDateOfBirth     = "<td>" + obj.dateOfBirth + "</td>";
            var foundFunction = "<td>" + obj.function + "</td>" ;
            var foundExperience = "<td>" + obj.experience + "</td>";
            $tblBody.append("<tr>" + foundId + foundFirstName + foundLastName + foundDateOfBirth + foundFunction + foundExperience + "</tr>");
            var $rows = $("#js-table").find("tr").not(".table-headers");
        };
    });
    deleteButtons();
    checkRowsLength();
    deleteHeaderClasses();
}

function filterByDateofBirth() {
    var $tblTr = $("#js-table tr");
    var $tblHeadersContainer = $(".table-headers-container");
    $tblTr.not($tblHeadersContainer).remove();
    var getInput = $(".form-control").val();
    jQuery.grep(data, function(obj) {
        if(obj.dateOfBirth === getInput) {
            var foundId = "<td>" + obj.id + "</td>";
            var foundFirstName = "<td>" + obj.firstName + "</td>";
            var foundLastName = "<td>" + obj.lastName + "</td>";
            var foundDateOfBirth = "<td>" + obj.dateOfBirth + "</td>";
            var foundFunction = "<td>" + obj.function + "</td>" ;
            var foundExperience = "<td>" + obj.experience + "</td>";
            $tblBody.append("<tr>" + foundId + foundFirstName + foundLastName + foundDateOfBirth + foundFunction + foundExperience + "</tr>");
        }
    });
    deleteButtons();
    deleteHeaderClasses();
}

function showRemainingResults() {
    var $tblTr = $("#js-table tr");
    var $tblHeadersContainer = $(".table-headers-container");
    deleteHeaderClasses();
    if (!$("tr").hasClass("visible-results")) {
        return false;
    } else {
        $(".hidden-results").removeClass("hidden-results");
        $(".visible-results").removeClass("visible-results").addClass("hidden-results");
    }
}

function showInitialResults() {
    var $tblTr = $("#js-table tr");
    var $tblHeadersContainer = $(".table-headers-container");
    var check = $tblTr.find("tr").hasClass("");
    deleteHeaderClasses();
    if ($("tr").hasClass("visible-results")) {
        return false;
    }
    else {
        $(".hidden-results").removeClass("hidden-results").addClass("visible-results");
        $tblTr.not($tblHeadersContainer).not(".visible-results").addClass("hidden-results");
    }
}

function sort() {
    var $rows = $tblBody.find("tr").toArray();  
    var $header = $(this);                  
    var $order = $header.data("sort");       
    var $column;                             
    if ($header.is(".ascending") || $header.is(".descending")) {  
        $header.toggleClass("ascending descending");  
        $tblBody.append($rows.reverse());                
    } else {                                                                  
        $header.addClass("ascending");
        $header.siblings().removeClass("ascending descending"); 
    if (compare.hasOwnProperty($order)) {  
        $column = $tblHeaders.index(this);         
        $rows.sort(function(a, b) {              
            a = $(a).find("td").eq($column).text(); 
            b = $(b).find("td").eq($column).text();
            return compare[$order](a, b);           
        });
        $tblBody.append($rows);
      }
    }
}

// Datepicker trigger
(function() {
    $("#datetimepicker2").datetimepicker({
        locale: "pl"
    });
})()


// Filtering
$btnSearch.on("click", search);
$btnShowNexResults1.on("click", showInitialResults);
$btnShowNexResults2.on("click", showRemainingResults);
$btnSearchByDateOfBirth.on("click", filterByDateofBirth);

// Draw tables
drawFirstTable();
$("#js-showData").on("click", drawFirstTable);
$btnShowNext1.on("click", drawFirstTable);
$btnShowNext2.on("click", drawSecondTable);
$btnShowNext3.on("click", drawThirdTable);

// Sorting
var compare = {
    name: function(a, b) {                  
        if (a < b) {                          
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }                                  
    },
    date: function(a, b) {                  
        a = new Date();
        b = new Date();
        return a-b;               
    },
    number: function(a, b) {
        return a-b;
    }
};

$tblHeaders.on("click", sort);