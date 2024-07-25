const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");

  const showStatus = (status) => {
    const img = document.createElement("img");
    const statusList = {
      load: {
        alert: `<span style="color:white"></span>`,
        img: "./images/status/load.gif",
      },
      success: {
        alert: `<span style="color:white;padding-left= 15px">Спасибо! Наш менеджер свяжется с вами!</span>`,
        img: "./images/status/Yes.png",
      },
      error: {
        alert: `<span style="color:white;padding-left= 10px">Ошибка...</span>`,
        img: "./images/status/error.png",
      },
    };

    statusBlock.innerHTML = statusList[status].alert;
    img.src = statusList[status].img;
    img.height = 30;
    statusBlock.append(img, statusBlock.firstChild);
  };

  const validate = (list) => {
    let success = true;
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    showStatus("load");
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          showStatus("success");
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          showStatus("error");
        });

      setTimeout(() => {
        statusBlock.textContent = "";
      }, 5000);
    } else {
      alert("Данные не валидны");
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место, будте добры!");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;
