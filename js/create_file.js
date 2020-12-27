var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    // sapceUI buttons
    $scope.btn = btn;
    $scope.btn_primary = btn_primary;
    $scope.btn_secondary = btn_secondary;
    $scope.btn_light = btn_light;
    $scope.btn_dark = btn_dark;
    $scope.btn_success = btn_success;
    $scope.btn_warning = btn_warning;
    $scope.btn_pri_grad = btn_pri_grad;
    $scope.btn_sec_grad = btn_sec_grad;
});

function createFile() {
    var fileName = "buttons.css";
    var styleLink = "is-link";
    const data = [...document.querySelectorAll('.inp:checked')].map(e => e.value);
    var file = new File(data, fileName, { type: "text/css" });
    document.getElementById("createFileBtn").innerHTML = "<a class=" + styleLink + " href = " + URL.createObjectURL(file) + " download=" + file.name + ">Download " + file.name + "</a>";
}