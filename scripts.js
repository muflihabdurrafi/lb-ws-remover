let input = $(".inputText");
let output = $(".outputText");

$(".btnClear").on("click", () => {
    let inputVal = input.val();
    let inputDone = inputVal.replace(/(\r\n|\n|\r|^\s+|\s+$)/gm, "");
    output.val(inputDone);
    output.select();
    document.execCommand("copy");
    alert("Text Copied!");
    console.log(inputDone);
});

output.on("click", () => {
    output.select();
    document.execCommand("copy");
});
