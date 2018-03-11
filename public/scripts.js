const button = document.querySelector('button');

const fetchSunsets = async () => {
  console.log('button')
  const sunsets = await fetch('localhost:3000/sunsets');
  console.log(sunsets);
};

button.addEventListener('click', fetchSunsets)

