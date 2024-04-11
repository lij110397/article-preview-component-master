const authorShareBtn = document.querySelector("#authorShareBtn");
const socialShareBtn = document.querySelector("#socialShareBtn");
const socialPanel = document.querySelector(".article-review-socialpanel");
const authorPanel = document.querySelector(".article-review-author");

// codes for adjusting the social panel according to the position of authorShareBtn
// It is not using at the moment, I use absolute position at the moment.
// if (window.innerWidth > 910) {
//   const buttonRect = shareButton.getBoundingClientRect();
//   const buttonX = buttonRect.left;
//   const buttonY = buttonRect.top;
//   //use the button position to set panel position
//   socialPanel.style.position = "absolute";
//   socialPanel.style.top = `${buttonY - 100}px`;
//   socialPanel.style.left = `${buttonX - 150}px`;
// }

function toggleSocialPanel() {
  if(socialPanel.classList.contains("hidden")){
    //set the styles and show the social panel
    socialPanel.classList.remove("hidden");
    authorPanel.classList.add("article-review-author_hidden");
    
  }else {
    socialPanel.classList.add('hidden');
    authorPanel.classList.remove("article-review-author_hidden");
  }
}

authorShareBtn.onclick = toggleSocialPanel;
socialShareBtn.onclick = toggleSocialPanel;
