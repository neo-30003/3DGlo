import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import scroll from "./modules/scroll";
import calculator from "./modules/calculator";
import form from "./modules/form";
import tabs from "./modules/tabs";
import slider from "./modules/slider";

timer("12 august 2024");
menu();
modal();
scroll();
calculator(100);
form();
tabs();
slider(".portfolio-content", ".portfolio-item", ".dot");
