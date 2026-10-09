"""Auditoria pequena dos recursos locais e de independência da apresentação."""
from pathlib import Path
from html.parser import HTMLParser
import re

ROOT = Path(__file__).resolve().parent.parent


class References(HTMLParser):
    def __init__(self):
        super().__init__()
        self.local = set()
        self.external_links = []

    def handle_starttag(self, tag, attrs):
        fields = dict(attrs)
        for attribute in ("src", "href"):
            value = fields.get(attribute)
            if not value or value.startswith("#"):
                continue
            if value.startswith(("http:", "https:")):
                if tag != "a":
                    raise AssertionError(f"Dependência externa: {tag} {value}")
                self.external_links.append(value)
            else:
                self.local.add(value.split("?")[0])


def audit():
    parser = References()
    parser.feed((ROOT / "index.html").read_text(encoding="utf-8"))
    for file in ROOT.glob("*.js"):
        text = file.read_text(encoding="utf-8")
        # Somente chamadas, não palavras nos comentários ou nas notas de fala.
        assert not re.search(r"\b(fetch|XMLHttpRequest|WebSocket)\s*\(", text), file.name
        assert not re.search(r"\b(localStorage|sessionStorage)\s*\.", text), file.name
        assert "../DISORDER/" not in text and "OneDrive" not in text, file.name
    for file in (ROOT / "index.html", ROOT / "styles.css"):
        text = file.read_text(encoding="utf-8")
        assert "../DISORDER/" not in text and "OneDrive" not in text, file.name
    for resource in sorted(parser.local):
        assert (ROOT / resource).is_file(), f"Recurso ausente: {resource}"
    screenshots = ["office.png", "boss.jpg", "shop-full.jpg"] + [
        f"{name}.jpg" for name in ("extinguisher", "knife", "pistol", "shotgun", "smg", "revolver", "rifle", "stapler")
    ]
    images = ["protagonist-bust.png", "zombie-executive.png", "zombie-courier.webp", "zombie-worker.webp", "zombie-director.webp", "boss-hr.webp", "boss-intern.webp"]
    for resource in screenshots:
        assert (ROOT / "assets" / "screenshots" / resource).is_file(), resource
    for resource in images:
        assert (ROOT / "assets" / "images" / resource).is_file(), resource
    print(f"OK: {len(parser.local)} referências HTML locais; {len(screenshots)} capturas utilizadas; {len(images)} artes necessárias.")
    print("Destinos externos opcionais:", *sorted(set(parser.external_links)), sep="\n")
    print("Nenhuma chamada de rede, gravação de storage ou dependência do diretório do jogo nos scripts.")


if __name__ == "__main__":
    audit()
