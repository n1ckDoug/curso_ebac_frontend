$(document).ready(() => {

    $('#form').on('submit', (e) => {

        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const listas = $('ul');

        $(`<li>${novaTarefa}</li>`).appendTo(listas);

        $('#nova-tarefa').val('');

    });

});


$(document).on('click', 'li', function () {
    $(this).toggleClass('check');
});