	document.getElementById('gomb').onclick = function()
	{
		szamolo()
	};

	var szamok = [3,6,10,14,17,20,23,26,29,32,33,34];

	for (var i = 1; i < 35; i++) 
	{
	    if (szamok.includes(i))
		{
			document.getElementById('td' + i).onclick = function()
	    	{
				szorzas(this.id)
			};
		}
		else
		{
			document.getElementById('td' + i).onclick = function()
	    	{
				getvalue(this.id)
			};
		}
	}
		
		var input = document.getElementById("input");
		input.addEventListener("keyup", function(event) {event.preventDefault();
			let text = document.getElementById('input').value.toString();
  			if (event.keyCode === 13 && text.length != 0)
  			{
    			document.getElementById("gomb").click();
  			}
  			else
  			{
  				document.getElementById('first').innerHTML = "";
				document.getElementById('second').innerHTML = "";
				document.getElementById('multi').innerHTML = "";
  			}
		});

		let x = "";
		var tomb = [1,10,100,1000,10000,100000,1000000,1000000,10000000,100000000,0.1,0.01];
    	function getvalue(id) {
    		x += document.getElementById(id).innerHTML;
		}
		let y = "";
		function szorzas(id) {
			x = parseFloat(x) * parseFloat(document.getElementById(id).innerHTML);
			y = x.toString();
			if (y.length === 3)
			{
				alert("The value of the resistor: "+ x +" Ohm");
			}
			else if(y.length === 4)
			{
				x = x / 1000;
				alert("The value of the resistor: "+ x +" KOhm");	
			}
			else if(y.length === 5)
			{
				x = x / 10000;
				alert("The value of the resistor: "+ x +" MOhm");	
			}
			else
			{
				alert("The value of the resistor: "+ x +" Ohm");
			}
			x = "";
		}
	
		var szam = 0;
		var sv = "";
		var multiplier = 0;
		var bands = ['Black','Brown','Red','Orange','Yellow','Green','Blue','Purple','Gray','White','Gold','Silver'];
		function szamolo()
		{
			szam = parseFloat(document.getElementById('input').value);
			for (var i = 0; i < 12; i++)
			{
				sv = (szam/tomb[i]).toString();
				if (sv.length === 2) 
				{
					multiplier = i;
					break;
				}
			}
				document.getElementById('first').innerHTML = bands[parseFloat(sv[0])];
				document.getElementById('second').innerHTML = bands[parseFloat(sv[1])];
				document.getElementById('multi').innerHTML = bands[multiplier];
		};