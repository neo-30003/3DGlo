const validateForm = () => {
  const nameInputs = document.querySelectorAll("input[placeholder='Ваше имя']");
  const textInputs = document.querySelectorAll(
    "input[placeholder='Ваше сообщение']"
  );
  const mailInputs = document.querySelectorAll("input[type='email']");
  const telInputs = document.querySelectorAll("input[type='tel']");

  nameInputs.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я ]/g, "");
    });
  });
  textInputs.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-Я \d.,]/g, "");
    });
  });
  mailInputs.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\w@-_.!~*']/gi, "");
    });
  });
  telInputs.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d+()-]/g, "");
    });
  });
};

export default validateForm;
