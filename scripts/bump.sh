#!/usr/bin/env bash

version=$(pnpm git-cliff --bumped-version)

if [[ $version == v* ]]; then
  version=${version:1}
fi

pnpm git-cliff --tag "${version}" --output CHANGELOG.md
pnpm version "${version}" --no-git-tag-version

git add CHANGELOG.md package.json

git commit -m "chore(release): v${version}"
git tag -a -m "${version}" v"${version}"
