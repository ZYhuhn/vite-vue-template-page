#!/usr/bin/env sh
yarn build

git subtree push --prefix dist origin gh-pages
