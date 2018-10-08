

function loadUsers() {
    $.post('/listUser',
        $('#searchUser').val(),
        function (data, status) {
            //alert("Data: " + data + "\nStatus: " + status);
        });
}
