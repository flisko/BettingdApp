<template>
  <div class="casino container">
    <h1>Football Betting Dapp</h1>
    <h4>Izberi Ekipo ki bo zmagala</h4>
    Vrednost stave: <input name="betValue" id="betValue" type="text">
    <ul>
      <li id="ekipa1">1</li>
      <li id="ekipa2">2</li>
	  <input name="imeEkipe1" id="imeEkipe1" type="text" placeholder="Ime prve ekipe">
	  <li id="nastaviEkipe">Nastavi</li>
	  <input name="imeEkipe2" id="imeEkipe2" type="text" placeholder="Ime druge ekipe">
	  <li></li>
	  <input name="urlID" id="urlID" type="text" placeholder="URL">
	  <li id="btnUrl">Nastavi</li>
	  <input id="zmagovalec" type="text" placeholder="zmagovalec">
	  <li id="btnPreveriZmagovalca">Preveri zmagovalca</li>
	  <li id="rez1"></li>
	  <li id="rez2"></li>
	  <li id="btnPreveriRezultat">Preveri rezultat</li>
    </ul>

    
  </div>
</template>



<style scoped>
.casino {
     margin-top: 50px;
     text-align:center;
}
#loader {
  width:150px;
}
ul {
    margin: 25px;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap:25px;
    grid-row-gap:25px;
}
li{
    padding: 20px;
    margin-right: 5px;
    border-radius: 50%;
    cursor: pointer;
    background-color:#fff;
    border: -2px solid #bf0d9b;
    color: #bf0d9b;
    box-shadow:3px 5px #bf0d9b;
}
li:hover{
    background-color:#bf0d9b;
    color:white;
    box-shadow:0px 0px #bf0d9b;
}
li:active{
    opacity: 0.7;
}
*{
   color: #444444;
}
#has-won {
  color: green;
}
#has-lost {
  color:red;
}
</style>
