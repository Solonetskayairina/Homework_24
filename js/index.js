    input.onblur = function() {
        input.classList.add('invalid');
        email.innerHTML = ''
    };

    input.onfocus = function() {
        if (this.classList.contains('invalid')) {
            this.classList.remove('invalid');
            email.innerHTML = 'Enter your email please';
        }
    };

