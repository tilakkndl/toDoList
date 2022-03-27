

function showNotes(){
notes = localStorage.getItem("notes");
// console.log(notes);
if(notes == null){
    notesObj = [];
}
else{
    notesObj = JSON.parse(notes);
}

 html = "";
notesObj.forEach(function(element, index){
    html += `
    <div class="item" id="item ${index+1}">
    <h4>${element[1]} </h4>
    <p>${element[0]}</p>
    <button class="btn" id = "${index+1}" onclick = "deleteNote(this.id)">Delete</button>
</div>
    `
})
if(notesObj.length != 0){
    document.getElementById("cards").innerHTML = html;
}
else{
    document.getElementById("cards").innerHTML = `Nothing to show. Add some notes`;
}
}

showNotes();


let addBtn = document.getElementById("btn-for-adding-note");
addBtn.addEventListener("click", function(){
    let textarea = document.getElementById("textarea");
    let title = document.getElementById("title");
    let combinedInfo = [textarea.value, title.value];
    if(textarea.value != 0&& title.value != 0){
        notesObj.push((combinedInfo));
        localStorage.setItem("notes", JSON.stringify(notesObj));
    }
    textarea.value = "";
    title.value = "";
    showNotes();
})


//deleting the notes
function deleteNote(index){
    // console.log(index-1);
    let notes = localStorage.getItem("notes");
    // if(notes == null){
    //     notesObj = [];

    // }
    // else{
    //     notesObj = JSON.parse(notes);
    // }
    // console.log(notesObj[index-1]);
    notesObj.splice(index-1, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}



//to search the note

let search = document.getElementById("search");
 
search.addEventListener("input", function(){
let cards = document.getElementsByClassName("item");
Array.from(cards).forEach(function(element){
cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
if(cardTxt.includes(search.value.toLowerCase())){
    element.style.display = "block";

}
else{
    element.style.display = "none";
}
})
})


