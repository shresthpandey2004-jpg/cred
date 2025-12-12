@echo off
echo ========================================
echo Installing CrediMatch Dependencies...
echo ========================================
echo.

call npm install

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Run: npm run dev
echo 2. Open: http://localhost:3000
echo 3. Use demo accounts:
echo    - Client: client@demo.com / password
echo    - Freelancer: freelancer@demo.com / password
echo.
echo Press any key to start the development server...
pause > nul

echo.
echo Starting development server...
call npm run dev