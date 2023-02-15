# Technical choice:

## Reasons for choosing Vue 3 for this project:

- It is claimed by the Vue team that Vue 3 is faster and lighter than Vue 2. But for now I can not really see the difference.
- Typescript support.

## Reasons for choosing Vite:

- It is a part of Vue ecosystem, made by the same guy who made Vue.
- It is very fast as people said.

## Reasons for choosing TailwindCSS:

- Very easy to integrate
- Fasten my development speed by alot

## Reason for using local storage:

> I find that it's a good user experience when they accidentally close the tab they can come back later and be able to continue where they left off.

### Q: What if people manually change local storage value which will bypass the client-side logics/validators?

> In real practice, there should be both client-side Javascript function validator and server side protection to avoid this from successfully submit.
> <br>
> However, since this is a small project test, I fire a small Javascript logics protection on page load (page mount) to make sure if anything goes wrong, we will prevent them from advancing.

## 🚙 `vue-router` for routing between steps

## 📈 `vuelidate` for UX form validations

## ✅ `jest` and `puppeteer` for end to end testing

<br>

# Architecture

### - All UI are built through plain HTML with TailwindCSS as an utility in Vue 3 Framework.

### - All steps are divided into routes for better UX when user wants to use back button in the browser instead of ours.

### - End to end testing of the whole form wizard are done through puppeteer + Jest

<br>

# Approach

### - Fast implementation of a simple form-wizard SPA web app using Vue 3.

### - Simple and minimal UI/UX for user to easily interact with.

### - Have a nice validations at each pages to make sure users will not be seeing false data or invalid modified data.

### - No over engineering, despite having alot of UX in mind for this form wizard, I will not over engineer it too much ( such as notification banner on error, move every input, radio button, button, into components... etc)

<br>

### Questions: Why dist is ignored in .gitignore ?

> For free hosting ( On Digital Ocean ), since we already build static files in local, we can push it and tell Digital Ocean to not host a node server for us but rather serve us a static file.
