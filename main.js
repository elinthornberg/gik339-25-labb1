
const checkBox = document.getElementById("divStyle");
const textFields = document.querySelectorAll('.textfield');
const button = document.querySelector('.button');
const output = document.getElementsByName('output');


function handleEvent (e){
   console.log('Den som genererade: ', e.target);
   const temp = e.target.name;

   if(temp === "content") {
    const value = e.target.value;
    output[0].innerHTML = '<p>' + value + '</p>';
   }
}


checkBox.addEventListener('change', (e) => {
    const color = textFields[0].value;
    output[0].style.backgroundColor = color;
});

textFields.forEach((fields) => fields.addEventListener('blur', handleEvent));

button.addEventListener('click', (e) => {
    output[0].remove();
});

