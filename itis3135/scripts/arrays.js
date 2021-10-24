
const person = ["Dick Grayson", "Kory Anders", "Gar Logan", "Rachel Roth", "Dawn Granger", "Hank Hall", "Donna Troy" ];
const salary = [160000, 150000, 120000, 120000, 100000, 100000, 60000];


function addSalary() 
{
	document.getElementById("eName").focus();
	//get form information
	var newEmployeeName = document.getElementById("eName").value;
	var newEmployeeSalary = document.getElementById("eSalary").value;
	var validate = false;
	
	//validate entries
	if(newEmployeeName.length == 0)
	{
		alert("Please input a name");
		validate = false;
		return false;
	}
	
	else if (newEmployeeSalary.length == 0)
	{
		alert("Please input a salary");
		validate = false;
		return false;
	}
	
	else if (isNaN(newEmployeeSalary))
	{
	
		alert("Please only input a number for salary");
		validate = false;
		return false;
	}
	
	else
	{
		validate = true;
	}
	
	
	if (validate = true)
	{
	person.push(newEmployeeName);
	salary.push(newEmployeeSalary);
	}
}

function displayResults() 
{
    //get the max salary
    var salaryMost = salary.reduce(function(a, b){ return Math.max(a, b); }, 0);

    //format highest salary with commas
    var salaryMostDisplay = salaryMost.toLocaleString("en-us");

    //Get sum and average of salary array
    var salarySum = 0;

    for(let i = 0; i < salary.length; i++)
    {
        salarySum += salary[i];
    }
    
    var salaryAverage = salarySum / salary.length;

    //format salary average
    salaryAverage = Math.round(salaryAverage);
    var salaryAverageDisplay = salaryAverage.toLocaleString("en-us");

    //display average and highest salary in div result
    document.getElementById("result").innerHTML= "<p><b>Average:</b> " + salaryAverageDisplay + "<br> <b>Highest:</b> " + salaryMostDisplay + "</p>";
}


function displaySalary()
{
	var getDiv = document.getElementById("tableDiv");
	
	//create table
	var table = "<table> <thead> <th> Name </th> <th> Salary </th> <tr> <tbody>";
	
	//loop through arrays creating table data
	for(var i = 0; i < salary.length; i++)
	{
		table += "<tr>" + "<td>" + person[i] + "</td>" + "<td>" + salary[i] + "</td>" +"</tr>";
	}
	
	table += "</tbody>";
	
	//add table to tableDiv
	getDiv.innerHTML = table;
}