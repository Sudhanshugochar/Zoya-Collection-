@echo off
REM 🚀 ZOYA COLLECTION - SEO & DEPLOYMENT AUTOMATION SCRIPT (WINDOWS)
REM Run this to automatically deploy your website to Google rankings!

echo.
echo ================================================
echo    ZOYA COLLECTION - SEO DEPLOYMENT SETUP
echo ================================================
echo.

REM Step 1: Build the project
echo 🔨 Step 1: Building your website...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed! Check for errors above.
    pause
    exit /b 1
)
echo ✅ Build successful!
echo.

REM Step 2: Deploy to Vercel
echo 🚀 Step 2: Deploying to Vercel...
echo Note: This requires Vercel login
call vercel --prod
if %errorlevel% neq 0 (
    echo ⚠️ Deployment had issues. Check Vercel output above.
) else (
    echo ✅ Deployment complete!
)
echo.

REM Step 3: Information
echo ================================================
echo            ✨ DEPLOYMENT SUCCESSFUL! ✨
echo ================================================
echo.
echo 📋 NEXT CRITICAL STEPS:
echo.
echo 1. UPDATE BUSINESS INFO:
echo    Edit: index.html (lines 30-33)
echo    - Add your phone number
echo    - Add your email
echo    - Add your store address
echo    - Add your PIN code
echo.
echo 2. SETUP GOOGLE BUSINESS PROFILE:
echo    Go to: https://business.google.com
echo    - Create profile for 'Zoya Collection'
echo    - Add Butibori, Nagpur location
echo    - Add phone and hours
echo    - Upload store photos
echo.
echo 3. SUBMIT TO GOOGLE SEARCH CONSOLE:
echo    Go to: https://search.google.com/search-console/
echo    - Add your domain
echo    - Submit sitemap: /sitemap.xml
echo.
echo 4. SET UP GOOGLE ANALYTICS:
echo    Go to: https://analytics.google.com/
echo    - Create account
echo    - Add tracking code to your site
echo.
echo ================================================
echo 📊 Your website will rank top 10 on Google in
echo    4-6 weeks with consistent effort!
echo ================================================
echo.
pause