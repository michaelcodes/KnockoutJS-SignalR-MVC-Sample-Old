var toons = toons || {};

toons.viewModel = function (data) {
    ko.mapping.fromJS(data, {}, this);
    var self = this;

    
    self.isFirstNameFocused = ko.observable(true);

    self.fullName = ko.computed(function () {
        return this.firstName() + ' ' + this.lastName();
    }, self);

    self.isFullNameVisible = ko.computed(function () {
        return this.firstName() || this.lastName();
    }, self);

    self.addToon = function () {
        self.toonNames.push({ toonName: self.fullName() });

        self.firstName('');
        self.lastName('');
        self.isFirstNameFocused(true);
    };
};

toons.Get = (function (url, success) {
    $.ajax({
        type: "GET",
        cache: false,
        url: url,
        dataType: "json",
        timeout: 30000,
        success: success,
        error: function (request, status, err) {
            alert("Data Error");
        }
    });
});

$(function () {
    toons.Get("/home/GetInitialData/", function (data) {
        var mapping = {
            create: function (options) {
                return new toons.viewModel(options.data);
            }
        };
        toons.vm = ko.mapping.fromJS(data, mapping)
        
        ko.applyBindings(toons.vm);
    });
});

