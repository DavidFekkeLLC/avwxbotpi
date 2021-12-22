#!/bin/bash
pm2 stop avwxbot
pm2 delete avwxbot
pm2 save
rm -rf ~/apps/avwxbot
mkdir ~/apps/avwxbot
cp -r ~/actions-runner/_work/avwxbotpi/avwxbotpi/* ~/apps/avwxbot
cd ~/apps/avwxbot
pm2 start index.js --name avwxbot
pm2 save