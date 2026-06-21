const sheetID = "1ABCxyz123456";

const url =
`https://opensheet.elk.sh/${sheetID}/Sheet1`;

async function getData()
{
    const response = await fetch(url);

    const data = await response.json();

    document.getElementById("total").innerText =
    data[0].Total;

    document.getElementById("occupied").innerText =
    data[0].Occupied;

    document.getElementById("available").innerText =
    data[0].Available;

    let available = parseInt(data[0].Available);

    if(available > 0)
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

getData();

setInterval(getData, 3000);