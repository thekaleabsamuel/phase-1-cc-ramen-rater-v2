// Callbacks
const handleClick = (ramen) => {
  // Display details of the clicked ramen
  // You can update the DOM to display the details
};

const addSubmitListener = (form) => {
  // Add submit event listener to the form
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const newRamen = {
      name: formData.get('name'),
      restaurant: formData.get('restaurant'),
      image: formData.get('image'),
      rating: formData.get('rating'),
      comment: formData.get('comment'),
    };
    // Add the new ramen to the DOM or perform other actions
  });
};

const displayRamens = async () => {
  try {
    // Fetch the list of ramens from the server
    const response = await fetch('http://localhost:3000'); // Assuming server is running locally on port 3000
    const ramens = await response.json();
    
    // Display ramens as <img> elements inside #ramen-menu
    const ramenMenuDiv = document.getElementById('ramen-menu');
    ramens.forEach((ramen) => {
      const img = document.createElement('img');
      img.src = ramen.image;
      // Add other attributes or event listeners if needed
      ramenMenuDiv.appendChild(img);
    });
  } catch (error) {
    console.error('Error fetching ramens:', error);
  }
};

const main = () => {
  displayRamens(); // Invoke displayRamens here
  const ramenForm = document.getElementById('new-ramen');
  addSubmitListener(ramenForm); // Invoke addSubmitListener here
};

main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
