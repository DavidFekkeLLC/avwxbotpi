#!/bin/bash
pm2 stop avwxbotpi
node ~/Documents/projects/lights/turnoff.js
pm2 delete avwxbotpi
pm2 save
rm -rf ~/Documents/projects/avwxbot
mkdir ~/Documents/projects/avwxbot
cp -r ~/actions-runner/_work/avwxbotpi/avwxbotpi/* ~/Documents/projects/avwxbot
cd ~/Documents/projects/avwxbot
pm2 start index.js --name avwxbotpi
pm2 save