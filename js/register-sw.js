if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register(superpwa_sw.url)
            .then(function (registration) {
                console.log("SuperPWA service worker ready");
                if (registration.active) {
                    registration.update();
                }

                function showSnackbar() {
                    const snackbar = document.createElement("div");
                    snackbar.className = "snackbar";
                    const message = document.createElement("p");
                    message.id = "snackbar-msg";
                    snackbar.appendChild(message);
                    const closeButton = document.createElement("button");
                    closeButton.type = "button";
                    closeButton.className = "snackbar-close";
                    closeButton.setAttribute("aria-label", "snackbar-close");
                    closeButton.addEventListener("click", hideSnackbar);
                    closeButton.innerHTML = "&times;";
                    snackbar.appendChild(closeButton);
                    document.body.appendChild(snackbar);
                    window.addEventListener("online", updateStatus);
                    window.addEventListener("offline", updateStatus);
                    window.addEventListener("fetch", function () {
                        console.log("fetch");
                    });
                    snackbar.addEventListener("mouseover", function () {
                        if (n !== null) {
                            clearTimeout(n);
                        }
                    });
                    snackbar.addEventListener("mouseout", function () {
                        if (n !== null) {
                            n = setTimeout(hideSnackbar, 2500);
                        }
                    });
                }

                function updateStatus() {
                    if (navigator.onLine) {
                        if (e) {
                            showSnackbar("You're back online <a href=\"javascript:location.reload()\">refresh</a>");
                            e = false;
                        }
                    } else {
                        showSnackbar("You're currently offline");
                        e = true;
                    }
                }

                function showSnackbar(message) {
                    document.getElementById("snackbar-msg").innerHTML = message;
                    document.body.classList.add("snackbar--show");
                    clearTimeout(n);
                    n = setTimeout(hideSnackbar, t);
                }

                function hideSnackbar() {
                    document.body.classList.remove("snackbar--show");
                }

                var r;
                window.addEventListener("beforeinstallprompt", function (e) {
                    if (r || (r = e), r) {
                        if (superpwa_sw.disable_addtohome === 1) {
                            r.preventDefault();
                        }
                        var banners = document.getElementsByClassName("superpwa-sticky-banner");
                        if (banners.length) {
                            if (r.preventDefault(), (superpwa_sw.enableOnDesktop !== 1 && !window.mobileCheck())) {
                                return;
                            }
                            if (typeof super_check_bar_closed_or_not === "function" && !super_check_bar_closed_or_not()) {
                                return;
                            }
                            for (var i = 0; i < banners.length; i++) {
                                banners[i].getAttribute("data-show");
                                banners[i].style.display = "flex";
                            }
                            document.cookie = "hidecta=no";
                        }
                    }
                }));

                window.addEventListener("appinstalled", function (e) {
                    var banners = document.getElementsByClassName("superpwa-sticky-banner");
                    if (banners.length) {
                        for (var i = 0; i < banners.length; i++) {
                            banners[i].getAttribute("data-show");
                            document.cookie = "hidecta=yes";
                            banners[i].style.display = "none";
                        }
                    }
                });

                var addViaClass = document.getElementsByClassName("superpwa-add-via-class");
                if (addViaClass !== null) {
                    for (var i = 0; i < addViaClass.length; i++) {
                        addViaClass[i].addEventListener("click", addToHome);
                    }
                }

                function addToHome() {
                    if (r) {
                        r.prompt();
                        r.userChoice.then(function (choiceResult) {
                            if (choiceResult.outcome === "accepted") {
                                var banners = document.getElementsByClassName("superpwa-sticky-banner");
                                if (banners) {
                                    for (var i = 0; i < banners.length; i++) {
                                        banners[i].getAttribute("data-show");
                                        banners[i].style.display = "none";
                                    }
                                }
                                console.log("User accepted the prompt");
                            } else {
                                console.log("User dismissed the prompt");
                            }
                            r = null;
                        });
                    }
                }
            })
            .catch(function (error) {
                console.log("Registration failed with " + error);
            });
    });
}

window.mobileCheck = function () {
    let isMobile = false;
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android|bb\d+|meego.+\mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon
