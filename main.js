var names=[];
function submit(){
    var display_student=[];
    for(var j=1;j<=5;j++){
        var names_stud=document.getElementById("name"+j).value;
        console.log(names_stud);
        names.push(names_stud);
    }
  var len=names.length;
  console.log(len);
    for(var k=0;k<len;k++){
        display_student.push("<h4>NAME-"+names[k]+"</h4>");
        console.log(display_student);
    }
    console.log (names);
    document.getElementById("display_names_with_commas").innerHTML=display_student;
    var remove_commas=display_student.join(" ");
    console.log(remove_commas);
    document.getElementById("display_names_without_commas").innerHTML=remove_commas;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sort(){
    names.sort();
    console.log(names);
    var display_student_sort=[];
    var len=names.length;
  console.log(len);
    for(var k=0;k<len;k++){
        display_student_sort.push("<h4>NAME-"+names[k]+"</h4>");
        console.log(display_student_sort);
    }
    console.log (names);
    document.getElementById("display_names_with_commas").innerHTML=display_student_sort;
    var remove_commas=display_student_sort.join(" ");
    console.log(remove_commas);
    document.getElementById("display_names_without_commas").innerHTML=remove_commas;
}