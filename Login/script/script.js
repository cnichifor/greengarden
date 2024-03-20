
function saveUser(username, password) {
    // Validarea imputurilo
    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }
  
    if (password.trim() === '') {
      alert('Please enter a password');
      return;
    }
  
    // Verificarea daca utilizatorul exista
    const users = getUsersFromLocalStorage();
    const existingUser = users.find(user => user.username === username);
  
    //Logarea daca utilizatorul exista
    if (existingUser) {
      if (existingUser.password === password) {
        alert('Login successful');
        window.location.href = '../Home/index.html';
        //Salvarea contului logat in sesiune
        saveCurrentUserToSessionStorage(existingUser);
        //Accesarea cartului contului
        const cartitems = existingUser.cartitems || [];
      } else {
        alert('Incorrect password');
      }
    } else {
      //Utilizatorul nu exista => crearea contului nou
      const newUser = { username, password, cartitems: [] };
      users.push(newUser);
      saveUsersToLocalStorage(users);
      alert('New user saved');
    }
  }
  
  function saveCurrentUserToSessionStorage(user) {
    const currentUserJson = JSON.stringify(user);
    sessionStorage.setItem('currentUser', currentUserJson);
  }
  
  function getCurrentUserFromSessionStorage() {
    const currentUserJson = sessionStorage.getItem('currentUser');
    return currentUserJson ? JSON.parse(currentUserJson) : null;
  }
  
  function getUsersFromLocalStorage() {
    const usersJson = localStorage.getItem('users');
    return usersJson ? JSON.parse(usersJson) : [];
  }
  
  function saveUsersToLocalStorage(users) {
    const usersJson = JSON.stringify(users);
    localStorage.setItem('users', usersJson);
  }
  
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  
  //Crearea evenimentului
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = usernameInput.value;
    const password = passwordInput.value;
    saveUser(username, password);
  });
  