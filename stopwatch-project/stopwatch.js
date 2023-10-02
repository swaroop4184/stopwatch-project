let startTime;
        let running = false;
        let intervalId;
        let elapsedTime = 0;

        function start() {
            if (!running) {
                startTime = new Date().getTime() - elapsedTime;
                intervalId = setInterval(updateDisplay, 1000); // Update every second
                document.getElementById("start").textContent = "Start";
                document.getElementById("pause").textContent = "Stop";
                document.getElementById("pause").removeAttribute("disabled");
            }
            running = true;
        }

        function pause() {
            if (running) {
                clearInterval(intervalId);
                document.getElementById("start").textContent = "Start";
                document.getElementById("pause").textContent = "Stop";
                elapsedTime = new Date().getTime() - startTime; // Store elapsed time
            }
            running = !running;
        }

        function updateDisplay() {
            const currentTime = new Date().getTime();
            elapsedTime = currentTime - startTime;
            const hours = Math.floor(elapsedTime / 3600000);
            const minutes = Math.floor((elapsedTime % 3600000) / 60000);
            const seconds = Math.floor((elapsedTime % 60000) / 1000);
            document.getElementById("stopwatch").textContent =
                hours + ":" +
                (minutes < 10 ? "0" : "") + minutes + ":" +
                (seconds < 10 ? "0" : "") + seconds;
        }

        function reset() {
            clearInterval(intervalId);
            document.getElementById("stopwatch").textContent = "00:00:00";
            document.getElementById("start").textContent = "Start";
            document.getElementById("pause").textContent = "Stop";
            document.getElementById("pause").setAttribute("disabled", "true");
            startTime = null;
            running = false;
            elapsedTime = 0;
        }