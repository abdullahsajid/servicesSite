document.addEventListener("DOMContentLoaded", () => {
  const options = {
    input: true,
    type: "multiple",
    settings: {
      range: {
        disablePast: true,
      },
      selection: {
        day: "multiple-ranged",
      },
      visibility: {
        daysOutside: false,
      },
      visibility: {
        theme: "light",
      },
    },
    actions: {
      changeToInput(e, calendar, dates, time, hours, minutes, keeping) {
        let cal = document.querySelector('#pickDate')
        if (dates[1]) {
          dates.sort((a, b) => +new Date(a) - +new Date(b));
          cal.value = `${dates[0]} — ${
            dates[dates.length - 1]
          }`;
        } else if (dates[0]) {
            cal.value = dates[0];
        } else {
            cal.value = "";
        }
      },
    },
  };

  const calendarInput = new VanillaCalendar("#pickDatee", options);
  calendarInput.init();
});
