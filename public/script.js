window.onload = function() {
    fetch('/message')
        .then(response => response.text())
        .then(data => {
            document.getElementById('message').textContent = data;
        });
};
