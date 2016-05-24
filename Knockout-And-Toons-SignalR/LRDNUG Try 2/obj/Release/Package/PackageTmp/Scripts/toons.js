var toons = toons || {};

toons.viewModel = (function () {
        var self = this;

        self.firstName = ko.observable("");
        self.lastName = ko.observable("");
        self.toons = ko.observableArray();
        self.isFirstNameFocused = ko.observable(true);

        self.fullName = ko.computed(function () {
            return self.firstName() + ' ' + self.lastName();
        }, self);

        self.hasValue = ko.computed(function () {
            return self.firstName() || self.lastName();
        }, self);

        self.addToon = (function () {
            $.connection.mainHub.addToon({ toonName: self.fullName() });
            self.firstName('');
            self.lastName('');
            self.isFirstNameFocused(true);
        });
    });

toons.vm = new toons.viewModel();

$.connection.mainHub.addToonToList = (function (toon) {
    toons.vm.toons.push(toon);
});

$(function () {
    $.connection.hub.start()
         .fail(function () { alert("Could not Connect!"); });

    ko.applyBindings(toons.vm);
});


