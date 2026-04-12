function updatePreview() {
    document.getElementById("name").innerText =
    document.getElementById("nameInput").value || "Your Name";

    document.getElementById("lab-title").innerText =
    document.querySelector('input[name="labType"]:checked').value || "Lab Report";

    document.querySelectorAll(".faculty").forEach(fac => {
        fac.innerText = document.getElementById("facultyInput").value || "BIT";
    });

    const semValue = document.getElementById("semesterInput").value;
    const semSuffix = semValue == 1? "st" : 
                      semValue == 2? "nd" : 
                      semValue == 3? "rd" :
                      semValue > 3? "th" : "";
    document.getElementById("sem").innerText =
    semValue || "1";

    document.getElementById("semSuffix").innerText =
    semSuffix || "st";

    document.getElementById("subject").innerText =
    document.getElementById("subjectInput").value || "C-Programming";

    document.getElementById("section").innerText =
    document.getElementById("sectionInput").value || "B";

    document.getElementById("roll").innerText =
    document.getElementById("rollInput").value || "00";

    document.getElementById("teacher").innerText =
    document.getElementById("teacherInput").value || "Teacher's Name";

    document.getElementById("date").innerText =
    document.getElementById("dateInput").value || "--/--/----";
}

document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updatePreview); 
});

document.querySelectorAll("select").forEach(select => {
    select.addEventListener("change", updatePreview); 
});

async function downloadPDF() {
    const { jsPDF } = window.jspdf;

    const element = document.getElementById("template");

    const canvas = await html2canvas(element, {
    scale: 2
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const width = 210;
    const height = 297;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("custom-generated-front-page.pdf");
}