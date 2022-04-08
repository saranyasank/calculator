function buttonclick(val){
    console.log
    document.getElementById("elem").value+=val
}
function buttonclear(){
    document.getElementById("elem").value=""
}
function equalclick(){
    var text=document.getElementById("elem").value
    var result=eval(text)
    document.getElementById('elem').value=result
}