// theme button for dark mode //
let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode"); 
}
themeButton.addEventListener("click", toggleDarkMode);
//


// // reduce motion button
// let reduceMotionButton = document.getElementById("reduce-motion-button");

// const toggleReduceMotion = () => {
//   // Get the animation object
//   const animation = {
  
//     // transitionDuration: '2s',
//     // transitionTimingFunction: 'ease-in-out',
//   };

//   // Select the elements to apply the animation to
//   const elements = document.querySelectorAll('.revealable'); 

//   // Apply the animation styles to each element
//   for (let i = 0; i < elements.length; i++) {
//    elements[i].style.transition = animation.transition;
//     elements[i].style.opacity = animation.opacity;
//     // elements[i].style.transitionDuration = animation.transitionDuration;
//     // elements[i].style.transitionTimingFunction = animation.transitionTimingFunction;
   
//   }
// };

// reduceMotionButton.addEventListener("click", toggleReduceMotion);




let reduceMotionButton = document.getElementById("reduce-motion-button");
const revealableElements = document.querySelectorAll(".revealable");
const initialOpacities = {}; // Store initial opacity values

// Store initial opacity values
for (let i = 0; i < revealableElements.length; i++) {
  initialOpacities[revealableElements[i].id] = revealableElements[i].style.opacity;
}

const toggleReduceMotion = () => {
  // Get the animation object
  const animation = {
    opacity: 1, // Set opacity to 1 for fade-in animation
  };

  // Apply the animation styles to each element
  for (let i = 0; i < revealableElements.length; i++) {
    const element = revealableElements[i];
    const originalOpacity = initialOpacities[element.id];

    element.style.transition = "opacity 2s ease-in-out"; // Set transition properties
    element.style.opacity = originalOpacity; // Reset opacity to initial value

    // Start fade-in animation when transition is complete
    element.addEventListener("transitionend", () => {
      element.style.opacity = animation.opacity;
    }, { once: true }); // Remove event listener after first transition
  }
};

reduceMotionButton.addEventListener("click", toggleReduceMotion);

// add signee to signatures list //
// count signatures
let count=2;
const addSignature = (person) => {
  
  const name = document.getElementById('name').value;
  const industry = document.getElementById('industry').value;
  const email = document.getElementById('email').value;
  const signatures = document.querySelector('.signatures');
  const formContainer = document.querySelector('.form-container');
  const newSignature = document.createElement('p');
  newSignature.innerHTML = `️🖊️ ${name} in the ${industry} industry supports this.`;
  signatures.appendChild(newSignature);
  // count signatures
  const oldCount = document.querySelector('#counter');
  oldCount.remove();
  count = count + 1;
  const newCount = document.createElement('p');
  newCount.id = 'counter';
  newCount.append("🖊️" + count +" people have already started the fight. Will you ? ");
  formContainer.appendChild(newCount);
  
}
  // add the event listener for the click // 
const signNowButton = document.getElementById("sign-now-button");
// signNowButton.addEventListener("click", () => {
  
// }
// )
// ;

// TODO: Remove the click event listener that calls addSignature()

// TODO: Complete validation form

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    industry: petitionInputs[1].value,
    email: petitionInputs[2].value

    
  }
  // TODO: Loop through all inputs
for (let i = 0; i<petitionInputs.length; i = i + 1){
  // TODO: Validate the value of each input
  if (petitionInputs[i].value.length < 2){
    containsErrors = true;
    petitionInputs[i].classList.add('error');
  }
  else{
    petitionInputs[i].classList.remove('error');
  }

  // TODO: Call addSignature() and clear fields if no errors
// if (containsErrors == false){
//   addSignature(person);
//   toggleModal(person);
//   for (let i = 0; i<petitionInputs.length; i = i + 1){
//     petitionInputs[i].value = "";
//     containsErrors = false;
//   }
// }
  //make sure that email contains .com //
  const email = document.getElementById('email');
  if (!email.value.includes('.com')){
    containsErrors = true;
    email.classList.add('error');
  }
  else {
    email.classList.remove('error');
  }
}
if (containsErrors == false){
  addSignature(person);
  toggleModal(person);
  for (let i = 0; i<petitionInputs.length; i = i + 1){
    petitionInputs[i].value = "";
    containsErrors = false;
  }
}
}
signNowButton.addEventListener('click', validateForm);


//make sure that email contains .com //

// create a container for the scrolling functions
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease',
}

// create a reveal function

let revealableContainers = document.querySelectorAll('.revealable');
const reveal = () => {
  for (let i = 0; i<revealableContainers.length; i = i + 1){
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
      if(topOfRevealableContainer < windowHeight - animation.revealDistance) {
        revealableContainers[i].classList.add('active');
  } else {
    revealableContainers[i].classList.remove('active');
  }
}
}
// add event listener for scrolling
  window.addEventListener('scroll', reveal);

// create a reveal function that waits 500 ms

// let revealableContainers = document.querySelectorAll('.revealable');
// const reveal = () => {
//   for (let i = 0; i<revealableContainers.length; i = i + 1){
//     let windowHeight = window.innerHeight;
//     let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
//       if(topOfRevealableContainer < windowHeight - animation.revealDistance) {
//         revealableContainers[i].classList.add('active');
//   } else {
//     revealableContainers[i].classList.remove('active');
//   }
// }
// }
// // add event listener for scrolling
//   window.addEventListener('scroll', () => {
//     setTimeout(reveal, 500);
//   });



// Toggle Modal
// let scaleFactor = 0.7; 
// let modalImage = document.getElementById('modalImage');
const toggleModal = (person) =>{

  let intervalId = setInterval(scaleImage, 500)
  let modal = document.getElementById('thanks-modal');
  let modalContent = document.querySelector('#thanks-modal-content');
  modal.style.display = "flex";
  modalContent.innerHTML = `<h2>Thanks ${person.name}!</h2><p>We will contact you at ${person.email} to confirm your submission.</p>`;
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
    
  }, 3000);
}


// style the modal

let scaleFactor = 0.7;
let modalImage = document.getElementById('modalImage');
const scaleImage = () =>{
  scaleFactor = scaleFactor === 1 ? 0.8 : 1
  modalImage.style.transform = `scale(${scaleFactor})`;
}


// modalButton functionality
let modalButton = document.getElementById('modal-button');
modalButton.addEventListener('click', () => {
  document.getElementById('thanks-modal').style.display = 'none';

  
})
