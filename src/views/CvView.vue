<template>
  <main>
    <div id="resume">
      <!-- //HEADER OF THE DOCUMENT -->
      <div id="introduction">
        <h2>Hello there</h2>
      </div>

      <!-- END OF THE DOCUMENT -->
      <div class="container-signature">
        <img src="/images/logos/signature.svg" alt="signature du developpeur" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">

body {
  background-color: white;
  overflow: none !important; // prevent unwanted scrollbars
}

.text-align-left {
  text-align: left;
}

main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 250px;
    width: 100%;
    #resume {
      width: 1024px;
      position: relative;
      border: 1px solid black;
    
      .container-signature {
        width: 250px;
        height: 250px;
        margin: 0;
        padding: 0;
        right: 250px;
    
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
}


p {
  @media (min-width: 320px) and (max-width: 550px) {
    font-size: 2.5vw;
  }
  @media (min-width: 551px) and (max-width: 991px) {
    font-size: 2vw;
  }
  @media (min-width: 992px) and (max-width: 1440px) {
    font-size: 1.8vw;
  }
  @media (min-width: 1441px) and (max-width: 2240px) {
    font-size: 2vw;
  }
  @media (min-width: 2241px) {
    font-size: 1.5vw;
  }
}

h2 {
  @media (min-width: 320px) and (max-width: 550px) {
    font-size: 2vw;
  }
  @media (min-width: 551px) and (max-width: 991px) {
    font-size: 2vw;
  }
  @media (min-width: 992px) and (max-width: 1440px) {
    font-size: 2vw;
  }
  @media (min-width: 1441px) and (max-width: 2240px) {
    font-size: 2vw;
  }
  @media (min-width: 2241px) {
    font-size: 2vw;
  }
}
</style>
