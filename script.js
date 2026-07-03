const sheetID =
"1XG93Hf0LbT3ka6ljcGnUqLxjvCnVpeGBoOb6traRzck";

const url =
`https://opensheet.elk.sh/${sheetID}/Sheet1`;


async function getData()
{
    try
    {
        let response = await fetch(url);

        let data = await response.json();

        console.log(data);


        document.getElementById("total").innerHTML =
        data[0]["totalslots"];


        document.getElementById("occupied").innerHTML =
        data[0]["occupied slots"];


        document.getElementById("available").innerHTML =
        data[0]["available slots"];


        let free =
        Number(data[0]["available slots"]);


        if(free > 0)
        {
            document.getElementById("status").innerHTML =
            "🟢 PARKING AVAILABLE";
        }
        else
        {
            document.getElementById("status").innerHTML =
            "🔴 PARKING FULL";
        }

    }

    catch(error)
    {
        console.log("ERROR:", error);
    }
}


getData();

setInterval(getData,3000);