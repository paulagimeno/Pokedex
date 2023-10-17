async function getGameInfo() {
    let allGames = [];
  
    for (let i = 1; i < 31; i++) {
      const response = await fetch(`http://localhost:5051/juegos/${i}`);
      const resultado = await response.json();
      allGames.push(resultado);
    }
  
    console.log(allGames);
    return allGames;
  }
  
  // Assuming you have an HTML input element with the ID "searchInput"
  const searchInput = document.getElementById('searchInput');
  
  // Event listener for input changes
  searchInput.addEventListener('input', () => {
    getGameInfo().then((allGames) => {
      gameSearch(searchInput.value, allGames);
    });
  });
  
  function gameSearch(filtro, allGames) {
    // Flatten the array of arrays into a single array of games
    const flattenedGames = allGames.flat();
  
    const filteredGames = flattenedGames.filter((game) =>
      game.title.toLowerCase().includes(filtro.toLowerCase()) ||
      game.genre.toLowerCase().includes(filtro.toLowerCase()) ||
      game.category.toLowerCase().includes(filtro.toLowerCase())
    );
  
    console.log(filteredGames);
    // displayGames(filteredGames);
  }
  
  // Function to display filtered games
//   function displayGames(filteredGames) {
//     // Implement your logic to display the filtered games here
//   }