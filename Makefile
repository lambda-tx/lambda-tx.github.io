push:
	@git checkout gh-pages && git merge master && git checkout master
	@git pull --all
