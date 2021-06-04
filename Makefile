target: ;

build:
	sass --no-source-map scss:dist --style compressed

dev:
	sass --no-source-map --watch scss:dist --style compressed
