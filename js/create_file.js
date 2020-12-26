
var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.btn = btn;
    $scope.btn_primary = btn_primary;
    $scope.btn_secondary = btn_secondary;
    $scope.btn_light = btn_light;
    $scope.btn_dark = btn_dark;
    $scope.btn_success = btn_success;
    $scope.btn_warning = btn_warning;
});

function createFile() {
    var fileName = "buttons.css";
    var linkStyle = "link"
    const data = [...document.querySelectorAll('.inp:checked')].map(e => e.value);
    var file = new File(data, fileName, { type: "text/css" });
    document.getElementById("createFileBtn").innerHTML = "<br><a class=" + linkStyle + " href=" + URL.createObjectURL(file) + " download=" + file.name + ">Download " + file.name + "</a>";
}
