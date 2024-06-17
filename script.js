let isIgnite = false

function changeCard(event) {
    const card = event.currentTarget
    const backgroundImage = isIgnite
    ? "url(./assets/image/bg-explorer.svg"
    : "url(./assets/image/bg-ignite.svg";
    isIgnite = !isIgnite;
    card.style.backgroundImage = backgroundImage 
}