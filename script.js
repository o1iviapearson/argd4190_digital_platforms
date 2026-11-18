
/* ========================================
   INTERACTIVE OLIVIA PEARSON TYPOGRAPHY
======================================== */

const title = document.getElementById("interactive-name");

if (title) {

    const originalText = title.textContent.trim();

    title.textContent = "";

    // SPLIT NAME INTO INDIVIDUAL LETTERS

    for (const character of originalText) {

        if (character === " ") {

            const space = document.createElement("span");
            space.classList.add("space");

            title.appendChild(space);

        } else {

            const letter = document.createElement("span");

            letter.classList.add("letter");
            letter.textContent = character;

            title.appendChild(letter);
        }
    }

    const letters = title.querySelectorAll(".letter");

    // INTERACTION SETTINGS

    const maxScale = 1.8;
    const influenceRadius = 160;

    // MOUSE MOVEMENT

    document.addEventListener("mousemove", (event) => {

        letters.forEach((letter) => {

            const rect = letter.getBoundingClientRect();

            const letterX = rect.left + rect.width / 2;
            const letterY = rect.top + rect.height / 2;

            const distance = Math.hypot(
                event.clientX - letterX,
                event.clientY - letterY
            );

            const influence = Math.max(
                0,
                1 - distance / influenceRadius
            );

            const scale = 1 + influence * (maxScale - 1);

            letter.style.transform = `scale(${scale})`;

        });

    });

    // RESET WHEN MOUSE LEAVES

    document.addEventListener("mouseleave", () => {

        letters.forEach((letter) => {
            letter.style.transform = "scale(1)";
        });

    });

}
