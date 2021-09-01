const searchInput = document.getElementById("searchInput");
const resultsDisplayDiv = document.getElementById("resultsDisplayDiv");

const submitSearch =async(page = 1)=> {
    const searchQueryURL = `http://localhost:3001/search/${searchInput.value}/${page}`;
    console.log(searchQueryURL);
    let response = await fetch(searchQueryURL);
    if (response.ok) {
    let json = await response.json();
    displaySearchResults(json);
    } else {
    alert("HTTP-Error: " + response.status);
    }
}

const displaySearchResults =(results)=> {
    //Wipe the div (in case this is not the first search)
    resultsDisplayDiv.innerHTML="";
    // console.log("displaySearchResults entered");
    if (results.length==0) {
        resultsDisplayDiv.innerText="There are no matches for your search"
    } else {
        //resultsDisplayDiv
        for (show of results.data){
            const showDiv = document.createElement("div");
            //create and add checkbox
            const showCheckbox = document.createElement("INPUT");
            showCheckbox.setAttribute("type", "checkbox");
            showCheckbox.setAttribute("class", "showCheckbox");
            showCheckbox.setAttribute("id", show.name);
            showDiv.append(showCheckbox);
            //Show name
            const showName = document.createTextNode(show.name);
            showDiv.append(document.createTextNode(show.name));

            resultsDisplayDiv.append(showDiv);
            console.log(document.querySelector())
        }
        if (results.nextPage > 0) {
            const nextBtn = document.createElement ("button");
            nextBtn.innerText="next";
            nextBtn.addEventListener("click", ()=>console.log("clicked"));
            resultsDisplayDiv.append(nextBtn);
        }
    }

    
    
    //console.log(1234, results)    
}
