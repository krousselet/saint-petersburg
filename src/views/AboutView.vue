<template>
  <main>
    <section id="first-part">
      <div class="container appear-one">
        <ul>
          <li>
            {{ $t("flightAttended") }}: <span>{{ flightAttended }}%</span>
          </li>
          <li>
            {{ $t("hoursInFlight") }}: <span>{{ hoursInFlight }}% {{ $t("progress") }}</span>
          </li>
          <li>
            {{ $t("milesTravelled") }}: <span>{{ milesTravelled }} {{ $t("km") }} </span>
          </li>
          <li>
            {{ $t("incidentEncountered") }}:
            <span>{{ incidentEncountered }}</span>
          </li>
          <li>
            {{ $t("countryDiscovered") }}:
            <span>{{ countryDiscovered }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section id="second-part">
      <div class="container appear presentation">
        <p>{{ $t("hello") }}</p>
        <p>{{ $t("myself") }}</p>
        <p>{{ $t("data") }}</p>
      </div>
    </section>
    <section id="second-part">
      <div class="container appear">
        <p>{{ $t("amateur") }}</p>
        <p>{{ $t("determination") }}</p>
        <p>{{ $t("qualitiesOne") }}</p>
        <p>{{ $t("qualitiesTwo") }}</p>
        <p>{{ $t("motivation") }}</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

const finalFlightAttended = 200;
const finalHoursInFlight = 25;
const finalMilesTravelled = 3000;
const finalIncidentEncountered = 0;
const finalCountryDiscovered = 5;

const flightAttended = ref(0);
const hoursInFlight = ref(0);
const milesTravelled = ref(0);
const incidentEncountered = ref(0);
const countryDiscovered = ref(0);

// Animate function
function animateValue(refVar, endValue, duration = 2000) {
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    refVar.value = Math.floor(progress * endValue);
    if (progress < 1) requestAnimationFrame(update);
    else refVar.value = endValue;
  }
  requestAnimationFrame(update);
}

function initCounters() {
  animateValue(flightAttended, finalFlightAttended);
  animateValue(hoursInFlight, finalHoursInFlight);
  animateValue(milesTravelled, finalMilesTravelled);
  animateValue(incidentEncountered, finalIncidentEncountered);
  animateValue(countryDiscovered, finalCountryDiscovered);
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("active");

          // Optional: Run animations only for the stats section
          if (el.id === "first-part") {
            initCounters();
          }
        } else {
          el.classList.remove("active");
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% visible
    }
  );

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});
</script>

<style scoped lang="scss">

body {
  height: 100dvh;
  overflow: hidden;
}
main {
  height: 100vh;
  height: 100svh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin-top: 90px;

  @media (min-width: 320px) and (max-width: 551px) {
    margin-top: 75px;
  }

  #first-part {
    margin-bottom: 500px;
  }

  section {
    height: 100vh;
    height: 100dvh;
    scroll-snap-align: start;
    display: grid;
    box-sizing: border-box;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;

    &.active {
      opacity: 1;
    }
    div {
      @media (min-width: 320px) and (max-width: 991px) {
        margin: 25px auto;
      }
      opacity: 0;

      p {
        margin: 25px auto;
        @media (min-width: 320px) and (max-width: 550px) {
          letter-spacing: 3px;
          line-height: 51px;
          font-size: 24px;
          text-align: center;
        }
        @media (min-width: 551px) and (max-width: 991px) {
          letter-spacing: 3px;
          line-height: 51px;
          font-size: 24px;
          text-align: center;
        }
        @media (min-width: 992px) and (max-width: 1920px) {
          letter-spacing: 3px;
          line-height: 51px;
          font-size: 1.9vw;
        }
        @media (min-width: 1921px) and (max-width: 2440px) {
          font-size: 2.5vw;
        }
        @media (min-width: 2441px) {
          font-size: 2.5vw;
          letter-spacing: 2px;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-self: center;
        width: 100%;
        margin: 0 auto;

        li {
          align-items: center;
          margin: 15px auto;

          @media (min-width: 320px) and (max-width: 991px) {
            letter-spacing: 3px;
            line-height: 51px;
            font-size: 24px;
            text-align: center;
          }
          @media (min-width: 992px) and (max-width: 1920px) {
            font-size: 1vw;
          }
          @media (min-width: 1921px) and (max-width: 2440px) {
            font-size: 2.5vw;
          }
          @media (min-width: 2441px) {
            font-size: 2.5vw;
            letter-spacing: 2px;
          }

          span {
            font-weight: 900;
            color: gray;
          }
        }

        span,
        li {
          font-weight: 900;
          font-size: 3vw;
        }
      }
    }
  }
}
</style>
