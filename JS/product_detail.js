function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    // Hide all tab content
    tabcontent = document.getElementsByClassName("content_tab");
    console.log(tabcontent);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Deactivate all tab buttons
    tablinks = document.getElementsByClassName("clicktab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-review_tab", "");
    }
    // Show the current tab content and activate the current tab button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active-review_tab";
  }
  
