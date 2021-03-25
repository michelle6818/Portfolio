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
// API for blog
fetch('https://michellesblog.herokuapp.com/GetTopXPosts/3'), {mode:'CORS'}
.then(response => response.json())
.then(function(data){    
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };    
  let blogUrl = "https://michellesblog.herokuapp.com/Posts/TheDetails/"
  let blogAnchor = $("#blog1 > div.card-body > h3 > a");    
  let blogLink = `${blogUrl}${data[0].slug}`;
  blogAnchor.text(data[0].title);
  blogAnchor.attr("href", blogLink);
  $("#blog1 > div.card-img > a").attr("href", blogLink)
  $("#blog1 > div.card-img > a > img").attr("src", `data:${data[0].contentType};base64,${data[0].imageData}`)    
  $("#blog1 > div.card-body > p").text(data[0].abstract);      
  $("#blog1 > div.card-footer > div > span").text(`Created: ${new Date(data[0].created).toLocaleDateString("en-US", options)}`)
  blogAnchor = $("#blog2 > div.card-body > h3 > a");    
  blogLink = `${blogUrl}${data[1].slug}`;
  blogAnchor.text(data[1].title);
  blogAnchor.attr("href", blogLink);
  $("#blog2 > div.card-img > a").attr("href", blogLink)
  $("#blog2 > div.card-img > a > img").attr("src", `data:${data[1].contentType};base64,${data[1].imageData}`)    
  $("#blog2 > div.card-body > p").text(data[1].abstract);      
  $("#blog2 > div.card-footer > div > span").text(`Created: ${new Date(data[1].created).toLocaleDateString("en-US", options)}`)
  blogAnchor = $("#blog3 > div.card-body > h3 > a");    
  blogLink = `${blogUrl}${data[2].slug}`;
  blogAnchor.text(data[2].title);
  blogAnchor.attr("href", blogLink);
  $("#blog3 > div.card-img > a").attr("href", blogLink)
  $("#blog3 > div.card-img > a > img").attr("src", `data:${data[2].contentType};base64,${data[2].imageData}`)    
  $("#blog3 > div.card-body > p").text(data[2].abstract);      
  $("#blog3 > div.card-footer > div > span").text(`Created: ${new Date(data[2].created).toLocaleDateString("en-US", options)}`)
});
