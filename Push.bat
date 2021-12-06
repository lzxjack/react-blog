@echo off
set /p commit=  请输入commit(空格用-代替)  :
git add .
git commit -m %commit%
git push