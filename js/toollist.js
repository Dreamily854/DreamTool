function AddGroupName(groupname) {
    html0 = "<div class='mdui-typo'><div class='mdui-typo-title'>"
    html1 = "</div></div>"
    full = html0 + groupname + html1
    $("#toollist_group").append(full)
}
function Additem(itemlist) {
    html0 = "<div class='mdui-m-t-1 mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3 mdui-row-lg-4'>"
    html00 = "</div>"
    html1 = ""
    //$("#toollist_group").append(html0)
    for (var key in itemlist) {
        item = itemlist[key]
        html1 = html1+__AddItem(item.url, item.name)
    }
    full = html0+html1+html00
    $("#toollist_group").append(full)

}
function __AddItem(url, itemname) {
    html1 = "<div class='mdui-col mdui-m-b-1'>"
    html2 = "<a href='"
    html3 = "' class='mdui-btn mdui-btn-block mdui-text-left mdui-ripple'>"
    html4 = "</a></div>"
    full = html1 + html2 + url + html3 + itemname + html4
    return full
}


function toollist_add() {
    $.get({
        url: './toollist.json',
        data: {},
        success: function (data) {
            //console.log(data)
            var grouplist = data.groups
            for (var key in grouplist) {
                var group = grouplist[key]
                var GroupName = group.name
                AddGroupName(GroupName)
                itemlist = group.items
                //console.log(grouplist[key]);
                Additem(itemlist)

            }
        }
    });
}

toollist_add()