var input=document.getElementById('find');   //输入框
input.onfocus=function(){
    if(this.value==="请输入关键字")
        this.value="";
    this.style.color="#999";
}
input.onblur=function(){
    if(this.value===""){
        this.value="请输入关键字";
        this.style.color="#999"
    }
}
