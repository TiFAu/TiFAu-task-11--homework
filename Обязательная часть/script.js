const request = new XMLHttpRequest ()

request.onreadystatechange = function () {
    document.querySelector( "#readyState" )
              .innerHTML = request.readyState
    document.querySelector( "#status" )
              .innerHTML = request.status
    if ( this.readyState === 4 ) {
        if ( this.status === 200 ) 
          document.querySelector ("#response")
              .innerHTML = this.responseText
    }
}

request.open ( "GET", "myPicture.json")
request.send ()

function parseToJson () {
    notes = JSON.parse ( 
          document.querySelector ("#response").innerHTML 
        )
    document.querySelector ("#response").innerHTML = ""
    for ( const x in notes ) {
        //console.log(notes )    
        //console.log(notes [x])
        /*
        const elem = document.createElement ( 'p' )
        elem.innerHTML = notes [x]["title"] + ": " + notes [x]["ref"]
        document.querySelector ( "#response" )
                                .appendChild ( elem )
        */                                
        const elemP = document.createElement ('p')
        elemP.innerHTML = notes [x]["title"]
        document.querySelector ( "#response" )
                                .appendChild ( elemP )
        const elemImg = document.createElement ('img')
        elemImg.src = notes [x]["ref"]
        document.querySelector ( "#response" )
                                .appendChild ( elemImg )

    }
    document.querySelector ("button").innerHTML = "stringify JSON"
    document.querySelector ("button").onclick = stringifyObject
}

function stringifyObject () {
    document.querySelector ("#response").innerHTML = JSON.stringify ( notes )
    document.querySelector ("button").innerHTML = "parse JSON"
    document.querySelector ("button").onclick = parseToJson
}

var sudent = null
