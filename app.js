// search items
var searchItems = document.querySelector('.text-search');
var items = document.querySelector('.easy-autocomplete-container')
var active = document.querySelector('.active')
var listItems = document.getElementsByTagName('li')
var resetButton = document.querySelector('.reset')
var searchIcon = document.querySelector('.bhx-search')
var searchButton = document.querySelector('.btn-search')
searchItems.onkeyup= function(e){
    searchButton.style.display = 'block'
    resetButton.style.display = 'block';
    searchIcon.style.display='none'
    items.style.display = 'block'
    document.querySelector('.selected').style.display = 'none'
    const filter = searchItems.value.toLowerCase().trim();
    if(!filter){
        items.style.display ='none'
    }
    else{
        for( var i=0; i<listItems.length; i++){
            var searchItem =  listItems[i].getElementsByTagName('h3')[0];
            var txtValue = searchItem.textContent || searchItem.innerText;
            if(txtValue.toLowerCase().indexOf(filter)>-1){
                listItems[i].style.display ='block'
                document.querySelector('.selected').style.display='none'
            }
            else{
                listItems[i].style.display = 'none'
                document.getElementsByTagName('b')[0].innerHTML= filter;
                document.querySelector('.selected').style.display = 'block'
                
            }
    
        }
    }
}
resetButton.onclick= function(e){
    console.log(e.target)
    items.style.display='none';
    resetButton.style.display='none'
    searchButton.style.display='none'
    searchIcon.style.display='block'
    document.querySelector('.text-search').value ='';
}
