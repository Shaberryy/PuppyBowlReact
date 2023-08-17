const cohortName = '2306-GHP-ET-WEB-FT-SF';
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

 const fetchPuppies = async() => { 
    try{
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    // console.log(result);
    const players = result.data.players;
    console.log(players);
    }catch (error){
        console.error(error);
    };
}
export default fetchPuppies;