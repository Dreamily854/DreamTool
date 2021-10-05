$.get({
    url: '/footer',
    data: {},
    success: function (data) {
        console.log(data)
        $("#footer_text").append(data)
    }
});