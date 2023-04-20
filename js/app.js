let accordionBtn = document.querySelectorAll(`.question`);
let accordionContent = document.querySelectorAll(`.answer`);
let accordionIcon = document.querySelectorAll(`.icon`);

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener(`click`, () => {
    if (parseInt(accordionContent[i].style.height) != accordionContent[i].scrollHeight) {
      accordionContent[i].style.height = accordionContent[i].scrollHeight + `px`;
      accordionBtn[i].style.color = `#5956e9`;
      accordionIcon[i].src = "/assets/minus.svg"
    } else {
      accordionContent[i].style.height = `0px`;
      accordionBtn[i].style.color = `#000`;
      accordionIcon[i].src = "/assets/plus.svg"
    };

    for (let j = 0; j < accordionContent.length; j++) {
      if (j !== i) {
        accordionContent[j].style.height = `0px`;
        accordionBtn[j].style.color = `#000`;
        accordionIcon[j].src = "/assets/plus.svg"
      };
    };
  });
};