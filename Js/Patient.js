var app = angular.module('app', []);
app.controller('PatientResult', function ($scope) {
    $scope.items = [
            { ID: "1", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
            { ID: "2", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
            { ID: "3", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
            { ID: "4", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
            { ID: "5", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
            { ID: "6", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
            { ID: "7", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
            { ID: "8", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
            { ID: "9", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" }
    //            { ID: "10", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "11", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "12", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "13", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "14", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "15", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "16", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "17", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "18", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "19", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "20", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "21", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "22", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "23", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "24", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "25", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "26", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "27", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "28", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "29", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" },
    //            { ID: "30", FirstName: "John1", LastName: "Smith", DateOfBirth: "06/01/1984", Sex: "Male", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ" }
        ];
});

