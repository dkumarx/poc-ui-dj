#!/bin/sh
yarn install
yarn storybook:export 
cp -r storybook-static/* public