function getFormvalue() {
    //Write your code here
	let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
	fname = fname[0].toUpperCase() + fname.slice(1);
    lname = lname[0].toUpperCase() + lname.slice(1);
    let fullName = fname +" "+lname
    alert(fullName)

}
