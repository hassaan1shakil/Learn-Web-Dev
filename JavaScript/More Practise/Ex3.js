async function fetch_jokes() {

  jokes_array = [];
  promises = [];
  
  for (let i = 0; i < 10; i++){

    promises.push(fetch(`https://icanhazdadjoke.com `, {
    method: 'GET',
    headers: {
      'Accept': 'application/json' // May not be strictly necessary for GET requests
    }
  }))
  }

  const responses = await Promise.all(promises);
  console.log(responses);

  for (const element of responses) {
    text = await element.json();
    jokes_array.push(text.joke);
  }

  console.log(jokes_array);
  return jokes_array;
}

async function main() {

  try {
    let jokes = await fetch_jokes();
    random = Math.floor(1 + Math.random() * 9);

    div = document.querySelector(".joke");

    window.onload(div.innerHTML = jokes[random]);

  } catch (error) {

    console.log(error);
  }
}

main()