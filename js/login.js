function   checkUser() {
    var $phone=$("#tel").val();
    var $spanuser=$("#spanuser");
    if($phone==null || $phone==""){
        $spanuser.html("用户名不能为空！！");
        $spanuser.css("color","red");
        return false;
    }
    var regxcode= /^[a-zA-Z0-9_-]{4,16}$/;
    if(regxcode.test($phone)==true){
        $spanuser.html("√")
        $spanuser.css("color","green");
        return true;
    }else {
        $spanuser.html("用户名不正确，请按规则输入！")
        $spanuser.css("color","red");
        return false;
    }
    $spanuser.html("");
    return true;
}
function  checkPassword(){
    var $password=$("#pass").val();
    var $spanpass=$("#spanpass");
    if($password==null || $password==""){
        $spanpass.html("密码不能为空！！");
        $spanpass.css("color","red");
        return false;
    }
    var regxcode= /^[a-zA-Z0-9_-]{6,16}$/;
    if(regxcode.test($password)==false){
        $spanpass.html("密码不正确请按规则输入！")
        $spanpass.css("color","red");
        return false;
    }else{
        $spanpass.html("√")
        $spanpass.css("color","green");
        return true;
    }