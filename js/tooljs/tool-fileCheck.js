var inst = new mdui.Dialog("#procress", {
    modal: true,
});


function formatFileSize(fileSize) {
    if (fileSize < 1024) {
        return fileSize + 'B';
    } else if (fileSize < (1024 * 1024)) {
        var temp = fileSize / 1024;
        temp = temp.toFixed(2);
        return temp + 'KB';
    } else if (fileSize < (1024 * 1024 * 1024)) {
        var temp = fileSize / (1024 * 1024);
        temp = temp.toFixed(2);
        return temp + 'MB';
    } else {
        var temp = fileSize / (1024 * 1024 * 1024);
        temp = temp.toFixed(2);
        return temp + 'GB';
    }
}

function changeBar(procress) {
    $("#procress_bar").attr('style', 'width:' + procress + "%");
}



function checkMd5(e) {
    inst.open()
    const file = e
    console.log(file)
    //const sliceLength = 10;
    //const chunkSize = Math.ceil(file.size / sliceLength);
    const chunkSize = 16777216 //16M
    const fileReader = new FileReader();

    const md5 = new SparkMD5();
    let index = 0;
    const loadFile = () => {
        const slice = file.slice(index, index + chunkSize);
        fileReader.readAsBinaryString(slice);
    }


    loadFile();
    fileReader.onload = e => {
        md5.appendBinary(e.target.result);
        if (index < file.size) {
            index += chunkSize;
            loadFile();
            changeBar(Math.trunc(index / file.size * 100))
        } else {
            filesize = formatFileSize(file.size)
            filename = file.name
            inst.close()

            changeBar(0)
            md5a = md5.end();
            mdui.alert("文件名: " + filename + "<br>" + "大小: " + filesize + "<br>" + "MD5: " + md5a, "MD5")
        }
    };
}

filecheckd.ondragover = function (e) {
    e.preventDefault();
}
filecheckd.ondrop = function (e) {

    e.preventDefault()
    checkMd5(e.dataTransfer.files[0])

};

$("#fileUpdate-input").change(function () { 
    file = $("#fileUpdate-input")[0].files[0]
    console.log($("#fileUpdate-input")[0].files[0]); 
    checkMd5(file)
});



filecheckd.onclick = function () {
    console.log("click")
    var fileUpdate_input = document.getElementById("fileUpdate-input");
    fileUpdate_input.click();
}
