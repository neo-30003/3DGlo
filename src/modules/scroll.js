const scroll = () => {
  const menu = document.querySelector("menu");
  const links = menu.querySelectorAll("ul>li>a");
  const scrollBtn = document.querySelector("main>a");
  const allLinks = [...links, scrollBtn];

  allLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const id = link.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    });
  });
};

export default scroll;
