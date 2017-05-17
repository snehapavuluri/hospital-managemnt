

var app = angular.module('app', []);
app.controller('MyClinics', function ($scope) {
    $scope.items = [
            { ID: "1", ClinicName: "ABC", Address: "Some Address", City: "Omaha", State: "SE", Doctors: "3", Nurses: "5", AdminStaff: "2", Affiliation: "Alegent Health", AffiliatedHospitalAdress: "17220 W. Center St Omaha NE 68130" },
            { ID: "2", ClinicName: "ABC 2", Address: "Some Address", City: "Omaha", State: "SE", Doctors: "4", Nurses: "5", AdminStaff: "2", Affiliation: "Children's Hospital", AffiliatedHospitalAdress: "17220 W. Center St Omaha NE 68130" },
            { ID: "3", ClinicName: "ABC 3", Address: "Some Address", City: "Omaha", State: "SE", Doctors: "5", Nurses: "5", AdminStaff: "3", Affiliation: "Alegent Health", AffiliatedHospitalAdress: "17220 W. Center St Omaha NE 68130" },
            { ID: "4", ClinicName: "ABC 4", Address: "Some Address", City: "Omaha", State: "SE", Doctors: "2", Nurses: "5", AdminStaff: "1", Affiliation: "Children's Hospital", AffiliatedHospitalAdress: "17220 W. Center St Omaha NE 68130" },
            { ID: "5", ClinicName: "ABC 5", Address: "Some Address", City: "Omaha", State: "SE", Doctors: "1", Nurses: "2", AdminStaff: "1", Affiliation: "Alegent Health", AffiliatedHospitalAdress: "17220 W. Center St Omaha NE 68130" }
        ];
});

app.controller('StaffDetails', function ($scope) {
    $scope.items = [
            { ID: "1", FirstName: "Dr. First-Name", LastName: "Last-Name", Type: "Doctor", Status: "Employed", StartDate: "01/01/2014", Approve: "", Reject: "", Details: "Details", Display: "none" },
            { ID: "2", FirstName: "Dr. First-Name", LastName: "Last-Name", Type: "Doctor", Status: "Applied", StartDate: "3", Approve: "Approve", Reject: "Reject", Details: "Details", Display: "table-row" },
            { ID: "3", FirstName: "First-Name", LastName: "Last-Name", Type: "Nurse", Status: "Employed", StartDate: "01/01/2014", Approve: "", Reject: "", Details: "", Display: "none" },
            { ID: "4", FirstName: "First-Name", LastName: "Last-Name", Type: "Nurse", Status: "Employed", StartDate: "01/01/2014", Approve: "", Reject: "", Details: "", Display: "none" },
            { ID: "5", FirstName: "First-Name", LastName: "Last-Name", Type: "Admin", Status: "Employed", StartDate: "01/01/2014", Approve: "", Reject: "", Details: "", Display: "none" }
        ];
});


