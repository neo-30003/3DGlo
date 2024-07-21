import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import scroll from "./modules/scroll";
import calculator from "./modules/calculator";
import validateForm from "./modules/validateForm";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";

timer("12 august 2024");
menu();
modal();
scroll();
calculator(100);
validateForm();
tabs();
slider(".portfolio-content", ".portfolio-item", ".dot");
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form3",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
