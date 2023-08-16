const appendInputText = () => {
  $("ul").append($("<li/>").text($("#name").val()));
};
const appendToInputText = () => {
  $("<li/>").text($("#name").val()).appendTo($("ul"));
};
const prependInputText = () => {
  $("ul").prepend($("<li/>").text($("#name").val()));
};
const afterInputText = () => {
  $("ul li:last").after($("<li/>").text($("#name").val()));
};
const beforeInputText = () => {
  $("ul li:last").before($("<li/>").text($("#name").val()));
};
const htmlInputText = () => {
  $("#context").html($("#text").val());
};
const remove = () => {
  $("ul li:last").remove();
};
$("form").submit(function () {
  console.log("test");
  $(this).find(":submit").prop("disabled", "true");
});
const saveLocalStorage = () => {
  localStorage.setItem("demo", $("#localStorage").val());
};
const alertLocalStorage = () => {
  alert(localStorage.getItem("demo"));
};
const getWeatherInfo = () => {
  const apiid = "";
  const spinner = $(".box-text-dummy-img__loading")[0];
  spinner.classList.remove("loaded");
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=35.705366958598404&lon=139.7521086178167&exclude=current&appid=${apiid}`
    )
    // 通信が成功したとき
    .then((response) => {
      $("#currentWeather").text(
        "current weather : " + response.data.weather[0].description
      );
    })
    // 通信が失敗したとき
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      // 送信後の共通処理
      spinner.classList.add("loaded");
    });
};
const clearWeatherInfo = () => {
  $("#currentWeather").text("");
};
const showDays = () => {
  dayjs.locale("ja");

  alert(dayjs().format("YYYY/MM/DD")); // YYYY/MM/DD 形式で出力
};
