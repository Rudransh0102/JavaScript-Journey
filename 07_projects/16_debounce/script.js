// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️

// Debounce function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

// Function to fetch user data from randomuser.me API
const fetchUserData = async (searchText) => {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=10&nat=us&inc=name,picture,email,gender&name=${searchText}`);
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

// Function to display user card
const displayUserCard = (userData) => {
  const userCard = document.getElementById('user-card');
  if (userData) {
    userCard.innerHTML = `
      <div class="user-info">
        <img src="${userData.picture.large}" alt="User Avatar" />
        <h2>${userData.name.first} ${userData.name.last}</h2>
        <p>Email: ${userData.email}</p>
        <p>Gender: ${userData.gender}</p>
      </div>
    `;
    userCard.style.display = 'block'; // Show the user card
  } else {
    userCard.style.display = 'none'; // Hide the user card if no matching user found
  }
};

// Function to handle user input and make API calls
const handleInput = debounce(async (event) => {
  const userInput = event.target.value.trim();
  if (userInput) {
    const userData = await fetchUserData(userInput);
    displayUserCard(userData);
  } else {
    document.getElementById('user-card').style.display = 'none'; // Hide the user card if no input
  }
}, 2000); // Debounce time in milliseconds

// Attach input event listener to the search box
document.getElementById('user-input').addEventListener('input', handleInput);
