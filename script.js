const inputNode = document.getElementById('text-input');
const addButtonNode = document.getElementById('add-button');
const listNode = document.getElementById('items-list');
const readOnlyNode = document.getElementById('read-only');

const getItemsList = () => {
  return Array.from(listNode.childNodes).map((item) => item.innerText);
};

const setItemsList = (items) => {
  listNode.innerHTML = '';
  items.forEach((text) => {
    listNode.appendChild(createListItem(text));
  });
};

const saveToLocalStorage = () => {
  localStorage.setItem('itemsList', JSON.stringify(document.getItemsList()));
};

const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('itemsList'));
};

const addItemToList = () => {
  if (!readOnlyNode.checked) {
  const newItemText = inputNode.value;
  listNode.appendChild(createListItem(newItemText));
  inputNode.value = '';
  }
};

const createListItem = (innerText) => {
const itemNode = document.createElement('li');

const textNode = document.createElement('span');
textNode.innerText = innerText;

const removeButtonNode = document.createElement('button');
removeButtonNode.innerHTML = '&times';
removeButtonNode.onclick = () => {
    if (!readOnlyNode.checked){
      itemNode.remove();
  }
};

removeButtonNode.className = 'remove-button';

itemNode.appendChild(textNode);
itemNode.appendChild(removeButtonNode);

itemNode.className = 'item';

return itemNode;
};

addButtonNode.addEventListener('click', addItemToList);

