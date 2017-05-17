module = angular.module('app', []);

module.controller('NewUserController', function ($scope) {
    $scope.AdminLogin = function () {
        if ($scope.userForm.$valid) {
            window.location.href = 'UI/Clinic/MyClinics.html';
            $scope.reset();
        } else {
            BootstrapDialog.show({
                title: 'Validation',
                message: 'There are invalid fields.',
                buttons: [{
                    label: 'Ok',
                    action: function (dialogItself) {
                        dialogItself.close();
                    }

                }]
            });
        }
    };

    $scope.PatientLogin = function () {
        if ($scope.userForm.$valid) {
            window.location.href = 'UI/Patient/PatientDashboard.html';
            $scope.reset();
        } else {
            BootstrapDialog.show({
                title: 'Validation',
                message: 'There are invalid fields.',
                buttons: [{
                    label: 'Ok',
                    action: function (dialogItself) {
                        dialogItself.close();
                    }

                }]
            });
        }
    };

    $scope.DoctorLogin = function () {
        if ($scope.userForm.$valid) {
            window.location.href = 'UI/Doctor/DoctorDashboard.html';
            $scope.reset();
        } else {
            BootstrapDialog.show({
                title: 'Validation',
                message: 'There are invalid fields.',
                buttons: [{
                    label: 'Ok',
                    action: function (dialogItself) {
                        dialogItself.close();
                    }

                }]
            });
        }
    };


    $scope.NurseAdminLogin = function () {
        if ($scope.userForm.$valid) {
            window.location.href = 'UI/Doctor/DoctorClinicDetails.html';
            $scope.reset();
        } else {
            BootstrapDialog.show({
                title: 'Validation',
                message: 'There are invalid fields.',
                buttons: [{
                    label: 'Ok',
                    action: function (dialogItself) {
                        dialogItself.close();
                    }

                }]
            });
        }
    };





    $scope.reset = function () {
        $scope.user = { password: '', email: '' };
    }
});