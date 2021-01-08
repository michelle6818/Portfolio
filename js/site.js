const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_vijrkfl';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire(
        'Thank You!',
        'I will reply soon!',
      )
      document.getElementById("form").reset()
    }, 
    (err) => {
      btn.value = 'Send Email';
      Swal.fire(
        'Looks like something went wrong...',
        'Please try again!',
      )
      alert(JSON.stringify(err));
    });
});