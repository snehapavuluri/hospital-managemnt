/**
* Vertically center Bootstrap 3 modals so they aren't always stuck at the top
*/
$(function () {
    function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');

        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function () {
        $('.modal:visible').each(reposition);
    });
});

function readonlyDisable() {
    $(".textAns").removeClass('hidden');
    $(".lblAns").addClass('hidden');
    $("#btnSave").removeClass('hidden');
    $("#btnCancel").removeClass('hidden');
    $("#btnEdit").addClass('hidden');
}

function readonlyEnable() {
    $(".textAns").addClass('hidden');
    $(".lblAns").removeClass('hidden');

    $("#btnSave").addClass('hidden');
    $("#btnCancel").addClass('hidden');
    $("#btnEdit").removeClass('hidden');
}

function resetPatient() {
    $("#firstName").val('');
    $("#lastName").val('');
    $("#DOB").val('');
}

function ValidatePatientSearch() {
    if ($("#firstName").val() == '') {
        BootstrapDialog.show({
            title: 'Validation',
            message: 'First Name required.',
            buttons: [{
                label: 'Ok',
                action: function (dialogItself) {
                    dialogItself.close();
                }

            }]
        });

    }
    else if ($("#lastName").val() == '') {
        BootstrapDialog.show({
            title: 'Validation',
            message: 'Last Name required.',
            buttons: [{
                label: 'Ok',
                action: function (dialogItself) {
                    dialogItself.close();
                }
            }]
        });
    }
    else
        location.href = 'PatientSearchResult.html';
}

