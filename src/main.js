import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

// initialize bigger-picture (using svelte)
// const bp = BiggerPicture({
//   target: document.body
// });

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
