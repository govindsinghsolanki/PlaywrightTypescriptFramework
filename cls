[33mcommit ae7257c60f06634d9ded3190e16742c3fd86958d[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m)[m
Author: Automation <govindsinghsolanki85@gmail.com>
Date:   Thu Aug 20 19:28:26 2026 +0530

    Generate Allure Report

[1mdiff --git a/.github/workflows/playwright.yml b/.github/workflows/playwright.yml[m
[1mindex d250df9..a72f1ff 100644[m
[1m--- a/.github/workflows/playwright.yml[m
[1m+++ b/.github/workflows/playwright.yml[m
[36m@@ -9,26 +9,41 @@[m [mjobs:[m
     timeout-minutes: 60[m
     runs-on: ubuntu-latest[m
     steps:[m
[32m+[m[32m     # 1. Checkout source code[m
     - uses: actions/checkout@v4[m
[32m+[m[32m     # 2. Setup Node[m
     - uses: actions/setup-node@v4[m
       with:[m
         node-version: lts/*[m
[32m+[m[32m     # 3. Install dependencies[m[41m   [m
     - name: Install dependencies[m
       run: npm ci[m
[32m+[m[32m     # 4. Install Playwright browsers[m[41m  [m
     - name: Install Playwright Browsers[m
       run: npx playwright install --with-deps[m
[32m+[m
[32m+[m[32m    # 5. Clean previous Allure results and report[m
[32m+[m[32m    - name: Clean Allure[m
[32m+[m[32m      run: |[m
[32m+[m[32m           rm -rf allure-results[m
[32m+[m[32m           rm -rf allure-report[m[41m [m
[32m+[m
[32m+[m[32m    # 6. Run test cases[m
     - name: Run Playwright tests[m
       env:[m
          ENV_NAME: qa[m
          SECRET_KEY: ${{ secrets.SECRET_KEY }}[m
       run: npx playwright test[m
[31m-     [m
[32m+[m
[32m+[m[32m    # 7. Generate Allure-results and Allure HTML report[m
     - name: Generate Allure Report[m
       if: ${{ !cancelled() }}[m
       run: npx allure generate allure-results --clean -o allure-report[m
 [m
[32m+[m[32m    # 8. Upload report as GitHub Actions artifact[m
     - name: Upload Allure Report[m
[31m-      if: ${{ !cancelled() }}[m
[32m+[m[32m      # if: ${{ !cancelled() }}[m
[32m+[m[32m      if: always()[m
       uses: actions/upload-artifact@v4[m
       with:[m
          name: allure-report[m
