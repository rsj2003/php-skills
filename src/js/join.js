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