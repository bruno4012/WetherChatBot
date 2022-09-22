class Fetch {
  async getCurrent(input) {
    const myKey = "c09e2bb893f8206f67c0d7dfee072809";

    //make request to url

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
