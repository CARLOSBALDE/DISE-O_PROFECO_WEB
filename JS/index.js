const router =  (event) =>{
event = event || window.event
 event.preventDefault();
 window.history.pushState({},"",event.target.href);




};




window.router = router
