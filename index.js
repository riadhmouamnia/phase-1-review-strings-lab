const currentUser = "Grace Hopper";

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = welcomeMessage.toLocaleUpperCase();

const shortGreeting = `Welcome,  ${currentUser.slice(0, 5)}!`;

console.log(shortGreeting);
