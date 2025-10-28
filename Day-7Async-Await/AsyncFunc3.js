//Fetching data with Async/Awiat

async function fetchUserData() {
    try{
        console.log("Fetching user data...");
          const response=await fetch("https://jsonplaceholder.typicode.com/users");
          const data =await response.json();
          console.log("User data fetched successfully:",data);

    }catch(error){
        console.log("error whil fetching data",error);
    }
}

fetchUserData();