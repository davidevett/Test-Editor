const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

window.addEventListener('beforeinstallprompt', async (event) => {
    event.preventDefault();
    const { userChoice } = await event.prompt();

    if (userChoice.outcome === 'accepted') {
        console.log('User accepted the PWA installation');
    } else {
        console.log('User dismissed the PWA installation');
    }

    // Save the user's decision for future use
    localStorage.setItem('pwaInstallationChoice', userChoice.outcome);
    return false; // Prevent the browser from showing the native install prompt again
});

// TODO: Implement a click event handler on the `butInstall` element

butInstall.addEventListener('click', async () => {
    // Check if the user has already made a decision about installing the PWA
    const pwaInstallationChoice = localStorage.getItem('pwaInstallationChoice');

    if (pwaInstallationChoice === 'accepted') {
        console.log('User has already accepted the PWA installation');
    } else {
        console.log('User has not accepted the PWA installation');
    }

    // Prompt the user to install the PWA
    const { outcome } = await window.registration.showInstallPrompt();

    if (outcome === 'installed') {
        console.log('User installed the PWA');
    } else {
        console.log('User dismissed the PWA installation');
    }

    // Update the user's decision for future use
    localStorage.setItem('pwaInstallationChoice', outcome);
});

// TODO: Add an handler for the `appinstalled` event

window.addEventListener('appinstalled', (event) => {
    console.log('User has already installed the PWA');
});
