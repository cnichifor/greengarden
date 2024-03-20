function saveUser(username, password) {
    // Validate inputs
    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }
  
    if (password.trim() === '') {
      alert('Please enter a password');
      return;
    }
  
    // Check if the user already exists in local storage
    const users = getUsersFromLocalStorage();
    const existingUser = users.find(user => user.username === username);
  
    if (existingUser) {
      // User already exists, perform login
      if (existingUser.password === password) {
        alert('Login successful');
        window.location.href = '../Home/index.html';
        // Save the existing user to session storage
        saveCurrentUserToSessionStorage(existingUser);
        // Perform any login-related actions here
        // Access the existing user's cart items if available
        const cartitems = existingUser.cartitems || [];
        // Perform any cart-related actions here
      } else {
        alert('Incorrect password');
        // Handle incorrect password scenario
      }
    } else {
      // User does not exist, save new user with an empty cart
      const newUser = { username, password, cartitems: [] };
      users.push(newUser);
      saveUsersToLocalStorage(users);
      alert('New user saved');
      // Perform any new user registration actions here
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
    // Retrieve the users from local storage
    const usersJson = localStorage.getItem('users');
    return usersJson ? JSON.parse(usersJson) : [];
  }
  
  function saveUsersToLocalStorage(users) {
    // Save the users in local storage
    const usersJson = JSON.stringify(users);
    localStorage.setItem('users', usersJson);
  }
  
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  
  // Attach the saveUser function to the form's submit event
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = usernameInput.value;
    const password = passwordInput.value;
    saveUser(username, password);
  });
  