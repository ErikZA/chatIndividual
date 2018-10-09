
 

function loadUsers() {
    $.post('/list',
        {name: $('#searchUser').val()},
        function (data, status) {
            console.log("Data: " + data + "\nStatus: " + status);
            //tratar a pagina que esta voltando em data;
        });
}



