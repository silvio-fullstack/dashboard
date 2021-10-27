// botoes do Menu
const toggleBtnPrincipal = document.querySelector('.togglePrincipal');
const toggleBtnFormadora = document.querySelector('.toggleFormadora');
const toggleBtnManipulacao = document.querySelector('.toggleManipulacao');
const toggleBtnEmbPrimaria = document.querySelector('.toggleEmbPrimaria');
const toggleBtnEmbSecundaria = document.querySelector('.toggleEmbSecundaria');

// Paineis de Apresentação
const panelPrincipal = document.querySelector('.panelPrincipal');
const panelFormadora = document.querySelector('.panelFormadora');
const panelManipulacao = document.querySelector('.panelManipulacao');
const panelEmbPrimaria = document.querySelector('.panelEmbPrimaria');
const panelEmbSecundaria = document.querySelector('.panelEmbSecundaria');

const togglePrincipal = (e)=>{
    panelPrincipal.classList.toggle('hidden');
    panelFormadora.classList.add('hidden');
    panelEmbPrimaria.classList.add('hidden');
    panelEmbSecundaria.classList.add('hidden');
    panelManipulacao.classList.add('hidden');
};

const toggleFormadora = (e)=>{
    panelFormadora.classList.toggle('hidden');
    panelPrincipal.classList.add('hidden');
    panelManipulacao.classList.add('hidden');
    panelEmbPrimaria.classList.add('hidden');
    panelEmbSecundaria.classList.add('hidden');
};

const toggleManipulacao = (e)=>{
    panelManipulacao.classList.toggle('hidden');
    panelPrincipal.classList.add('hidden');
    panelFormadora.classList.add('hidden');
    panelEmbPrimaria.classList.add('hidden');
    panelEmbSecundaria.classList.add('hidden');
};

const toggleEmbPrimaria = (e)=>{
    panelEmbPrimaria.classList.toggle('hidden');
    panelFormadora.classList.add('hidden');
    panelPrincipal.classList.add('hidden');
    panelManipulacao.classList.add('hidden');
    panelEmbSecundaria.classList.add('hidden');
};

const toggleEmbSecundaria = (e)=>{
    panelEmbSecundaria.classList.toggle('hidden');
    panelFormadora.classList.add('hidden');
    panelPrincipal.classList.add('hidden');
    panelManipulacao.classList.add('hidden');
    panelEmbPrimaria.classList.add('hidden');
};

if (toggleBtnPrincipal) {
    toggleBtnPrincipal.addEventListener('click', togglePrincipal);
};

if (toggleBtnFormadora) {
    toggleBtnFormadora.addEventListener('click', toggleFormadora);
};

if (toggleBtnManipulacao) {
    toggleBtnManipulacao.addEventListener('click', toggleManipulacao);
};

if (toggleBtnEmbPrimaria) {
    toggleBtnEmbPrimaria.addEventListener('click', toggleEmbPrimaria);
};

if (toggleBtnEmbSecundaria) {
    toggleBtnEmbSecundaria.addEventListener('click', toggleEmbSecundaria);
};
