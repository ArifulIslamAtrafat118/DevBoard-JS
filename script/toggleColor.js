document.getElementById("change-color-theme")
    .addEventListener('click', function() {
        let colors= ["bg-red-50", "bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-purple-100", "bg-orange-100", "bg-amber-100", "bg-lime-200", "bg-teal-100", "bg-cyan-100", "bg-sky-100", "bg-violet-300", "bg-pink-200"];
        document.body.classList.remove(...colors);
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.classList.add(randomColor, "transition-colors" , "duration-500");
        console.log(randomColor);
    })