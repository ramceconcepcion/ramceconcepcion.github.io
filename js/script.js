function Typing() {
    var typed1 = function () {
        new Typed('.line-1', {
            strings: ["Initializing Boot Agent v2.3.2...^500"],
            typeSpeed: 10,
            onComplete: typed2
        });
    }

    var typed2 = function () {
        new Typed('.line-2', {
            strings: ["RC BIOS DETECTED^100"],
            typeSpeed: 10,
            onComplete: typed3
        })
    }

    var typed3 = function () {
        new Typed('.line-3', {
            strings: ["LOADING RCBIOS-5.23.54.961 R3-AJ53-C1^100"],
            typeSpeed: 10,
            onComplete: typed4
        });
    }

    var typed4 = function () {
        new Typed('.line-4', {
            strings: [
                "[##.................] 10% ^50",
                "[##########.........] 50% ^50",
                "[#################..] 90% ^50",
                "[###################] Done! ^200",
            ],
            typeSpeed: 5,
            onComplete: typed5
        });
    }

    var typed5 = function () {
        new Typed('.line-5', {
            strings: ["WELCOME TO RAMCE CONCEPCION TERMLINK"],
            typeSpeed: 10,
            onComplete: typed6
        });
    }

    var typed6 = function () {
        new Typed('.line-6', {
            strings: ["Execute 'rctermlink inquire' to access information repository^500"],
            typeSpeed: 20,
            onComplete: typed7
        });
    }

    var typed7 = function () {
        new Typed('.line-7', {
            strings: ["> rctermlink inquire^200"],
            typeSpeed: 50,
            onComplete: typed8
        });
    }

    var typed8 = function () {
        new Typed('.line-8', {
            strings: ["Processing request...^500"],
            typeSpeed: 10,
            onComplete: redirect
        });
    }

    typed1();
}

function redirect() {
    window.location.href = "https://ramceconcepcion.tk/about-me"
}

window.onload = function () {
    Typing();
}