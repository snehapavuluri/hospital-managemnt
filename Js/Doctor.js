var tagsData = [
  { id: 1, tag: 'Cardiology' },
  { id: 2, tag: 'Gastroenterology' },
  { id: 3, tag: 'Nephrology' }
];
function ctrlTags($scope) {
    $scope.items = tagsData;
};
angular.module('app', []).controller('ctrlTags', ['$scope', ctrlTags]);
var app = angular.module('app', []);
app.controller('AppCtrl', function ($scope) {
    $scope.reset = function () {
        $scope.user = { doctorname: "", city: "", state: "" };
    };
    $scope.reset();
});

app.controller('ResultCtrl', function ($scope) {
    $scope.items = [
            { ID: "1", DocName: "Pirie, Lynne", ClinicName: "Care Free Cosmetic Surgery", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ", AppointmentDateTime: "10/12/2015", EndTime: "10:30 AM" },
            { ID: "2", DocName: "Chan, Chiwai Eddy", ClinicName: "Orange County Pain Center", Address: "11190 Warner Ave. Ste. 308", City: "Fountain Valley", State: "CA", AppointmentDateTime: "10/27/2015", EndTime: "10:30 AM" },
            { ID: "3", DocName: "Dr. Kramer", ClinicName: "Tender Laser Care", Address: "9801 Anderson Mill Rd Ste 125", City: "Austin", State: "TX", AppointmentDateTime: "11/12/2015", EndTime: "10:30 AM" },
            { ID: "4", DocName: "Morello", ClinicName: "Cyril", Address: "8648 E. State Rd. 70", City: "Bradenton", State: "FL", AppointmentDateTime: "12/12/2015", EndTime: "10:30 AM" },
            { ID: "5", DocName: "Joseph", ClinicName: "Richard", Address: " 828", City: "Morven Court Naperville", State: "IL", AppointmentDateTime: "01/12/2015", EndTime: "10:30 AM" }
        ];
});

app.controller('UserCtrl', function ($scope) {
    $scope.items = [{ ID: "1", DocName: "Pirie, Lynne", ClinicName: "Care Free Cosmetic Surgery", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ", AppointmentDateTime: "Sep 27 2015 09:45 AM", EndTime: "09:45 AM"}];
});

app.controller('CurrentAppointmentsCtrl', function ($scope) {
    $scope.items = [
            { ID: "1", DocName: "Pirie, Lynne", ClinicName: "Care Free Cosmetic Surgery", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ", AppointmentDateTime: "10/12/2015", EndTime: "10:30 AM", Status: "Confirmed", Reason: "Some Reason" },
            { ID: "2", DocName: "Chan, Chiwai Eddy", ClinicName: "Orange County Pain Center", Address: "11190 Warner Ave. Ste. 308", City: "Fountain Valley", State: "CA", AppointmentDateTime: "10/27/2015", EndTime: "10:30 AM", Status: "Confirmed", Reason: "Some Reason" },
            { ID: "3", DocName: "Dr. Kramer", ClinicName: "Tender Laser Care", Address: "9801 Anderson Mill Rd Ste 125", City: "Austin", State: "TX", AppointmentDateTime: "11/12/2015", EndTime: "10:30 AM", Status: "Waitlisted", Reason: "Some Reason" },
            { ID: "4", DocName: "Morello", ClinicName: "Cyril", Address: "8648 E. State Rd. 70", City: "Bradenton", State: "FL", AppointmentDateTime: "12/12/2015", EndTime: "10:30 AM", Status: "Confirmed", Reason: "Some Reason" },
            { ID: "5", DocName: "Joseph", ClinicName: "Richard", Address: " 828", City: "Morven Court Naperville", State: "IL", AppointmentDateTime: "01/12/2015", EndTime: "10:30 AM", Status: "Waitlisted", Reason: "Some Reason" }
        ];
});

app.controller('AvailableAppointmentsCtrl', function ($scope) {
    $scope.items = [
            { ID: "1", DocName: "Pirie, Lynne", ClinicName: "Care Free Cosmetic Surgery", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ", AppointmentDateTime: "10/12/2015", EndTime: "10:30 AM" },
            { ID: "2", DocName: "Chan, Chiwai Eddy", ClinicName: "Orange County Pain Center", Address: "11190 Warner Ave. Ste. 308", City: "Fountain Valley", State: "CA", AppointmentDateTime: "10/27/2015", EndTime: "10:30 AM" },
            { ID: "3", DocName: "Dr. Kramer", ClinicName: "Tender Laser Care", Address: "9801 Anderson Mill Rd Ste 125", City: "Austin", State: "TX", AppointmentDateTime: "11/12/2015", EndTime: "10:30 AM" },
            { ID: "4", DocName: "Morello", ClinicName: "Cyril", Address: "8648 E. State Rd. 70", City: "Bradenton", State: "FL", AppointmentDateTime: "12/12/2015", EndTime: "10:30 AM" },
            { ID: "5", DocName: "Joseph", ClinicName: "Richard", Address: " 828", City: "Morven Court Naperville", State: "IL", AppointmentDateTime: "01/12/2015", EndTime: "10:30 AM" }
        ];
});

app.controller('AppointmentHistoryCtrl', function ($scope) {
    $scope.items = [
            { ID: "1", DocName: "Pirie, Lynne", ClinicName: "Care Free Cosmetic Surgery", Address: "711 E. Carefree Hwy. Ste. 208", City: "Phoenix", State: "AZ", AppointmentDateTime: "10/12/2015", EndTime: "10:30 AM", Status: "Confirmed", Reason: "Some Reason" },
            { ID: "2", DocName: "Chan, Chiwai Eddy", ClinicName: "Orange County Pain Center", Address: "11190 Warner Ave. Ste. 308", City: "Fountain Valley", State: "CA", AppointmentDateTime: "10/27/2015", EndTime: "10:30 AM", Status: "Confirmed", Reason: "Some Reason" },
            { ID: "3", DocName: "Dr. Kramer", ClinicName: "Tender Laser Care", Address: "9801 Anderson Mill Rd Ste 125", City: "Austin", State: "TX", AppointmentDateTime: "11/12/2015", EndTime: "10:30 AM", Status: "Waitlisted", Reason: "Some Reason" },
            { ID: "4", DocName: "Morello", ClinicName: "Cyril", Address: "8648 E. State Rd. 70", City: "Bradenton", State: "FL", AppointmentDateTime: "12/12/2015", EndTime: "10:30 AM", Status: "Confirmed", Reason: "Some Reason" },
            { ID: "5", DocName: "Joseph", ClinicName: "Richard", Address: " 828", City: "Morven Court Naperville", State: "IL", AppointmentDateTime: "01/12/2015", EndTime: "10:30 AM", Status: "Waitlisted", Reason: "Some Reason" }
        ];
});

app.controller('DoctorAppointments', function ($scope) {
    $scope.items = [
            { ID: "1", Date: "10/12/2015", Time: "10:30 AM", Status: "Confirmed", FirstName: "Some Name", LastName: "Some Name", Address: "711 E. Carefree Hwy. Ste. 208", City: "Omaha", State: "NE", Reason: "Some Reason Some Reason" },
            { ID: "2", Date: "10/12/2015", Time: "10:30 AM", Status: "Confirmed", FirstName: "Some Name", LastName: "Some Name", Address: "711 E. Carefree Hwy. Ste. 208", City: "Omaha", State: "NE", Reason: "Some Reason Some Reason" },
            { ID: "3", Date: "10/12/2015", Time: "10:30 AM", Status: "Waitlisted", FirstName: "Some Name", LastName: "Some Name", Address: "711 E. Carefree Hwy. Ste. 208", City: "Omaha", State: "NE", Reason: "Some Reason Some Reason" },
            { ID: "4", Date: "10/12/2015", Time: "10:30 AM", Status: "Confirmed", FirstName: "Some Name", LastName: "Some Name", Address: "711 E. Carefree Hwy. Ste. 208", City: "Omaha", State: "NE", Reason: "Some Reason Some Reason" },
            { ID: "5", Date: "10/12/2015", Time: "10:30 AM", Status: "Confirmed", FirstName: "Some Name", LastName: "Some Name", Address: "711 E. Carefree Hwy. Ste. 208", City: "Omaha", State: "NE", Reason: "Some Reason Some Reason" }
        ];
});

app.controller('Affiliations', function ($scope) {
    $scope.items = [
            { ID: "1", ClinicName: "Some Name", Adress: "123 abc st", City: "Omaha", State: "NE", Affiliation: "Alegent Health", AffiliatedHospitalAdress: "17220 W. Center St Omaha NE 68130", Status: "Active" },
            { ID: "2", ClinicName: "Some Name", Adress: "456 xyz st", City: "Omaha", State: "NE", Affiliation: "Children's Hospital", AffiliatedHospitalAdress: "8520 Dodge St Omaha NE 68154", Status: "Applied" }
        ];
});

app.controller('ApplyForNewClinic', function ($scope) {
    $scope.items = [
            { ID: "1", ClinicName: "Some Name", Adress: "10923 abc st", City: "Omaha", State: "NE", Affiliation: "Alegent Health" },
            { ID: "2", ClinicName: "Some Name", Adress: "456 xyz st", City: "Omaha", State: "NE", Affiliation: "Children's Hospital" },
            { ID: "1", ClinicName: "Some Name", Adress: "19075 abc st", City: "Omaha", State: "NE", Affiliation: "Alegent Health" },
            { ID: "2", ClinicName: "Some Name", Adress: "123 xyz st", City: "Omaha", State: "NE", Affiliation: "Children's Hospital" }
        ];
});

app.controller('Vacations', function ($scope) {
    $scope.items = [
            { ID: "1", FromDate: "10/12/2015", FromTime: "09:00AM", ToDate: "10/13/2015", ToTime: "05:00PM", Reson: "Going for conference" },
            { ID: "2", FromDate: "10/21/2015", FromTime: "09:00PM", ToDate: "10/22/2015", ToTime: "01:00PM", Reson: "vacation with family" }
        ];
});

app.controller('ScheduleDetails', function ($scope) {
    $scope.items = [
            { ID: "1", ClinicName: "Some Name", Adress: "123 abc st", City: "Omaha", State: "NE", Affiliation: "Alegent Health" },
            { ID: "2", ClinicName: "Some Name", Adress: "456 xyz st", City: "Omaha", State: "NE", Affiliation: "Children's Hospital" }
        ];
});

app.controller('WeekSchedule', function ($scope) {
    $scope.items = [
            { ID: "1", Mon: "09:00", Tue: "09:00", Wed: "", Thu: "", Fri: "09:00", Sat: "", Sun: "" },
            { ID: "2", Mon: "09:30", Tue: "09:30", Wed: "", Thu: "", Fri: "09:30", Sat: "", Sun: "" },
            { ID: "3", Mon: "10:00", Tue: "10:00", Wed: "", Thu: "", Fri: "10:00", Sat: "", Sun: "" },
            { ID: "4", Mon: "10:30", Tue: "10:30", Wed: "", Thu: "", Fri: "10:30", Sat: "", Sun: "" },
            { ID: "5", Mon: "11:00", Tue: "11:00", Wed: "", Thu: "", Fri: "11:00", Sat: "", Sun: "" },
            { ID: "6", Mon: "11:30", Tue: "11:30", Wed: "", Thu: "", Fri: "11:30", Sat: "", Sun: "" },
            { ID: "7", Mon: "01:00", Tue: "01:00", Wed: "", Thu: "", Fri: "01:00", Sat: "", Sun: "" },
            { ID: "8", Mon: "01:30", Tue: "01:30", Wed: "", Thu: "", Fri: "01:30", Sat: "", Sun: "" },
            { ID: "9", Mon: "02:00", Tue: "02:00", Wed: "", Thu: "", Fri: "02:00", Sat: "", Sun: "" },
            { ID: "10", Mon: "02:30", Tue: "02:30", Wed: "", Thu: "", Fri: "02:30", Sat: "", Sun: "" },
            { ID: "11", Mon: "03:00", Tue: "03:00", Wed: "", Thu: "", Fri: "03:00", Sat: "", Sun: "" },
            { ID: "12", Mon: "04:30", Tue: "04:30", Wed: "", Thu: "", Fri: "04:30", Sat: "", Sun: "" },
            { ID: "13", Mon: "05:00", Tue: "05:00", Wed: "", Thu: "", Fri: "05:00", Sat: "", Sun: "" },
            { ID: "14", Mon: "05:30", Tue: "05:30", Wed: "", Thu: "", Fri: "05:30", Sat: "", Sun: "" },
            { ID: "15", Mon: "06:00", Tue: "06:00", Wed: "", Thu: "", Fri: "06:00", Sat: "", Sun: "" }
        ];
});






