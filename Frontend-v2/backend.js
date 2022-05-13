export const getAll = (setData) => {
    console.log("getAll")
    fetch('https://reactnative.dev/movies.json')
        .then(response => response.json())
        .then(responseJson => { setData(responseJson) })
        .catch(error => console.log("Error:", error))
}
 /*https://pokeapi.co/api/v2/pokemon*/