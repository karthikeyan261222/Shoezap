const nikeYellowSneaker = document.querySelector('.nike_yellow_sneaker');
const nikeBlackAirJordan = document.querySelector('.nike_black_air_jordan');
const nikeBlackBasketballShoe = document.querySelector('.nike_black_basketball_shoe');
const nikeBlackGolfShoe = document.querySelector('.nike_black_golf_shoe'); // corrected class name
const nikewhitegreenjorden = document.querySelector('.nike_white-green_jorden');
const nike_black_soccer_shoe = document.querySelector('.nike_black_soccer_shoe');
const nike_black_tennis_shoe=document.querySelector('.nike_black_tennis_shoe');
const nike_blue_white_sneaker=document.querySelector('.nike_blue-white_sneaker');
const nike_blazer_court_shoe=document.querySelector('.nike_blazer_court_shoe');
const nike_green_golf_shoe=document.querySelector('.nike_green_golf_shoe');
const nike_green_tennis_shoe=document.querySelector('.nike_green_tennis_shoe');
const nike_men_workout_shoe=document.querySelector('.nike_men_workout_shoe');
const nike_orange_tennis_shoe=document.querySelector('.nike_orange_tennis_shoe');
const nike_red_balck_soccer_shoe=document.querySelector('.nike_red_balck_soccer_shoe');






const nikeYellowSneakerLink = document.querySelector('.shoe-link[data-shoe="nike_yellow_sneaker"]');
const nikeBlackAirJordanLink = document.querySelector('.shoe-link[data-shoe="nike_black_air_jordan"]');
const nikeBlackBasketballShoeLink = document.querySelector('.shoe-link[data-shoe="nike_black_basketball_shoe"]');
const nikeBlackGolfShoeLink = document.querySelector('.shoe-link[data-shoe="nike_black_golf_shoe"]'); // corrected class name
const nikewhitegreenjordenLink = document.querySelector('.shoe-link[data-shoe="nike_white-green_jorden"]'); // corrected class name
const nike_black_soccer_shoeLink = document.querySelector('.shoe-link[data-shoe="nike_black_soccer_shoe"]');
const nike_black_tennis_shoeLink = document.querySelector('.shoe-link[data-shoe="nike_black_tennis_shoe"]');
const nike_blue_white_sneakerLink = document.querySelector('.shoe-link[data-shoe="nike_blue-white_sneaker"]');
const nike_blazer_court_shoeLink = document.querySelector('.shoe-link[data-shoe="nike_blazer_court_shoe"]');
const nike_green_golf_shoeLink = document.querySelector('.shoe-link[data-shoe="nike_green_golf_shoe"]');
const nike_green_tennis_shoeLink = document.querySelector('.shoe-link[data-shoe="nike_green_tennis_shoe"]');
const nike_men_workout_shoeLink = document.querySelector('.shoe-link[data-shoe="nike_men_workout_shoe"]');
const nike_orange_tennis_shoeLink = document.querySelector('.shoe-link[data-shoe="nike_orange_tennis_shoe"]');
const nike_red_balck_soccer_shoeLink = document.querySelector('.shoe-link[data-shoe="nike_red_balck_soccer_shoe"]');

nikeYellowSneakerLink.addEventListener('click', () => {
    nikeYellowSneaker.style.opacity = '1';
    nikeYellowSneaker.style.transform = 'rotate(0deg)';

    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackBasketballShoe.style.opacity = '0';
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0'
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});

nikeBlackAirJordanLink.addEventListener('click', () => {
    nikeBlackAirJordan.style.opacity = '1';
    nikeBlackAirJordan.style.transform = 'rotate(0deg)';

    nikeBlackBasketballShoe.style.opacity = '0';
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikeYellowSneaker.style.opacity = '0';
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0'
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_men_workout_shoe.style.opacity = '0'
    nike_men_workout_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});

nikeBlackBasketballShoeLink.addEventListener('click', () => {
    nikeBlackBasketballShoe.style.opacity = '1';
    nikeBlackBasketballShoe.style.transform = 'rotate(0deg)';

    nikeYellowSneaker.style.opacity = '0';
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0'
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_men_workout_shoe.style.opacity = '0'
    nike_men_workout_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});

nikeBlackGolfShoeLink.addEventListener('click', () => {
    nikeBlackGolfShoe.style.opacity = '1';
    nikeBlackGolfShoe.style.transform = 'rotate(0deg)';

    nikeYellowSneaker.style.opacity = '0';
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackBasketballShoe.style.opacity = '0'; // corrected to hide basketball shoe
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0'
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_men_workout_shoe.style.opacity = '0'
    nike_men_workout_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});
nikewhitegreenjordenLink.addEventListener('click', () => {
    nikewhitegreenjorden.style.opacity = '1';
    nikewhitegreenjorden.style.transform = 'rotate(0deg)';

    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackBasketballShoe.style.opacity = '0';
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikeYellowSneaker.style.opacity = '0'; // corrected to hide golf shoe
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0'
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_men_workout_shoe.style.opacity = '0'
    nike_men_workout_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});
nike_black_soccer_shoeLink.addEventListener('click', () => {
    nike_black_soccer_shoe.style.opacity = '1';
    nike_black_soccer_shoe.style.transform = 'rotate(0deg)';


    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackBasketballShoe.style.opacity = '0';
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikeYellowSneaker.style.opacity = '0'; // corrected to hide golf shoe
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_men_workout_shoe.style.opacity = '0'
    nike_men_workout_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});
nike_black_tennis_shoeLink.addEventListener('click', () => {
    nike_black_tennis_shoe.style.opacity = '1';
    nike_black_tennis_shoe.style.transform = 'rotate(0deg)';


    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackBasketballShoe.style.opacity = '0';
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikeYellowSneaker.style.opacity = '0'; // corrected to hide golf shoe
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_men_workout_shoe.style.opacity = '0'
    nike_men_workout_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});
nike_blue_white_sneakerLink.addEventListener('click', () => {
    nike_blue_white_sneaker.style.opacity = '1';
    nike_blue_white_sneaker.style.transform = 'rotate(0deg)';


    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackBasketballShoe.style.opacity = '0';
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikeYellowSneaker.style.opacity = '0'; // corrected to hide golf shoe
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_men_workout_shoe.style.opacity = '0'
    nike_men_workout_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});
nike_blazer_court_shoeLink.addEventListener('click', () => {
    nike_blazer_court_shoe.style.opacity = '1';
    nike_blazer_court_shoe.style.transform = 'rotate(0deg)';


    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackBasketballShoe.style.opacity = '0';
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikeYellowSneaker.style.opacity = '0'; // corrected to hide golf shoe
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_men_workout_shoe.style.opacity = '0'
    nike_men_workout_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});
nike_green_golf_shoeLink.addEventListener('click', () => {
    nike_green_golf_shoe.style.opacity = '1';
    nike_green_golf_shoe.style.transform = 'rotate(0deg)';


    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackBasketballShoe.style.opacity = '0';
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikeYellowSneaker.style.opacity = '0'; // corrected to hide golf shoe
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_men_workout_shoe.style.opacity = '0'
    nike_men_workout_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});
nike_green_tennis_shoeLink.addEventListener('click', () => {
    nike_green_tennis_shoe.style.opacity = '1';
    nike_green_tennis_shoe.style.transform = 'rotate(0deg)';


    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackBasketballShoe.style.opacity = '0';
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikeYellowSneaker.style.opacity = '0'; // corrected to hide golf shoe
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_men_workout_shoe.style.opacity = '0'
    nike_men_workout_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});
nike_men_workout_shoeLink.addEventListener('click', () => {
    nike_men_workout_shoe.style.opacity = '1';
    nike_men_workout_shoe.style.transform = 'rotate(0deg)';


    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackBasketballShoe.style.opacity = '0';
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikeYellowSneaker.style.opacity = '0'; // corrected to hide golf shoe
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});
nike_orange_tennis_shoeLink.addEventListener('click', () => {
    nike_orange_tennis_shoe.style.opacity = '1';
    nike_orange_tennis_shoe.style.transform = 'rotate(0deg)';


    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackBasketballShoe.style.opacity = '0';
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikeYellowSneaker.style.opacity = '0'; // corrected to hide golf shoe
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_men_workout_shoe.style.opacity = '0'
    nike_men_workout_shoe.style.transform = 'rotate(-90deg)';
    nike_red_balck_soccer_shoe.style.opacity = '0'
    nike_red_balck_soccer_shoe.style.transform = 'rotate(-90deg)';
});
nike_red_balck_soccer_shoeLink.addEventListener('click', () => {
    nike_red_balck_soccer_shoe.style.opacity = '1';
    nike_red_balck_soccer_shoe.style.transform = 'rotate(0deg)';


    nikeBlackAirJordan.style.opacity = '0';
    nikeBlackAirJordan.style.transform = 'rotate(-90deg)';
    nikeBlackBasketballShoe.style.opacity = '0';
    nikeBlackBasketballShoe.style.transform = 'rotate(-90deg)';
    nikeBlackGolfShoe.style.opacity = '0'; // corrected to hide golf shoe
    nikeBlackGolfShoe.style.transform = 'rotate(-90deg)';
    nikeYellowSneaker.style.opacity = '0'; // corrected to hide golf shoe
    nikeYellowSneaker.style.transform = 'rotate(-90deg)';
    nikewhitegreenjorden.style.opacity = '0'; // corrected to hide golf shoe
    nikewhitegreenjorden.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.transform = 'rotate(-90deg)';
    nike_black_soccer_shoe.style.opacity = '0';
    nike_black_tennis_shoe.style.opacity = '0'
    nike_black_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_blue_white_sneaker.style.opacity = '0'
    nike_blue_white_sneaker.style.transform = 'rotate(-90deg)';
    nike_blazer_court_shoe.style.opacity = '0'
    nike_blazer_court_shoe.style.transform = 'rotate(-90deg)';
    nike_green_golf_shoe.style.opacity = '0'
    nike_green_golf_shoe.style.transform = 'rotate(-90deg)';
    nike_green_tennis_shoe.style.opacity = '0'
    nike_green_tennis_shoe.style.transform = 'rotate(-90deg)';
    nike_men_workout_shoe.style.opacity = '0'
    nike_men_workout_shoe.style.transform = 'rotate(-90deg)';
    nike_orange_tennis_shoe.style.opacity = '0'
    nike_orange_tennis_shoe.style.transform = 'rotate(-90deg)';
});