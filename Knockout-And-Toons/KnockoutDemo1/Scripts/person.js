/// <reference path="_references.js" />

var my = my || {};

my.Post = (function (url, data, success) {
    $.ajax({
        type: "POST",
        cache: false,
        url: url,
        data: data,
        dataType: "json",
        success: success,
        error: function (request, status, err) {
            alert("Data Error");
        }
    });
});

var viewModel = (function () {
    var self = this;

    self.firstName = ko.observable("");
    self.lastName = ko.observable("");
    self.toons = ko.observableArray();
    self.isFreshStart = ko.observable(true);

    self.fullName = ko.computed(function () {
        return self.firstName() + ' ' + self.lastName();
    }, self);

    self.isFullNameVisible = ko.computed(function () {
        return self.firstName() || self.lastName();
    }, self);

    self.addToon = (function () {

        self.toons.push({ fullName: self.fullName() });
        self.firstName('');
        self.lastName('');
        self.isFreshStart(true);

        
    });
});

my.vm = new viewModel();

$(function () {
    ko.applyBindings(my.vm);
});