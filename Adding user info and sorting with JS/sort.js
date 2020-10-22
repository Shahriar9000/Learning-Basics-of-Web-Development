var Name_ascending = false;
var Name_descending = false;

var Email_asc = false;
var Email_desc = false;

var Age_ascending = false;
var Age_descending = false;
var message = document.querySelector('#avg');
var users=[];
var id = 1;


// https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
function get_age(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

function Calculate_average_age()
{
	var t = document.getElementById("Table");
	var average_Age = 0;
	
	for(i = 1; i < t.rows.length; i++)
	{
		average_Age = average_Age + parseInt(t.rows[i].cells[3].innerHTML);
	}
	average_Age = average_Age / (t.rows.length-1);
	document.getElementsByClassName("average_age")[0].innerHTML = ("Average Age: " + average_Age.toString() + ".");

}

function Add_User()
{
	//Retrieve input data
	var name = document.getElementById("User_Info").elements["Name"].value;
	var email = document.getElementById("User_Info").elements["Email"].value;
	//var age = document.getElementById("User_Info").elements["Age"].value;
	var birthday = document.getElementById("User_Info").elements["Birthday"].value;
	var age = get_age(birthday);
	//Get our HTML table
	var table = document.getElementById("Table");

	//Create table row, insert cells into it
	var row = table.insertRow();
	var cell0 = row.insertCell(0); //Name 
	cell0.innerHTML = name;
	var cell1 = row.insertCell(1); //Email 
	cell1.innerHTML = email;
	var cell2 = row.insertCell(2); //birthday
	cell2.innerHTML = birthday;
	var cell3 = row.insertCell(3); //Age
	cell3.innerHTML = age;

	Age_ascending = false;
	Age_descending = false;

	Name_ascending = false;
	Name_descending = false;

	Email_asc = false;
	Email_desc = false;

	Calculate_average_age();
	

}

function SortByName()
{
	if((Name_ascending == false && Name_descending == false) || (Name_ascending == false && Name_descending == true))
	{
		var t = document.getElementById("Table");
		for(var i = 0; i < t.rows.length-1; i++)
		{
			for(var j = 1; j < t.rows.length-i-1; j++)
			{
				if(t.rows[j].cells[0].innerHTML > t.rows[j+1].cells[0].innerHTML)
				{	
					var temp = t.rows[j].innerHTML;
					t.rows[j].innerHTML = t.rows[j+1].innerHTML;
					t.rows[j+1].innerHTML = temp;
				}
			}
		}
		Name_ascending = true;
		Name_descending = false;
	}
	else if(Name_ascending == true && Name_descending == false)
	{
		var t = document.getElementById("Table");

		for(var i = 0; i < t.rows.length-1; i++)
		{
			for(var j = 1; j < t.rows.length-i-1; j++)
			{
			
				if(t.rows[j].cells[0].innerHTML < t.rows[j+1].cells[0].innerHTML)
				{
				
					var temp = t.rows[j].innerHTML;
					t.rows[j].innerHTML = t.rows[j+1].innerHTML;
					t.rows[j+1].innerHTML = temp;

				}
			}
		}

		Name_ascending = false;
		Name_descending = true;

	}
}

function SortByEmail()
{
	if((Email_asc == false && Email_desc == false) || (Email_asc == false && Email_desc == true))
	{
		var table = document.getElementById("Table");
		for(var i = 0; i < table.rows.length-1; i++)
		{
			for(var j = 1; j < table.rows.length-i-1; j++)
			{
			
				if(table.rows[j].cells[1].innerHTML > table.rows[j+1].cells[1].innerHTML)
				{
				
					var temp = table.rows[j].innerHTML;
					table.rows[j].innerHTML = table.rows[j+1].innerHTML;
					table.rows[j+1].innerHTML = temp;

				}
			}
		}

		Email_asc = true;
		Email_desc = false;
	}
	else if(Email_asc == true && Email_desc == false)
	{
		var table = document.getElementById("Table");

		for(var i = 0; i < table.rows.length-1; i++)
		{
			for(var j = 1; j < table.rows.length-i-1; j++)
			{
			
				if(table.rows[j].cells[1].innerHTML < table.rows[j+1].cells[1].innerHTML)
				{
				
					var temp = table.rows[j].innerHTML;
					table.rows[j].innerHTML = table.rows[j+1].innerHTML;
					table.rows[j+1].innerHTML = temp;

				}
			}
		}

		Email_asc = false;
		Email_desc = true;
	}

}

function SortByAge()
{

	//Sort ages in ascending order
	if((Age_ascending == false && Age_descending == false) || (Age_ascending == false && Age_descending == true))
	{
		var table = document.getElementById("Table");

		for(var i = 0; i < table.rows.length-1; i++)
		{
			for(var j = 1; j < table.rows.length-i-1; j++)
			{
			
				if(parseInt(table.rows[j].cells[3].innerHTML) > parseInt(table.rows[j+1].cells[3].innerHTML))
				{
				
					var temp = table.rows[j].innerHTML;
					table.rows[j].innerHTML = table.rows[j+1].innerHTML;
					table.rows[j+1].innerHTML = temp;

				}
			}
		}

		Age_ascending = true;
		Age_descending = false;
	}


	//Sort ages in descending order
	else if(Age_ascending == true && Age_descending == false)
	{
		var table = document.getElementById("Table");

		for(var i = 0; i < table.rows.length-1; i++)
		{
			for(var j = 1; j < table.rows.length-i-1; j++)
			{
			
				if(parseInt(table.rows[j].cells[3].innerHTML) < parseInt(table.rows[j+1].cells[3].innerHTML))
				{
				
					var temp = table.rows[j].innerHTML;
					table.rows[j].innerHTML = table.rows[j+1].innerHTML;
					table.rows[j+1].innerHTML = temp;

				}
			}
		}
		Age_descending = true;
		Age_ascending = false;

	}
}