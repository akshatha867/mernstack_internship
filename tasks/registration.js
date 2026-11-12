function register(event){
    event.preventDefault();

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let age=document.getElementById("age").value;
    let address=document.getElementById("address").value;
    let state=document.getElementById("state").value;

     if(name==""||email==""||age==""||address==""||state==""){
        alert("Please fill all fields");
        return;
    }


    let gender=document.querySelector('input[name="gender"]:checked');
    if(gender==null){
        alert("Please select gender");
        return;
    }else{
        gender=gender.value;
    }


    let skills=document.querySelectorAll('input[name="skills"]:checked');
    let selected_skills=[];
    for(let skill of skills){
        selected_skills.push(skill.value)
    }
    if(selected_skills.length==0){
        alert("select atleast one skill");
        return;
    }

    document.getElementById("header").innerHTML="Student Details:"
    document.getElementById("studentDetails").innerHTML += "Name:"+name+"<br>";
    document.getElementById("studentDetails").innerHTML += "Email"+email+"<br>";
    document.getElementById("studentDetails").innerHTML += "Age:"+age+"<br>";
    document.getElementById("studentDetails").innerHTML += "Address:"+address+"<br>";
    document.getElementById("studentDetails").innerHTML += "Gender:"+gender+"<br>";
    document.getElementById("studentDetails").innerHTML += "Skills:"+selected_skills;
    }

