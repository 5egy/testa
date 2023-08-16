const requestURL = document.getElementById("route")
const body = document.querySelector(".body")
const method = document.getElementById("method")
const showRes = document.querySelector(".show-res")


function showBody(){
  if(method.value !== "Get"){
    body.classList.add("show")
  }
}

async function sendRequest(){
    const options = {
        header: {
            "Content-Type": "application/json"
        },
        method: method.value,
        body: body.value
    }
 

  if(method.value === "GET"){
    const element = await fetch(requestURL.value)
    const res = await element.json()
    showRes.innerHTML = JSON.stringify(res)
  } else{
    const element = await fetch(requestURL.value, options)
    const res = await element.json()
    showRes.innerHTML = JSON.stringify(res)
  }
}
