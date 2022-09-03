const labes = document.querySelectorAll('.form-control label')

labes.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter,idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
        .join('');
})