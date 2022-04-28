function getNumberOrString(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
      return value
    } else {
      return number_value
    }
  }
  
  
  
  document.getElementById('button').addEventListener('click', (event) => {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = getNumberOrString(document.getElementById('text').value);
  
    element_list.appendChild(new_li);
  
  });

  document.getElementById('btn_del').addEventListener('click', (event) => {
    let element_list2 = document.getElementById('list');
    element_list2.innerText = 0;
  
  });