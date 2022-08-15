#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e
rm -rf build
# 构建
yarn build

# cd 到构建输出的目录下
cd build

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git remote add origin git@github.com:baIder/rich-image-hosting-pages.git
git branch -M main
git push -u origin main
# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>

cd -