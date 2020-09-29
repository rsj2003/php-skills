window.onload = function(e) {
  let
  cvs = document.getElementById("code_cvs"),
  ctx = cvs.getContext("2d"),
  code = "qwertyuiopasdfghjklzxcvbnm";

  code += code.toUpperCase();
  code += "0123456789";
  code = [...code];

  ctx.fillStyle = "#fff";
  ctx.fillRect(0,0,cvs.width,cvs.height);

  let code_set = "";

  while(code_set.length < 6) {
    let i = Math.floor(Math.random()*code.length);
    code_set += code[i];
  }

  this.console.log(code_set);
  ctx.fillStyle = "#333";
  ctx.font = "40px Arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(code_set,150,25,300);

  let
  in_e = document.getElementById("id"),
  in_p = document.getElementById("pass"),
  in_pc = document.getElementById("pass_check"),
  in_n = document.getElementById("name"),
  in_b = document.getElementById("birth"),
  in_pf = document.getElementById("profile"),
  in_c = document.getElementById("code")


  let submit = document.getElementById("join_form");
  submit.addEventListener("submit",e => {
    this.event.preventDefault();
    if(in_e.value == "" || in_p.value == "" || in_pc.value == "" || in_n.value == "" || in_b.value == "" || in_pf.value == "" || in_c.value == "") {
      this.alert("모든 입력창을 채워주세요.");
    }

    // console.log(in_e.value);
    // console.log(new RegExp(in_e.value.match(/[A-Z|a-z|0-9]*@[A-Za-z]*((\.[A-Z|a-z]{2,3}) || (\.[A-Za-z]))/g)));
    // console.log(in_e.value.match(/[A-Z|a-z|0-9]*@[A-Za-z]*((\.[A-Z|a-z]{2,3}) || (\.[A-Za-z]))/g));
    if(in_e.value.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[0-9a-zA-Z]{2,3}$/i) === null) {
      alert("이메일 형식이 잘못되었습니다.");
      return false;
    }

    // console.log(in_p.value.match(/^[0-9a-zA-Z]|[!@#$%^&*()]+$/));

    if(in_p.value.match(/^[0-9a-zA-Z]+|[!@#$%^&*()]+$/) == null) {
      alert("비밀번호 형식이 잘못되었습니다.");
    }
    
    // email(document.getElementById("id").value);

    // this.submit();
  })

  function email(email) {
    let form = new FormData();
    form.append("id", email);

    fetch("./join.php", {
      mode: "cors",
      method: "post",
      headers: {
        "Access-Control-Allow-Origin" : "*"
      },
      body: form
    })
    .then(req => {return req.text()})
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));

  }

}