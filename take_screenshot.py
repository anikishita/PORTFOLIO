from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("https://grind-eta.vercel.app")
        page.screenshot(path="images/grind-eta-thumbnail.png")
        browser.close()

run()
