// If an API requires an API Key, check where the API Key should be
// provided (header or URL). If the API must be provided in the url
// simple add another query parameter using the &
// If the key must be provided in the header, see the following example

fetch("https://api.weatherapi.com/v1/future.json?q=atlanta&dt=2024-04-15&key=b464c034931742bca5e150835241803")
  .then((response) => response.json())
  .then((result) => {
    console.log(result.forecast.forecastday[0].day.maxtemp_f);
  })


  // Example of passing an API key in the header
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", "b464c034931742bca5e150835241803");
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  
  fetch("api.weatherapi.com/v1/future.json?q=atlanta&dt=2024-04-15&key=b464c034931742bca5e150835241803", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));