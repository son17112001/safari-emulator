const { webkit } = require('playwright');

(async () => {
    const browser = await webkit.launch({ headless: false }); // headless: false để thấy giao diện trình duyệt
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto('https://example.com');
    console.log('Debugging WebKit...');
    
    // Thêm các thao tác bạn muốn thử nghiệm
    await page.screenshot({ path: 'example-webkit.png' });
    await page.pause();
})();
