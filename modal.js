
    // Get the modal
    var modal = document.getElementById("myModal");
    
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");  
    

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("modal__close")[0];
    
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }

    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    var userName = document.getElementsByClassName("userName");
    var userPhone = document.getElementsByClassName("userPhone");
    var fields = document.getElementsByClassName("field")

    modal.addEventListener ('submit', function (event) {
      event.preventDefault()
      
      /*if(!userName.value) {
        userName.style.border = "2px solid red";
        return false;
      }
  
      if(!userPhone.value) {
        userPhone.style.border = "2px solid red";
        return false;
      }*/

      /*if (!userName.value || !userPhone.value) {
        console.log('error')
      } else {
        
      }*/
      /*for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
          console.log('field is blank'), fields[i]
          var error = document.createElement('div')
          error.className = 'error'
          error.style.color = 'red'
          error.innerHTML = 'Cannot be blank'
        }
      }
      */
    })