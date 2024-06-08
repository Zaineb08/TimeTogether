const timeZones = [
    { label: "UTC-12:00", value: "-12:00" },
    { label: "UTC-11:00", value: "-11:00" },
    { label: "UTC-10:00", value: "-10:00" },
    { label: "UTC-09:00", value: "-09:00" },
    { label: "UTC-08:00", value: "-08:00" },
    { label: "UTC-07:00", value: "-07:00" },
    { label: "UTC-06:00", value: "-06:00" },
    { label: "UTC-05:00", value: "-05:00" },
    { label: "UTC-04:00", value: "-04:00" },
    { label: "UTC-03:00", value: "-03:00" },
    { label: "UTC-02:00", value: "-02:00" },
    { label: "UTC-01:00", value: "-01:00" },
    { label: "UTC+00:00", value: "+00:00" },
    { label: "UTC+01:00", value: "+01:00" },
    { label: "UTC+02:00", value: "+02:00" },
    { label: "UTC+03:00", value: "+03:00" },
    { label: "UTC+04:00", value: "+04:00" },
    { label: "UTC+05:00", value: "+05:00" },
    { label: "UTC+06:00", value: "+06:00" },
    { label: "UTC+07:00", value: "+07:00" },
    { label: "UTC+08:00", value: "+08:00" },
    { label: "UTC+09:00", value: "+09:00" },
    { label: "UTC+10:00", value: "+10:00" },
    { label: "UTC+11:00", value: "+11:00" },
    { label: "UTC+12:00", value: "+12:00" }
];

const yourTimezoneSelect = document.getElementById("your-timezone");
const partnerTimezoneSelect = document.getElementById("partner-timezone");

timeZones.forEach(zone => {
    const option1 = document.createElement("option");
    option1.text = zone.label;
    option1.value = zone.value;
    yourTimezoneSelect.add(option1);

    const option2 = document.createElement("option");
    option2.text = zone.label;
    option2.value = zone.value;
    partnerTimezoneSelect.add(option2);
});

const yourTimeDisplay = document.getElementById("your-time");
const partnerTimeDisplay = document.getElementById("partner-time");

function getTimeInTimezone(offset) {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    const timeInZone = new Date(utcTime + (3600000 * offset));
    return timeInZone.toLocaleTimeString();
}

function updateTimes() {
    const yourTimezoneOffset = parseFloat(yourTimezoneSelect.value);
    const partnerTimezoneOffset = parseFloat(partnerTimezoneSelect.value);

    yourTimeDisplay.textContent = getTimeInTimezone(yourTimezoneOffset);
    partnerTimeDisplay.textContent = getTimeInTimezone(partnerTimezoneOffset);
}

yourTimezoneSelect.addEventListener("change", updateTimes);
partnerTimezoneSelect.addEventListener("change", updateTimes);

// Initial update
updateTimes();

// Update times every second
setInterval(updateTimes, 1000);
