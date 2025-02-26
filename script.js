window.onload = function() {
    const mantras = [
        "ॐ नमः शिवाय",
        "महामृत्युंजय मंत्र: ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।",
        "ॐ ह्रीं नमः शिवाय",
        "ॐ शिवाय नमः",
        "शिव शिव शिवाय स्वाहा"
    ];

    window.showMantra = function() {
        const randomIndex = Math.floor(Math.random() * mantras.length);
        document.getElementById("mantra").innerText = mantras[randomIndex];
    };
};
