# autocomplete-directive
an angular js directive that fetch results from server

#usage
place following element code in you html file at desired place
<bst-auto-complete 
    url="/url/to/server/file.php" //url path from where matching result will came from.
    query="model-name-to-assign-value" // modal name of the field in html which you want to make as auto compelte field
    validate="validateItem(selected)" // controller funciton to perform validation on selection of item.
    on-select="selectItem(selected)" // function to call from controller when item is selected
></bst-auto-complete>
