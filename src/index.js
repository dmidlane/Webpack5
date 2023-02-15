import generateJoke from "./generateJoke";
import './styles/main.scss'
import sky from './assets/sky.jpeg'

const skyImg = document.getElementById('skyImg')
skyImg.src = sky

const jokeButton = document.getElementById('jokeBtn')
jokeButton.addEventListener('click', generateJoke)

generateJoke()