const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('input', Changeing));
// inputs.forEach(input => input.addEventListener('mousemove', Changeing));

function Changeing(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};
