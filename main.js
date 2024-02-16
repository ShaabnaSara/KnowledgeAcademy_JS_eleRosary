
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click' , function () {
        const countElement = this.parentNode.querySelector('.card-text');
        console.log(countElement);

        var count = parseInt(countElement.textContent) || 0; 
        console.log(count);

        count++;
        countElement.textContent = count;


    });
});









