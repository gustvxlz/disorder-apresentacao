"""Backup estático das capturas revisadas. Não lê nem modifica o jogo."""
from pathlib import Path
from reportlab.pdfgen import canvas
from PIL import Image, ImageStat
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent.parent
SLIDES = ROOT / "backup" / "slides"
OUTPUT = ROOT / "backup" / "DISORDER_APRESENTACAO.pdf"
TITLES = [
    "Um expediente ruim", "O jogo em uma frase", "Antes do apocalipse",
    "O loop de sobrevivência", "Armas com funções diferentes", "A equipe pós-vida",
    "Diretor Executivo", "Aura-Matic", "O próximo expediente",
    "Recursos da empresa", "Evolução e incidentes", "Expediente encerrado",
]


def export():
    # Recusar capturas faltantes, fora de resolução ou praticamente vazias.
    for number in range(1, 13):
        source = SLIDES / f"{number:02}.jpg"
        with Image.open(source) as image:
            if image.size != (1920, 1080):
                raise ValueError(f"Resolução incorreta: {source.name}: {image.size}")
            if max(ImageStat.Stat(image.convert("RGB")).stddev) < 12:
                raise ValueError(f"Captura quase vazia: {source.name}")

    pdf = canvas.Canvas(str(OUTPUT), pagesize=(960, 540), pageCompression=1)
    pdf.setTitle("DISORDER — apresentação para game jam")
    pdf.setAuthor("DISORDER")
    pdf.setSubject("Backup visual estático de 12 telas; recursos atuais e propostas identificados")
    for number, title in enumerate(TITLES, start=1):
        pdf.bookmarkPage(f"slide-{number}")
        pdf.addOutlineEntry(f"{number:02} — {title}", f"slide-{number}", level=0)
        pdf.drawImage(str(SLIDES / f"{number:02}.jpg"), 0, 0, width=960, height=540)
        if number == 12:
            pdf.linkURL("https://gustvxlz.github.io/disorder/", (50, 190, 204, 228), relative=0)
            pdf.linkURL("https://github.com/gustvxlz/disorder", (50, 108, 265, 126), relative=0)
        pdf.showPage()
    pdf.save()
    reader = PdfReader(OUTPUT)
    if len(reader.pages) != 12:
        raise ValueError("O PDF precisa de exatamente 12 páginas.")
    print(f"PDF: {OUTPUT} / 12 páginas / {OUTPUT.stat().st_size:,} bytes")


if __name__ == "__main__":
    export()
