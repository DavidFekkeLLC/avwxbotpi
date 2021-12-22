#!/bin/bash
pm2 stop avwxbotpi
pm2 delete avwxbotpi
pm2 save
rm -rf ~/apps/avwxbot
mkdir ~/apps/avwxbot
cp -r ~/actions-runner/_work/avwxbotpi/avwxbotpi/* ~/Documents/projects/avwxbot
cd ~/apps/avwxbot
pm2 start index.js --name avwxbotpi
pm2 save