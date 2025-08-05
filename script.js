document.addEventListener('mousemove', (e) => {
    const spotlight = document.querySelector('.spotlight');
    spotlight.style.left = `${e.clientX}px`;
    spotlight.style.top = `${e.clientY}px`;
});

document.addEventListener('click', () => {
    const spotlight = document.querySelector('.spotlight');
    spotlight.classList.toggle('reverse');
});

const linkIcons = document.querySelectorAll('.link-icon');
linkIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.src = icon.getAttribute('data-hover-icon');
    });
    icon.addEventListener('mouseout', () => {
        icon.src = icon.getAttribute('data-default-icon');
    });
});

const profilePics = document.querySelectorAll('.profile-pic');
profilePics.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.src = icon.getAttribute('data-hover-icon');
    });
    icon.addEventListener('mouseout', () => {
        icon.src = icon.getAttribute('data-default-icon');
    });
});