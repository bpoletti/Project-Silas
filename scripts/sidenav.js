function openNav() {
    document.getElementById("mobilesidenav").style.width = "250px";
    document.getElementById("open").style.zIndex = "-1";
  }
  
  function closeNav() {
    document.getElementById("mobilesidenav").style.width = "0";
    document.getElementById("open").style.zIndex = "10000";
  }