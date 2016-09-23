/*jshint curly: true, asi: false, funcscope: false*//*globals $:false *//*globals console:false */
$(function() {
    "use strict";
    $('#search').on('click', function () {
        var searchTerm = $('#searchTerm').val();

        var url = "https://ru.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
        $.ajax({
            url: url,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            success: function (data, status, jqXHR) {
                $("#output").html();
                for ( var i = data[1].length - 1; i >= 0; --i ) {
                    $('#output').prepend("<div class='well'><div><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                }
            }
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
    });

});


// Second part of task   Create a Human Class

function Human() {
    this.name = [
        'Slava', 'Dima'
    ];
    this.age = [
        26, 18
    ];
    this.sex = 'male';
    this.height = 180;
    this.weight =100;
}

function Worker() {
    this.workPlace = 'factory';
    this.salary = 500;
    this.work = function() {
        console.log('Work on the ' + this.workPlace + '!!!');
    };
}
Worker.prototype = new Human();
var newWorker = new Worker();
console.log('Worker name', newWorker.name[0]);
console.log('Worker age', newWorker.age[0]);
newWorker.work();

function Student() {
    this.studyPlace = 'DTUZT';
    this.stipend = 200;
    this.watchSerials = function() {
        console.log('Skip your class in ' + this.studyPlace + ' and watch new season');
    };
}
Student.prototype = new Human();
var newStudent = new Student();
console.log('Student name', newStudent.name[1]);
console.log('Student height', newStudent.height);
newStudent.watchSerials();
